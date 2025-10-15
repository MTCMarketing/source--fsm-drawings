import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBars, FaTimes, FaChevronDown, FaStar, FaClock } from 'react-icons/fa';
import './nav.css';
import image from '../../images/logo.png';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      setShowMobileCTA(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info-1">
            <div className="contact-item-1">
              <FaMapMarkerAlt className="contact-icon" />
              <span>855 Hanover St, #450, Manchester, NH</span>
            </div>
            <div className="contact-item-1">
              <FaEnvelope className="contact-icon" />
              <a className="ppp" href="mailto:adam@fsmdrawings.com">
               adam@fsmdrawings.com
              </a>
            </div>
            <div className="contact-item-1">
              <FaPhone className="contact-icon" />
              <a className="ppp" href="tel:1-603-674-6447" >
               1-603-674-6447
              </a>
            </div>
          </div>
          <div className="social-links-header">
            <span className='contact-item-1'>
                <FaClock className="contact-icon" />
                 Mon - Fri: 9:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`main-header ${isSticky ? 'sticky' : ''}`}>
        <div className="header-container">
          <a href="/" className="logo">
            <img 
              src={image} 
              alt="Bravo Roofing Idaho"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <div className="nav-item">
              <a href="/#" className="nav-link">Home</a>
            </div>
            <div className="nav-item">
              <a href="/#services" className="nav-link">Services</a>
            </div>
            <div className="nav-item">
              <a href="/#about" className="nav-link">About </a>
            </div>
            <div className="nav-item">
              <a href="/SampleDrawings" className="nav-link">Sample Works</a>
            </div>
            <div className="nav-item">
              <a href="/#reviews" className="nav-link">Reviews</a>
            </div>
            <div className="nav-item">
              <a href="/Contact" className="nav-link">Contact</a>
            </div>
          </nav>

          {/* Desktop CTAs */}
          <div className="header-cta">
            <a href="/Contact" className="estimate-btn btn-primary">
              <span className="btn-icon">📋</span>
              <span className="btn-text">Free Estimate</span>
              <div className="btn-shine"></div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      />
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-header">
          <a href="/" className="logo">
            <img 
              src={image} 
              alt="Bravo Roofing Idaho"
              className="mobile-logo"
            />
          </a>
          <button
            className="mobile-menu-close"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <div className="close-icon">
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div className="mobile-content">
          <nav className="mobile-nav">
            <a href="#" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">Home</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="/#about" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">About Us</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="/#services" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">Services</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="/#portfolio" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">Portfolio</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="/#reviews" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">Reviews</span>
              <span className="nav-arrow">→</span>
            </a>
            <a href="/contact" className="mobile-nav-link" onClick={toggleMenu}>
              <span className="nav-text">Contact</span>
              <span className="nav-arrow">→</span>
            </a>
          </nav>

          <div className="mobile-cta">
            <a href="tel:2085159425" className="mobile-phone btn-secondary">
              <FaPhone className="phone-icon" />
              <span>(208) 515-9425</span>
            </a>
            <a href="/contact" className="mobile-estimate-btn btn-primary">
              <span className="btn-icon">📋</span>
              <span>Free Estimate</span>
              <div className="btn-shine"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Sticky CTA */}
      <div className={`mobile-sticky-cta ${showMobileCTA ? 'show' : ''}`}>
        <a href="tel:2085159425" className="sticky-cta-link">
           
          <span className="call-text"> 📞 Tap to Call </span>
          (208) 515-9425
        </a>
      </div>
    </>
  );
};

export default Header;