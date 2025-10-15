import React from 'react';
import { FaPhone, FaEnvelope, FaArrowRight, FaCheck, FaClock, FaShieldAlt, FaAward, FaUsers, FaChartLine } from 'react-icons/fa';
import './cta.css';

const CTASection = () => {
  const benefits = [
    { icon: FaClock, text: "24-Hour Response Time" },
    { icon: FaShieldAlt, text: "100% Satisfaction Guarantee" },
    { icon: FaAward, text: "15+ Years Experience" },
    { icon: FaUsers, text: "500+ Happy Clients" }
  ];

  const urgencyPoints = [
    "Free consultation expires soon",
    "Limited project slots available",
    "Priority scheduling for new clients"
  ];

  return (
    <section className="cta-section">
      <div className="cta-bg">
        <div className="cta-pattern"></div>
        <div className="cta-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="cta-container">
        <div className="cta-content">
          {/* Main CTA Content */}
          <div className="cta-main">
            <div className="cta-badge">
              <FaChartLine className="badge-icon" />
              <span>Ready to Start Your Project?</span>
            </div>

            <h2 className="cta-headline">
              <span className="headline-primary">Transform Your Vision Into</span>
              <span className="headline-accent">Professional Drawings</span>
              <span className="headline-secondary">in Just 24 Hours</span>
            </h2>

            <p className="cta-description">
              Join hundreds of satisfied clients who trust FSM Drawings for precision CADD services. 
              From residential renovations to commercial projects, we deliver accurate, code-compliant 
              drawings that bring your vision to life.
            </p>

            {/* Benefits Grid */}
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <div className="benefit-icon">
                    <benefit.icon />
                  </div>
                  <span className="benefit-text">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Urgency Section */}
            <div className="urgency-section">
              <h3 className="urgency-title">Limited Time Offer</h3>
              <ul className="urgency-list">
                {urgencyPoints.map((point, index) => (
                  <li key={index} className="urgency-item">
                    <FaCheck className="check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary-btn">
                <span className="btn-text">Get Free Quote Now</span>
                <FaArrowRight className="btn-icon" />
                <div className="btn-shine"></div>
              </a>
              
              <div className="contact-options">
                <a href="tel:6036746447" className="contact-btn phone-btn">
                  <FaPhone className="contact-icon" />
                  <div className="contact-info">
                    <span className="contact-label">Call Now</span>
                    <span className="contact-value">(603) 674-6447</span>
                  </div>
                </a>
                
                <a href="mailto:adam@fsmdrawings.com" className="contact-btn email-btn">
                  <FaEnvelope className="contact-icon" />
                  <div className="contact-info">
                    <span className="contact-label">Email Us</span>
                    <span className="contact-value">adam@fsmdrawings.com</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Side Stats */}
          <div className="cta-stats">
            <div className="stats-card">
              <div className="stats-header">
                <h3>Why Choose FSM Drawings?</h3>
                <p>Proven results that speak for themselves</p>
              </div>
              
              <div className="stats-list">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-number">24hr</div>
                  <div className="stat-label">Response Time</div>
                </div>
              </div>

              <div className="testimonial-preview">
                <div className="testimonial-quote">
                  "FSM Drawings exceeded our expectations with their precision and professionalism."
                </div>
                <div className="testimonial-author">
                  <strong>Sarah Johnson</strong> - Johnson Construction
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          <div className="trust-item">
            <FaShieldAlt className="trust-icon" />
            <span>SSL Secured</span>
          </div>
          <div className="trust-item">
            <FaClock className="trust-icon" />
            <span>24/7 Support</span>
          </div>
          <div className="trust-item">
            <FaAward className="trust-icon" />
            <span>Licensed & Insured</span>
          </div>
          <div className="trust-item">
            <FaUsers className="trust-icon" />
            <span>500+ Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;