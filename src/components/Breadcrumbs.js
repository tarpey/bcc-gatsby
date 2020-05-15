import React from "react"
import { Link } from "gatsby"

export default ({ crumbParent, crumbParentPath, crumbTitle }) => {
  return (
    <nav id="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          {crumbParent && crumbParentPath && (
            <li>
              <Link to={crumbParentPath}>{crumbParent}</Link>
            </li>
          )}
          {crumbTitle && <li>{crumbTitle}</li>}
        </ol>
      </div>
    </nav>
  )
}
