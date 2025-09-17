import React from "react";
import { FaUsers, FaBrush, FaEye } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const AboutUs = () => {
  return (
    <Motion.section
      className="bg-white mt-10 py-16 px-6 md:px-20"
      initial={{ opacity: 0, y: 30 }} // Start slightly down & transparent
      animate={{ opacity: 1, y: 0 }} // Animate to fully visible & original position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          About WATAN Paint
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          At WATAN Paint, we bring your walls to life with vibrant colors and
          unmatched quality. Our team is passionate about transforming spaces
          into inspiring environments.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Our Team */}
          <div className="flex flex-col items-center px-4">
            <FaUsers className="text-5xl text-blue-600 mb-6 transition-transform duration-300 hover:scale-110 hover:text-blue-800" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Expert Team
            </h3>
            <p className="text-gray-600">
              Skilled painters dedicated to providing excellent craftsmanship
              and customer satisfaction.
            </p>
          </div>

          {/* Our Work */}
          <div className="flex flex-col items-center px-4">
            <FaBrush className="text-5xl text-green-600 mb-6 transition-transform duration-300 hover:scale-110 hover:text-green-800" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Work
            </h3>
            <p className="text-gray-600">
              Beautiful, durable finishes that transform your walls and enhance
              your space.
            </p>
          </div>

          {/* Our Vision */}
          <div className="flex flex-col items-center px-4">
            <FaEye className="text-5xl text-purple-600 mb-6 transition-transform duration-300 hover:scale-110 hover:text-purple-800" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the most trusted and innovative painting company, delivering
              excellence with every stroke.
            </p>
          </div>
        </div>
      </div>
    </Motion.section>
  );
};

export default AboutUs;
