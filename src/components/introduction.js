import React, { Fragment } from "react"
import styled from "@emotion/styled"
import MainDiv from "./Reusable/MainDiv"
import SecondDiv from "./Reusable/SecondDiv"

const TitleDiv = styled.div`
  display: flex;
  font-size: 4rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 5px 5px #1476a2;

  @media screen and (max-width: 760px) {
    font-size: 2.2em;
    text-align: center;
  }
`

const DescriptionDiv = styled.div`
  display: flex;
  max-width: 100%;
  color: #ffffff;
  margin-top: 40px;
  font-size: 1.5em;

  @media screen and (max-width: 500px) {
    margin-top: 20px;
    font-size: 1.1em;
    text-align: center;
    margin-bottom: 10px;
  }
`

const Introduction = () => {
  return (
    <Fragment>
      <section>
        <MainDiv>
          <SecondDiv>
            <TitleDiv>Modern and efficient web applications</TitleDiv>
            <DescriptionDiv>
              We are TypeTech, a group of devs dedicated to Open Sourcing and
              freelancing software with cutting edge technologies
            </DescriptionDiv>
          </SecondDiv>
        </MainDiv>
      </section>
    </Fragment>
  )
}

export default Introduction
