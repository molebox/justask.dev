/** @jsx jsx */
import styled from "@emotion/styled";

export const AnswersIndexWrapper = styled.main`
  display: grid;
  grid-auto-rows: 150px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
`;
