import type { Document } from "@prisma/client";
import { prisma } from "~/utils/db.server";

// Create a new document
export function createDocument({ content }: Pick<Document, "content">) {
  const today = new Date();

  return prisma.document.create({
    data: {
      name: "my cool name" || [
        {
          type: "heading-one",
          children: [{ text: today.toDateString() as string }],
        },
      ],
      content,
    },
  });
}

// Retrieve a document by ID
export function getDocumentById(id: string) {
  return prisma.document.findUnique({
    where: { id },
    select: {
      tags: true,
      categories: true,
      author: true,
      blocks: true,
      blockOrder: true,
    },
  });
}

export function getDocumentsByUserId(userId: string) {
  return prisma.document.findMany({
    where: { authorId: userId },
    include: {
      tags: true,
      categories: true,
      author: true,
      blocks: true,
    },
  });
}

// Retrieve multiple documents
export function findManyDocuments() {
  return prisma.document.findMany({
    include: {
      tags: true,
      categories: true,
      author: true,
      blocks: true,
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
