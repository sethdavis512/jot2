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
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import { NavLink } from "@remix-run/react";

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function CalendarIndexRoute({
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

  // const selectedDayEntries = data.entryListItems.filter((entry) =>
  //   isSameDay(parseISO(entry.createdAt), selectedDay)
  // );

  return (
    <div className="">
      <div className="mx-auto max-w-md md:max-w-6xl">
        <div className="grid-cols-1 md:grid xl:grid-cols-2 xl:divide-x xl:divide-zinc-200">
          <div className="px-4 pt-8 xl:px-10">
            <div className="mb-4 flex items-center">
              <h2 className="flex-auto text-3xl font-semibold text-zinc-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-zinc-400 hover:text-zinc-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeft aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="hover:text-zinc-5 md:h-800 -my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-zinc-400 md:h-8"
              >
                <span className="sr-only">Next month</span>
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
            <div>
              <button
                className="rounded border border-green-600 py-2 px-4 text-green-600 hover:bg-zinc-200 active:bg-zinc-200"
                onClick={setSelectedDayToToday}
              >
                Today
              </button>
            </div>
            <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-zinc-900">
              <div className="text-xl font-bold">S</div>
              <div className="text-xl font-bold">M</div>
              <div className="text-xl font-bold">T</div>
              <div className="text-xl font-bold">W</div>
              <div className="text-xl font-bold">T</div>
              <div className="text-xl font-bold">F</div>
              <div className="text-xl font-bold">S</div>
            </div>
            {/* ===== Start calendar ===== */}
            <div className="mt-2 grid grid-cols-7 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    disabled={isFuture(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-amber-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-zinc-700",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-zinc-700",
                      !isEqual(day, selectedDay) &&
                        isFuture(day) &&
                        "text-zinc-300",
                      isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "bg-green-800",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-zinc-900",
                      !isEqual(day, selectedDay) && "hover:bg-zinc-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-4 w-4 items-center justify-center rounded-full p-4 text-sm md:h-10 md:w-10 md:p-0 md:text-xl"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>

                  <div className="mx-auto mt-1 h-1 w-1">
                    {/* {data.entryListItems.some((meeting) =>
                      isSameDay(parseISO(meeting.createdAt), day)
                    ) && (
                      <div className="h-2 w-2 rounded-full bg-amber-600"></div>
                    )} */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* ===== List of entries ===== */}
          <section className="mt-12 px-4 pt-8 md:mt-0 xl:px-10">
            <h2 className="mb-4 font-semibold text-zinc-900">
              Entries for{" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </h2>
            {/* {selectedDayEntries.length > 0 ? (
              selectedDayEntries.map((entry) => (
                <NavLink
                  className={({ isActive }) =>
                    `mb-2 block rounded-xl p-3 text-xl hover:bg-amber-100 md:p-4  ${
                      isActive ? "bg-amber-300" : ""
                    }`
                  }
                  to={entry.id}
                  key={entry.id}
                >
                  <h3 className="text-xl font-bold">{entry.title}</h3>
                  <p>{`${entry.body.slice(0, 25)}...`}</p>
                </NavLink>
              ))
            ) : (
              <p className="mt-6 text-2xl text-zinc-400">No entries found.</p>
            )} */}
          </section>
        </div>
      </div>
    </div>
  );
}
