import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const Slide = ({ content }) => {
    return <div className="w-full object-cover">{content}</div>;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, 2500);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);
  return (
    <div className="min-h-screen ">
      <div className="relative overflow-hidden rounded-lg">
        <Slide content={images[currentIndex]} />

        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
