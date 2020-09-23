import React, { useContext } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "../../styles/layout.css"
import Footer from "./footer"
import { ModeContext } from "../../context/ModeContext"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          location
        }
      }
    }
  `)

  const { mode } = useContext(ModeContext)
  if (typeof document !== "undefined") {
    if (mode) {
      document.querySelector("body").style.backgroundColor = "#111"
      document.querySelector("body").style.color = "#fff"
    } else {
      document.querySelector("body").style.backgroundColor = "#fff"
      document.querySelector("body").style.color = "#000"
    }
  }
  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        location={data.site.siteMetadata.location}
      />
      <div
        style={{
          margin: `0`,
          maxWidth: 8000,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
