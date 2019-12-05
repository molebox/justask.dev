/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Text = styled.p`
  font-size: 1.2em;
  padding: 2em 0;

  // Desktop
  @media (min-width: 48em) {
    & {
      font-size: 1.5em;
    }
  }
`;

const Blurb = ({ children }) => (
  <Text
    sx={{
      fontFamily: "body",
      fontWeight: "bold"
    }}
  >
    {children}
  </Text>
);

export default Blurb;
