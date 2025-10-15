import React from 'react';
import { FaEnvelope, FaHome, FaBuilding, FaCity, FaWarehouse, FaDraftingCompass, FaPhone, FaExternalLinkAlt } from 'react-icons/fa';
import './SampleDrawings.css';


const SampleDrawings = () => {
  // Sample data with image URLs and view links
  const categories = [
    {
      id: 'cape',
      title: 'Cape Examples',
      icon: <FaHome />,
      projects: [
        { id: 1, name: 'Small Cape Sample Carrigain', image: 'https://ik.imagekit.io/dloitl7fd8/carrigain.png?updatedAt=1754145502714', viewLink: 'https://web.archive.org/web/20240503095045/http://fsmdrawings.net/wp-content/uploads/2014/06/Small-Cape-Sample-11027CA-Garfield-web.png' },
        { id: 2, name: 'Small Cape Sample Garfield', image: 'https://ik.imagekit.io/dloitl7fd8/garfield.png?updatedAt=1754145502770', viewLink: 'https://web.archive.org/web/20240503095045/http://fsmdrawings.net/wp-content/uploads/2014/06/Small-Cape-Sample-11027CA-Garfield-web.png' },
        { id: 3, name: 'Small Cape Sample Garfield Modified', image: 'https://ik.imagekit.io/dloitl7fd8/Garfield-Modified.png?updatedAt=1754145502728', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Small-Cape-Sample-11027CA-Garfield-Modified-web.png' },
        { id: 4, name: 'Small Cape Sample Thorndike', image: 'https://ik.imagekit.io/dloitl7fd8/thorndike.png?updatedAt=1754145502672', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Small-Cape-Sample-11134-Thorndike-web.png' },
        { id: 5, name: 'Small Cape Sample Horn', image: 'https://ik.imagekit.io/dloitl7fd8/horn.png?updatedAt=1754145502654', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Small-Cape-Sample-11171CA-Horn-web.png' },
        { id: 6, name: 'Small Cape Sample Sunrise', image: 'https://ik.imagekit.io/dloitl7fd8/sunrise.png?updatedAt=1754145502668', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Small-Cape-Sample-12011CA-Sunrise-web.png' },
        { id: 7, name: 'Small Cape Sample Sunrise Modified', image: 'https://ik.imagekit.io/dloitl7fd8/Sunrise-modified.png?updatedAt=1754145502746', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Small-Cape-Sample-12011CA-Sunrise-Modified.png' },
      ]
    },
    {
      id: 'colonial',
      title: 'Colonial Examples',
      icon: <FaBuilding />,
      projects: [
        { id: 8, name: 'Colonial Lincoln', image: 'https://ik.imagekit.io/dloitl7fd8/Colonial.png?updatedAt=1754145502748', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Sample-3000-Colonial-10062-web.png' },
        { id: 9, name: 'Colonial Hancock', image: 'https://ik.imagekit.io/dloitl7fd8/HANCOCK.png?updatedAt=1754145502671', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Sample-base-colonial-10125CL-HANCOCK-web.png' },
        { id: 10, name: 'Colonial Province II', image: 'https://ik.imagekit.io/dloitl7fd8/PROVINCE-II.png?updatedAt=1754147089168', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Sample-base-colonial-11076CL-PROVINCE-II-web.png' },
        { id: 11, name: 'Colonial Eisenhower, First Floor Master', image: 'https://ik.imagekit.io/dloitl7fd8/First-Floor-Master.png?updatedAt=1754147089162', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Sample-base-colonial-First-Floor-Master-10119-web.png' },
        { id: 12, name: 'Colonial Dutch', image: 'https://ik.imagekit.io/dloitl7fd8/DUTCH.png?updatedAt=1754147089169', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Sample-Dutch-Colonial-11123CL-DUTCH-web.png' },
        { id: 13, name: 'Colonial Eastman', image: 'https://ik.imagekit.io/dloitl7fd8/EASTMAN.png?updatedAt=1754147089198', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Sample-Small-Colonial-12001CL-EASTMAN-web.png' },
        { id: 14, name: 'Colonial Oscar', image: 'https://ik.imagekit.io/dloitl7fd8/OSCAR.png?updatedAt=1754147089206', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Sample-Small-Colonial-12017CL-OSCAR-web.png' },
        { id: 15, name: 'Colonial Dublin', image: 'https://ik.imagekit.io/dloitl7fd8/DUBLIN.png?updatedAt=1754147089173', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Sample-stock-colonial-base-11111CL-DUBLIN-web.png' },
      ]
    },
    {
      id: 'garage',
      title: 'Garage Example',
      icon: <FaWarehouse />,
      projects: [
        { id: 16, name:  'Garage Plan Haystack', image: 'https://ik.imagekit.io/dloitl7fd8/Garage-Plan.png?updatedAt=1754147461962', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Sample-Stock-Garage-Plan-10107MS-AKERS-web.png' },
      ]
    },
    {
      id: 'multifamily',
      title: 'Multifamily Example',
      icon: <FaCity />,
      projects: [
        { id: 17, name: 'Sample Multifamily Locke', image: 'https://ik.imagekit.io/dloitl7fd8/Multi-Familiy.png?updatedAt=1754147579433', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Sample-Multi-Familiy-11160MF-LOCKE-web.png' },
      ]
    },
    {
      id: 'ranch',
      title: 'Ranch Example',
      icon: <FaHome />,
      projects: [
        { id: 18, name: 'Sample Ranch  Baxter', image: 'https://ik.imagekit.io/dloitl7fd8/Sample-Ranch.png?updatedAt=1754147579413', viewLink: 'https://web.archive.org/web/20210725190837/http://fsmdrawings.net/wp-content/uploads/2014/06/Sample-Ranch-11-117RA-BAXTER-web.png' },
      ]
    },
    {
      id: 'federal',
      Subtitle: 'Federal Projects Sample ',
      title: 'Noise Mitigation Drawings ',
      icon: <FaDraftingCompass />,
      projects: [
        { id: 19, name: 'Noise Mitigation - A1', image: 'https://ik.imagekit.io/dloitl7fd8/Noise-Mitigation-A1.png?updatedAt=1754148633673', viewLink: 'https://web.archive.org/web/20210725200254/http://fsmdrawings.net/wp-content/uploads/2014/06/Noise-Mitigation-A1-web.png' },
        { id: 20, name: 'Noise Mitigation - A3', image: 'https://ik.imagekit.io/dloitl7fd8/Noise-Mitigation-A3.png?updatedAt=1754148633673', viewLink: 'https://web.archive.org/web/20210725200254/http://fsmdrawings.net/wp-content/uploads/2014/06/Noise-Mitigation-A3-web.png' },
        { id: 21, name: 'Wyle Spec Sheet 002', image: 'https://ik.imagekit.io/dloitl7fd8/Wyle-Spec-web.png?updatedAt=1754148633668', viewLink: 'https://web.archive.org/web/20210725200254/http://fsmdrawings.net/wp-content/uploads/2014/06/Wyle-Spec-web.png' },
        { id: 22, name: 'Wyle Spec Sheet 073', image: 'https://ik.imagekit.io/dloitl7fd8/Wyle-Spec.png?updatedAt=1754148633676', viewLink: 'https://web.archive.org/web/20210725200254/http://fsmdrawings.net/wp-content/uploads/2014/06/Wyle-Spec-073-web.png' },
      ]
    },
    {
        id: 'Commercial Drafting Support',
        title: 'Commercial Drafting Support',
        icon: <FaBuilding />,
        projects: [
           
        { id: 23, name: 'ARC Donor Center', image: 'https://ik.imagekit.io/dloitl7fd8/ARC-Donor-Center_web-300x200.png?updatedAt=1754148900571', viewLink: 'https://web.archive.org/web/20210725175259/http://fsmdrawings.net/wp-content/uploads/2014/06/ARC-Donor-Center-large1.png' },
        { id: 24, name: 'Coordination DWG M-1', image: 'https://ik.imagekit.io/dloitl7fd8/Coordination-Dwg.png?updatedAt=1754148634298', viewLink: 'https://web.archive.org/web/20210725175259/http://fsmdrawings.net/wp-content/uploads/2014/06/Coordination-Dwg.-M-1-large.png' },
        { id: 25, name: 'MTA Camp Cutis Guild A-3', image: 'https://ik.imagekit.io/dloitl7fd8/MTA-Camp-Cutis-Guild.png?updatedAt=1754148633549', viewLink: 'https://web.archive.org/web/20210725175259/http://fsmdrawings.net/wp-content/uploads/2014/06/MTA-Camp-Cutis-Guild-A-3-web.png' },
        ]
    }
  ];

  return (
    <div className="lpl_sample-drawings">
      {/* Hero Section */}
      <section className="lpl_drawings-hero">
        <div className="lpl_container">
          <div className="lpl_hero-content">
            <h1>Sample Drawings</h1>
            <p>Our CADD products meet American Society of Mechanical Engineers (ASME) standards. The samples below illustrate our expertise with industry standards.</p>
            <div className="lpl_hero-divider"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="lpl_introduction">
        <div className="lpl_container">
          <div className="lpl_intro-card">
            <h2>Contracting and Homeowner Projects</h2>
            <p>
              The Sunrise and The Garfield modification samples were made for clients per their requests. 
              We have provided these samples to show that clients can download and print our samples, 
              and then call or meet with FSM Drawings so that we can personalize it for them.
            </p>
            <div className="lpl_highlight">
              <FaDraftingCompass className="lpl_highlight-icon" />
              <span>We are experienced at handling modifications remotely over the phone, via the Internet, with Adobe, with Bluebeam, and GoToMeeting, or meeting in our or at a client's office.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="lpl_portfolio-grid">
        <div className="lpl_container">
          {categories.map(category => (
            <div key={category.id} className="lpl_category-section">
              <div className="lpl_category-header">
                <div className="lpl_category-icon">{category.icon}</div>
                <div className="lpl_category-title">
                    <h3>{category.Subtitle}</h3>
                   
                </div>
                <h2>{category.title}</h2>
              </div>
              
              <div className="lpl_projects-grid">
                {category.projects.map(project => (
                  <div key={project.id} className="lpl_project-card">
                    <div className="lpl_project-image">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="lpl_drawing-image"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.parentElement.innerHTML = `
                            <div class="lpl_image-placeholder">
                              <div class="lpl_placeholder-content">
                                <span>${project.name}</span>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                    <div className="lpl_project-info">
                      <h3>{project.name}</h3>
                      <div className="lpl_button-group">
                        <a 
                          href={project.viewLink} 
                          className="lpl_view-btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="lpl_btn-icon" />
                          View Drawing
                        </a>
                        <a 
                          href={`mailto:info@fsmdrawings.com?subject=Request for PDF: ${project.name}`} 
                          className="lpl_request-btn"
                        >
                          <FaEnvelope className="lpl_btn-icon" />
                          Request PDF
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="lpl_drawings-cta">
        <div className="lpl_container">
          <div className="lpl_cta-card">
            <h2>Need a Custom Solution?</h2>
            <p>Contact us to discuss how we can create personalized drawings for your specific project requirements.</p>
            <div className="lpl_cta-buttons">
              <a href="mailto:adam@fsmdrawings.com" className="lpl_cta-btn lpl_primary">
                <FaEnvelope className="lpl_btn-icon" />
                Email Us
              </a>
              <a href="tel:6036746447" className="lpl_cta-btn lpl_secondary">
                <FaPhone className="lpl_btn-icon" />
                Call Us: (603) 674-6447
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SampleDrawings;