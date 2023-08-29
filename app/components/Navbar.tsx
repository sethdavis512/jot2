import { Link } from "@remix-run/react";
import { styled } from "styled-components";

const NavList = styled("ul")`
  display: flex;
  gap: 2rem;
`;

const NavItem = styled("li")`
  display: block;
`;

export default function Navbar() {
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
      </NavList>
    </nav>
  );
}
