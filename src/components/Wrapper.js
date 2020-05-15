import React from "react"
import Header from "./Header"
import Breadcrumbs from "./Breadcrumbs"
import Hero from "./Hero"
import Main from "./Main"
import Footer from "./Footer"
import "../styles/bcc.scss"

export default ({
  location,
  children,
  crumbParent,
  crumbParentPath,
  crumbTitle,
}) => {
  return (
    <>
      <Header />
      {location.pathname !== "/" &&
        location.pathname !== "/business" &&
        location.pathname !== "/council-and-mayor" && (
          <Breadcrumbs
            crumbParent={crumbParent}
            crumbParentPath={crumbParentPath}
            crumbTitle={crumbTitle}
          />
        )}
      {location.pathname === "/" && <Hero audience="residents" />}
      {location.pathname === "/business" && <Hero audience="business" />}
      {location.pathname === "/council-and-mayor" && (
        <Hero audience="council-and-mayor" />
      )}
      <Main>{children}</Main>
      <Footer location={location} />
    </>
  )
}
