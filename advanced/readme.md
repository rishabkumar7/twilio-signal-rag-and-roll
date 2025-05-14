# AI Assistant Car Reservation Bot

This project sets up a simple Fastify server that uses Twilio's AI Assistants to handle car rental reservations over SMS. Users can opt in, receive a list of available cars, and confirm their reservation via natural language.

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create a `.env` file

Create a `.env` file in the root of the project with the following environment variables:

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_MESSAGING_SERVICE_SID=MGxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
BASE_URL=https://your-ngrok-or-external-url.io
```

#### Environment Variable Breakdown:

* **`TWILIO_ACCOUNT_SID`** – Your Twilio Account SID, available in your Twilio Console.
* **`TWILIO_AUTH_TOKEN`** – Your Twilio Auth Token, also found in the Twilio Console.
* **`TWILIO_MESSAGING_SERVICE_SID`** – Messaging Service SID used to send and receive messages.
* **`BASE_URL`** – The publicly accessible URL where Twilio can reach your webhooks (e.g., an [ngrok](https://ngrok.com/) URL).

### 3. Start the server

```bash
npm start
```

## 📱 How It Works

* Users text your Twilio number.
* The server confirms opt-in.
* An AI Assistant presents available cars and lets users make a reservation.
* The webhook handles reservations and returns a confirmation.

## 🛠 Scripts

* `npm start`: Runs the Fastify server using environment variables from `.env`.
