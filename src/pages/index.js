import React, { useEffect } from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Introduction from "../components/introduction"
import Principles from "../components/principles"
import Services from "../components/services"
import About from "../components/about"
import ContactUs from "../components/contactus"
import TechStack from "../components/techstack"
import LazyLoad from "react-lazyload"
import ModeProvider from "../context/ModeContext"

const IndexPage = () => {
  useEffect(() => {
    console.log("Thank you for visiting TypeTech's 🧐👋")
  }, [])
  return (
    <ModeProvider>
      <SEO title="Home" />
      <LazyLoad>
        <Layout>
          <Introduction />
          <LazyLoad>
            <Principles />
          </LazyLoad>
          <Services />
          <LazyLoad
            placeholder={
              <section
                style={{
                  paddingBottom: 100,
                }}
              ></section>
            }
          >
            <TechStack />
          </LazyLoad>
          <About />
          <ContactUs />
        </Layout>
      </LazyLoad>
    </ModeProvider>
  )
}

export default IndexPage
