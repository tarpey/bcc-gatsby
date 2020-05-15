import React from "react"
import { graphql } from "gatsby"

import Wrapper from "../../components/Wrapper"

export default ({ location, data }) => {
  return (
    <Wrapper location={location}>
      <h1>Feedback</h1>
      <form>
        <div className="field">
          <label htmlFor="path">Page</label>
          <input
            id="path"
            type="text"
            value={location.search.replace("?url=", "")}
          />
        </div>
        <div className="field">
          <label htmlFor="what-went-wrong">What went wrong?</label>
          <textarea id="what-went-wrong" rows={5} />
        </div>
        <div className="field">
          <label htmlFor="email-address">Your email address</label>
          <input id="email-address" type="text" />
        </div>
        <button className="button">Submit</button>
      </form>
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
