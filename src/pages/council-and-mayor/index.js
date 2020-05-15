import React from "react"
import { Link, graphql } from "gatsby"

import Wrapper from "../../components/Wrapper"

export default ({ location, data }) => {
  return (
    <Wrapper location={location}>
      <div className="grid">
        {data.children.edges.map(({ node }, index) => (
          <div key={node.id} className="grid-item">
            <h2>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </h2>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export const query = graphql`
  query {
    children: allMarkdownRemark(
      filter: {
        frontmatter: {
          audience: { eq: "council-and-mayor" }
          parent: { eq: null }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
