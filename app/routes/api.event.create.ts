import type { ActionArgs } from '@remix-run/node'; // or cloudflare/deno
import { createEvent } from '~/models/event.server';

export const action = async ({ request }: ActionArgs) => {
    const form = await request.formData();

    const title = form.get('title') as string;
    const content = form.get('content') as string;

    console.log({ content });

    switch (request.method) {
        case 'POST': {
            await createEvent({
                title,
                content,
                start: new Date('8/3/23'),
                end: new Date('8/4/23'),
                allDay: false
            });
        }
    }

    return null;
};
