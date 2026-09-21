'use client';
import React from 'react';
import Link from 'next/link';
import './home.css';

export default function Home({
  manImage = "/images/men.png",
}) {
  return (
    <section className="hero-container">
      {/* Left Content Column */}
      <div className="hero-left">
        <div className="heading-wrapper">
          <h1 className="hero-title">
            Professional <br />
            cleaning services <br />
            in <span className="highlight-text">Dallas</span>
          </h1>
        </div>

        <p className="hero-description">
          While you are doing something important, we will put things in order in the apartment, private house or office.
        </p>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <Link href="/contact" className="call-btn">
            <svg className="phone-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call Us Today
          </Link>

          <button className="video-btn">
            <div className="play-icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span>Watch Vedio</span>
          </button>
        </div>
      </div>

    
      <div className="hero-right">
   
        <div className="green-bg-shape"></div>

    
        <div className="yellow-circle-shape"></div>

      
        <div className="sparkle sparkle-1">✦</div>
        <div className="sparkle sparkle-2">✦</div>

        <div className="man-image-wrapper">
          {manImage && (
            <img 
              src={manImage} 
              alt="Professional Cleaner" 
              className="man-image" 
            />
          )}
        </div>

        {/* Floating Testimonial Card */}
        <div className="testimonial-card">
          <div className="quote-icon">“</div>
          <p className="testimonial-text">
            Best Cleaning services for your business and house
          </p>
        </div>
      </div>

      {/* Bottom Partners Logo Bar */}
      <div className="partners-bar">
        <span className="partner-logo">Google</span>
        <span className="partner-logo">Razorpay</span>
        <span className="partner-logo">Microsoft</span>
        <span className="partner-logo">Bendix</span>
        <span className="partner-logo">EICON</span>
        <span className="partner-logo">vonRoll</span>
      </div>
    </section>
  );
}