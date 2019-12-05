/** @jsx jsx */
import { jsx } from "../context";
import { Link } from "gatsby";
import styled from "@emotion/styled";

const LinkBox = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  & > h3 {
    font-size: 1.2em;
  }

  // Desktop
  @media (min-width: 48em) {
    & > h3 {
      font-size: 1.7em;
    }
  }
`;

const PageLink = ({ page, title }) => (
  <Link
    sx={{
      textDecoration: "none"
    }}
    to={`/${page}`}
  >
    <LinkBox
      sx={{
        backgroundColor: "softRed",
        ":hover": {
          backgroundColor: "softRedDark"
        }
      }}
    >
      <h3
        sx={{
          color: "greyBlack",
          fontFamily: "body"
        }}
      >
        {title}
      </h3>
    </LinkBox>
  </Link>
);

export default PageLink;
