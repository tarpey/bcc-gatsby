import React from "react"
import { graphql, Link } from "gatsby"
import Wrapper from "../components/Wrapper"

export default ({ location, data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Wrapper
      location={location}
      crumbParent={data.parent ? data.parent.frontmatter.title : false}
      crumbParentPath={data.parent ? data.parent.frontmatter.path : false}
      crumbTitle={frontmatter.title}
    >
      <h1>{frontmatter.title}</h1>

      {data.children.edges.length ? (
        <div className="grid">
          {data.children.edges.map(({ node }, index) => (
            <div key={node.id} className="grid-item">
              <h2>
                <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
              </h2>
              <p>{node.frontmatter.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div id="content">
          <div className="div">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <div id="sidebar" className="div">
            <h2>Related content</h2>
            {data.siblings && (
              <ul>
                {data.siblings.edges.map(({ node }, index) => (
                  <li key={node.id}>
                    <Link to={node.frontmatter.path}>
                      {node.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </Wrapper>
  )
}

export const query = graphql`
  query($path: String!, $pageParent: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        description
      }
    }
    parent: markdownRemark(frontmatter: { path: { eq: $pageParent } }) {
      id
      frontmatter {
        title
        path
      }
    }
    siblings: allMarkdownRemark(
      filter: { frontmatter: { parent: { eq: $pageParent } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            path
          }
        }
      }
    }
    children: allMarkdownRemark(
      filter: { frontmatter: { parent: { eq: $path } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            path
          }
        }
      }
    }
  }
`
