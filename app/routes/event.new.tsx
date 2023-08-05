import { useFetcher } from '@remix-run/react';
import styled from 'styled-components';

const Stack = styled('div')`
    display: flex;
    flex-direction: column;
`;

export default function NewEventRoute() {
    const eventFetcher = useFetcher();

    return (
        <eventFetcher.Form method="post" action="/api/event/create">
            <Stack>
                <label>
                    Title
                    <input id="title" type="text" name="title" />
                </label>
                <label>
                    Content
                    <input id="content" type="text" name="content" />
                </label>
                <label>
                    Start date
                    <input id="start" type="date" name="start" />
                </label>
                <label>
                    End date
                    <input id="end" type="date" name="end" />
                </label>
                <label>
                    <input type="checkbox" checked={false} />
                    All day
                </label>
            </Stack>
            <button type="submit">Add</button>
        </eventFetcher.Form>
    );
}
