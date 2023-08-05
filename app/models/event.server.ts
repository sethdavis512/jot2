import { prisma } from '~/utils/db.server';
import type { Event } from '@prisma/client';

export async function getEvents() {
    return prisma.event.findMany();
}

export async function createEvent(
    event: Pick<Event, 'title' | 'content' | 'start' | 'end' | 'allDay'>
) {
    return prisma.event.create({ data: event });
}
