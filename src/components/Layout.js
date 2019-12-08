/** @jsx jsx */
import { jsx } from "../context";
import React from "react";
import styled from "@emotion/styled";
import { useSiteMetadata } from "../useSiteMetadata";
import { Header } from "./Header";
import DefaultLayout from "./DefautLayout";
import Footer from "./Footer";

const LayoutContainer = styled.div`
  margin: 1em 1em;

  // Desktop
  @media (min-width: 48em) {
    max-width: 1200px;
    display: grid;
    grid-auto-rows: min-content;
    grid-template-columns: minmax(min-content, 1200px);
    grid-gap: 1em;

    margin: 0 auto;
    width: 100%;
  }
`;

const MainContent = styled.div`
  height: 100%;
  flex: 1 0 auto;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <DefaultLayout>
      <LayoutContainer>
        <React.Fragment>
          <MainContent>
            <Header siteTitle={title} siteDescription={description} />
            {children}
          </MainContent>
          <Footer />
        </React.Fragment>
      </LayoutContainer>
    </DefaultLayout>
  );
};
