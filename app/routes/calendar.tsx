import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useLoaderData } from '@remix-run/react';
import styled from 'styled-components';

import { json } from '@remix-run/node';
import { getEvents } from '~/models/event.server';

const Box = styled('div')`
    font-family: system-ui, sans-serif;
    line-height: 1.4;
    /* background-color: wheat; */
`;

export const loader = async () => {
    return json({
        events: await getEvents()
    });
};

export default function CalendarRoute() {
    const eventData = useLoaderData();

    const handleDateClick = (info: any): void => {
        console.log(info.event.extendedProps.content);
    };

    return (
        <Box>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                eventClick={handleDateClick}
                events={eventData.events}
            />
        </Box>
    );
}
