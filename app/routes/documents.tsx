import type { Document } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Editor from "~/components/Editor";
import { findManyDocuments } from "~/models/document.server";

export const loader: LoaderFunction = async () => {
  const allDocuments = await findManyDocuments();
  return json({ documents: allDocuments });
};

export default function DocumentsRoute() {
  const { documents } = useLoaderData<typeof loader>();

  return (
    <div className="">
      <ul>
        {documents.map((doc: Document) => (
          <li key={doc.id}>
            <Link to={`/documents/${doc.id}`}>
              {doc.name} / {doc.author.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
