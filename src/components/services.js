import React from "react"
import SpanP from "./Reusable/SpanP"
import styled from "@emotion/styled"
import GridDiv from "./Reusable/GridDiv"
import CardContainer from "./Reusable/CardContainer"
import CardLogo from "./Reusable/CardLogo"
import SectionDesc from "./Reusable/SectionDesc"
import "../styles/main.css"
import { SERVICES } from "../data/services"

const Spanx = styled.span`
  color: #ffffff;
`
const Container = styled.div`
  width: 100%;
  padding-top: 5em;
  padding-bottom: 3em;
  background: #1c1f24;
  display: flex;
  justify-content: center;
`
const SectionParagraph = styled.h3`
  font-size: 20px;
  color: #ffffff;
  margin: 24px 0px;
  text-align: center;
`

const Section = styled.section`
  background-color: #1c1f24;
  color: #ffffff;
  padding-bottom: 100px;
`


const Services = () => {
  return (
    <Section>
      <Container>
        <h2>
          <Spanx>Our</Spanx> <SpanP>services</SpanP>
        </h2>
      </Container>
      <SectionDesc>
        <SectionParagraph>
          Some of the services that we provide
          <br />
        </SectionParagraph>
      </SectionDesc>
      <GridDiv>
        {SERVICES.map(item => (
          <CardContainer key={item.title}>
            <div className="Second-Card-Content-Dark">
              <CardLogo>
                <img src={item.icon} alt={item.title} />
              </CardLogo>
              <h1>
                <SpanP>{item.title}</SpanP> {item.main}
              </h1>
              <p>{item.description}</p>
            </div>
          </CardContainer>
        ))}
      </GridDiv>
    </Section>
  )
}

export default Services
