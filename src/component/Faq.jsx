import React, { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    "How does an investor gain access to MF Utility?",
    "Will investors be able to have multiple Common Account Numbers?",
    "How does an investor gain access to MF Utility?",
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">FAQ</h2>
      {faqData.map((question, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div
            className={`faq-question ${activeIndex === index ? 'active-question' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            {question}
            <span className="faq-icon">
              {activeIndex === index ? (
                <i className="fa-solid fa-circle-minus"></i>
              ) : (
                <i className="fa-solid fa-circle-plus"></i>
              )}
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco.
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
