/** @jsx jsx */
import { jsx } from "../context";
import React from "react";
import styled from "@emotion/styled";
import { useSiteMetadata } from "../useSiteMetadata";
import { Header } from "./Header";
import DefaultLayout from "./DefautLayout";

const LayoutContainer = styled.div`
  margin: 1em 1em;
  height: 100%;

  // Desktop
  @media (min-width: 48em) {
    max-width: 1200px;
    display: grid;
    grid-auto-rows: min-content;
    grid-template-columns: minmax(min-content, 1200px);
    grid-gap: 1em;

    margin: 3em auto;
    padding: 0 2em;
    width: 100%;
    height: 100vh;
  }
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <DefaultLayout>
      <LayoutContainer>
        <>
          <Header siteTitle={title} siteDescription={description} />
          {children}
        </>
      </LayoutContainer>
    </DefaultLayout>
  );
};
