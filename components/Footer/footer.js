"use client";

import React from "react";
import "./footer.css";

export default function Footer() {
return ( <footer className="footer">

```
  <div className="footer-container">

    {/* Brand */}
    <div className="footer-brand">
      <h2>
        Green<span>Cleaning</span>
      </h2>

      <p>
        Professional cleaning services for a cleaner,
        fresher and healthier space.
      </p>

      <div className="footer-socials">
        <span>f</span>
        <span>𝕏</span>
        <span>◎</span>
        <span>in</span>
      </div>
    </div>

    {/* Quick Links */}
    <div className="footer-column">
      <h3>Quick Links</h3>

      <a href="/">Home</a>
      <a href="/ServicePage">Services</a>
      <a href="/Login">Login</a>
      <a href="/Login">Sign Up</a>
    </div>

    {/* Services */}
    <div className="footer-column">
      <h3>Our Services</h3>

      <a href="/ServicePage">House Cleaning</a>
      <a href="/ServicePage">Garden Cleaning</a>
      <a href="/ServicePage">Bedroom Cleaning</a>
      <a href="/ServicePage">Kitchen Cleaning</a>
    </div>

    {/* Contact */}
    <div className="footer-column footer-contact">
      <h3>Contact Us</h3>

      <p>📍 Lahore, Pakistan</p>
      <p>📞 +92 300 1234567</p>
      <p>✉️ info@greencleaning.com</p>

      <button className="footer-button">
        Book a Service
      </button>
    </div>

  </div>

  {/* Bottom */}
  <div className="footer-bottom">
    <p>© 2026 GreenCleaning. All rights reserved.</p>

    <div>
      <span>Privacy Policy</span>
      <span>Terms & Conditions</span>
    </div>
  </div>

</footer>
)}
