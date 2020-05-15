import React from "react"
import { Link, graphql } from "gatsby"

import Wrapper from "../components/Wrapper"

export default ({ location, data }) => {
  return (
    <Wrapper location={location}>
      <div className="top-links">
        <ul>
          <li>
            <Link to="/">Link</Link>
          </li>
          <li>
            <Link to="/">Link</Link>
          </li>
          <li>
            <Link to="/">Link</Link>
          </li>
          <li>
            <Link to="/">Link</Link>
          </li>
          <li>
            <Link to="/">Link</Link>
          </li>
          <li>
            <Link to="/">Link</Link>
          </li>
        </ul>
      </div>

      <div className="grid">
        {data.children.edges.map(({ node }, index) => (
          <div key={node.id} className="grid-item">
            <h2>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </h2>
          </div>
        ))}
      </div>
      <div id="newsroom">
        <h2>
          <a href="https://news.bristol.gov.uk">Latest news</a>
        </h2>
        <p>Latest news and press releases on the Newsroom</p>
      </div>
    </Wrapper>
  )
}

export const query = graphql`
  query {
    children: allMarkdownRemark(
      filter: {
        frontmatter: { audience: { eq: "residents" }, parent: { eq: null } }
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
