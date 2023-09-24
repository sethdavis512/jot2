import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useLoaderData } from "@remix-run/react";
// import styled from "styled-components";

import { json } from "@remix-run/node";
import { getEvents } from "~/models/event.server";
import Box from "../components/Box";
import Calendar from "../components/Calendar";
import Datepicker from "../components/Datepicker";

// const Box = styled("div")`
//   font-family: system-ui, sans-serif;
//   line-height: 1.4;
//   /* background-color: wheat; */
// `;

export const loader = async () => {
  return json({
    events: await getEvents(),
  });
};

export default function CalendarRoute() {
  const eventData = useLoaderData();

  const handleEventClick = (info: any): void => {
    console.log("– EVENT – – – –");
    console.log(info.event.name);
    console.log(info.event.extendedProps.content);
    console.log(info.event.start);
    console.log(info.event.end);
    console.log(info);
  };

  const handleDateClick = (info: any): void => {
    console.log(info);
  };

  return (
    <Box sx={{ width: "fit-content" }}>
      <Datepicker data={eventData.events} />
      {/* <Calendar
        // plugins={[dayGridPlugin, interactionPlugin]}
        // initialView="dayGridMonth"
        // eventClick={handleEventClick}
        // dateClick={handleDateClick}
        // events={eventData.events}
        data={eventData.events}
      /> */}
    </Box>
  );
}
