import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Layout } from '../components/Layout'

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const { title, date, category } = frontmatter
  const { previous, next } = pageContext
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{category}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>{previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>{next.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
    </Layout>
  )
}

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
      }
    }
  }
`