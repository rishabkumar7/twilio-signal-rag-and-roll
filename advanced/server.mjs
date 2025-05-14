import Fastify from "fastify";
import formBody from "@fastify/formbody";
import twilio from "twilio";
import { getAvailableCars } from "./cars.mjs";
const {
  TWILIO_ACCOUNT_SID = "",
  TWILIO_AUTH_TOKEN = "",
  TWILIO_MESSAGING_SERVICE_SID = "",
  BASE_URL = "",
} = process.env;

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

const fastify = Fastify();

const knownSenders = new Set();

fastify.register(formBody);

if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN) {
  throw new Error("TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN must be set");
}

const event = "SIGNAL 2025";
const availableCars = getAvailableCars();
let assistant;
client.assistants.v1.assistants
  .create({
    name: `AI Assistant for ${event}`,
    personality_prompt: `You are a helpful assistant to reserve a car for ${event}. You are friendly and helpful. In the first message, you let the user know what cars are available and ask them to pick one.`,
  })
  .then((createdAssistant) => {
    assistant = createdAssistant;

    const listOfCars = availableCars.reduce((acc, car) => {
      const { make, model } = car;
      return `${acc} | '${make} ${model}' `;
    }, "");
    client.assistants.v1.tools
      .create({
        name: "Make a reservation",
        type: "WEBHOOK",
        description:
          "Use this tool to make a reservation. It will return a reservation ID.",
        enabled: true,
        meta: {
          url: `${BASE_URL}/webhooks/ai-assistants/car`,
          method: "POST",
          input_schema: `export type Data = { car: ${listOfCars} }`,
        },
      })
      .then((reservationTool) => {
        client.assistants.v1
          .assistants(assistant.id)
          .assistantsTools(reservationTool.id)
          .create()
          .catch(() => {});
      });
  })
  .catch((err) => {
    console.error("Error creating assistant:", err);
  });

fastify.post("/webhooks/twilio", async (request, reply) => {
  const { Body, From } = request.body;

  console.log("Received message:", Body);

  if (!knownSenders.has(From) && Body.toLowerCase() !== "yes") {
    knownSenders.add(From);
    await client.messages.create({
      body: `Welcome to our car rental service! Please reply with "yes" to opt-in to receive messages from us.`,
      from: TWILIO_MESSAGING_SERVICE_SID,
      to: From,
    });
    return reply.send(200);
  }

  await client.assistants.v1.assistants(assistant.id).messages.create({
    body: Body,
    identity: From,
    session_id: From,
    webhook: `${BASE_URL}/webhooks/ai-assistants/proxy?event=${event}`,
  });

  return reply.send(200);
});

fastify.post("/webhooks/ai-assistants/proxy", async (request, reply) => {
  const { Identity, Body, Status } = request.body;

  if (Status === "Failure") {
    console.error("Error from assistant:", Body);
    return reply.status(500).send("Error from assistant");
  }

  console.log("Received message from assistant:", Body);

  await client.messages.create({
    body: Body,
    from: TWILIO_MESSAGING_SERVICE_SID,
    to: Identity,
  });

  return reply.send(200);
});

fastify.post("/webhooks/ai-assistants/car", async (request, reply) => {
  const { car } = request.body;
  console.log(`Received reservation request for a ${car}`);
  return reply.send(
    `Reservation confirmed. Your reservation ID is ${Math.floor(Math.random() * 10000)}`,
  );
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
  console.log(`Server listening on ${fastify.server.address().port}`);
});
