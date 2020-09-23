import React from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import SubscribeForm from "../components/subscribeForm"

const ContactForm = () => {
  const url =
    "https://gmail.us10.list-manage.com/subscribe/post?u=87f1632117fc73582c5efd107&id=3fb05439f2"

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <SubscribeForm
          status={status}
          message={message}
          onValidated={formData => subscribe(formData)}
        />
      )}
    />
  )
}

export default ContactForm
