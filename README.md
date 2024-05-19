# OpenAI-p5.js

Get started guide to use OpenAI APIs in a p5.js sketch.

The OpenAI API lets you interact with the same models that power Chat GPT. Using the API, you will have more granular control and be able to create more specific interactions that don't purely rely on a chatbot system. To explore the possibilities of the API, you can start by playing with the OpenAI Playground over here: [OpenAI Playground](https://platform.openai.com/playground).

![OpenAI Playground](https://i.ibb.co/WFzg4Yv/Screenshot-2024-05-19-at-23-36-34.png) <!-- Placeholder for an image of the OpenAI Playground -->

## 1 - Setup your OpenAI account

Sign up at [OpenAI Signup](https://platform.openai.com/signup).

It's free to get started, and you'll automatically get some free budget to make API calls. Note that the API is not free, so if you use it extensively, you will need to set up a payment method, and your card will be charged for API calls. More about pricing here: [OpenAI Pricing](https://openai.com/api/pricing/).

## 2 - Create your API Key

Now that you are registered, log in with your credentials and create a new API Key.

- Go to [OpenAI API Keys](https://platform.openai.com/api-keys)
- Tap on "+ Create new secret key" and choose a name.
- Make sure to copy and paste your key somewhere safe, because you won't be able to access it again.
- If you lose your API key, you can always generate a new one.
- If you publish your project online or share it with others, make sure to hide your API key (there are different ways of doing that).

![API Key Creation](images/api_key_creation.png) <!-- Placeholder for an image showing API key creation -->

## 3 - Explore the examples we provided

### Example 1: Chat with a simple assistant, similarly to how you would do in Chat GPT.

![Example 1 Screenshot](images/example1.png) <!-- Placeholder for an image showing Example 1 -->

### Example 2: Customize the output

![Example 2 Screenshot](images/example2.png) <!-- Placeholder for an image showing Example 2 -->

### Example 3: Generate a Story Based on User Inputs

![Example 3 Screenshot](images/example3.png) <!-- Placeholder for an image showing Example 3 -->

## 4 - Understanding Large Language Models (LLMs)

Large Language Models (LLMs) like GPT-3.5 are trained on vast amounts of text data and can generate human-like text based on the input they receive. These models use deep learning techniques, specifically transformers, to understand and generate language.

Here's a simplified illustration of how LLMs work:

1. **Input**: You provide a prompt or a query to the model.
2. **Processing**: The model processes this input using its trained parameters (billions of them!) to generate a response.
3. **Output**: The model outputs a coherent and contextually relevant response.

![LLM Workflow](images/llm_workflow.png) <!-- Placeholder for an image explaining LLM workflow -->

## Taking this further with Node.js

To integrate OpenAI API with Node.js, you can follow these steps:

1. Install the OpenAI SDK:
   ```bash
   npm install openai
