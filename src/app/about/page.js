'use client';

import Link from 'next/link';
import './about.css';

const highlights = [
  {
    title: 'Trusted Care',
    text: 'Your home and business receive the same attention to detail we would give our own spaces.',
  },
  {
    title: 'Local Experts',
    text: 'Our cleaning professionals understand the needs of families, offices, and commercial properties.',
  },
  {
    title: 'Reliable Schedule',
    text: 'Flexible service options that fit your routine, whether you need regular upkeep or deep cleaning.',
  },
  {
    title: 'Quality Standards',
    text: 'Every job is carried out with careful checks, eco-conscious products, and dependable service.',
  },
];

const team = [
  { name: 'Emma Johnson', role: 'Operations Lead', text: 'Coordinates every visit to keep the service smooth, consistent, and dependable.' },
  { name: 'Carlos Silva', role: 'Senior Cleaner', text: 'Leads our residential cleaning teams with a focus on detail and care.' },
  { name: 'Aisha Patel', role: 'Client Success', text: 'Makes sure every customer enjoys helpful communication and a stress-free experience.' },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="page-hero about-hero">
        <div className="hero-content">
          <p className="eyebrow">ABOUT US</p>
          <h1>Clean spaces. Better routines.</h1>
          <p className="hero-text">
            GreenCleaning helps homeowners and businesses enjoy healthier, brighter spaces with professional care and dependable support.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="primary-btn">Book a Service</Link>
            <Link href="/ServicePage" className="secondary-btn">View Services</Link>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="section-header center">
          <p className="eyebrow green">ABOUT GREENCLEANING</p>
          <h2>Thoughtful cleaning for modern living</h2>
        </div>

        <div className="about-grid">
          <div className="about-card large-card">
            <h3>Comfort starts with cleanliness</h3>
            <p>
              We are a professional cleaning company focused on creating welcoming spaces for families, offices, and businesses. From daily upkeep to full-service deep cleaning, our goal is simple: deliver consistent quality with a personal touch.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To provide reliable, high-quality cleaning that improves how people live and work every day.
            </p>
          </div>
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To become the first choice for professional cleaning across homes and businesses by combining care, consistency, and trust.
            </p>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-header center">
          <p className="eyebrow green">WHY CHOOSE US</p>
          <h2>Professional service you can count on</h2>
        </div>

        <div className="feature-grid">
          {highlights.map((item) => (
            <article key={item.title} className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team-section">
        <div className="section-header center">
          <p className="eyebrow green">OUR TEAM</p>
          <h2>Experienced professionals with a care-first mindset</h2>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-avatar">{member.name.charAt(0)}</div>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
              <p>{member.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quality-section">
        <div className="quality-box">
          <div className="quality-copy">
            <p className="eyebrow green">QUALITY & SERVICE</p>
            <h2>Every visit is planned around your needs</h2>
            <p>
              We combine eco-conscious products, attentive service, and a well-trained cleaning team to give you a space that feels fresh, safe, and comfortable.
            </p>
          </div>

          <div className="quality-list">
            <div><span>01</span> Personalized cleaning plans</div>
            <div><span>02</span> Professional training & standards</div>
            <div><span>03</span> Flexible appointments</div>
            <div><span>04</span> Friendly, dependable team</div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-box">
          <h2>Ready to enjoy a cleaner space?</h2>
          <p>Let GreenCleaning take care of the details so you can focus on what matters most.</p>
          <Link href="/contact" className="primary-btn">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}
