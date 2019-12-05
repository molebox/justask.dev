/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 3em;
  width: 100%;
  height: 100%;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > a > h1 {
    font-size: 1.4em;
  }

  // Desktop
  @media (min-width: 48em) {
    & > a > h1 {
      font-size: 1.7em;
    }
  }
`;

const PostWrapper = ({ children }) => (
  <Wrapper sx={{ backgroundColor: "softRed" }}>{children}</Wrapper>
);

export default PostWrapper;
