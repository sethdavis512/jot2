import { prisma } from '~/utils/db.server';
import type { Event } from '@prisma/client';

export async function getEvents() {
    return prisma.event.findMany();
}

export async function createEvent(
    event: Pick<Event, 'name' | 'content' | 'allDay' | 'start' | 'end' | 'tags' | 'type' | 'image'>
) {
    return prisma.event.create({ data: event });
}
