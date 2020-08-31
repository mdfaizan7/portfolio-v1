import React from "react"

const ContactMe = () => {
  return (
    <div>
      <form action="mailto:youraddr@domain.tld" method="GET">
        <input name="subject" type="text" />
        <textarea name="body"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default ContactMe
