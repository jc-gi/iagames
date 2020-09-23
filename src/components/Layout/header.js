import PropTypes from "prop-types"
import React, { useContext, Fragment } from "react"
import Logomain from "../logomain"
import styled from "@emotion/styled"
import { ModeContext } from "../../context/ModeContext"
import "../../styles/header.css"

const WrapperDiv = styled.div`
  position: sticky;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 10;
`

const InsideDiv = styled.div`
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0px auto;
`

const InsideInsideDiv = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  text-align: left;
`

const LogoContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: var(--xstyled-colors-text, #222);
  height: 34px;
  margin-right: 16px;
`

const Title = styled.h2`
  display: block;
  font-weight: 900;
  font-size: 20px;
  line-height: 0.9;
  margin: 0px 0px 0px 10px;
  color: #007bb7;
  
`

const MainLink = styled.a`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: var(--xstyled-colors-text, #222);
  height: 34px;
  margin-right: 16px;
  text-decoration: none;
`

const NavList = styled.nav`
  height: 40px;
  margin-left: 10px;
  position: relative;
  overflow-x: auto;
`

const NavInnerList = styled.ul`
  color: var(--xstyled-colors-text, #222);
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  height: 34px;
`

const NavItems = styled.li`
  list-style-type: none;
  flex: 1 1 auto;
  margin: 0px;
  text-align: center;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.2;
`

const SmallContainer = styled.div`
  overflow: auto;
`

const ButtonSwitch = styled.button`
  appearance: none;
  display: flex;
  padding: 0px 10px;
  background-color: transparent;
  border: 0px;
  transition: color 300ms ease 0s;
  outline: none;
  cursor: pointer;
`

const Header = ({ siteTitle }) => {
  const { mode, setMode } = useContext(ModeContext)

  return (
    <Fragment>
      <WrapperDiv>
        <header className={mode ? "Main-Header-Dark" : "Main-Header"}>
          <InsideDiv>
            <InsideInsideDiv>
              <LogoContainer>
                <MainLink href="/">
                  <div
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      display: "inline-block",
                      width: 42,
                      height: 42,
                    }}
                  >
                    <Logomain />
                  </div>
                  <Title>{siteTitle}</Title>
                </MainLink>
              </LogoContainer>
              <div
                style={{
                  marginLeft: "auto",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={mode ? "svg-icon-dark" : "svg-icon-light"}
                  >
                    <path d="M21 21h-1.713l-.658-1.846h-3l-.663 1.846h-1.659l3.04-8h1.603l3.05 8zm-2.814-3.12l-1.049-3.018-1.054 3.018h2.103zm2.814-5.88c.552 0 1 .449 1 1v8c0 .551-.448 1-1 1h-8c-.552 0-1-.449-1-1v-8c0-.551.448-1 1-1h8zm0-2h-8c-1.656 0-3 1.343-3 3v8c0 1.657 1.344 3 3 3h8c1.657 0 3-1.343 3-3v-8c0-1.657-1.343-3-3-3zm-15.855-2.114c.039.58.103 1.115.195 1.593-1.225.224-1.275-.984-.195-1.593zm8.855-4.886v5h-1c-.742 0-1.441.173-2.076.465-.195-.806-.783-1.53-1.68-1.964.078-.298.123-.522.167-.744l-1.35-.261c-.022.112-.063.327-.135.613-.455-.067-.94-.075-1.431-.026.011-.329.032-.653.06-.963h1.508v-1.278h-1.327c.065-.326.121-.521.176-.705l-1.316-.396c-.098.323-.178.64-.26 1.101h-1.504v1.278h1.341c-.036.414-.058.842-.064 1.275-1.48.544-2.109 1.581-2.109 2.521 0 1.11.876 2.086 2.261 1.96 1.72-.156 2.868-1.456 3.542-3.053.885.536.838 1.161.772 1.552-.965.913-1.575 2.196-1.575 3.625v1h-5c-1.656 0-3-1.343-3-3v-8c0-1.657 1.344-3 3-3h8c1.657 0 3 1.343 3 3zm-7.5 4.467c.328-.042.658-.05.97-.026-.214.476-.497.948-.857 1.319-.054-.396-.092-.83-.113-1.293z" />
                  </svg>
                  <label htmlFor="Language" hidden={true}>
                    Change your language
                  </label>
                  <select name="Language" className={mode ? "Combo-Dark" : "Combo-light"}>
                    <option>English</option>
                    <option>Spanish</option>
                  </select>
                </div>
              </div>
              <SmallContainer>
                <NavList>
                  <NavInnerList>
                    <NavItems>
                      <a
                        className={
                          mode ? "NavLink-Element-Dark" : "NavLink-Element"
                        }
                        href="/#!"
                      >
                        Pricing
                      </a>
                    </NavItems>
                    <NavItems>
                      <a
                        className={
                          mode ? "NavLink-Element-Dark" : "NavLink-Element"
                        }
                        href="/#contact_section"
                      >
                        Contact us
                      </a>
                    </NavItems>
                    <NavItems>
                      <a
                        className={
                          mode ? "NavLink-Element-Dark" : "NavLink-Element"
                        }
                        href="/#!"
                      >
                        Blog
                      </a>
                    </NavItems>
                    <NavItems>
                      <ButtonSwitch onClick={() => setMode(!mode)} name="Switch mode" aria-hidden="true">
                        {!mode ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="svg-moon"
                          >
                            <path d="M22 12c0 5.514-4.486 10-10 10-4.826 0-8.864-3.436-9.797-7.99 3.573.142 6.903-1.818 8.644-5.013 1.202-2.206 1.473-4.679.83-6.992 5.608-.194 10.323 4.338 10.323 9.995zm-10-12c-1.109 0-2.178.162-3.197.444 3.826 5.933-2.026 13.496-8.781 11.128l-.022.428c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="svg-sun"
                          >
                            <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
                          </svg>
                        )}
                      </ButtonSwitch>
                    </NavItems>
                  </NavInnerList>
                </NavList>
              </SmallContainer>
            </InsideInsideDiv>
          </InsideDiv>
        </header>
      </WrapperDiv>
    </Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
