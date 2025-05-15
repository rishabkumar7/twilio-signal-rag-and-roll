# RAG & Roll Hands on Lab - Twilio Signal 2025

## Workshop Overview

Welcome to this hands-on workshop where you'll learn how to build an intelligent chatbot using Retrieval Augmented Generation (RAG) with Twilio AI Assistants. In this 60-minute session, you'll create a fully functional AI assistant for a fictional car rental company that can answer customer queries using your company's knowledge base.

You'll see how Twilio AI Assistants dramatically simplifies the development process compared to traditional frameworks, allowing you to build production-ready AI applications in minutes rather than days.

## What You'll Learn

- Understanding the limitations of standard LLMs and how RAG solves these challenges
- The core components of RAG architecture and how they work together
- How to implement RAG systems using two approaches:
    - The DIY approach with LangChain (demonstration only)
    - The accelerated approach with Twilio AI Assistants (hands-on)
- Best practices for designing effective AI assistants for real-world applications

## Prerequisites

To participate in the hands-on portion of this workshop, you'll need:

- A laptop with internet access
- A modern web browser (Chrome, Firefox, Edge, or Safari)
- A Twilio account (free trial accounts work fine)
    - [Sign up here](https://twil.io/try-twilio) if you don't have one
- Basic understanding of programming concepts (no advanced coding skills required)

## Workshop Outline

### Part 1: Understanding RAG (15 min)

- Limitations of standard LLMs
- Introduction to RAG architecture:
    - Document chunking strategies
    - Embedding generation
    - Vector storage options
    - Similarity search and retrieval
    - Prompt composition techniques
    - Integrating all together for RAG

### Part 2: The DIY Approach with LangChain (7 min)

- Code walkthrough of building a [smart assistant with LangChain](https://github.com/rishabkumar7/langchain-azure-ai-search-rag)
- Discussion of integration challenges and maintenance considerations
- _Note: This is a demonstration only; participants will not need to code along_

### Part 3: The Accelerated Approach with Twilio AI Assistants (25 min)

- Setting up your Twilio AI Assistant
- Creating and configuring a knowledge base with car rental documents
- Designing the assistant's persona and capabilities
- Testing and refining your assistant
- Deploying to communication channels

### Part 4: Automating and Customizing Your Assistant (10 min)
- Why it can make sense to automate the creation of AI Assistants
- How to automate the creation of knowledge, tools, or entire AI Assistants
- When to consider proxying the messages
- Trigger messages to your assistants manually with:
    ```
    client.assistants.v1.assistants(aiAssistantID).messages.create()
    ```
- Verify incoming webhooks to ensure secure and trusted communication 


### Part 5: Q&A and Next Steps (5 min)

- Open discussion and troubleshooting
- Resources for further learning
- Ideas for extending your assistant

## Hands-On Instructions

### Step 1: Prepare Your Twilio Account

- Create or log in to your Twilio account
- Navigate to the AI Assistants section in the Twilio Console, if you don't see it, you will have to sign-up for [it here.](https://twilioalpha.com/ai-assistants)
- Create a new AI Assistants (we'll do this together during the workshop)

### Step 2: Prepare Your Knowledge Base

- We'll provide sample documents for our fictional car rental company "Silicon Valley Car Rentals"
- Documents include terms and conditions, vehicle inventory, and basic business information
- You'll learn how to upload and organize these documents

### Step 3: Configure Your Assistant

- Set up the assistant's personality and expertise

    ```md
    You are a helpful assistant to help rental car customers . You only rely on the context provided by you and don't make up any other facts. Reply with "I'm afraid I don't have information about this" if you don’t know the answer.
    ```

- Configure response parameters
- Test capabilities using the simulator

### Step 4: Deploy Your AI Assistant

- Connect to communication channels (time permitting)
- Buy a Twilio Number for SMS/Voice Capabilities or you can also use WhatsApp Sandbox
- Use the Quick Deploy template [here.](https://www.twilio.com/code-exchange/ai-assistants-samples)
- For voice, we can use TwiML Bins

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <Response>
        <Connect>
            <Assistant id="YOUR_ASSISTANT_ID" welcomeGreeting="Hi! Ask me anything!" voice="en-US-Journey-O"></Assistant>
     </Connect>
    </Response>
    ```

- Test with real-world scenarios

## Step 5: Tools for AI Assistant

- See how you can configure Tools for AI Assistant
- We will configure a dummy CRM API to get reservation details
![AI Assistant Tools](/files/adding-tool-aia.png)
- We will use webhook.site to have the [mock API](https://webhook.site/)

## Resources

The following resources will be available during and after the workshop:

- Workshop slides
- Sample code for the LangChain implementation
- Sample documents for the car rental company knowledge base
- Troubleshooting guide
- Links to Twilio documentation and community resources

## About the Instructors

Rishab Kumar
 - Twitter/X: [@rishabincloud](https://x.com/rishabincloud)
 - [LinkedIn](https://linked.com/in/rishabkumar7)


Marius Obert
 - Twitter/X: [@IObert_](https://x.com/iobert_)
 - LinkedIn: [in/mariusobert](https://www.linkedin.com/in/mariusobert/)

## Questions or Issues?

If you have any questions, please reach out to Rishab at rikumar@twilio.com
