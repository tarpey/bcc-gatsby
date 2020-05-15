import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ filename }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.allImageSharp.edges.find(
          edge => edge.node.fluid.originalName === filename
        )
        if (!image) {
          return null
        }
        return <Img fluid={image.node.fluid} />
      }}
    />
  )
}
