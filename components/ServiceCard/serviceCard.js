import React from 'react';
import Link from 'next/link';
import './serviceCard.css';

export default function ServiceCard({ service, isActive }) {
  return (
    <div className={`service-card ${isActive ? 'active-card' : ''}`}>
      <div className="card-icon">{service.icon}</div>
      <h3 className="card-title">{service.title}</h3>
      <p className="card-description">{service.description}</p>
      <Link href="/contact" className="learn-more-btn">
        Book Now
      </Link>
    </div>
  );
}