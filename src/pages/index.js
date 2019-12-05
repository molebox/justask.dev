/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import { Layout } from "../components/Layout";
import PageLink from "../components/PageLink";
import Paragraph from "../components/Paragraph";
import SEO from "gatsby-theme-seo/src/components/seo";

const SEODescription = `
  justask.dev is a website built for frontend developers. Its aim is the storing and categorizing of
  answers to "simple" dev questions.
`;

const SEOKeywords = [
  "Web Developer",
  "Frontend Developer",
  "React",
  "Gatsby",
  "GIT",
  "JavaScript",
  "CSS",
  "HTML"
];

const Categories = styled.div`
  display: grid;
  grid-auto-rows: 100px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;
`;

const Introduction = styled.section`
  // grid-column: 1 / -1;
  margin-top: 1em;

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

export default () => {
  return (
    <Layout>
      <SEO
        title="justask.dev"
        description={SEODescription}
        keywords={SEOKeywords}
      />
      <Categories>
        <PageLink page="css-answers" title="CSS" />
        <PageLink page="html-answers" title="HTML" />
        <PageLink page="react-answers" title="React" />
        <PageLink page="gatsby-answers" title="Gatsby" />
        <PageLink page="git-answers" title="Git" />
        <PageLink page="javascript-answers" title="JavaScript" />
      </Categories>
      <Introduction>
        <Paragraph>
          The motivation behind this website is the storing and categorizing of
          answers to "simple" dev questions. When i first started programming it
          was often the simple things that i wanted to know, like how to open a
          tab from a link. Or how to flattern a nested array.
        </Paragraph>
        <Paragraph>
          This being said, the answers here dont have to be mearly for what
          might seem like simple questions. If you have been googling for an
          answer to a question and found it then please consider sharing it here
          so that others might benifit. My hope is that this will grow through
          contributions and become an easy place for devs to go to to quickly
          check how to do stuff.
        </Paragraph>
        <Paragraph>
          To submit an answer please open a PR at:
          <a
            sx={{
              color: "greyBlack",
              fontFamily: "body",
              ":hover": {
                color: "softRed"
              }
            }}
            href="https://github.com/molebox/justask.dev"
          >
            https://github.com/molebox/justask.dev
          </a>
        </Paragraph>
      </Introduction>
    </Layout>
  );
};
