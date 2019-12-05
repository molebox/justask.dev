/** @jsx jsx */
import { jsx } from "../context";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2em;

  height: 5em;

  & a > h1 {
    font-size: 1.5em;
  }

  & > h2 {
    font-size: 1.3em;
  }

  // Desktop
  @media (min-width: 48em) {
    & a > h1 {
      font-size: 2em;
    }
    & > h2 {
      font-size: 1.6em;
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
        fontFamily: "body",
        color: "greyBlack"
      }}
    >
      {siteDescription}
    </h2>
  </Container>
);
