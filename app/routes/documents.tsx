import type { Document } from "@prisma/client";
import { json, type LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { findManyDocuments } from "~/models/document.server";

export const loader: LoaderFunction = async () => {
  const allDocuments = await findManyDocuments();
  return json({ documents: allDocuments });
};

export default function DocumentsRoute() {
  const { documents } = useLoaderData();

  return (
    <div className="">
      <ul>
        {documents.map((doc: Document) => (
          <li key={doc.id}>
            <Link to={`/documents/${doc.id}`}>{doc.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
