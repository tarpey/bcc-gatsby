import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "footer_logo.png" }) {
        childImageSharp {
          fixed(width: 203) {
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
    <>
      <div className="" id="feedback">
        <div className="container">
          <Link to={`/feedback?url=${location.pathname}`} className="button">
            Is there anything wrong with this page?
          </Link>
        </div>
      </div>
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
    </>
  )
}
