import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface GetChatCountsInput {
  message: string;
}

class GetChatCountsTool extends MCPTool<GetChatCountsInput> {
  name = "get-chat-counts";
  description = "GetChatCounts tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: GetChatCountsInput) {
    return `Processed: ${input.message}`;
  }
}

export default GetChatCountsTool;