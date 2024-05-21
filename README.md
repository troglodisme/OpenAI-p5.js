
# OpenAI API with P5.js

## Introduction

As we explored before, APIs allow different software applications to communicate with each other. They provide a set of rules and protocols for accessing web-based software applications. OpenAI's API lets you interact with powerful language models, enabling you to create specific interactions beyond a chatbot system.

Large Language Models (LLMs) like GPT-3.5 are trained on extensive text data and generate human-like text based on the input they receive. 
These models use deep learning techniques, specifically transformers, to understand and generate language.

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
- Sometimes the API Key will take a few hours to activate, and/or it might require you to upgrade to paid tier (adding a min of 5$).

![OpenAI Playground](https://i.ibb.co/1mFTbHv/save-key.png) <!-- Save Key -->


### Note: To explore the possibilities of OpenAI tools, you can start by playing with the OpenAI Playground over here without needing to code: [OpenAI Playground](https://platform.openai.com/playground).

![OpenAI Playground](https://i.ibb.co/WFzg4Yv/Screenshot-2024-05-19-at-23-36-34.png) <!-- OpenAI Playground -->


## 3 - Explore the examples we provided

Learn more about making OpenAI API requests: https://platform.openai.com/docs/api-reference/making-requests

![image](https://github.com/troglodisme/OpenAI-p5.js/assets/8257349/3738395d-69f0-4658-bf90-35896f2c54ab)



You are now ready to explore some of the examples we have built for you, and create some of your own.
In this repo, you'll find a few different examples such as:

### Example 1: Chat with a simple assistant, similarly to how you would do in Chat GPT.

- Takes user text input
- Make a POST request to OpenAI API
- Print back the response

Note: this example does not have 'memory' of your prompts... you will not be able to have a conversation like you can do with Chat GPT.

### Example 2: Customize the output, using user input

- Create custom prompt 
- Generate sociopolitical analysis
- Print back the response

For this example, the prompt we are using is the following - of course this can be customised. 

const prompt = `Provide a brief overview (just a few phrases) of a person's thoughts on the history of Palestine vs Israel based on their country of residence (${selectedCountry}), job (${selectedJob}), and wealth status (${selectedWealth}).`;

### Example 3: Generate an image using Dall-E 3

- Use Dall-E to generate images based on a user text input


# Additional Resources

- **OpenAI Documentation**: Familiarize yourself with the API endpoints and capabilities. [OpenAI API Documentation](https://platform.openai.com/docs/introduction)
- **p5.js Reference**: Learn about the p5.js functions and how to integrate them with your OpenAI API calls. [p5.js Reference](https://p5js.org/reference/)


# Other projects usign GPT Apis

- 'Face2Wikipedia' - Andreas Refsgaard https://www.andreasrefsgaard.dk/projects/face2wikipedia/)
  
- 'This statement is false' - Kevin Lee https://mngyuan.com/this-statement-is-false 

- 'Dear Humans' - Giulio Ammendola https://www.instagram.com/p/CTz7Srgs5au/?img_index=1



