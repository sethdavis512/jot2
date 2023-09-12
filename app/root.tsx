import React, { useState } from "react";
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import DefaultLayout from "./components/DefaultLayout";
import { ThemeProvider, Global } from "@emotion/react";
import css from "@styled-system/css";
import theme, { modes } from "./utils/theme";
import globalStyles from "./utils/globalStyles";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

// export default function App() {
const App: React.FunctionComponent = () => {
  const [mode] = useState(modes.light);

  return (
    <ThemeProvider theme={{ ...theme, mode }}>
      <Global styles={css(globalStyles(mode))} />
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <Meta />
          <Links />
          {typeof document === "undefined" ? "__STYLES__" : null}
        </head>
        <body>
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ThemeProvider>
  );
};

export default App;
