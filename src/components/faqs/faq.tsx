import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './faq.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "What CADD services do you provide?",
      answer: "We offer comprehensive CADD services including architectural drafting, mechanical/electrical/plumbing coordination, site surveys, as-built drawings, renovation plans, and construction documentation for both residential and commercial projects."
    },
    {
      id: 2,
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple residential projects may take 1-2 weeks, while complex commercial or federal projects can take 4-8 weeks. We provide a detailed timeline estimate after our initial consultation."
    },
    {
      id: 3,
      question: "Do you work with clients remotely?",
      answer: "Yes, we regularly work with clients across the country. We use secure cloud platforms for file sharing, video conferencing for meetings, and digital tools for site measurements when needed."
    },
    {
      id: 4,
      question: "What industries do you specialize in?",
      answer: "We have extensive experience in aviation, healthcare, government facilities, commercial real estate, residential development, and educational institutions. Our team has handled projects ranging from small renovations to large federal contracts."
    },
    {
      id: 5,
      question: "How do you ensure quality control?",
      answer: "All drawings go through a rigorous 3-step quality control process: 1) Initial review by senior drafter, 2) Technical accuracy check by project manager, 3) Final compliance review against all project requirements before delivery."
    },
    {
      id: 6,
      question: "What file formats do you deliver?",
      answer: "We deliver drawings in DWG (AutoCAD), PDF, and DWF formats as standard. We can also provide files in DXF, SKP (SketchUp), RVT (Revit), and other formats upon request."
    }
  ];

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section">
       <div className="grid-overlay"></div>
      <div className="bg-pattern"></div>
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our services and processes</p>
          <div className="divider"></div>
        </div>
        
        <div className="faq-container">
          <div className="faq-column">
            {faqs.slice(0, 3).map((faq) => (
              <div 
                key={faq.id} 
                className={`faq-card ${activeId === faq.id ? 'active' : ''}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">
                    {activeId === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="faq-column">
            {faqs.slice(3).map((faq) => (
              <div 
                key={faq.id} 
                className={`faq-card ${activeId === faq.id ? 'active' : ''}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">
                    {activeId === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
      
      {/* Background shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>
   
    </section>
  );
};

export default FAQSection;