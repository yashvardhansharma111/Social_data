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

    // Debug log to see full response structure
    // console.log('Full Langflow Response:', JSON.stringify(response, null, 2));

    if (stream && response.outputs?.[0]?.outputs?.[0]?.artifacts?.stream_url) {
      const streamUrl = response.outputs[0].outputs[0].artifacts.stream_url;
      
      langflowClient.handleStream(
        streamUrl,
        (data) => res.write(`data: ${JSON.stringify(data)}\n\n`),
        () => res.end(),
        (error) => res.status(500).json({ error: "Stream error" })
      );
    } else {
      // Extract output from the response with proper error handling
      let output = null;
      
      if (response.outputs && response.outputs[0] && response.outputs[0].outputs) {
        const firstOutput = response.outputs[0].outputs[0];
        
        // Try different possible output locations
        output = firstOutput?.value || // Check for direct value
                firstOutput?.output || // Check for output field
                firstOutput?.message?.content || // Check for message content
                firstOutput?.message?.text || // Check for message text
                firstOutput?.text || // Check for direct text
                JSON.stringify(firstOutput); // Fallback to stringified output
      }

      if (output === null) {
        console.error('Unable to extract output from response:', response);
        return res.status(500).json({ message: "Could not extract output from response" });
      }
      //console.log(JSON.parse(output).results.message.text);

      
      res.status(200).json({ message: JSON.parse(output).results.message.text });
    }
  } catch (error) {
    console.error("Error in runFlow controller:", error.message);
    res.status(500).json({ message: "Error processing the request" });
  }
};