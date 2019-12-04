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


// const { createFilePath } = require("gatsby-source-filesystem");
 
//  // Here we're adding extra stuff to the "node" (like the slug)
//  // so we can query later for all blogs and get their slug
//  exports.onCreateNode = ({ node, actions, getNode }) => {
//    const { createNodeField } = actions
//    if (node.internal.type === 'Mdx') {
//      const value = createFilePath({ node, getNode })
//      createNodeField({
//        // Individual MDX node
//        node,
//        // Name of the field you are adding
//        name: 'slug',
//        // Generated value based on filepath with "blog" prefix
//        value: `/answer${value}`
//      })
//    }
//  }
 
//  exports.createPages = ({ graphql, actions }) => {
//    // Destructure the createPage function from the actions object
//    const { createPage } = actions;
//    return new Promise((resolve, reject) => {
//      resolve(
//        graphql(
//          `
//            {
//              allMdx {
//                edges {
//                  node {
//                    id
//                    fields {
//                      slug
//                    }
//                  }
//                }
//              }
//            }
//          `
//        ).then(result => {
//          // this is some boilerlate to handle errors
//          if (result.errors) {
//            console.error(result.errors);
//            reject(result.errors);
//          }
//          // We'll call `createPage` for each result
//          result.data.allMdx.edges.forEach(({ node }) => {
//            createPage({
//              // This is the slug we created before
//              // (or `node.frontmatter.slug`)
//              path: node.fields.slug,
//              // This component will wrap our MDX content
//              component: require.resolve(`./src/templates/answer-layout.js`),
//              // We can use the values in this context in
//              // our page layout component
//              context: { id: node.id }
//            });
//          });
//        })
//      );
//    });
//  };