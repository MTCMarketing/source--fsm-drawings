// src/components/HeroSection/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import { FaCheck, FaSearch, FaEnvelope, FaPhone, FaUser, FaLightbulb, FaDraftingCompass } from 'react-icons/fa';
import './hero.css';

const HeroSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    "https://images.pexels.com/photos/8482865/pexels-photo-8482865.jpeg?_gl=1*xrptqd*_ga*NDEzNjE2OS4xNzU0NzMxNTQ1*_ga_8JE65Q40S6*czE3NTQ3MzE1NDQkbzEkZzEkdDE3NTQ3MzE2MjgkajU5JGwwJGgw",
    "https://images.pexels.com/photos/8470057/pexels-photo-8470057.jpeg?_gl=1*1igf5qg*_ga*NDEzNjE2OS4xNzU0NzMxNTQ1*_ga_8JE65Q40S6*czE3NTQ3MzE1NDQkbzEkZzEkdDE3NTQ3MzE2OTkkajQ4JGwwJGgw",
    "https://images.pexels.com/photos/9511923/pexels-photo-9511923.jpeg"
  ];

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus('error');
      return;
    }
    
    // Form submission simulation
    console.log('Form submitted:', formData);
    setFormStatus('success');
    
    // Reset form and status
    setTimeout(() => {
      setFormStatus('idle');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  return (
    <section className="hero-section">
      {/* Background Image Carousel */}
      <div className="background-carousel">
        {backgroundImages.map((img, index) => (
          <div 
            key={index}
            className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      
      {/* Overlay Elements */}
      <div className="grid-overla"></div>
      <div className="bg-overlay"></div>
      
      {/* Floating CAD elements */}
      <div className="cad-element cad-element-1">
        <FaDraftingCompass />
      </div>
      <div className="cad-element cad-element-2">
        <FaLightbulb />
      </div>
      <div className="cad-element cad-element-3">
        <FaDraftingCompass />
      </div>
      
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="content-wrapper">
            <div className="badge">
              <FaDraftingCompass className="badge-icon" />
              <span>Professional CAD Services</span>
            </div>
            
            <h1 className="hero-headline">
              <span>Precision Drafting.</span> 
              <br />
              <span>Fast Turnaround.</span> 
              <br />
              <span className="highlight">Nationwide.</span>
            </h1>
            
            <p className="hero-subheadline">
              FSM Drawings, LLC has provided expert CADD services since 2009 — serving architects, engineers, and builders with accurate plans, as-built drawings, and CAD modeling across the U.S.
            </p>
            
            <ul className="trust-points">
              <li>
                <span className="trust-icon"><FaCheck /></span>
                <span><strong>100+ years</strong> of combined CADD experience</span>
              </li>
              <li>
                <span className="trust-icon"><FaCheck /></span>
                <span>Trusted by <strong>Wyle, Densen Construction</strong> & more</span>
              </li>
              <li>
                <span className="trust-icon"><FaCheck /></span>
                <span>Based in <strong>New Hampshire</strong>, available <strong>nationwide</strong></span>
              </li>
            </ul>
            
            <div className="cta-group">
              <a className='primary-cta' href="/Contact">
                Get Started Today
              </a>
              
              <a className="secondary-cta" href="/SampleDrawings">
                <FaSearch className="cta-icon" />
                View Sample Projects
              </a>
            </div>
          </div>
        </div>

        {/* Right Form */}
       <div className="hero-form">
          <div className="form-card">
            <div className="form-header">
              <h2 className="form-title">Get a Free Quote</h2>
              <p className="form-subtitle">
                Fill out your details and we'll get back to you within 1 business day.
              </p>
            </div>
            
            {formStatus === 'success' && (
              <div className="form-message success-message">
                <FaCheck className="message-icon" />
                <span>Thank you! We've received your request and will respond shortly.</span>
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="form-message error-message">
                <span className="error-icon">!</span>
                <span>Please complete all required fields and try again.</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="form-group">
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <div className="input-with-icon">
                  <FaUser className="input-icon" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group dual-input">
                <div className="input-with-icon">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
                
                <div className="input-with-icon">
                  <FaPhone className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone (optional)"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={4}
                />
              </div>
              
              <button type="submit" className="submit-button">
                <FaEnvelope className="button-icon" />
                Submit Request
              </button>
            </form>
            
            <div className="form-footer">
              <div className="secure-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="#4A74A5"/>
                  <path d="M12 12L19 12C18.47 16.11 15.72 19.78 12 20.93V12Z" fill="#2A4D6F"/>
                </svg>
                <span>Your information is 100% secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;