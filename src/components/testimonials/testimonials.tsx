import React, { useState, useEffect, useCallback } from 'react';
import './testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  id: number;
  clientName: string;
  reviewText: string;
  profileImage: string;
  position: string;
  company: string;
}

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      clientName: "Sarah Johnson",
      reviewText: "Working with this team has been an absolute pleasure. Their attention to detail and professional approach resulted in a product that exceeded our expectations. The communication was excellent throughout the entire process.",
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      position: "Marketing Director",
      company: "TechCorp Inc."
    },
    {
      id: 2,
      clientName: "Michael Chen",
      reviewText: "Outstanding service and exceptional results. They understood our vision perfectly and delivered a solution that not only met but surpassed our business objectives. Highly recommended for any complex project.",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      position: "CTO",
      company: "Innovate Labs"
    },
    {
      id: 3,
      clientName: "Emily Rodriguez",
      reviewText: "The quality of work and dedication shown by this team was remarkable. They consistently met deadlines and exceeded our quality standards. A truly professional partnership that we look forward to continuing.",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      position: "Product Manager",
      company: "Global Solutions"
    },
    {
      id: 4,
      clientName: "David Thompson",
      reviewText: "Exceptional creativity combined with technical excellence. They took our rough ideas and turned them into a polished, high-performing product. The after-launch support has been fantastic and responsive.",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      position: "Founder & CEO",
      company: "StartUp Ventures"
    },
    {
      id: 5,
      clientName: "Lisa Wang",
      reviewText: "Reliable, professional, and highly skilled. The team demonstrated deep expertise in their field and delivered a solution that perfectly addresses our business needs. Looking forward to future collaborations.",
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      position: "Operations Director",
      company: "Enterprise Plus"
    }
  ];

  const getVisibleAvatars = () => {
    const total = testimonials.length;
    const indices = [
      currentIndex,
      (currentIndex + 1) % total,
      (currentIndex + 2) % total
    ];
    return indices.map(index => ({
      ...testimonials[index],
      isActive: index === currentIndex
    }));
  };

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [testimonials.length, isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => setIsTransitioning(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const currentTestimonial = testimonials[currentIndex];
  const visibleAvatars = getVisibleAvatars();

  return (
    <section 
      className="testimonial-slider"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onClick={handleInteraction}
    >
      <h2 className="testimonial-headline">TESTIMONIALS FROM OUR VALUED CLIENTS</h2>
      
      <div className="testimonial-container">
        {/* Left Side - Testimonial Text */}
        <div className="testimonial-content">
          {/* Mobile Avatar - Only visible on mobile */}
          <div className="mobile-avatar">
            <div className="mobile-avatar-container">
              <img
                src={currentTestimonial.profileImage}
                alt={currentTestimonial.clientName}
                className="mobile-avatar-image"
              />
              <div className="active-indicator"></div>
            </div>
          </div>

          <div 
            className={`testimonial-text ${isTransitioning ? 'fade-out' : 'fade-in'}`}
            key={currentIndex}
          >
            <div className="quote-icon"><FaQuoteLeft/></div>
            <p>{currentTestimonial.reviewText}</p>
          </div>
          
          <div 
            className={`client-info ${isTransitioning ? 'fade-out' : 'fade-in'}`}
          >
            <div className="client-name">{currentTestimonial.clientName}</div>
            <div className="client-meta">
              <span className="client-position">{currentTestimonial.position}</span>
              <span className="client-company">, {currentTestimonial.company}</span>
            </div>
          </div>
        </div>

        {/* Right Side - Avatar Layout (Desktop Only) */}
        <div className="avatar-layout desktop-only">
          {/* Top Right Avatar */}
          <div className="avatar-position top-right">
            <div className={`avatar-wrapper ${visibleAvatars[0].isActive ? 'active' : ''}`}>
              <button
                className="avatar-button"
                onClick={() => goToSlide(testimonials.findIndex(t => t.id === visibleAvatars[0].id))}
                aria-label={`View testimonial from ${visibleAvatars[0].clientName}`}
              >
                <img
                  src={visibleAvatars[0].profileImage}
                  alt={visibleAvatars[0].clientName}
                  className="avatar-image"
                />
              </button>
              {visibleAvatars[0].isActive && (
                <div className="active-profile-badge">
                  <span>Active</span>
                </div>
              )}
              <div className="avatar-tooltip">
                {visibleAvatars[0].clientName}
              </div>
            </div>
          </div>

          {/* Lower Left Avatar */}
          <div className="avatar-position lower-left">
            <div className={`avatar-wrapper ${visibleAvatars[1].isActive ? 'active' : ''}`}>
              <button
                className="avatar-button"
                onClick={() => goToSlide(testimonials.findIndex(t => t.id === visibleAvatars[1].id))}
                aria-label={`View testimonial from ${visibleAvatars[1].clientName}`}
              >
                <img
                  src={visibleAvatars[1].profileImage}
                  alt={visibleAvatars[1].clientName}
                  className="avatar-image"
                />
              </button>
              {visibleAvatars[1].isActive && (
                <div className="active-profile-badge">
                  <span>Active</span>
                </div>
              )}
              <div className="avatar-tooltip">
                {visibleAvatars[1].clientName}
              </div>
            </div>
          </div>

          {/* Bottom Right Avatar */}
          <div className="avatar-position bottom-right">
            <div className={`avatar-wrapper ${visibleAvatars[2].isActive ? 'active' : ''}`}>
              <button
                className="avatar-button"
                onClick={() => goToSlide(testimonials.findIndex(t => t.id === visibleAvatars[2].id))}
                aria-label={`View testimonial from ${visibleAvatars[2].clientName}`}
              >
                <img
                  src={visibleAvatars[2].profileImage}
                  alt={visibleAvatars[2].clientName}
                  className="avatar-image"
                />
              </button>
              {visibleAvatars[2].isActive && (
                <div className="active-profile-badge">
                  <span>Active</span>
                </div>
              )}
              <div className="avatar-tooltip">
                {visibleAvatars[2].clientName}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-navigation">
        <div className="mobile-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;