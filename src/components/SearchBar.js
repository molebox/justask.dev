/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
`;

const Input = styled.input`
  padding: 0.4em;
`;

const SearchBar = ({ category, handleSearchQuery }) => {
  return (
    <SearchBarContainer>
      <Input
        sx={{
          color: "greyBlack",
          fontFamily: "body"
        }}
        type="text"
        id={`${category}-answers`}
        placeholder="Filter answers.."
        onChange={handleSearchQuery}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
