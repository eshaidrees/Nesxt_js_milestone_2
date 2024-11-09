import React from "react";
import "../../styles/contact.css"

export default function Contact(){
  return (
    <div className="contact-content">
        <title className="title">Contact</title>
        <h1>Contact Me</h1>
      <div className="form">
        <form action="https://api.web3forms.com/submit" method="POST">
           <input type="hidden" name="access_key" value="814718bb-47d7-41bf-aa06-d10452d13958" />

           <label htmlFor="name">Name</label>
           <input type="text" id="name" name="name" placeholder="Enter your name" required/>

           <label htmlFor="email">Email address:</label>
           <input type="text" id="email" name="email" placeholder="Enter Your Email" required/>
          
           <label htmlFor="message">Your Message:</label>
           <input type="text" id="message" name="message" placeholder="Enter your message" required/>
              
           <button type="submit">Send</button>

        </form>
       </div>
    </div>
  );
};
