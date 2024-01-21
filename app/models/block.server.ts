import type { Block, User } from "@prisma/client";
import { prisma } from "~/utils/db.server";

export function createBlock({
  content,
  userId,
  documentId,
}: Pick<Block, "content" | "documentId"> & {
  userId: User["id"];
}) {
  return prisma.block.create({
    data: {
      content,
      history: "tada",
      author: {
        connect: {
          id: userId,
        },
      },
      Document: {
        connect: {
          id: documentId as string,
        },
      },
    },
  });
}

export function upsertBlock({
  id,
  content,
  userId,
  documentId,
}: {
  id: string;
  content: string;
  userId: string;
  documentId: string;
}) {
  return prisma.block.upsert({
    where: { id },
    create: {
      documentId,
      content,
      authorId: userId,
    },
    update: {
      content,
    },
  });
}

export function getBlockById(id: string) {
  return prisma.block.findUnique({
    where: { id },
    include: {
      tags: true,
      author: true,
      Document: true,
    },
  });
}

export function getBlocks({ userId }: { userId: User["id"] }) {
  return prisma.block.findMany({
    where: { authorId: userId },
    select: { id: true, content: true },
  });
}

export function updateBlock({ id, data }: { id: string; data: Block }) {
  return prisma.block.update({
    where: { id },
    data,
  });
}

export function deleteBlock(id: string) {
  return prisma.block.delete({
    where: { id },
  });
}
