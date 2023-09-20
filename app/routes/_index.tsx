import {
  type ActionFunction,
  json,
  type LoaderFunction,
  type V2_MetaFunction,
} from "@remix-run/node";
import Editor from "../components/Editor";
import { createDocument, findManyDocuments } from "~/models/document.server";
import { useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const content = form.get("content") as any;

  await createDocument({
    content,
  });

  return null;
};

export const loader: LoaderFunction = async () => {
  const allDocuments = await findManyDocuments();
  return json({ documents: allDocuments });
};

export default function Index() {
  // const { documents } = useLoaderData();

  return (
    <>
      {/* <pre>
        <code>{JSON.stringify(documents, null, 2)}</code>
      </pre> */}
      <Editor
        editorValue={[
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
        ]}
      />
    </>
  );
}
