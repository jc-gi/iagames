import React, { useContext } from "react"
import { ModeContext } from "../../context/ModeContext"
import "../../styles/stack.css"

const Card = ({ image, title, description }) => {
  const { mode } = useContext(ModeContext)
  return (
    <div>
      <div className="courses-container">
        <div className={mode ? "stacklogo-dark" : "stacklogo-light"}>
          <div className={mode ? "card-preview-dark" : "card-preview"}>
            <img
              src={image}
              alt={title}
              className="logo-dark"
            />
          </div>
          <div className="card-info">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="cards-separate">
        <div className={mode ? "card-preview-dark" : "card-preview-dark"}>
          <img
            src={image}
            alt={title}
            className={mode ? "logo-dark" : "logo"}
          />
        </div>
      </div>
    </div>
  )
}

export default Card
