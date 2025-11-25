import React, { useState, useEffect, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes, FaHome } from 'react-icons/fa';
import '../components/stylrs/BeforeAfterGallery.css';
import afterImage from '../images/DEERFIELD NH VET/AFTER/img-4-after.jpg'
import afterImage2 from '../images/DEERFIELD NH VET/AFTER/img-5-after.jpg'
import im4bwerfore from '../images/DEERFIELD NH VET/BEFORE/img-4-before.jpg'
import img4after from '../images/DEERFIELD NH VET/AFTER/img-3-after.jpg'
import imgbefore12 from '../images/SZEKELY RESIDENCE MELROSE MA/BEFORE/img-18-before.jpg'
import imgbefore13 from '../images/SZEKELY RESIDENCE MELROSE MA/BEFORE/img-19-before.jpg'
import imgfore12 from '../images/SZEKELY RESIDENCE MELROSE MA/AFTER/img-18-after.jpg'
import imgfore13 from '../images/SZEKELY RESIDENCE MELROSE MA/AFTER/img-18-after.jpg'
import Header from '../components/header/nav';
import Footer from '../components/footer/footer';
interface Project {
  id: string;
  title: string;
  beforeImages: string[];
  afterImages: string[];
}

const BeforeAfterGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'before' | 'after' | 'split'>('split');

  // Sample projects data
  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'DEERFIELD NH VET',
      beforeImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-5-before.JPG',
        'https://ik.imagekit.io/dloitl7fd8/img-6-before.JPG',
        im4bwerfore,
      ],
      afterImages: [
        afterImage,
         afterImage2,
        img4after,
      ]
    },
    {
      id: 'project-2',
      title: 'FATCHERIC RESIDENCE CONTOOCOOK NH',
      beforeImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-10-before.jpg',
        'https://ik.imagekit.io/dloitl7fd8/img-9-before.jpg'
      ],
      afterImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-10-after.jpeg',
        'https://ik.imagekit.io/dloitl7fd8/img-9-after.jpeg'
      ]
    },
    {
      id: 'project-3',
      title: 'MACLEOD HOLLIS NH',
      beforeImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-12-before.webp',
        'https://ik.imagekit.io/dloitl7fd8/img-11-before.jpg'
      ],
      afterImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-11-after.webp',
        'https://ik.imagekit.io/dloitl7fd8/img-12-after.webp'
      ]
    },
    {
      id: 'project-4',
      title: 'MONAGHAN RESIDENCE DANVERS MA',
      beforeImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-14-before.webp'
      ],
      afterImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-14-after.jpg'
      ]
    },
    {
      id: 'project-5',
      title: 'RUSSO RESIDENCE BOW NH',
      beforeImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-15-before.jpg',
        'https://ik.imagekit.io/dloitl7fd8/img-16-before.jpg'
      ],
      afterImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-16-after.jpg?updatedAt=1764080301811',
        'https://ik.imagekit.io/dloitl7fd8/IMG_8950.jpg?updatedAt=1764080301585'
      ]
    },
    {
      id: 'project-6',
      title: 'SIMMONS RESIDENCE MOULTONBORO NH',
      beforeImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-17-before.jpg'
      ],
      afterImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-17-after.JPG'
      ]
    }, {
      id: 'project-7',
      title: 'SZEKELY RESIDENCE MELROSE MA',
      beforeImages: [
        imgbefore12,
        imgbefore13
      ],
      afterImages: [
        imgfore12,
        imgfore13
      ]
    }, {
      id: 'project-6',
      title: 'BERGERON RESIDENCE',
      beforeImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-1-before.jpg',
        'https://ik.imagekit.io/dloitl7fd8/img-2-before.jpg'
      ],
      afterImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-2-after.JPG',
        'https://ik.imagekit.io/dloitl7fd8/img-1-after.JPG'
      ]
    }, {
      id: 'project-6',
      title: 'MAHONEY RESIDENCE PITTSFIELD NH',
      beforeImages: [
        'https://ik.imagekit.io/dloitl7fd8/img-13-before.jpg'
      ],
      afterImages: [
        'https://ik.imagekit.io/dloitl7fd8/2.jpg',
        'https://ik.imagekit.io/dloitl7fd8/3.jpg',
        'https://ik.imagekit.io/dloitl7fd8/img-13-after.jpg'
      ]
    }
  ];

  const openModal = useCallback((project: Project, imageIndex: number = 0) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setSelectedImageIndex(0);
    }, 300);
    document.body.style.overflow = 'unset';
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    
    const totalImages = Math.max(selectedProject.beforeImages.length, selectedProject.afterImages.length);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (selectedImageIndex + 1) % totalImages;
    } else {
      newIndex = selectedImageIndex === 0 ? totalImages - 1 : selectedImageIndex - 1;
    }
    
    setSelectedImageIndex(newIndex);
  }, [selectedProject, selectedImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal, navigateImage]);

  return (
    <div className="before-after-gallery">
      <Header/>
      {/* Simple Banner */}
      <section className="gallery-banner">
        <div className="banner-content">
          <div className="breadcrumb">
            <FaHome className="breadcrumb-icon" />
            <span>Projects</span>
            <span className="breadcrumb-divider">/</span>
            <span className="breadcrumb-active">Before & After</span>
          </div>
          <h1 className="banner-title">Project Transformations</h1>
          <p className="banner-subtitle">
            Witness the remarkable transformations from our single family home projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="project-title1">{project.title}</h3>
                
                <div className="project-images">
                  {project.beforeImages.map((beforeImg, imgIndex) => (
                    <div key={imgIndex} className="image-pair">
                      <div className="image-container">
                        <img 
                          src={beforeImg} 
                          alt={`Before - ${project.title}`}
                          onClick={() => openModal(project, imgIndex)}
                        />
                        <div className="image-label before">Before</div>
                      </div>
                      <div className="image-container">
                        <img 
                          src={project.afterImages[imgIndex]} 
                          alt={`After - ${project.title}`}
                          onClick={() => openModal(project, imgIndex)}
                        />
                        <div className="image-label after">After</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className={`image-modal ${isModalOpen ? 'active' : ''}`}>
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-controls">
                <div className="view-toggle">
                  <button 
                    className={`toggle-btn ${viewMode === 'before' ? 'active' : ''}`}
                    onClick={() => setViewMode('before')}
                  >
                    Before
                  </button>
                  <button 
                    className={`toggle-btn ${viewMode === 'split' ? 'active' : ''}`}
                    onClick={() => setViewMode('split')}
                  >
                    Split
                  </button>
                  <button 
                    className={`toggle-btn ${viewMode === 'after' ? 'active' : ''}`}
                    onClick={() => setViewMode('after')}
                  >
                    After
                  </button>
                </div>
                <button className="modal-close" onClick={closeModal}>
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className="modal-body">
              <div className="comparison-view">
                {viewMode === 'split' && (
                  <div className="split-view">
                    <div className="split-image">
                      <img 
                        src={selectedProject.beforeImages[selectedImageIndex]} 
                        alt="Before" 
                      />
                      <div className="view-label before">Before</div>
                    </div>
                    <div className="split-image">
                      <img 
                        src={selectedProject.afterImages[selectedImageIndex]} 
                        alt="After" 
                      />
                      <div className="view-label after">After</div>
                    </div>
                  </div>
                )}

                {viewMode === 'before' && (
                  <div className="single-view">
                    <img 
                      src={selectedProject.beforeImages[selectedImageIndex]} 
                      alt="Before" 
                    />
                    <div className="view-label before">Before</div>
                  </div>
                )}

                {viewMode === 'after' && (
                  <div className="single-view">
                    <img 
                      src={selectedProject.afterImages[selectedImageIndex]} 
                      alt="After" 
                    />
                    <div className="view-label after">After</div>
                  </div>
                )}
              </div>

              <button 
                className="nav-button prev"
                onClick={() => navigateImage('prev')}
              >
                <FaArrowLeft />
              </button>
              
              <button 
                className="nav-button next"
                onClick={() => navigateImage('next')}
              >
                <FaArrowRight />
              </button>

              <div className="image-counter">
                {selectedImageIndex + 1} / {Math.max(selectedProject.beforeImages.length, selectedProject.afterImages.length)}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default BeforeAfterGallery;