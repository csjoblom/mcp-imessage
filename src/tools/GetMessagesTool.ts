import { MCPTool } from "mcp-framework";
import { z } from "zod";

interface GetMessagesInput {
  message: string;
}

class GetMessagesTool extends MCPTool<GetMessagesInput> {
  name = "get-messages";
  description = "GetMessages tool description";

  schema = {
    message: {
      type: z.string(),
      description: "Message to process",
    },
  };

  async execute(input: GetMessagesInput) {
    return `Processed: ${input.message}`;
  }
}

export default GetMessagesTool;