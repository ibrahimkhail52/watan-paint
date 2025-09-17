import React from "react";
import { FaUserTie, FaLeaf, FaCogs, FaCheckCircle } from "react-icons/fa";
import sampleImage from "../../../assets/Home img/QualityPaintsSection/web-2.png";

export default function QualityPaintsSection() {
  const features = [
    {
      icon: <FaUserTie className="text-purple-600 w-6 h-6" />,
      title: "Skilled Professionals",
      description:
        "Our team comprises highly skilled experts who excel in creating paints with exceptional quality and consistency.",
    },
    {
      icon: <FaLeaf className="text-purple-600 w-6 h-6" />,
      title: "Eco-Friendly Solutions",
      description:
        "We offer environmentally responsible options, including low-VOC and VOC-free paints, for a healthier and more sustainable environment.",
    },
    {
      icon: <FaCogs className="text-purple-600 w-6 h-6" />,
      title: "Premium Materials",
      description:
        "We use top-grade raw materials in all our paints, primers, and coatings to deliver long-lasting, vibrant finishes.",
    },
    {
      icon: <FaCheckCircle className="text-purple-600 w-6 h-6" />,
      title: "Precision and Care",
      description:
        "Every batch is carefully formulated, with strict attention to detail in color matching, durability, and finish quality, ensuring perfection in every product.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={sampleImage}
            alt="Living room with paint"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            From Production to Perfection <br />
            Experience the Best Quality Paints
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
            We are proud to be recognized among the best paint makers in Kerala,
            delivering high-quality, cost-effective paint products without
            compromising on excellence. Our unwavering commitment to superior
            customer service ensures that every client is fully satisfied with
            our offerings.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ icon, title, description }, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="text-purple-700 font-semibold mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
