import React, { useState, useEffect, useRef } from 'react';
import { FaBuilding, FaPlane, FaHospital, FaHome, FaTools, FaDraftingCompass, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import './portfolio.css';

interface Project {
  id: number;
  title: string;
  client: string;
  years: string;
  description: string;
  icon: JSX.Element;
  category: string;
  image: string;
}

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Westfield-Barnes Regional Airport Noise Mitigation",
      client: "FAA-funded, Westfield, MA",
      years: "2010-2013",
      description: "CADD services for 112 single-family homes in Noise Mitigation Program for airport home to MA Air National Guard's F-15 Eagles.",
      icon: <FaPlane />,
      category: "federal",
      image: "https://ik.imagekit.io/dloitl7fd8/projects-1.png"
    },
    {
      id: 2,
      title: "Westfield-Barnes Airport Buyout Program",
      client: "FAA-funded, Westfield, MA",
      years: "2010-2014",
      description: "Demolition of 13 homes with precise CADD services to prevent contractor back-charges through exact field verification.",
      icon: <FaPlane />,
      category: "federal",
      image: "https://ik.imagekit.io/dloitl7fd8/projects-2-aip3-airport.png"
    },
    {
      id: 3,
      title: "Westfield Barnes ANGB & Airport Updates",
      client: "Westfield Barnes",
      years: "2010",
      description: "Updated 84 ANSI-A sheets with technical modifications for Prime Contractor with fast-paced QA/QC process.",
      icon: <FaDraftingCompass />,
      category: "federal",
      image: "https://ik.imagekit.io/dloitl7fd8/2projects_clip_image0121-207x300-3.jpg"
    },
    {
      id: 4,
      title: "Deerfield Veterinary Clinic Expansion",
      client: "Deerfield, NH",
      years: "2011-2012",
      description: "15,000-s.f. fast-tracked renovation to state-of-the-art veterinary hospital while clinic remained operational.",
      icon: <FaHospital />,
      category: "commercial",
      image: "https://ik.imagekit.io/dloitl7fd8/projects-3-vet-clinic.png"
    },
    {
      id: 5,
      title: "American Red Cross Lab Renovation",
      client: "Worcester, MA",
      years: "2012",
      description: "4,500-s.f. blood draw and laboratory facility renovation with field data collection and AutoCAD services.",
      icon: <FaHospital />,
      category: "commercial",
      image: "https://ik.imagekit.io/dloitl7fd8/projects_clip_image0181-1.jpg"
    },
    {
      id: 6,
      title: "VA Medical Center Coordination",
      client: "Northport, NY",
      years: "2012",
      description: "CADD coordination drawings for mechanical/electrical/plumbing trades to prevent costly construction issues.",
      icon: <FaBuilding />,
      category: "commercial",
      image: "https://ik.imagekit.io/dloitl7fd8/projects_clip_image0201-3.jpg"
    },
    {
      id: 7,
      title: "W.P. Realty Drafting Services",
      client: "New England",
      years: "2009-Present",
      description: "Ongoing rapid-response CADD services with 72-hour site visits and 96-hour delivery for various properties.",
      icon: <FaHome />,
      category: "residential",
      image: "https://ik.imagekit.io/dloitl7fd8/projects_clip_image0221-1.jpg"
    },
    {
      id: 8,
      title: "MTA Camp Cutis Guild Renovation",
      client: "Building TS-11",
      years: "2012",
      description: "Conversion to modern administration/conference facility with AutoCAD-generated plans for Architect of Record.",
      icon: <FaBuilding />,
      category: "commercial",
      image: "https://ik.imagekit.io/dloitl7fd8/MTA-Camp-Cutis-Guild-A-3-1.png"
    }
  ];

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "112", label: "Homes Mitigated" },
    { value: "13", label: "Successful Demolitions" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle responsive slide count
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      goToNext();
    }

    if (touchStart - touchEnd < -100) {
      goToPrev();
    }
  };

  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? projects.length - slidesToShow : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev >= projects.length - slidesToShow ? 0 : prev + 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, slidesToShow]);

  // Get optimized image URL
 const getOptimizedImage = (url: string, width: number, height?: number) => {
  if (url.includes('ik.imagekit.io')) {
    const params = [`w-${width}`];
    if (height) params.push(`h-${height}`);
    params.push('q-80', 'c-maintain_ratio', 'f-auto');
    return `${url}?tr=${params.join(',')}`;
  }
  return url;
};
const getSrcSet = (url: string) => {
  if (url.includes('ik.imagekit.io')) {
    return `${url}?tr=w-400 400w, ${url}?tr=w-800 800w, ${url}?tr=w-1200 1200w`;
  }
  return url;
};

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectedProject && !(e.target as Element).closest('.project-preview')) {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedProject]);

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

        <div className="carousel-container">
          <button className="carousel-button prev" onClick={goToPrev}>
            <FaChevronLeft />
          </button>
          
          <div 
            className="carousel-wrapper"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="carousel-slides" 
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="project-card"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="project-image-container">
                   <img 
  src={getOptimizedImage(project.image, 800, 600)} 
  srcSet={getSrcSet(project.image)}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt={project.title}
  className="project-image"
  loading="lazy"
/>
                    <div className="image-overlay">
                      <div className="overlay-content">
                        <div className="card-header">
                          <div className="project-icon">{project.icon}</div>
                          <div className="project-meta">
                            <span className="project-years">{project.years}</span>
                            <span className="project-category">{project.category}</span>
                          </div>
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-client">{project.client}</div>
                        <p className="project-description">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-button next" onClick={goToNext}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {Array.from({ length: projects.length - slidesToShow + 1 }).map((_, index) => (
            <div 
              key={index} 
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        
        <div className="section-cta">
          <p>Ready to bring precision CADD services to your next project?</p>
          <a className="cta-btn" href='/Contact'>
            Contact Us <FaChevronRight />
          </a>
        </div>
      </div>
      

      {/* Project Preview Modal */}
      {selectedProject && (
        <div className="preview-overlay">
          <div className="project-preview">
            <button className="close-preview" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>
            
            <div className="preview-image-container">
              <img 
  src={getOptimizedImage(selectedProject.image, 1200, 800)} 
  srcSet={getSrcSet(selectedProject.image)}
  sizes="(max-width: 768px) 100vw, 80vw"
  alt={selectedProject.title}
  className="preview-image"
/>
            </div>
            
            <div className="preview-content">
              <div className="card-header">
                <div className="project-icon">{selectedProject.icon}</div>
                <div className="project-meta">
                  <span className="project-years">{selectedProject.years}</span>
                  <span className="project-category">{selectedProject.category}</span>
                </div>
              </div>
              
              <h3 className="preview-title">{selectedProject.title}</h3>
              <div className="project-client">{selectedProject.client}</div>
              <p className="preview-description">{selectedProject.description}</p>
              
              <div className="project-details">
                <div className="detail-item">
                  <span className="detail-label">Project Type:</span>
                  <span className="detail-value">{selectedProject.category}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Client:</span>
                  <span className="detail-value">{selectedProject.client}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{selectedProject.years}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;