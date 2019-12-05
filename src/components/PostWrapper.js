/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const PostWrapper = ({ children }) => (
  <Wrapper sx={{ backgroundColor: "softRed" }}>{children}</Wrapper>
);

export default PostWrapper;
