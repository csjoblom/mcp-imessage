import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface ImessageInput {
  message: string;
}

class ImessageTool extends MCPTool<ImessageInput> {
  name = "imessage";
  description = "Get imessage information for an account";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: ImessageInput) {
    return `Processed: ${input.message}`;
  }
}

export default ImessageTool;