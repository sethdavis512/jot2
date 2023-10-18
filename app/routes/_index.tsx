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
import { getDocumentsByUserId } from "~/models/document.server";

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
  } else {
    await createBlock({
      content,
      userId: "652f43da7c5fcc56eda84685",
    });
  }

  return null;
};

export const loader: LoaderFunction = async () => {
  const allDocuments = await getDocumentsByUserId("652f43da7c5fcc56eda84685");

  return json({ allDocuments });
};

export default function Index() {
  const { allDocuments } = useLoaderData();
  const today = new Date();
  const todayFormatted = formatDateToYYYYMMDD(today);

  console.log({ allDocuments });

  return (
    <>
      {allDocuments.map((document: Document) => (
        <Box
          key={document.id}
          sx={{
            border: `1px solid black`,
          }}
        >
          {/* <Editor
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
          /> */}
          {JSON.stringify(document, null, 4)}
        </Box>
      ))}
    </>
  );
}
