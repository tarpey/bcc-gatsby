import React from "react"

import Wrapper from "../components/Wrapper"

export default ({ location }) => (
  <Wrapper location={location}>
    <h1>Page not found</h1>
    <p>The page might have been moved or deleted.</p>
  </Wrapper>
)
