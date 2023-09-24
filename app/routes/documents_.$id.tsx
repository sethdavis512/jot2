import {
  type ActionFunction,
  json,
  type LoaderFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Editor from "~/components/Editor";
import { getDocumentById, updateDocument } from "~/models/document.server";

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  const content = form.get("content");
  const name = form.get("name");

  await updateDocument(params.id as string, {
    name,
    content,
  });

  return null;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const document = await getDocumentById(params.id as string);

  return json({
    document,
  });
};

export default function DocumentDetailRoute() {
  const data = useLoaderData<typeof loader>();

  console.log(data.document.createdAt);

  return (
    <div className="">
      <Editor
        editorValue={[
          {
            type: "heading-one",
            children: [{ text: data.document.name }],
          },
        ]}
      />
      <hr />
      <Editor
        editorValue={
          JSON.parse(data.document.content) || [
            {
              type: "heading-one",
              children: [{ text: "Heading One!!!!" }],
            },
            {
              type: "heading-two",
              children: [{ text: "Heading Two" }],
            },
            {
              type: "heading-three",
              children: [{ text: "Heading Three" }],
            },
            {
              type: "paragraph",
              children: [{ text: "A line of text in a paragraph." }],
            },
          ]
        }
      />
    </div>
  );
}
