import type { ActionArgs } from '@remix-run/node'; // or cloudflare/deno
import { createEvent } from '~/models/event.server';

export const action = async ({ request }: ActionArgs) => {
    const form = await request.formData();

    const name = form.get('title') as string;
    const content = form.get('content') as string;
    const start = new Date(form.get('start'));
    const end = new Date(form.get('end'));
    // const startTime = form.get('startTime') as string;
    // const endTime = form.get('endTime') as string;

    console.log({ content });

    switch (request.method) {
        case 'POST': {
            await createEvent({
                name,
                content,
                allDay: false,
                start,
                end,
                tags,
                type,
                image
            });
        }
    }

    return null;
};
