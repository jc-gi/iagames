import React from "react"
import PropTypes from "prop-types"
import Logomain from "../logomain"
import "../../styles/footer.css"


const Footer = ({ siteTitle }) => {
  return (
    <>
      <footer className="Footer-Container">

        <div className="container-footer">
          <div className="footer">
            <div className="copyright">2020 TypeTech | All rights reserved</div>
            <div className="information">
              <a href="https://github.com/TypeTech" target="blank">
                <span style={{
                  paddingLeft:10
                }}>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Footer.propTypes = { siteTitle: PropTypes.string }
Footer.defaultProps = { siteTitle: `` }

export default Footer
