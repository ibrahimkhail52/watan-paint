import React from "react";
import googleplay from "../../../assets/Home img/downloding/googleplay.webp";
import appstore from "../../../assets/Home img/downloding/Appstore.webp";
import dulux from "../../../assets/Home img/downloding/Dulux-Colour-Futures.avif";

export default function Download() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center border border-gray-300 rounded-xl p-6 md:p-10 gap-6 md:gap-10 max-w-6xl w-full mx-auto mt-10 bg-white shadow-sm">
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-gray-600 text-sm md:text-base mb-2">
          Dulux Color of the Year 2022
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          See Bright Skies on your walls
        </h1>
        <p className="text-gray-700 text-sm md:text-base mb-6">
          Download the fast and free Dulux Visualizer app to see how Bright
          Skies can transform your home.
        </p>
        <div className="flex justify-center md:justify-start gap-4 flex-wrap">
          <img
            src={googleplay}
            alt="Google Play"
            className="w-32 cursor-pointer hover:scale-105 transition"
          />
          <img
            src={appstore}
            alt="App Store"
            className="w-32 cursor-pointer hover:scale-105 transition"
          />
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={dulux}
          alt="Dulux"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
