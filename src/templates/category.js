import React from "react"
import { graphql } from "gatsby"
import Wrapper from "../components/Wrapper"
import SEO from "../components/SEO"
import { Link } from "gatsby"

export default ({ location, data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Wrapper>
      <SEO title="Home" />
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <div className="grid">
        {data.children.edges.map(({ node }, index) => (
          <div key={node.id} className="grid-item">
            <h2>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </h2>
            <p>{node.frontmatter.description}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
    children: allMarkdownRemark(
      filter: {
        frontmatter: { parent: { eq: "6b0fb90d-75cf-5bf9-8e98-995a7ce58958" } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            slug
          }
        }
      }
    }
  }
`
