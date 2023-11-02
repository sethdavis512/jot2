import type { Block } from "@prisma/client";
import Box from "../Box";
import Editor from "../Editor";

export default function Document({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block: Block) => (
        <Box
          key={block.id}
          sx={{
            border: `1px solid black`,
          }}
        >
          <Editor
            blockId={block.id}
            editorValue={
              block.content
                ? JSON.parse(block.content)
                : [
                    {
                      type: "heading-one",
                      children: [{ text: "todayFormatted" }],
                    },
                  ]
            }
          />
          {/* {JSON.stringify(document, null, 4)} */}
        </Box>
      ))}
    </>
  );
}
