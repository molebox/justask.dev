/** @jsx jsx */
import { jsx } from "../context";
import React from "react";
import styled from "@emotion/styled";

const SearchInput = styled.input``;

const SearchBar = ({ searchItems }) => {
  const [searchTerms, setSearchTerms] = React.useState([]);

  React.useEffect(() => {
    setSearchTerms([...searchItems]);
  }, []);

  React.useEffect(() => {
    setSearchTerms([...searchItems]);
  }, [searchItems]);

  const handleSearchInput = e => {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = searchItems;

      newList = currentList.filter(item => {
        const lower = item.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lower.includes(filter);
      });
    } else {
      newList = searchItems;
    }

    setSearchTerms(newList);
  };

  return (
    <SearchInput
      type="text"
      placeholder="Search.."
      onChange={handleSearchInput}
    />
  );
};
