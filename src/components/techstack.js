import React, { useContext } from "react"
import SpanP from "./Reusable/SpanP"
import StackContainer from "./Reusable/StackContainer"
import StackBrandsContainer from "./Reusable/StackBrandsContainer"
import StackBrandsContent from "./Reusable/StackBrandsContent"
import styled from "@emotion/styled"
import TopMovement from "./Stack/TopMovement"
import BottomMovement from "./Stack/BottomMovement"
import FirstRow from "./Stack/FirstRow"
import SecondRow from "./Stack/SecondRow"
import ThirdRow from "./Stack/ThirdRow"
import FourthRow from "./Stack/FourthRow"
import SectionDesc from "../components/Reusable/SectionDesc"
import "../styles/main.css"
import { ModeContext } from "../context/ModeContext"

const CardDiv = styled.div`
  display: flex;
`

const TechStack = () => {
  const { mode } = useContext(ModeContext)
  return (
    <section className={mode ? "Section-Dark" : "Section"}>
      <div className={mode ? "Container-Div-Dark" : "Container-Div"}>
        <h2>
          Our <SpanP>Tech</SpanP> Stack
        </h2>
      </div>
      <SectionDesc>
        <h3 className={mode ? "Paragraph-Dark" : "Paragraph"}>
          Technologies we are proficient with, the use for each project might
          vary upon the clients requirements.
          <br />
        </h3>
      </SectionDesc>
      <StackContainer>
        <StackBrandsContainer>
          <StackBrandsContent>
            <TopMovement>
              <CardDiv>
                <FirstRow />
              </CardDiv>
            </TopMovement>
            <BottomMovement>
              <CardDiv>
                <SecondRow />
              </CardDiv>
            </BottomMovement>
            <TopMovement>
              <CardDiv>
                <ThirdRow />
              </CardDiv>
            </TopMovement>
            <BottomMovement>
              <CardDiv>
                <FourthRow />
              </CardDiv>
            </BottomMovement>
          </StackBrandsContent>
        </StackBrandsContainer>
      </StackContainer>
      <SectionDesc>
        <h3 className={mode ? "Paragraph-Dark" : "Paragraph"}>
          Other technologies such as cloud providers and server deployment
          services can be analyzed depending on the use of the application being
          built.
        </h3>
      </SectionDesc>
    </section>
  )
}

export default TechStack
