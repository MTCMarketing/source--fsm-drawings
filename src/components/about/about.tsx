import React from 'react';
import { FaBriefcase, FaCogs, FaGraduationCap, FaStar, FaPhone, FaEnvelope } from 'react-icons/fa';
import './about.css'
const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="bg-element bg-element-1"></div>
      <div className="bg-element bg-element-2"></div>
      <div className="bg-element bg-element-3"></div>
      
      <div className="section-header">
        <span className="section-tag">OUR TEAM</span>
        <h2 className="section-title">About Us</h2>
        <div className="section-divider"></div>
        <p className="section-subtitle">Leadership in Precision Drafting & Design</p>
      </div>
      
      <div className="profile-container">
        <div className="profile-image"></div>
        
        <div className="profile-content">
          <div className="profile-header">
            <h2 className="profile-name">Adam C. DiMauro</h2>
            <p className="profile-title">Operations Manager & Owner</p>
            <p className="profile-bio">
              With nearly 30 years of experience in architectural design, Adam leads FSM with a strong foundation in residential and commercial projects across New England. His expertise spans providing drafting and support services for diverse clients in the A/E/C industry, manufacturing, and building contracting.
            </p>
          </div>
          
          <div className="profile-highlights">
            <div className="highlight-card">
              <div className="highlight-title">
                <div className="highlight-icon">
                  <FaBriefcase />
                </div>
                <h3>Professional Expertise</h3>
              </div>
              <p className="highlight-content">
                17+ years providing commercial drafting services for A/E/C industry, manufacturing sector, FAA, and building contracting.
              </p>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-title">
                <div className="highlight-icon">
                  <FaCogs />
                </div>
                <h3>Technical Leadership</h3>
              </div>
              <p className="highlight-content">
                In-depth knowledge of CADD systems, field data collection, and client support. Hands-on involvement in operations management.
              </p>
            </div>
            
           
          </div>
          
          <div className="contact-info-22">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>1-603-674-6447</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>adam@fsmdrawings.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;