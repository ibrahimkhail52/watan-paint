import React from "react";
import bgImage from "../../../assets/Home img/ColorCard/img_5037.avif";

export default function ColorCard() {
  return (
    <div
      className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Blue card */}
      <div className="bg-[#002776] text-white p-6 sm:p-8 rounded-tr-[2rem] rounded-br-[2rem] max-w-md sm:max-w-lg mx-4 sm:mx-12">
        <p className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2 opacity-80">
          Partnership with new Velvet Touch
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4 font-sans leading-snug">
          Dulux celebrates <br /> Café Zouk
        </h2>
        <p className="text-xs sm:text-sm mb-4 sm:mb-6 opacity-90 leading-relaxed">
          Giving Cafe Zouk a completely new look using Dulux super-premium
          Velvet Touch paint.
        </p>
        <button className="bg-green-600 hover:bg-green-700 transition px-4 py-2 rounded text-white font-semibold text-sm">
          See more
        </button>
      </div>
    </div>
  );
}
