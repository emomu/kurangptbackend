const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Body parser middleware to handle JSON request bodies
app.use(bodyParser.json());

// POST endpoint for /ask
app.post("/ask", (req, res) => {
  const { query } = req.body;

  // Validate request
  if (!query || typeof query !== "string") {
    return res.status(400).json({
      error: "Invalid request: 'query' field is required and should be a string."
    });
  }

  // Simulate the model's response to the query
  const answer = `You asked: "${query}". Here is a response from the model.`;

  // Send response
  res.status(200).json({ answer });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});