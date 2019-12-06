/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const NavigationLink = styled(Link)`
  color: #202020;
  &:hover {
    color: #f46049;
  }

  & > p {
    font-size: 0.8em;
  }

  // Desktop
  @media (min-width: 48em) {
    & > p {
      font-size: 1em;
    }
  }
`;

const Navigation = ({ destination, text }) => (
  <NavigationLink
    sx={{
      fontFamily: "heading",
      fontWeight: "bold",
      textTransform: "uppercase"
    }}
    to={destination}
  >
    <p>{text}</p>
  </NavigationLink>
);

export default Navigation;
