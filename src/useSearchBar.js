import React from "react";

export const useSearchBar = data => {
  const allAnswers = data.allMdx.nodes;
  const emptyQuery = "";
  const [searchQuery, setSearchQuery] = React.useState({
    filteredData: [],
    query: emptyQuery
  });

  const handleSearchQuery = e => {
    const query = e.target.value;

    const answers = data.allMdx.nodes || [];

    const filteredData = answers.filter(answer => {
      const { title } = answer.frontmatter;
      return title.toLowerCase().includes(query.toLowerCase());
    });

    setSearchQuery({ filteredData, query });
  };

  const { filteredData, query } = searchQuery;
  const hasSearchResult = filteredData && query !== emptyQuery;
  const answers = hasSearchResult ? filteredData : allAnswers;

  return { answers, handleSearchQuery };
};
