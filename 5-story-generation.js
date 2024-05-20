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
let generateButton, characterInput, settingInput, plotInput, storyOutput;

function setup() {
  noCanvas(); 
  background(200); 

  // Setup the character input field
  createElement('p', 'Enter character names (comma separated):').position(20, 0);
  characterInput = createInput();
  characterInput.position(20, 40);
  characterInput.size(500); 

  // Setup the setting input field
  createElement('p', 'Enter the setting:').position(20, 80);
  settingInput = createInput();
  settingInput.position(20, 120);
  settingInput.size(500);

  // Setup the plot input field
  createElement('p', 'Enter a brief plot idea:').position(20, 160);
  plotInput = createInput();
  plotInput.position(20, 200);
  plotInput.size(500);

  // Setup the button
  generateButton = createButton("Generate Story");
  generateButton.position(20, 240);
  generateButton.mousePressed(generateStory); // Attach the generateStory function to the button

  // Setup the output paragraph
  storyOutput = createElement("p", "Story will appear here...");
  storyOutput.position(20, 280); 
}

function generateStory() {
  var characters = characterInput.value(); // Get the character names
  var setting = settingInput.value(); // Get the setting
  var plot = plotInput.value(); // Get the plot idea

  if (!characters || !setting || !plot) { // Check if any field is empty
    alert('Please fill in all fields.');
    return;
  }

  // Prepare the body for the API request with the new prompt
  const prompt = `Write a short story featuring the characters (${characters}), set in (${setting}), with the following plot: (${plot}).`;
  options.body = JSON.stringify({
    model: "gpt-3.5-turbo", // Specify the model to use
    messages: [
      {
        "role": "system",
        "content": "You are a creative and talented story writer."
      },
      {
        "role": "user",
        "content": prompt // Use the new prompt with the inputted character names, setting, and plot idea
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
        var story = response.choices[0].message.content; // Get the generated story
        
        // Display the response
        console.log("response:", story); // Log the story
        storyOutput.html(story);
      }
    });
}
