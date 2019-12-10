/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: solid 2px #c84f3c;
    margin 2em 1em;
    flex-shrink: 0;

    & > p {
        font-size: 0.7em;
    }

    // Desktop
    @media (min-width: 48em) {
        width: 100%;
        & > p {
          font-size: 1em;
      }
    }
`;

const Footer = () => (
  <FooterContainer>
    <p
      sx={{
        fontFamily: "heading",
        color: "greyBlack",
        fontWeight: "bold"
      }}
    >
      Created with{" "}
      <span role="img" aria-label="heart-emoji">
        {" "}
        💖
      </span>{" "}
      by{" "}
      <a
        sx={{
          fontFamily: "heading",
          color: "greyBlack",
          fontWeight: "bold",
          textDecoration: "none",
          ":hover": {
            color: "softRed"
          }
        }}
        href="https://twitter.com/studio_hungry"
      >
        @studio_hungry
      </a>
    </p>
    <p
      sx={{
        fontFamily: "heading",
        color: "greyBlack",
        fontWeight: "bold"
      }}
    >
      Powered by{" "}
      <a
        sx={{
          fontFamily: "heading",
          color: "greyBlack",
          fontWeight: "bold",
          textDecoration: "none",
          ":hover": {
            color: "softRed"
          }
        }}
        href="https://www.gatsbyjs.org/"
      >
        Gatsby
      </a>{" "}
      &{" "}
      <a
        sx={{
          fontFamily: "heading",
          color: "greyBlack",
          fontWeight: "bold",
          textDecoration: "none",
          ":hover": {
            color: "softRed"
          }
        }}
        href="https://mdxjs.com/"
      >
        MDX
      </a>
    </p>
  </FooterContainer>
);

export default Footer;
