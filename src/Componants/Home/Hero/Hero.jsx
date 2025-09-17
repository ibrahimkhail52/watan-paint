import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

// Import images
import bgImg1 from "../../../assets/Home img/hero/slide1.png";
import bgImg2 from "../../../assets/Home img/hero/slide2.png";
import bgImg3 from "../../../assets/Home img/hero/slide3.png";
import bgImg4 from "../../../assets/Home img/hero/slide4.png";
import bgImg5 from "../../../assets/Home img/hero/slide5.png";
import bgImg6 from "../../../assets/Home img/hero/slide6.png";

const images = [bgImg1, bgImg2, bgImg3, bgImg4, bgImg5, bgImg6];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full top-20 h-[60vh] flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <Motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-contain select-none absolute top-0 left-0"
          draggable={false}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
}

export default Hero;
