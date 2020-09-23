import React, { useContext } from "react"
import styled from "@emotion/styled"
import "../styles/contact.css"
import { ModeContext } from "../context/ModeContext"

const SubmitButton = styled.button`
  margin: 20px;
  padding: 10px;
  width: 10em;
  background-color: #4c9ac0;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  transition: background-color 1s ease;
  &:hover {
    cursor: pointer;
    background-color: #1476a2;
  }
`

const SubscribeForm = ({ status, message, onValidated }) => {
  const { mode } = useContext(ModeContext)
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    })

  return (
    <div
      style={{
        borderRadius: 2,
        padding: 10,
        display: "inline-block",
      }}
    >
      <label className={mode ? "Label-Dark" : "Label"}>
        Subscribe via e-mail:
        <br></br>
        <input
          ref={node => (email = node)}
          type="email"
          name="email"
          placeholder="Your email here"
          className={mode ? "Input-Dark" : "Input"}
        />
      </label>
      <br />
      <br />
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <SubmitButton
        onClick={submit}
        disabled={status === "sending" ? true : false}
      >
        {status === "sending" ? "Sending ..." : "Subscribe"}
      </SubmitButton>
    </div>
  )
}

export default SubscribeForm
