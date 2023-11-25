import {
  type ActionFunction,
  json,
  type LoaderFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Document from "~/components/Document";
import { getDocumentById } from "~/models/document.server";
import { createBlock, updateBlock } from "~/models/block.server";

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  upsertDocument(form);

  return null;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const document = await getDocumentById(params.id as string);

  const mapOfBlocks = document?.blocks.reduce((acc, cur) => {
    if (!acc[cur.id]) {
      acc[cur.id] = cur;
    }

    return acc;
  }, {});

  const listOfBlocks = document?.blockOrder.map(
    (blockId) => (mapOfBlocks as any)[blockId]
  );

  return json({
    listOfBlocks,
  });
};

export default function DocumentDetailRoute() {
  const { listOfBlocks } = useLoaderData<typeof loader>();

  return <Document blocks={listOfBlocks} />;
}
