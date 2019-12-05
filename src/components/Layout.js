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
    font-size: 1.5em;
    padding: 1em;
  }

  & > a {
    overflow-wrap: break-word;
    font-size: 1.5em;
    padding: 1em;
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
          <p
            sx={{
              color: "greyBlack",
              fontFamily: "body"
            }}
          >
            The motivation behind this website is the storing and categorizing
            of answers to "simple" dev questions. When i first started
            programming it was often the simple things that i wanted to know,
            like how to open a tab from a link. Or how to flattern a nested
            array.
          </p>
          <p
            sx={{
              color: "greyBlack",
              fontFamily: "body"
            }}
          >
            This being said, the answers here dont have to be mearly for what
            might seem like simple questions. If you have been googling for an
            answer to a question and found it then please consider sharing it
            here so that others might benifit. My hope is that this will grow
            through contributions and become an easy place for devs to go to to
            quickly check how to do stuff.
          </p>
          <p
            sx={{
              color: "greyBlack",
              fontFamily: "body"
            }}
          >
            To submit an answer please open a PR at:{" "}
            <a
              sx={{
                color: "greyBlack",
                fontFamily: "body",
                color: "softBlue"
              }}
              href="https://github.com/molebox/justask.dev"
            >
              https://github.com/molebox/justask.dev
            </a>
          </p>
        </Introduction>
      </Container>
    </DefaultLayout>
  );
};
