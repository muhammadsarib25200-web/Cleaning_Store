'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './header.css';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '@/store/serviceSlice';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <header className="site-header">
      <Link href="/" className="logo-container">
        <div className="logo-icon"></div>
        <div className="logo-text">
          Green<span className="logo-text-light">Cleaning</span>
        </div>
      </Link>

      <button
        className="mobile-menu-toggle"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="mobile-menu-line"></span>
        <span className="mobile-menu-line"></span>
        <span className="mobile-menu-line"></span>
      </button>

      <nav className={`nav-container ${menuOpen ? 'mobile-open' : ''}`}>
        <ul className="nav-menu">
          <li>
            <Link href="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown-parent">
            <div className="services-menu-wrap">
              <Link
                href="/ServicePage"
                className="nav-link services-link"
                onMouseEnter={() => setServiceMenuOpen(true)}
                onMouseLeave={() => setServiceMenuOpen(false)}
              >
                Services
              </Link>

              <div className={`service-dropdown ${serviceMenuOpen ? 'service-dropdown-open' : ''}`}>
                <Link
                  onClick={() => dispatch(setSelectedCategory('house'))}
                  href="/ServicePage?category=house"
                  className="service-dropdown-link"
                >
                  <span className="service-title">House Cleaning</span>
                  <span className="service-detail">(Residential)</span>
                </Link>
                <Link
                  onClick={() => dispatch(setSelectedCategory('business'))}
                  href="/ServicePage?category=business"
                  className="service-dropdown-link"
                >
                  <span className="service-title">Business Cleaning</span>
                  <span className="service-detail">(Commercial)</span>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="/about" className="nav-link">
              About us
            </Link>
          </li>
          <li>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header-actions">
        <button className="search-btn" aria-label="Search">
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="login-btn">
            Logout
          </button>
        ) : (
          <Link href="/Login" className="login-btn">
            Log in
          </Link>
        )}
      </div>

      {menuOpen && (
        <button className="mobile-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)}></button>
      )}
    </header>
  );
}