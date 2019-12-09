/** @jsx jsx */
import { jsx } from "../context";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import PostWrapper from "../components/PostWrapper";
import { AnswersIndexWrapper } from "../components/AnswersIndexWrapper";
import SEO from "gatsby-theme-seo/src/components/seo";
import { useSearchBar } from "../useSearchBar";
import SearchBar from "../components/SearchBar";

const SEODescription = `
  justask.dev is a website built for frontend developers. Its aim is the storing and categorizing of
  answers to "simple" dev questions. This is the HTML section.
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

export default ({ data }) => {
  const { answers, handleSearchQuery } = useSearchBar(data);

  return (
    <Layout>
      <SEO
        title="HTML Answers"
        description={SEODescription}
        keywords={SEOKeywords}
      />
      <SearchBar category="css" handleSearchQuery={handleSearchQuery} />
      {/* <AnswersHeader category="html" /> */}
      <AnswersIndexWrapper>
        {answers.map(({ id, frontmatter, fields }) => (
          <Link
            sx={{
              textDecoration: "none"
            }}
            key={id}
            to={fields.slug}
          >
            <PostWrapper>
              <h1
                sx={{
                  color: "greyBlack",
                  fontFamily: "body"
                }}
              >
                {frontmatter.title}
              </h1>
              <p
                sx={{
                  color: "greyBlack",
                  fontFamily: "body"
                }}
              >
                {frontmatter.date}
              </p>
              <p
                sx={{
                  color: "greyBlack",
                  fontFamily: "body"
                }}
              >
                {frontmatter.category}
              </p>
            </PostWrapper>
          </Link>
        ))}
      </AnswersIndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query HTML_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, category: { eq: "html" } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          category
        }
        fields {
          slug
        }
      }
    }
  }
`;
