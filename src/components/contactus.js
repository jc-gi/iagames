import React, { Fragment, useContext } from "react"
import SpanP from "./Reusable/SpanP"
import styled from "@emotion/styled"
import ContactForm from "./contactform"
import GridDiv from "./Reusable/GridDiv"
import "../styles/contact.css"
import { ModeContext } from "../context/ModeContext"

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const FormContent = styled.div`
  padding: 30px;
`

const ContactUs = () => {
  const { mode } = useContext(ModeContext)
  return (
    <Fragment>
      <section
        id="contact_section"
        className={mode ? "Card-Section-Dark" : "Card-Section"}
      >
        <GridDiv>
          <div className={mode ? "Card-Container-Dark" : "Card-Container"}>
            <h2
              style={{
                paddingTop: 40,
                paddingBottom: 40,
              }}
            >
              <SpanP>Connect </SpanP>
              <span className={mode ? "Span-Dark" : "Span"}>with us</span>
            </h2>
            <h3 className={mode ? "Paragraph-Dark" : "Paragraph"}>
              Get the TypeTech app to keep up to date and to use our realtime
              chat, it's great
            </h3>
            <ButtonsContainer>
              <button className={mode ? "Button-Dark" : "Button"}>
                <svg
                  data-testid="icon-playstore"
                  viewBox="0 0 20 20"
                  height="1.5rem"
                  width="1.5rem"
                  fill="#000000"
                  style={{ cursor: "pointer", marginRight: 6 }}
                >
                  <path
                    d=" M4.942627,18.0508423l7.6660156-4.3273926l-1.6452026-1.8234253L4.942627,18.0508423z M2.1422119,2.1231079
                    C2.0543823,2.281311,2,2.4631958,2,2.664917v15.1259766c0,0.2799683,0.1046143,0.5202026,0.2631226,0.710144l7.6265259-7.7912598
                    L2.1422119,2.1231079z M17.4795532,9.4819336l-2.6724854-1.508606l-2.72229,2.7811279l1.9516602,2.1630249l3.4431152-1.9436035
                    C17.7927856,10.8155518,17.9656372,10.5287476,18,10.2279053C17.9656372,9.927063,17.7927856,9.6402588,17.4795532,9.4819336z
                    M13.3649292,7.1592407L4.1452026,1.954834l6.8656616,7.609314L13.3649292,7.1592407z"
                  ></path>
                </svg>
                <p
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Download the <SpanP>Android App</SpanP>
                </p>
              </button>
              <button className={mode ? "Button-Dark" : "Button"}>
                <svg
                  data-testid="icon-apple"
                  viewBox="0 0 20 20"
                  height="1.5rem"
                  width="1.5rem"
                  fill="#000000"
                  style={{ cursor: "pointer", marginRight: 6 }}
                >
                  <path
                    d="
                    M17.5640259,13.8623047
                    c-0.4133301,0.9155273-0.6115723,1.3251343-1.1437988,2.1346436c-0.7424927,1.1303711-1.7894897,2.5380249-3.086853,2.5500488
                    c-1.1524048,0.0109253-1.4483032-0.749939-3.0129395-0.741333c-1.5640259,0.008606-1.8909302,0.755127-3.0438843,0.7442017
                    c-1.296814-0.0120239-2.2891235-1.2833252-3.0321655-2.4136963c-2.0770874-3.1607666-2.2941895-6.8709106-1.0131836-8.8428955
                    c0.9106445-1.4013062,2.3466187-2.2217407,3.6970215-2.2217407c1.375,0,2.239502,0.7539673,3.3761597,0.7539673
                    c1.1028442,0,1.7749023-0.755127,3.3641357-0.755127c1.201416,0,2.4744263,0.6542969,3.3816528,1.7846069
                    C14.0778809,8.4837646,14.5608521,12.7279663,17.5640259,13.8623047z M12.4625244,3.8076782
                    c0.5775146-0.741333,1.0163574-1.7880859,0.8571167-2.857666c-0.9436035,0.0653076-2.0470581,0.6651611-2.6912842,1.4477539
                    C10.0437012,3.107605,9.56073,4.1605835,9.7486572,5.1849365C10.7787476,5.2164917,11.8443604,4.6011963,12.4625244,3.8076782z"
                  ></path>
                </svg>
                <p
                  style={{
                    fontWeight: 600,
                  }}
                >
                  Download the <SpanP>iOS App</SpanP>
                </p>
              </button>
            </ButtonsContainer>
            <FormContent>
              <h3 className={mode ? "Paragraph-Dark" : "Paragraph"}>
                Subscribe to our newsletter
              </h3>
              <ContactForm />
            </FormContent>
          </div>
        </GridDiv>
      </section>
    </Fragment>
  )
}

export default ContactUs
