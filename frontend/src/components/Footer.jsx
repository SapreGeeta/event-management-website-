import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>SAI</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="contact">
          <label>Contact</label>
          <p>📌 84,Rahuri Factory,Mahtama Gandhi Chowk</p>
        <p>Omkar Colony, Rahuri-413705</p>
          <div className="social-icons">
              <img src="instagram_logo.jpg" alt="Instagram" />
              <img src="linkedin_logo.jpg" alt="LinkedIn" />
              <img src="Twitter.jpg" alt="Twitter" />
              <img src="facebook.jpg" alt="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;