/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Container = styled.div`
  & > p {
    font-size: 1.1em;
    padding: 1em;
  }
  // Desktop
  @media (min-width: 48em) {
    & > p {
      font-size: 1.5em;
    }
  }
`;

const Paragraph = ({ children }) => (
  <Container>
    <p
      sx={{
        color: "greyBlack",
        fontFamily: "body"
      }}
    >
      {children}
    </p>
  </Container>
);

export default Paragraph;
