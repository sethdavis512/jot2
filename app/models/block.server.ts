import type { Block, User } from "@prisma/client";
import { prisma } from "~/utils/db.server";

export function createBlock({
  content,
  userId,
}: Pick<Block, "content"> & {
  userId: User["id"];
}) {
  return prisma.block.create({
    data: {
      content,
      history: "tada",
      name: "test",
      author: {
        connect: {
          id: userId,
        },
      },
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

export function updateBlock(id: string, data: Partial<Block>) {
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
