import { useFetcher } from "@remix-run/react";
import styled from "styled-components";
import TextInput from "~/components/TextInput";
import { Modal } from "~/components/Modal";

const Stack = styled("div")`
  display: flex;
  flex-direction: column;
`;

// Today
const today = new Date();

// Date yyyy-MM-dd
let localDate = today.toLocaleDateString();
let yyyy = localDate.split("/")[2];
let MM = localDate.split("/")[0].padStart(2, "0");
let dd = localDate.split("/")[1].padStart(2, "0");
let theDate = yyyy + "-" + MM + "-" + dd;

// Time XX:XX
let localTime = today.toLocaleTimeString();
let hour = localTime.split(":")[0];
let hhStart = hour.padStart(2, "0");
let hourPlusOne = Number(hour) + 1;
let hhEnd = hourPlusOne.toString().padStart(2, "0");
let mm = today.toLocaleTimeString().split(":")[1];

// Default start
let defaultStart = theDate + "T" + hhStart + ":" + mm;

// Default end
let defaultEnd = theDate + "T" + hhEnd + ":" + mm;

export default function NewEventRoute() {
  const eventFetcher = useFetcher();

  return (
    <Modal isOpen={true}>
      <eventFetcher.Form method="post" action="/api/event/create">
        <Stack>
          <TextInput id="name" label="Title" name="name" />
          <TextInput id="content" label="Content" name="content" />
          <label>
            <input type="checkbox" defaultChecked={false} />
            All day
          </label>
          <label>
            Start date
            <input
              id="start"
              type="datetime-local"
              name="start"
              defaultValue={defaultStart}
            />
          </label>
          <label>
            End date
            <input
              id="end"
              type="datetime-local"
              name="end"
              defaultValue={defaultEnd}
            />
          </label>
        </Stack>
        <button type="submit">Add</button>
      </eventFetcher.Form>
    </Modal>
  );
}
