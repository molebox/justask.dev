/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { useSiteMetadata } from "../useSiteMetadata";
import { Header } from "./Header";
import DefaultLayout from "./DefautLayout";

const Container = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr auto 1fr;
  grid-gap: 1em;

  max-width: 1400px;
  margin: 3em auto;
  padding: 0 2em;
  width: 100%;
  height: 100vh;
`;

const Main = styled.main`
  grid-column: 2;
  // max-width: 540px;
  // margin: 0 auto;
`;

export const Layout = ({ children, data }) => {
  const { title, description } = useSiteMetadata();
  return (
    <DefaultLayout>
      <Container>
        <Main>
          <Header siteTitle={title} siteDescription={description} />
          {children}
        </Main>
      </Container>
    </DefaultLayout>
  );
};
