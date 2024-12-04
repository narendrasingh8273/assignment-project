import React, { useState } from "react";

const cardData = [
  {
    title: "Lorem ipsum 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod",
    linkText: "Know More",
  },
  {
    title: "Lorem ipsum 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod",
    linkText: "Know More",
  },
  {
    title: "Lorem ipsum 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod",
    linkText: "Know More",
  },
  {
    title: "Lorem ipsum 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod",
    linkText: "Know More",
  },
];

const CardsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="card-section">
      <div
        className="cards-slider"
        style={{
          transform: `translateX(-${currentIndex * (100 / cardData.length)}%)`,
          width: `${cardData.length * 100}%`,
        }}
      >
        {cardData.map((card, index) => (
          <div className="card" key={index} style={{ width: `${100 / cardData.length}%` }}>
            <h4>{card.title}</h4>
            <p>{card.description}</p>
            <a href="#" className="know-more">
              {card.linkText} <span>&#8594;</span>
            </a>
          </div>
        ))}
      </div>
      <div className="slider-dots">
        {cardData.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
