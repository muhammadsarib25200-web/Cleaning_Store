'use client';
import React from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '@/store/serviceSlice';
import './homeService.css';

export default function HomeService() {
  const dispatch = useDispatch();
  const { servicesData, selectedCategory } = useSelector((state) => state.services);
  const activeCategory = selectedCategory === 'business' ? 'business' : 'house';
  const visibleServices = servicesData?.[activeCategory] ?? [];

  return (
    <section className="services-container home-services-section">
      <div className="services-header">
        <div className="title-area">
          <span className="subtitle">OUR SERVICES</span>
          <h2 className="main-title">
            Perfect cleanliness <br />
            without effort!
          </h2>
        </div>

        <div className="category-toggle">
          <button
            type="button"
            className={`toggle-btn ${activeCategory === 'house' ? 'active' : ''}`}
            onClick={() => dispatch(setSelectedCategory('house'))}
          >
            Home
          </button>
          <button
            type="button"
            className={`toggle-btn ${activeCategory === 'business' ? 'active' : ''}`}
            onClick={() => dispatch(setSelectedCategory('business'))}
          >
            Business
          </button>
        </div>
      </div>

      <div className="services-grid">
        {visibleServices.map((service) => (
          <div key={service.id} className="service-card highlighted">
            <div className="icon-wrapper">{service.icon}</div>
            <h3 className="card-title">{service.title}</h3>
            <p className="card-description">{service.description}</p>
            <Link href={`/ServicePage?category=${activeCategory}`} className="learn-more-btn">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

