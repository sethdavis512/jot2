import type { Document } from "@prisma/client";
import { prisma } from "~/utils/db.server";

// Create a new document
export function createDocument({ content }: Pick<Document, "content">) {
  return prisma.document.create({
    data: {
      name: "A document",
      content,
    },
  });
}

// Retrieve a document by ID
export function getDocumentById(id: string) {
  return prisma.document.findUnique({
    where: { id },
    include: {
      tags: true,
      Category: true,
      author: true,
      Block: true,
    },
  });
}

// Retrieve multiple documents
export function findManyDocuments() {
  return prisma.document.findMany({
    include: {
      tags: true,
      Category: true,
      author: true,
      Block: true,
    },
  });
}

// Update a document by ID
export function updateDocument(id: string, data: any) {
  return prisma.document.update({
    where: { id },
    data,
  });
}

// Delete a document by ID
export function deleteDocument(id: string) {
  return prisma.document.delete({ where: { id } });
}
