// Based on original sketch by Jen https://editor.p5js.org/jen_GSA/sketches/H-OIo03qr

// Send user input in p5.js as a text completion request to OpenAI Apis


// Paste your API key here. If you are sharing your project publicly you will have to hide this.
const API_KEY = "YOUR API GOES HERE";

// Updated URL for chat models
const url = "https://api.openai.com/v1/chat/completions";  

// Structure of how to communicate with chatGPT API
let options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + API_KEY,
  },
};

// GUI elements
let myButton, myInput, myOutput;

function setup() {
  noCanvas(); 
  background(200); 

  // Setup the button
  myButton = createButton("Submit");
  myButton.position(540, 20);
  myButton.mousePressed(getText); // Attach the getText function to the button

  // Setup the input field
  myInput = createInput("Enter prompt");
  myInput.position(20, 20);
  myInput.size(500); // Set the size of the input field

  // Setup the output paragraph
  myOutput = createElement("p", "Results:");
  myOutput.position(20, 80); 
}

function getText() {
  var inputValue = myInput.value(); // Get the value from the input field
  console.log("myinput", inputValue); // Log the input value to the console

  if (!inputValue) { // Check if the input is empty
    return; // If empty, do nothing
  }

  // Prepare the body for the API request
  options.body = JSON.stringify({
    model: "gpt-3.5-turbo", // Specify the model to use
    messages: [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": inputValue // Use the input value as the user message
      }
    ]
  });

  // Make the API request
  // Forgot about APIs? Read more here https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  fetch(url, options)
    .then(function(response) {
      return response.json(); // Convert the response to JSON
    })
    .then(function(response) {
      if (response.choices && response.choices[0]) { // Check if there are choices in the response
        var assistantMessage = response.choices[0].message.content; // Get the assistant's 'answer'
        
        // Display the response
        console.log("response:", assistantMessage); // Log the assistant's message
        myOutput.html(assistantMessage);
      }
    });
}
