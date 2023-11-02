import {
  type ActionFunction,
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import { createBlock, getBlocks, updateBlock } from "~/models/block.server";
import format from "date-fns/format";
import { useLoaderData } from "@remix-run/react";
import { getDocumentsByUserId } from "~/models/document.server";
import Document from "~/components/Document";

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
        <>
          <h3>{document.id}</h3>
          <Document blocks={document.blocks} key={document.id} />
        </>
      ))}
    </>
  );
}
