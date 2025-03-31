import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface HasNewMessagesInChatInput {
  message: string;
}

class HasNewMessagesInChatTool extends MCPTool<HasNewMessagesInChatInput> {
  name = "has-new-messages-in-chat";
  description = "HasNewMessagesInChat tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: HasNewMessagesInChatInput) {
    return `Processed: ${input.message}`;
  }
}

export default HasNewMessagesInChatTool;