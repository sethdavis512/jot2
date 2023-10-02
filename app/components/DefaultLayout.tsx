import { type ReactNode } from "react";

import AppHeader from "./AppHeader";
// import "normalize.css/normalize.css";
import Box from "./Box";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <AppHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
