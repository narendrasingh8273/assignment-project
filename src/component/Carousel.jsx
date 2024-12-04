import React, { useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev-btn" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="carousel-item">
        {items[currentIndex]}
      </div>
      <button className="next-btn" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
