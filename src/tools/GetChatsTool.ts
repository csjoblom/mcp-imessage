import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface GetChatsInput {
  message: string;
}

class GetChatsTool extends MCPTool<GetChatsInput> {
  name = "get-chats";
  description = "GetChats tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: GetChatsInput) {
    return `Processed: ${input.message}`;
  }
}

export default GetChatsTool;