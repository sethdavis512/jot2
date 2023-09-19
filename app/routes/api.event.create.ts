import type { ActionArgs } from '@remix-run/node'; // or cloudflare/deno
import { createEvent } from '~/models/event.server';

export const action = async ({ request }: ActionArgs) => {
    const form = await request.formData();

    const name = form.get('name') as string;
    const content = form.get('content') as string;
    const start = new Date(form.get('start'));
    const end = new Date(form.get('end'));
    const tags = form.get('tags') as string;
    const type = form.get('type') as string;
    const image = form.get('image') as string;

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
