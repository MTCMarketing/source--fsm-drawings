import React from 'react';
import { FaBuilding, FaHome, FaTools, FaChevronRight } from 'react-icons/fa';
import './portfolio.css';

const ProjectsSection = () => {

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "112", label: "Homes Mitigated" },
    { value: "13", label: "Successful Demolitions" }
  ];



  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>FSM Drawings has provided CADD services for clients from small residential to large federal projects</p>
          <div className="divider"></div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="gallery-categories">
          <div className="category-card" onClick={() => window.location.href = '/single-family-homes'}>
            <div className="category-icon">
              <FaHome />
            </div>
            <h3>Single Family Homes</h3>
            <p>Explore our collection of single family home designs.</p>
            <div className="category-arrow">
              <FaChevronRight />
            </div>
          </div>
          
          
          <div className="category-card" onClick={() => window.location.href = '/multi-family-homes'}>
            <div className="category-icon">
              <FaBuilding />
            </div>
            <h3>Multi Family Homes</h3>
            <p>Browse our multi-family residential designs and layouts</p>
            <div className="category-arrow">
              <FaChevronRight />
            </div>
          </div>
          <div className="category-card" onClick={() => window.location.href = '/additions'}>
            <div className="category-icon">
              <FaTools />
            </div>
            <h3>Additions</h3>
            <p>View our portfolio of home additions and renovation projects</p>
            <div className="category-arrow">
              <FaChevronRight />
            </div>
          </div>
          
        </div>
        
        <div className="section-cta">
          <p>Ready to bring precision CADD services to your next project?</p>
          <a className="cta-btn" href='/Contact'>
            Contact Us <FaChevronRight />
          </a>
        </div>
      </div>

    </section>
  );
};

export default ProjectsSection;