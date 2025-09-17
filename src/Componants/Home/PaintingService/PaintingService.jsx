import React from "react";

// Importing assets
import bgVideo from "../../../assets/Home img/PaintingService/bg-video.mp4";
import iconPainter from "../../../assets/Home img/PaintingService/Trained & Certified Painters.svg";
import iconConsultancy from "../../../assets/Home img/PaintingService/Free colour consultancy.svg";
import iconEco from "../../../assets/Home img/PaintingService/Eco- friendly products.svg";
import iconMasking from "../../../assets/Home img/PaintingService/Furniture & Floor Masking.svg";
import iconTools from "../../../assets/Home img/PaintingService/Mechanized tools.svg";

// Feature items
const features = [
  {
    imgSrc: iconPainter,
    alt: "Trained & Certified Painters",
    title: "Trained & Certified Painters",
  },
  {
    imgSrc: iconConsultancy,
    alt: "Free colour consultancy",
    title: "Free colour consultancy",
  },
  {
    imgSrc: iconEco,
    alt: "Eco-friendly products",
    title: "Eco-friendly products",
  },
  {
    imgSrc: iconMasking,
    alt: "Furniture & Floor Masking",
    title: "Furniture & Floor Masking",
  },
  {
    imgSrc: iconTools,
    alt: "Mechanized tools",
    title: "Mechanized tools",
  },
];

export default function PaintingService() {
  return (
    <div className="mt-40">
      {/* Heading */}
      <div className="w-full bg-white py-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          NxtGen Painting Service
        </h2>
      </div>

      {/* ✅ Video Section — Show on tablets and larger */}
      <div className="hidden sm:block relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden text-white">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={bgVideo}
        ></video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          {/* Feature Cards */}
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-6xl mb-6 py-2 px-2">
            {features.map(({ imgSrc, alt, title }) => (
              <div
                key={title}
                className="bg-[#F9C784]/70 backdrop-blur-md rounded-lg p-5 flex flex-col items-center text-center font-bold text-[#0E153A] shadow-md w-[140px] sm:w-[160px] hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={imgSrc}
                  alt={alt}
                  className="mb-2 w-12 h-12 sm:w-14 sm:h-14 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
                <p className="text-sm sm:text-base leading-tight">{title}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-white text-pink-600 font-bold py-2 px-6 rounded border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300 text-sm sm:text-base">
            Book a Free Consultation
          </button>

          {/* Phone number */}
          <p className="mt-3 font-bold text-white text-sm sm:text-base px-3 py-1.5 rounded border border-transparent hover:bg-white hover:text-pink-600 cursor-pointer transition-colors duration-300">
            Call us on - 18002665566
          </p>
        </div>
      </div>

      {/* ✅ Fallback for mobile only (below sm) */}
      <div className="block sm:hidden bg-[#F9C784]/20 py-8 px-4 text-center">
        {/* Feature Cards */}
        <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
          {features.map(({ imgSrc, alt, title }) => (
            <div
              key={title}
              className="bg-white rounded-lg p-4 flex flex-col items-center text-center font-bold text-[#0E153A] shadow w-[140px]"
            >
              <img
                src={imgSrc}
                alt={alt}
                className="mb-2 w-12 h-12 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
              <p className="text-sm leading-tight">{title}</p>
            </div>
          ))}
        </div>

        {/* CTA and Phone */}
        <button className="mt-6 bg-pink-600 text-white font-bold py-2 px-5 rounded hover:bg-pink-700 transition">
          Book a Free Consultation
        </button>
        <p className="mt-3 font-bold text-gray-700 text-sm">
          Call us on - 18002665566
        </p>
      </div>
    </div>
  );
}
