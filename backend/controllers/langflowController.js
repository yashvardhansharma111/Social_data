import LangflowClient from "../services/langflowClient.js";

const langflowClient = new LangflowClient(
  process.env.LANGFLOW_BASE_URL,
  process.env.LANGFLOW_APPLICATION_TOKEN
);

export const runFlow = async (req, res) => {
  try {
    const { inputValue, inputType = "text", outputType = "chat", stream = false } = req.body;

    // Validate outputType
    const validOutputTypes = ["chat", "text", "any", "debug"];
    if (!validOutputTypes.includes(outputType)) {
      return res.status(422).json({
        message: `Invalid outputType. Must be one of: ${validOutputTypes.join(", ")}`,
      });
    }

    // Make request to Langflow API
    const response = await langflowClient.post(
      `/lf/${process.env.LANGFLOW_ID}/api/v1/run/${process.env.FLOW_ID}`,
      {
        input_value: inputValue,
        input_type: inputType,
        output_type: outputType,
        tweaks: {},
      }
    );

    if (stream && response.outputs?.[0]?.outputs?.[0]?.artifacts?.stream_url) {
      const streamUrl = response.outputs[0].outputs[0].artifacts.stream_url;

      langflowClient.handleStream(
        streamUrl,
        (data) => res.write(`data: ${JSON.stringify(data)}\n\n`),
        () => res.end(),
        (error) => res.status(500).json({ error: "Stream error" })
      );
    } else {
      const output = response.outputs?.[0]?.outputs?.[0]?.outputs?.message?.text;
      res.status(200).json({ message: output });
    }
  } catch (error) {
    console.error("Error in runFlow controller:", error.message);
    res.status(500).json({ message: "Error processing the request" });
  }
};
