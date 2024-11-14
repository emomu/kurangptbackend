// api/ask.js

export default async function handler(req, res) {
    if (req.method === "POST") {
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
    } else {
      // Only allow POST requests
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }