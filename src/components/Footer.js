/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
    height: 4em;
    padding: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: solid 2px #c84f3c;
    position: absolute;
    bottom: 0;
    margin 0 1em;

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
      Created with 💖 by{" "}
      <a
        sx={{
          fontFamily: "heading",
          color: "greyBlack",
          fontWeight: "bold",
          ":hover": {
            color: "softRed"
          }
        }}
        href="https://twitter.com/studio_hungry"
      >
        @studio_hungry
      </a>
    </p>
  </FooterContainer>
);

export default Footer;
