/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const categoryTemplate = require.resolve(`./src/templates/category.js`)
  const articleTemplate = require.resolve(`./src/templates/article.js`)
  const content = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
              type
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (content.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  content.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.type === "category") {
      createPage({
        path: node.frontmatter.slug,
        component: categoryTemplate,
        context: {
          id: node.id,
          slug: node.frontmatter.slug,
        },
      })
    } else {
      createPage({
        path: node.frontmatter.slug,
        component: articleTemplate,
        context: {
          id: node.id,
          slug: node.frontmatter.slug,
        },
      })
    }
  })
}
