/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const pageTemplate = require.resolve(`./src/templates/page.js`)
  const content = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              parent
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
    if (node.frontmatter.path) {
      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {
          pageParent: node.frontmatter.parent ? node.frontmatter.parent : "",
        },
      })
    }
  })
}
