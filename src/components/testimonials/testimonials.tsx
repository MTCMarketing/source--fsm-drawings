import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import './testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  quote: string;
  rating: number;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Project Manager",
      company: "Johnson Construction LLC",
      quote: "FSM Drawings delivered exceptional residential plans that exceeded our expectations. Their attention to detail and code compliance made our project seamless from start to finish.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Real Estate Developer",
      company: "Chen Development Group",
      quote: "Working with FSM Drawings on our commercial project was outstanding. Their technical expertise and quick turnaround times helped us stay on schedule and within budget.",
      rating: 5
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      title: "Homeowner",
      company: "Private Residence",
      quote: "The team at FSM Drawings transformed our renovation vision into precise, professional drawings. Their collaborative approach made the entire process stress-free.",
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      title: "General Contractor",
      company: "Thompson Building Solutions",
      quote: "FSM Drawings consistently provides high-quality CADD services. Their shop drawings are detailed, accurate, and always delivered on time. Highly recommended!",
      rating: 5
    },
    {
      id: 5,
      name: "Jennifer Walsh",
      title: "Architect",
      company: "Walsh Design Studio",
      quote: "Their expertise in both residential and commercial drafting is impressive. FSM Drawings has become our go-to partner for all technical drawing needs.",
      rating: 5
    }
  ];

  const goToPrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      />
    ));
  };

  return (
    <section className="lpl_testimonials-section">
      <div className="lpl_container">
        <div className="lpl_section-header">
          <h2>What Our Clients Say</h2>
          <p>Trusted by homeowners, contractors, and developers across New England</p>
          <div className="lpl_hero-divider"></div>
        </div>

        <div 
          className="lpl_testimonial-slider"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="lpl_nav-button lpl_prev" onClick={goToPrev}>
            <FaChevronLeft />
          </button>

          <div className="lpl_testimonial-container">
            <div 
              className="lpl_testimonial-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="lpl_testimonial-slide">
                  <div className="lpl_testimonial-card">
                    <div className="lpl_quote-icon">
                      <FaQuoteLeft />
                    </div>
                    
                    <div className="lpl_rating">
                      {renderStars(testimonial.rating)}
                    </div>

                    <blockquote className="lpl_testimonial-quote">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="lpl_testimonial-author">
                      <div className="lpl_author-info">
                        <h4 className="lpl_author-name">{testimonial.name}</h4>
                        <p className="lpl_author-title">{testimonial.title}</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="lpl_nav-button lpl_next" onClick={goToNext}>
            <FaChevronRight />
          </button>
        </div>

        <div className="lpl_testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`lpl_dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;