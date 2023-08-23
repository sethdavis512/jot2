import { prisma } from '~/utils/db.server';
import type { Note } from '@prisma/client';

export async function getNotes() {
    return prisma.note.findMany();
}

export async function createNote(
    note: Pick<Note, 'title' | 'content' | 'allDay' | 'start' | 'end' >
) {
    return prisma.note.create({ data: note });
}
