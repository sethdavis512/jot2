import {
  type ActionFunction,
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import Editor from "../components/Editor";
import { createBlock, getBlocks, updateBlock } from "~/models/block.server";
import format from "date-fns/format";
import { useLoaderData } from "@remix-run/react";
import { Block } from "@prisma/client";
import { Descendant } from "slate";
import Box from "~/components/Box";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
const formatDateToYYYYMMDD = (date: Date) => format(date, "yyyy-MM-dd");

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const content = form.get("content") as string;
  const blockId = form.get("blockId") as string;

  if (blockId) {
    await updateBlock(blockId, {
      content,
    });
  }

  return null;
};

export const loader: LoaderFunction = async () => {
  //   await createBlock({
  //     content: "",
  //     userId: "651b6f52caa34f49cb6dd260",
  //   });

  const allBlocks = await getBlocks({ userId: "651b6f52caa34f49cb6dd260" });

  return json({ allBlocks });
};

export default function Index() {
  const { allBlocks } = useLoaderData();
  const today = new Date();
  const todayFormatted = formatDateToYYYYMMDD(today);

  console.log({ allBlocks });

  return (
    <>
      {allBlocks.map((block: Block) => (
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
                      children: [{ text: todayFormatted }],
                    },
                  ]
            }
          />
        </Box>
      ))}
    </>
  );
}
