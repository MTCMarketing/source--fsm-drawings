import React from 'react';
import { FaHome, FaBuilding, FaTools, FaRulerCombined, FaArrowRight, FaLightbulb } from 'react-icons/fa';
import './services.css';
const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <FaLightbulb className="tag-icon" />
            <span>Our Expertise</span>
          </div>
          <h2 className="section-title">Precision Drafting Solutions</h2>
          <p className="section-subtitle">Delivering excellence through precision, experience, and dependability</p>
        </div>

        <div className="services-grid">
          {/* Service Card 1 */}
          <div className="service-card">
            <div className="card-header">
              <div className="service-icon">
                <FaHome />
              </div>
              <h3 className="service-title">Residential Drafting & Design</h3>
              <div className="card-number">01</div>
            </div>
            <p className="service-description">
              We specialize in drafting and design services for new homes and residential renovations across New England.
            </p>
            <ul className="service-features">
              <li>Site visits and plan delivery</li>
              <li>Collaboration with homeowners & contractors</li>
              <li>Code-compliant drawings</li>
              <li>Quality control focus</li>
            </ul>
            <div className="card-corner"></div>
          </div>

          {/* Service Card 2 */}
          <div className="service-card">
            <div className="card-header">
              <div className="service-icon">
                <FaBuilding />
              </div>
              <h3 className="service-title">Commercial Real Estate Drafting</h3>
              <div className="card-number">02</div>
            </div>
            <p className="service-description">
              Expert CADD services for real estate developers and A/E/C contractors.
            </p>
            <ul className="service-features">
              <li>Existing condition plans</li>
              <li>As-built drawings</li>
              <li>New construction drafting</li>
              <li>On-site measuring & data collection</li>
            </ul>
            <div className="card-corner"></div>
          </div>

          {/* Service Card 3 */}
          <div className="service-card">
            <div className="card-header">
              <div className="service-icon">
                <FaTools />
              </div>
              <h3 className="service-title">Technical Drafting & Shop Drawings</h3>
              <div className="card-number">03</div>
            </div>
            <p className="service-description">
              Construction documents and product installation drawings for commercial applications.
            </p>
            <ul className="service-features">
              <li>Detailed construction documents</li>
              <li>Precise shop drawings</li>
              <li>Manufacturer-focused solutions</li>
              <li>Easy-to-implement designs</li>
            </ul>
            <div className="card-corner"></div>
          </div>

          {/* Service Card 4 */}
          <div className="service-card">
            <div className="card-header">
              <div className="service-icon">
                <FaRulerCombined />
              </div>
              <h3 className="service-title">General CADD Services</h3>
              <div className="card-number">04</div>
            </div>
            <p className="service-description">
              Comprehensive drafting solutions for all your project needs.
            </p>
            <ul className="service-features">
              <li>Full construction documentation</li>
              <li>Design-build plan development</li>
              <li>Coordination and overlay plans</li>
              <li>Existing plan modifications</li>
            </ul>
            <div className="card-corner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;