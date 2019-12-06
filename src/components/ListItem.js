/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Container = styled.div`
  overflow-wrap: break-word;
`;

const ParagraphText = styled.p`
  font-size: 1.1em;

  // Desktop
  @media (min-width: 48em) {
    font-size: 1.5em;
  }
`;

const ListItem = ({ children }) => (
  <Container>
    <ParagraphText
      sx={{
        fontFamily: "body"
      }}
    >
      {children}
    </ParagraphText>
  </Container>
);

export default ListItem;
