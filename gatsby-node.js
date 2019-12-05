const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const answerLayoutTemplate = path.resolve(
    'src/templates/answer-layout.js'
  )

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
            category
          }
          fields {
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const answers = result.data.allMdx.nodes

    answers.forEach((answer, index) => {
      const previous =
        index === answer.length - 1 ? null : answers[index + 1]
      const next = index === 0 ? null : answers[index - 1]

      createPage({
        path: answer.fields.slug,
        component: answerLayoutTemplate,
        context: {
          slug: answer.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
