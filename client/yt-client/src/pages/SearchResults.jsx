// @ts-nocheck
import React from "react";
import styled from "styled-components";
import NoResults from "../components/layout/NoResults";
import Wrapper from "../styles/trending/Trending";

const StyledChannels = styled.div`
  margin-top: 1rem;
`;

function SearchResults() {
  const hasNoResults = true;

  if (hasNoResults) {
    return (
      <NoResults
        title="No results found"
        text="Try different keywords or remove search filters"
      />
    );
  }

  return (
    <Wrapper>
      <h2>Search Results</h2>
      <StyledChannels>Channel Results</StyledChannels>
      Video Results
    </Wrapper>
  );
}

export default SearchResults;
