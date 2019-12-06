/** @jsx jsx */
import { jsx } from "../context";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 2em;

  border-bottom: solid 2px #c84f3c;
  padding: 1em;

  height: 7em;

  & a > h1 {
    font-size: 1.5em;
  }

  & > h2 {
    font-size: 0.7em;
    text-align: center;
  }

  // Desktop
  @media (min-width: 48em) {
    & a > h1 {
      font-size: 2em;
    }
    & > h2 {
      font-size: 1.1em;
    }
  }
`;

export const Header = ({ siteTitle, siteDescription }) => (
  <Container>
    <Link
      sx={{
        textDecoration: "none"
      }}
      to="/"
    >
      <h1
        sx={{
          fontFamily: "heading",
          color: "greyBlack"
        }}
      >
        {siteTitle}
      </h1>
    </Link>
    <h2
      sx={{
        fontFamily: "heading",
        color: "greyBlack"
      }}
    >
      {siteDescription}
    </h2>
  </Container>
);
