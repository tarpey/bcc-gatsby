import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "footer_logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      links: site {
        siteMetadata {
          footerLinks {
            name
            link
          }
        }
      }
    }
  `)
  return (
    <footer>
      <div className="container">
        <div>
          <Img fixed={data.logo.childImageSharp.fixed} />
        </div>
        <div>
          <ul>
            {data.links.siteMetadata.footerLinks.map(
              ({ name, link }, index) => (
                <li key={index}>
                  <Link to={link}>{name}</Link>
                </li>
              )
            )}
          </ul>
        </div>
        Copyright &copy; {new Date().getFullYear()} Bristol City Council
      </div>
    </footer>
  )
}
