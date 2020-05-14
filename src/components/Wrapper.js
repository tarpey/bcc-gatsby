import React from "react"
import Header from "./Header"
import Nav from "./Nav"
import Main from "./Main"
import Footer from "./Footer"
import "../styles/bcc.scss"

export default ({ children }) => {
  return (
    <>
      <Header />
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
