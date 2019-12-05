/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Container = styled.div`
  overflow-wrap: break-word;
  width: 100%;
`;

const ParagraphText = styled.p`
  font-size: 1.2em;
  padding: 2em 0;

  // Desktop
  @media (min-width: 48em) {
    font-size: 1.5em;
  }
`;

const Text = ({ children }) => (
  <Container>
    <ParagraphText
      sx={{
        fontFamily: "body",
        fontWeight: "bold"
      }}
    >
      {children}
    </ParagraphText>
  </Container>
);

export default Text;
