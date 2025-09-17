import React, { useState } from "react";
import lamination from "../../../assets/Home img/Feature Product/lamination-guard.webp";
import apcolite from "../../../assets/Home img/Feature Product/apcolite.webp";
import royale from "../../../assets/Home img/Feature Product/royale-glitz.webp";

const images = [lamination, apcolite, royale];

export default function FeatureProducts() {
  const [index, setIndex] = useState(0);

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-5xl mx-auto mt-6 px-4">
      {/* Container for text and arrows */}
      <div className="flex justify-between items-center mb-3">
        {/* Text on the left */}
        <div className="text-2xl font-semibold">FEATURED PRODUCTS</div>

        {/* Arrows on the right */}
        <div className="flex space-x-3">
          <button
            onClick={prevImage}
            className="w-10 h-10 flex items-center justify-center bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80 transition"
            aria-label="Previous Image"
          >
            &#8592;
          </button>
          <button
            onClick={nextImage}
            className="w-10 h-10 flex items-center justify-center bg-black bg-opacity-60 text-white rounded-full hover:bg-opacity-80 transition"
            aria-label="Next Image"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Image */}
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full object-cover rounded-md"
      />
    </div>
  );
}
