import { useState } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  getMonth,
  isEqual,
  isFuture,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import Text from "../Text";
import Box from "../Box";
import Button, { IconButton } from "../Button";
import ChevronFilledLeft from "../icons/ChevronFilledLeft";
import ChevronFilledRight from "../icons/ChevronFilledRight";
import Rule from "../Rule";
import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { findManyDocuments } from "~/models/document.server";

const colStart = ["", "2", "3", "4", "5", "6", "7"];

export const loader: LoaderFunction = async () => {
  const allEvents = await findManyDocuments();
  return json({ events: allEvents });
};

export default function CalendarIndexRoute({
  data,
}: {
  data: {
    events: {
      id: string;
      title: string;
      body: string;
      createdAt: string;
      name: string;
    }[];
  };
}) {
  // const today = startOfToday();
  const today = new Date();
  const formatDateToYYYYMMDD = (date) => format(date, "yyyy-MM-dd");

  // const [selectedDay, setSelectedDay] = useState(today);

  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const setSelectedDayToToday = () => {
    setCurrentMonth(format(today, "MMM-yyyy"));
    // setSelectedDay(today);
  };
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  const { events } = useLoaderData();

  console.log(events);

  {
    events.map(
      (event) => (
        console.log(event.name),
        console.log(event.start),
        console.log(parseISO(event.start))
      )
    );
  }

  // const dayEvents = data.events.filter((event) =>
  //   isSameDay(parseISO(event.createdAt), day)
  // );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        flex: "1",
        p: 6,
        pt: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          py: 4,
        }}
      >
        <Text level={2}>{format(firstDayCurrentMonth, "MMM dd, yyyy")}</Text>
        <Button
          variant="hollow"
          onClick={setSelectedDayToToday}
          title="Previous Month"
        >
          Today
        </Button>
      </Box>
      <Rule />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          py: 4,
        }}
      >
        <IconButton
          variant="hollow"
          onClick={previousMonth}
          title="Previous Month"
        >
          <ChevronFilledLeft aria-hidden="true" />
        </IconButton>
        <Text level={3}>{format(firstDayCurrentMonth, "MMMM yyyy")}</Text>
        <IconButton variant="hollow" onClick={nextMonth} title="Next Month">
          <ChevronFilledRight aria-hidden="true" />
        </IconButton>
      </Box>
      <Rule />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          py: 4,
        }}
      >
        <Box>
          <Text level={2}>Sun</Text>
        </Box>
        <Box>
          <Text level={2}>Mon</Text>
        </Box>
        <Box>
          <Text level={2}>Tue</Text>
        </Box>
        <Box>
          <Text level={2}>Wed</Text>
        </Box>
        <Box>
          <Text level={2}>Thu</Text>
        </Box>
        <Box>
          <Text level={2}>Fri</Text>
        </Box>
        <Box>
          <Text level={2}>Sat</Text>
        </Box>
      </Box>
      {/* ===== Start Calendar ===== */}
      <Box
        sx={{
          display: "grid",
          // height: "100%",
          flex: "1",
          gridTemplateColumns: "repeat(7, 1fr)",
          alignItems: "stretch",
        }}
      >
        {days.map((day, dayIdx) => {
          const isToday =
            formatDateToYYYYMMDD(day) === formatDateToYYYYMMDD(today);

          return (
            <Box
              key={day.toString()}
              onClick={() => setSelectedDay(day)}
              sx={(theme) => ({
                gridColumnStart: dayIdx === 0 && colStart[getDay(day)],
                p: 4,
                borderWidth: 0,
                marginRight: "1px",
                marginBottom: "1px",
                boxShadow: `0 -.875rem 0 -.8125rem ${theme.colors.gray[5]}, 0.875rem 0 0 -.8125rem ${theme.colors.gray[5]}, 0 0.875rem 0 -.8125rem ${theme.colors.gray[5]}, -.875rem 0 0 -.8125rem ${theme.colors.gray[5]}`,
              })}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                <Text
                  level={2}
                  sx={{
                    color: isToday ? "red.50" : "gray.50",
                    mb: 4,
                  }}
                >
                  {format(day, "d")}
                </Text>
              </time>
              {events
                .filter((event) => {
                  try {
                    return (
                      parseISO(format(event.start, "yyyy-MM-dd")) ===
                      parseISO(formatDateToYYYYMMDD(day))
                    );
                  } catch (error) {
                    console.error("Error formatting date:", error);
                    return false;
                  }
                })
                .map((event) => (
                  <Box key={event.id.toString()}>{event.name}</Box>
                ))}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
