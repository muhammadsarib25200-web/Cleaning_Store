'use client';

import Link from 'next/link';
import './contact.css';

const contactPoints = [
  { label: 'Phone', value: '+1 (214) 555-0148', href: 'tel:+12145550148' },
  { label: 'Email', value: 'hello@greencleaning.com', href: 'mailto:hello@greencleaning.com' },
  { label: 'Address', value: '2140 Cedar Avenue, Dallas, TX', href: '#' },
  { label: 'Business Hours', value: 'Mon - Sat: 8:00 AM - 6:00 PM', href: '#' },
];

export default function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="contact-page">
      <section className="page-hero contact-hero">
        <div className="hero-content">
          <p className="eyebrow">CONTACT US</p>
          <h1>Let’s make your space feel fresh again</h1>
          <p className="hero-text">
            Reach out for residential cleaning, commercial care, or a tailored cleaning plan that fits your schedule.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-layout">
          <div className="contact-info-box">
            <div className="section-header">
              <p className="eyebrow green">GET IN TOUCH</p>
              <h2>We’re here to help</h2>
            </div>

            <div className="contact-points">
              {contactPoints.map((item) => (
                <div key={item.label} className="contact-item">
                  <span className="item-label">{item.label}</span>
                  {item.href === '#' ? (
                    <p>{item.value}</p>
                  ) : (
                    <a href={item.href}>{item.value}</a>
                  )}
                </div>
              ))}
            </div>

            <div className="mini-map">
              <div className="map-pin">📍</div>
              <div>
                <h3>Service area</h3>
                <p>Dallas, Plano, Irving, and surrounding neighborhoods</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="input-wrap">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your full name" />
              </div>

              <div className="input-wrap">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Your email" />
              </div>
            </div>

            <div className="form-row">
              <div className="input-wrap">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="Your phone" />
              </div>

              <div className="input-wrap">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Service inquiry" />
              </div>
            </div>

            <div className="input-wrap">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" placeholder="Tell us about your cleaning needs" />
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      <section className="cta-strip">
        <div className="cta-inner">
          <div>
            <p className="eyebrow green">NEED HELP FAST?</p>
            <h2>Call us for a quick quote</h2>
          </div>
          <Link href="tel:+12145550148" className="primary-btn">Call Now</Link>
        </div>
      </section>
    </main>
  );
}
