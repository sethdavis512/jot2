import React from "react";
import Box from "../Box";
import Heading from "../Heading";
import Button from "../Button";
import Hamburger from "../icons/Hamburger";
// import Avatar from "../Avatar";
// import { useUserContext } from '../../utils/userContext';
import { modes } from "../../utils/theme";
import { Link } from "@remix-run/react";
import { styled } from "styled-components";

const NavList = styled("ul")`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled("li")`
  display: block;
`;

export function Navbar() {
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="calendar">Calendar</Link>
        </NavItem>
        <NavItem>
          <Link to="event/new">New event</Link>
        </NavItem>
        <NavItem>
          <Link to="documents">Documents</Link>
        </NavItem>
      </NavList>
    </nav>
  );
}

const AppHeader: React.FunctionComponent = () => {
  // const user = useUserContext();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1,
        backgroundColor: ({ mode }) =>
          mode === modes.dark ? "gray.80" : "gray.0",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
        <Button variant="hollow">
          <Hamburger />
        </Button>
        <Heading level={3} as="h1">
          Jot Home
        </Heading>
        <Navbar />
      </Box>
      {/* <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar srcUrl={user?.photos?.[0].value ?? ""} />
      </Box> */}
    </Box>
  );
};

export default AppHeader;
