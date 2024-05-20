// Paste your API key here. If you are sharing your project publicly you will have to hide this.

// In this example we'll genarate an image using Dall-E 3

const API_KEY = "YOUR API GOES HERE";

let generateButton, promptInput, outputImage;

function setup() {
  noCanvas();
  background(200);

  // Setup the prompt input field
  promptInput = createInput("Enter a description for the image");
  promptInput.position(20, 20);
  promptInput.size(500); // Set the size of the input field

  // Setup the generate button
  generateButton = createButton("Generate Image");
  generateButton.position(20, 60);
  generateButton.mousePressed(generateImage); // Attach the generateImage function to the button

  // Setup the output image placeholder
  outputImage = createImg("", "Generated image goes here");
  outputImage.position(20, 120);
  outputImage.size(512, 512); // Adjust size as needed
}

function generateImage() {
  const prompt = promptInput.value(); // Get the value from the input field

  if (!prompt) { // Check if the input is empty
    alert("Please enter a description for the image.");
    return; // If empty, do nothing
  }

  console.log("Sending request to OpenAI with prompt:", prompt);

  // Prepare the request payload
  const payload = {
    model: "dall-e-3",
    prompt: prompt,
    n: 1,
    size: "1024x1024" //check documentation if you want different formats
  };

  // Make the API request
  fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    console.log("Received response from OpenAI");
    return response.json();
  })
  .then(data => {
    if (data.data && data.data[0]) {
      const imageUrl = data.data[0].url;
      console.log("Generated image URL:", imageUrl);
      outputImage.attribute('src', imageUrl); // Set the src attribute of the image element to display the generated image
    } else {
      console.error("Unexpected response format:", data);
      alert("Unexpected response format. Check console for details.");
    }
  })
  .catch(error => {
    console.error("Error with OpenAI API:", error);
    alert("Error generating image. Check console for details.");
  });
}
