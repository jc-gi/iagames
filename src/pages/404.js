import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import ModeProvider from "../context/ModeContext"

const MainDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: #333333;
  justify-content: center;
  color: gray;
  position: fixed;
`

const NotFoundPage = () => {
  return (
    <ModeProvider>
      <Layout>
        <SEO title="404: Not found" />
        <MainDiv>
          <h1>404 | Not found </h1>
        </MainDiv>
      </Layout>
    </ModeProvider>
  )
}

export default NotFoundPage
