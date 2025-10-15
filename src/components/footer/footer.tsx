import React from 'react';
import { FaDraftingCompass, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './footer.css';
import image from '../../images/logo.png';
const Footer = () => {
  return (
    <footer className="footer-section">
       <div className="grid-overlay"></div>
      <div className="bg-pattern"></div>
      <div className="bg-overlay"></div>
   
      <div className="container">
        <div className="footer-grid">
          {/* Logo and Description */}
          <div className="footer-column logo-column">
            <div className="footer-logo">
              <img 
                           src={image} 
                           alt="FSM Drawings"
                           className="logo-image"
                         />
            </div>
            <p className="footer-description">
              Professional CADD services for architectural, structural, and MEP projects. 
              Precision drafting solutions since 2009.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          {/* Services Links */}
          <div className="footer-column">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><a href="#">Architectural Drafting</a></li>
              <li><a href="#">Structural CAD</a></li>
              <li><a href="#">MEP Coordination</a></li>
              <li><a href="#">Site Surveys</a></li>
              <li><a href="#">As-Built Drawings</a></li>
              <li><a href="#">Renovation Plans</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="footer-column">
            <h3 className="footer-heading">Stay Updated</h3>
            <p className="footer-newsletter-text">
              Subscribe to our newsletter for industry insights and updates.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} FSM Drawings. All rights reserved.
          </div>
          
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="footer-shape footer-shape-1"></div>
      <div className="footer-shape footer-shape-2"></div>
    </footer>
  );
};

export default Footer;