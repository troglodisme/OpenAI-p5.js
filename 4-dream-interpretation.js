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
let interpretButton, dreamInput, interpretationOutput;

function setup() {
  noCanvas(); 
  background(200); 

  // Setup the dream input field
  createElement('p', 'Describe your dream:').position(20, 0);
  dreamInput = createInput();
  dreamInput.position(20, 40);
  dreamInput.size(500); 

  // Setup the button
  interpretButton = createButton("Interpret Dream");
  interpretButton.position(20, 80);
  interpretButton.mousePressed(interpretDream); // Attach the interpretDream function to the button

  // Setup the output paragraph
  interpretationOutput = createElement("p", "Interpretation will appear here...");
  interpretationOutput.position(20, 120); 
}

function interpretDream() {
  var dreamDescription = dreamInput.value(); // Get the dream description

  if (!dreamDescription) { // Check if the input is empty
    alert('Please describe your dream.');
    return; // If empty, do nothing
  }

  // Prepare the body for the API request with the new prompt
  const prompt = `Interpret the following dream in detail: ${dreamDescription}`;
  options.body = JSON.stringify({
    model: "gpt-3.5-turbo", // Specify the model to use
    messages: [
      {
        "role": "system",
        "content": "You are a dream interpretation expert."
      },
      {
        "role": "user",
        "content": prompt // Use the new prompt with the inputted dream description
      }
    ],
    max_tokens: 200 // Limit the response size
  });

  // Make the API request
  fetch(url, options)
    .then(function(response) {
      return response.json(); // Convert the response to JSON
    })
    .then(function(response) {
      if (response.choices && response.choices[0]) { // Check if there are choices in the response
        var interpretation = response.choices[0].message.content; // Get the generated interpretation
        
        // Display the response
        console.log("response:", interpretation); // Log the interpretation
        interpretationOutput.html(interpretation);
      }
    });
}
