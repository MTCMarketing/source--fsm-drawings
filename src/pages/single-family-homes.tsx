import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FaHome, FaArrowRight, FaArrowLeft, FaTimes, FaExpand, FaDownload } from 'react-icons/fa';
import '../components/stylrs/SingleFamilyHomesGallery.css';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'
import img10 from '../images/img10.jpg'
import img11 from '../images/img11.jpg'
import img12 from '../images/img12.jpg'
import img13 from '../images/img13.jpg'
import img14 from '../images/img14.jpg'
import img15 from '../images/img15.jpg'
import img16 from '../images/img16.jpg'
import img17 from '../images/img17.jpg'
import img18 from '../images/img18.jpg'
import img19 from '../images/img19.jpg'
import img20 from '../images/img20.jpg'
import img21 from '../images/img21.jpg'
import img22 from '../images/img22.jpg'
import img23 from '../images/img23.jpg'
import img24 from '../images/img24.jpg'
import img25 from '../images/img25.jpg'
import img26 from '../images/img26.jpg'
import img27 from '../images/img27.jpg'
import img28 from '../images/img28.jpg'
import img29 from '../images/img29.jpg'
import img30 from '../images/img30.jpg'
import img31 from '../images/img31.jpg'
import img32 from '../images/img32.jpg'
import img33 from '../images/img33.jpg'
import img34 from '../images/img34.jpg'
import img35 from '../images/img35.jpg'
import img36 from '../images/img36.jpg'
import img37 from '../images/img37.jpeg'
import img38 from '../images/img38.jpeg'
import img39 from '../images/img39.jpeg'
import img40 from '../images/img40.jpeg'
import img41 from '../images/img41.jpeg'
import img42 from '../images/img42.jpeg'
import img43 from '../images/img43.jpeg'
import img44 from '../images/img44.jpeg'
import img45 from '../images/img45.jpeg'
import img46 from '../images/img46.jpeg'
import img47 from '../images/img47.webp'
import img48 from '../images/img48.webp'

import img50 from '../images/img50.webp'
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

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41, img42, img43, img44, img45, img46, img47, img48, img50];
  const galleryImages: GalleryImage[] = Array.from({ length: 49 }, (_, i) => ({
    id: `sfh-${i + 1}`,
    src: images[i],
    title: `Modern Family Home ${i + 1}`,
    category: ['exterior', 'interior', 'landscape', 'architecture'][i % 4],
    description: `Beautiful single family home project showcasing modern design and exceptional craftsmanship. Features ${3 + (i % 4)} bedrooms, ${2 + (i % 3)} bathrooms with premium finishes throughout.`,
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

  const visibleImages = filteredImages.slice(0, visibleCount);

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
            <h1>Single Family Homes</h1>
            <p>Our collection of single family home designs including Cape, Colonial, and Ranch styles.</p>
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

          {/* Load More Button */}
          {visibleCount < filteredImages.length && (
            <div className="load-more-section">
              <button 
                className="load-more-btn"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setVisibleCount(prev => Math.min(prev + 20, filteredImages.length));
                    setIsLoading(false);
                  }, 1000);
                }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="loading-spinner"></div>
                    Loading...
                  </>
                ) : (
                  'Load More'
                )}
              </button>
            </div>
          )}

          {/* Show completion message when all images are loaded */}
          {visibleCount >= filteredImages.length && filteredImages.length > 0 && (
            <div className="load-complete">
              <span>All {filteredImages.length} projects loaded</span>
            </div>
          )}
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