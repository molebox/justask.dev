/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { useSiteMetadata } from "../useSiteMetadata";
import { Header } from "./Header";
import DefaultLayout from "./DefautLayout";

const Container = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr minmax(min-content, 1400px) 1fr;
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

const Introduction = styled.section`
  grid-column: 1 / -1;

  & > p {
    overflow-wrap: break-word;
    font-size: 2em;
  }

`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <DefaultLayout>
      <Container>
        <Main>
          <Header siteTitle={title} siteDescription={description} />
          {children}
        </Main>
        <Introduction>
          <p sx={{
              color: "greyBlack",
              fontFamily: "body"
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Introduction>
      </Container>
    </DefaultLayout>
  );
};
