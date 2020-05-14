import React from "react"
import { Link } from "gatsby"

import Wrapper from "../components/Wrapper"
import SEO from "../components/SEO"

export default ({ data }) => {
  return (
    <Wrapper>
      <SEO title="Home" />
      <div className="grid">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div key={node.id} className="grid-item">
            <h2>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </h2>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

// GraphQL query to only fetch categories
export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "category" } } }) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`
