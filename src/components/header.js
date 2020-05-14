import { Link } from "gatsby"
import React from "react"
import Logo from "./Logo"

export default () => (
  <header>
    <div className="container">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="text">
        <Link to="/">bristol.gov.uk</Link>
      </div>
    </div>
  </header>
)
