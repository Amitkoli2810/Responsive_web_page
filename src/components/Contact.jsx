import React from "react";
import "../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Enter name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" required placeholder="Enter Email" />
          </div>
          <div>
            <label>Message</label>
            <input type="text"  placeholder="Enter Text" />
          </div>
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
