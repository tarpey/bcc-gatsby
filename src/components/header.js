import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      links: site {
        siteMetadata {
          navLinks {
            name
            link
          }
        }
      }
    }
  `)
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <Img fixed={data.logo.childImageSharp.fixed} />
          </Link>
        </div>
        <div className="text">
          <Link to="/">bristol.gov.uk</Link>
        </div>
        <div className="nav">
          <ul>
            {data.links.siteMetadata.navLinks.map(({ name, link }, index) => (
              <li key={index}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
