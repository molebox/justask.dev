/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import Navigation from "./Navigation";

const Header = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 2em;

  & > p {
    font-size: 0.8em;
  }

  // Desktop
  @media (min-width: 48em) {
    & > p {
      font-size: 1.2em;
    }
  }
`;

const AnswersHeader = ({ category }) => (
  <Header>
    <p
      sx={{
        fontFamily: "body",
        fontWeight: "bold",
        textTransform: "uppercase"
      }}
    >
      category: {category}
    </p>
    <Navigation destination="/" text="Back" />
  </Header>
);

export default AnswersHeader;
