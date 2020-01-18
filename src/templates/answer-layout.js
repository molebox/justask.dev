/** @jsx jsx */
import styled from "@emotion/styled";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PageTransition from "gatsby-plugin-page-transitions";
import React from "react";
import { Layout } from "../components/Layout";
import Navigation from "../components/Navigation";
import { jsx } from "../context";

const IntroText = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2em;
`;

const Title = styled.h1`
  grid-row: 1;
  text-align: center;
  font-size: 1.3em;

  // Desktop
  @media (min-width: 48em) {
    font-size: 1.5em;
  }
`;

const DateAndCategory = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & > p {
    font-size: 1em;
    text-transform: uppercase;
  }

  // Desktop
  @media (min-width: 48em) {
    flex-direction: row;
    & > p {
      font-size: 1.2em;
      text-transform: uppercase;
    }
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2em;
`;

export default ({ data, pageContext }) => {
  const {
    frontmatter,
    body,
    fields: { editLink }
  } = data.mdx;
  const { title, date, category } = frontmatter;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <PageTransition>
        <IntroText>
          <Title
            sx={{
              fontFamily: "heading"
            }}
          >
            {title}
          </Title>
          <DateAndCategory>
            <p
              sx={{
                fontFamily: "body",
                fontWeight: "bold"
              }}
            >
              posted: {date}
            </p>
            <p
              sx={{
                fontFamily: "body",
                fontWeight: "bold"
              }}
            >
              category: {category}
            </p>
            <Navigation destination={`${category}-answers`} text="Back" />
          </DateAndCategory>
        </IntroText>
        <a
          sx={{
            fontFamily: "body",
            color: "greyBlack",
            ":hover": {
              backgroundColor: "softRedDark"
            }
          }}
          target="_blank"
          rel="noopener noreferrer"
          href={editLink}
        >
          Edit this post on GitHub.
        </a>
        <MDXRenderer sx={{ height: "100vh" }}>{body}</MDXRenderer>
        <Links>
          {previous === false ? null : (
            <React.Fragment>
              {previous && (
                <Navigation
                  destination={previous.fields.slug}
                  text={previous.frontmatter.title}
                />
              )}
            </React.Fragment>
          )}
          {next === false ? null : (
            <React.Fragment>
              {next && (
                <Navigation
                  destination={next.fields.slug}
                  text={next.frontmatter.title}
                />
              )}
            </React.Fragment>
          )}
        </Links>
      </PageTransition>
    </Layout>
  );
};

export const query = graphql`
  query AnswerBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
        category
      }
      body
      excerpt
      fields {
        slug
        editLink
      }
    }
  }
`;
