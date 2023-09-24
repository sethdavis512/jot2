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

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const loader: LoaderFunction = async () => {
  const allDocuments = await findManyDocuments();
  return json({ documents: allDocuments });
};

export default function DatepickerIndexRoute({
  data,
}: {
  data: {
    entryListItems: {
      id: string;
      title: string;
      body: string;
      createdAt: string;
    }[];
  };
}) {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);

  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const setSelectedDayToToday = () => {
    setCurrentMonth(format(today, "MMM-yyyy"));
    setSelectedDay(today);
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

  const { documents } = useLoaderData();

  // const selectedDayEntries = data.entryListItems.filter((entry) =>
  //   isSameDay(parseISO(entry.createdAt), selectedDay)
  // );

  return (
    <Box
      sx={{
        p: 6,
        backgroundColor: "gray.5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
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
            width: "100%",
            py: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2rem",
            }}
          >
            <Text level={2}>Sun</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2rem",
            }}
          >
            <Text level={2}>Mon</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2rem",
            }}
          >
            <Text level={2}>Tue</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2rem",
            }}
          >
            <Text level={2}>Wed</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2rem",
            }}
          >
            <Text level={2}>Thu</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2rem",
            }}
          >
            <Text level={2}>Fri</Text>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2rem",
              height: "2rem",
            }}
          >
            <Text level={2}>Sat</Text>
          </Box>
        </Box>
      </Box>

      {/* ===== Start Datepicker ===== */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
        }}
      >
        {days.map((day, dayIdx) => (
          <Box
            key={day.toString()}
            sx={{
              gridColumnStart: dayIdx === 0 && colStart[getDay(day)],
            }}
          >
            <Button
              onClick={() => setSelectedDay(day)}
              variant="hollow"
              sx={{
                width: "1.75rem",
                height: "1.75rem",
                px: 2,
                py: 2,
              }}
              // disabled={isFuture(day)}
              className={classNames(
                isEqual(day, selectedDay) && "text-white",
                !isEqual(day, selectedDay) && isToday(day) && "text-amber-500",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, firstDayCurrentMonth) &&
                  "text-zinc-700",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, firstDayCurrentMonth) &&
                  "text-zinc-700",
                !isEqual(day, selectedDay) && isFuture(day) && "text-zinc-300",
                isEqual(day, selectedDay) && isToday(day) && "bg-green-800",
                isEqual(day, selectedDay) && !isToday(day) && "bg-zinc-900",
                !isEqual(day, selectedDay) && "hover:bg-zinc-200",
                (isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
                "mx-auto flex h-4 w-4 items-center justify-center rounded-full p-4 text-sm md:h-10 md:w-10 md:p-0 md:text-xl"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>

              {/* {documents.map((doc: Document) => (
                <li key={doc.id}>
                  <Link to={`/documents/${doc.id}`}>{doc.name}</Link>
                </li>
              ))} */}

              {/* {
                  console.log(data.document.createdAt);
                } */}
              <Box></Box>
              <div className="mx-auto mt-1 h-1 w-1">
                {/* {data.entryListItems.some((meeting) =>
                  isSameDay(parseISO(meeting.createdAt), day)
                ) && <div className="h-2 w-2 rounded-full bg-amber-600"></div>} */}
              </div>
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
