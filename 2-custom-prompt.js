// In this example we will explore how you can allow the user to customise prompts using options before generating a request to OpenAI. 

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
let submitButton, outputParagraph, countrySelect, jobSelect, wealthSelect, errorParagraph;

function setup() {
  noCanvas(); 
  background(200); 

  // Setup the country select dropdown
  countrySelect = createSelect();
  countrySelect.option('Select a country');
  
  countrySelect.option('USA');
  countrySelect.option('UK');
  countrySelect.option('Italy');
  countrySelect.option('China');
  countrySelect.option('India');
  countrySelect.position(20, 50);
  createElement('p', 'Select country of residence:').position(20, 0);

  // Setup the job select dropdown
  jobSelect = createSelect();
  jobSelect.option('Select a job');

  jobSelect.option('Doctor');
  jobSelect.option('Banker');
  jobSelect.option('Engineer');
  jobSelect.option('Teacher');
  jobSelect.option('Artist');
  jobSelect.option('Unemployed');
  jobSelect.position(20, 110);
  createElement('p', 'Select job:').position(20, 60);

  // Setup the wealth select dropdown
  wealthSelect = createSelect();
  wealthSelect.option('Select wealth status');
  
  wealthSelect.option('Wealthy');
  wealthSelect.option('Middle class');
  wealthSelect.option('Poor');
  wealthSelect.position(20, 170);
  createElement('p', 'Select wealth status:').position(20, 120);

  // Setup the button
  submitButton = createButton("Submit");
  submitButton.position(20, 220);
  submitButton.mousePressed(fetchLifeExpectations); // Attach the fetchLifeExpectations function to the button

  // Setup the output paragraph
  outputParagraph = createElement("p", "Results:");
  outputParagraph.position(20, 280); 

  // Setup the error paragraph
  errorParagraph = createElement("p", "").position(20, 220).style('color', 'red');
}

function fetchLifeExpectations() {
  var selectedCountry = countrySelect.value(); // Get the selected country
  var selectedJob = jobSelect.value(); // Get the selected job
  var selectedWealth = wealthSelect.value(); // Get the selected wealth status
  console.log("selectedCountry", selectedCountry); // Log the selected country to the console
  console.log("selectedJob", selectedJob); // Log the selected job to the console
  console.log("selectedWealth", selectedWealth); // Log the selected wealth status to the console

  if (selectedCountry === 'Select a country' || selectedJob === 'Select a job' || selectedWealth === 'Select wealth status') { // Check if any option is not selected
    errorParagraph.html('Please select country of residence,  job, and wealth status.'); // Show error message
    return; // If not, do nothing
  }

  // Clear error message
  errorParagraph.html('');

  // Prepare the body for the API request with the new prompt
  const prompt = `Provide a brief overview (just a few phrases) of a person's thoughts on the history of Palestine vs Israel based on their country of residence (${selectedCountry}), job (${selectedJob}), and wealth status (${selectedWealth}).`;
  options.body = JSON.stringify({
    model: "gpt-3.5-turbo", // Specify the model to use
    messages: [
      {
        "role": "system",
        "content": "You are an expert in historical and sociopolitical analysis."
      },
      {
        "role": "user",
        "content": prompt // Use the new prompt with the selected country, job, and wealth status
      }
    ],
    max_tokens: 100 // Limit the response size
  });

  // Make the API request
  fetch(url, options)
    .then(function(response) {
      return response.json(); // Convert the response to JSON
    })
    .then(function(response) {
      if (response.choices && response.choices[0]) { // Check if there are choices in the response
        var assistantMessage = response.choices[0].message.content; // Get the assistant's 'answer'
        
        // Display the response
        console.log("response:", assistantMessage); // Log the assistant's message
        outputParagraph.html(assistantMessage);
      }
    });
}
