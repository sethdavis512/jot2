import { type V2_MetaFunction } from "@remix-run/node";
import Editor from "../components/Editor";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // return <div>This is the home page.</div>;
  return <Editor />;
}
