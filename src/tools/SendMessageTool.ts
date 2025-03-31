import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface SendMessageInput {
  message: string;
}

class SendMessageTool extends MCPTool<SendMessageInput> {
  name = "send-message";
  description = "SendMessage tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: SendMessageInput) {
    return `Processed: ${input.message}`;
  }
}

export default SendMessageTool;