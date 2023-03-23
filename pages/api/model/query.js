export default async (req, res) => {
  // check if POST request is valid
  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    // get request body
    const { prompt } = body;

    const params = {
      model: process.env.MODEL_NAME,
      temperature: Number(process.env.MODEL_TEMPERATURE),
      max_tokens: Number(process.env.MODEL_MAX_TOKENS),
      top_p: Number(process.env.MODEL_TOP_P),
      frequency_penalty: Number(process.env.MODEL_FREQUENCY_PENALTY),
      presence_penalty: Number(process.env.MODEL_PRESENCE_PENALTY),
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.OPEN_AI_API_KEY,
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.text())
      .then((data) => data)
      .catch((error) => {
        console.log(error);
      });

    // Respond with a JSON string of all response
    res.send(response);
  }
};
