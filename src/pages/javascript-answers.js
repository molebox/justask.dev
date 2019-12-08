/** @jsx jsx */
import { jsx } from "../context";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import PostWrapper from "../components/PostWrapper";
import { AnswersIndexWrapper } from "../components/AnswersIndexWrapper";
import SEO from "gatsby-theme-seo/src/components/seo";
import AnswersHeader from "../components/AnswersHeader";

const SEODescription = `
  justask.dev is a website built for frontend developers. Its aim is the storing and categorizing of
  answers to "simple" dev questions. This is the JavaScript section.
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
  return (
    <Layout>
      <SEO
        title="JavaScript Answers"
        description={SEODescription}
        keywords={SEOKeywords}
      />
      <AnswersHeader category="javascript" />
      <AnswersIndexWrapper>
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
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
  query JAVASCRIPT_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { published: { eq: true }, category: { eq: "javascript" } }
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
