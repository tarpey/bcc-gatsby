import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"

export default () => {
  const data = useStaticQuery(graphql`
    query {
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
    <nav>
      <div className="container">
        <ul>
          {data.links.siteMetadata.navLinks.map(({ name, link }, index) => (
            <li key={index}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
