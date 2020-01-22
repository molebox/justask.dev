/** @jsx jsx */
import { jsx } from "../context";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import AnswersIndexWrapper from "../components/AnswersIndexWrapper";
import SEO from "gatsby-theme-seo/src/components/seo";
import SearchBar from "../components/SearchBar";
import { useSearchBar } from "../useSearchBar";
import PageTransition from "gatsby-plugin-page-transitions";

const SEODescription = `
  justask.dev is a website built for frontend developers. Its aim is the storing and categorizing of
  answers to "simple" dev questions. This is the CSS-in-JS section.
`;

const SEOKeywords = [
  "Web Developer",
  "Frontend Developer",
  "React",
  "Gatsby",
  "GIT",
  "JavaScript",
  "CSS",
  "HTML",
  "CSS-in-JS"
];

export default ({ data }) => {
  const { answers, handleSearchQuery } = useSearchBar(data);

  return (
    <Layout>
      <SEO
        title="CSS-in-JS Answers"
        description={SEODescription}
        keywords={SEOKeywords}
      />
      <PageTransition>
        <SearchBar category="css-in-js" handleSearchQuery={handleSearchQuery} />
        {/* <AnswersHeader category="css" /> */}
        <AnswersIndexWrapper answers={answers} />
      </PageTransition>
    </Layout>
  );
};

export const query = graphql`
  query CSSINJS_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, category: { eq: "css-in-js" } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          category
          author
        }
        fields {
          slug
        }
      }
    }
  }
`;
