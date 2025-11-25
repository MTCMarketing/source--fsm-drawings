import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaHome, FaArrowRight, FaArrowLeft, FaTimes, FaExpand, FaDownload } from 'react-icons/fa';
import '../components/stylrs/SingleFamilyHomesGallery.css';
import img1 from '../images/img-multi1.jpg'
import img2 from '../images/img-multi2.jpg'
import img3 from '../images/img-multi3.jpg'
import img4 from '../images/img-multi4.jpg'
import img5 from '../images/img-multi5.jpg'
import img6 from '../images/img-multi6.jpg'
import img7 from '../images/img-multi7.jpg'
import img8 from '../images/img-multi8.jpg'
import img9 from '../images/img-multi9.jpg'
import img10 from '../images/img-multi10.jpg'
import img11 from '../images/img-multi11.jpg'
import img12 from '../images/img-multi12.jpg'
import img13 from '../images/img-multi13.jpg'
import img14 from '../images/img-multi14.jpg'
import img15 from '../images/img-multi15.jpg'
import Header from '../components/header/nav';
import Footer from '../components/footer/footer';


interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
  featured?: boolean;
  size?: string;
  rooms?: string;
  style?: string;
}

const SingleFamilyHomesGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [gridLayout, setGridLayout] = useState<string>('grid-3');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
  const galleryImages: GalleryImage[] = Array.from({ length: 15 }, (_, i) => ({
    id: `sfh-${i + 1}`,
    src: images[i],
    title: `Multi Family Home ${i + 1}`,
    category: ['exterior', 'interior', 'landscape', 'architecture'][i % 4],
    description: `Beautiful multi family home project showcasing modern design and exceptional craftsmanship. Features ${3 + (i % 4)} bedrooms, ${2 + (i % 3)} bathrooms with premium finishes throughout.`,
    featured: i % 10 === 0,
    size: `${1500 + (i * 100)} sq ft`,
    rooms: `${3 + (i % 4)} BD / ${2 + (i % 3)} BA`,
    style: ['Modern', 'Traditional', 'Contemporary', 'Craftsman'][i % 4]
  }));

  const categories = ['all', 'exterior', 'interior', 'landscape', 'architecture', 'featured'];

  const filteredImages = galleryImages.filter(image => 
    filter === 'all' ? true : 
    filter === 'featured' ? image.featured :
    image.category === filter
  );

  const visibleImages = filteredImages;

  // Infinite scroll implementation
  useEffect(() => {
    if (isLoading) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredImages.length) {
          setIsLoading(true);
          setTimeout(() => {
            setVisibleCount(prev => Math.min(prev + 12, filteredImages.length));
            setIsLoading(false);
          }, 800);
        }
      },
      { threshold: 0.5 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [visibleCount, filteredImages.length, isLoading]);

  const handleImageLoad = useCallback((id: string) => {
    setLoadedImages(prev => new Set(prev).add(id));
  }, []);

  const openModal = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
    document.body.style.overflow = 'unset';
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredImages.length;
    } else {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  }, [selectedImage, filteredImages]);

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

  // Preload next and previous images for smooth navigation
  useEffect(() => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;

    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    preloadImage(filteredImages[nextIndex].src);
    preloadImage(filteredImages[prevIndex].src);
  }, [selectedImage, filteredImages]);

  return (
    <div className="sfh-gallery">
      <Header/>
      {/* Banner Section */}
      <section className="lpl_drawings-hero">
        <div className="lpl_container">
          <div className="lpl_hero-content">
            <h1>Multi  Family Homes</h1>
            <p>Our collection of multi family home designs including Cape, Colonial, and Ranch styles.</p>
            <div className="lpl_hero-divider"></div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          {/* Grid Layout Filter */}
          <div className="grid-filter">
            <button 
              className={`grid-btn ${gridLayout === 'grid-2' ? 'active' : ''}`}
              onClick={() => setGridLayout('grid-2')}
            >
              2 Columns
            </button>
            <button 
              className={`grid-btn ${gridLayout === 'grid-3' ? 'active' : ''}`}
              onClick={() => setGridLayout('grid-3')}
            >
              3 Columns
            </button>
            <button 
              className={`grid-btn ${gridLayout === 'grid-4' ? 'active' : ''}`}
              onClick={() => setGridLayout('grid-4')}
            >
              4 Columns
            </button>
          </div>
          
          {/* Image Count Display */}
          <div className="image-count">
            Showing {visibleImages.length} of {filteredImages.length} projects
          </div>
          
          {/* Gallery Grid */}
          <div className={`gallery-grid ${gridLayout}`}>
            {visibleImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="image-container">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => handleImageLoad(image.id)}
                    style={{
                      opacity: loadedImages.has(image.id) ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                  <div className="image-overlay">
                    <button 
                      className="quick-view-btn"
                      onClick={() => openModal(image)}
                    >
                      <FaExpand />
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div className={`image-modal ${isModalOpen ? 'active' : ''}`}>
          <div className="modal-backdrop" onClick={closeModal}></div>
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-section">
                <h2 className="modal-title">{selectedImage.title}</h2>
                <div className="modal-meta">
                  <span className="modal-category">{selectedImage.category}</span>
                  <span className="modal-size">{selectedImage.size}</span>
                  <span className="modal-rooms">{selectedImage.rooms}</span>
                </div>
              </div>
              <div className="modal-actions">
                <button className="modal-action-btn" title="Download">
                  <FaDownload />
                </button>
                <button className="modal-close" onClick={closeModal} title="Close">
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Modal Image Container */}
            <div className="modal-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="modal-image"
              />
              
              {/* Navigation Buttons */}
              <button 
                className="nav-button prev-button"
                onClick={() => navigateImage('prev')}
                aria-label="Previous image"
              >
                <FaArrowLeft />
              </button>
              
              <button 
                className="nav-button next-button"
                onClick={() => navigateImage('next')}
                aria-label="Next image"
              >
                <FaArrowRight />
              </button>

              {/* Image Counter */}
              <div className="image-counter">
                {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} / {filteredImages.length}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <div className="modal-description">
                <p>{selectedImage.description}</p>
              </div>
              <div className="modal-features">
                <div className="feature">
                  <strong>Style:</strong> {selectedImage.style}
                </div>
                <div className="feature">
                  <strong>Category:</strong> {selectedImage.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <Footer/>
    </div>
  );
};

export default SingleFamilyHomesGallery;