import React from "react";
import {
  FaArrowRight,
  FaSprayCan,
  FaTools,
  FaBox,
  FaPaintRoller,
} from "react-icons/fa";

// Add this CSS to your global CSS file or inside a <style> tag if your setup supports it
const styles = `
@keyframes rotate360 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate-icon-on-hover:hover .icon-to-rotate {
  animation: rotate360 1s ease-in-out forwards;
}
`;

export default function ManufacturingProcess() {
  const steps = [
    {
      icon: <FaArrowRight className="w-10 h-10 text-purple-600" />,
      step: "STEP 1",
      title: "Material Preparation",
    },
    {
      icon: <FaSprayCan className="w-10 h-10 text-purple-600" />,
      step: "STEP 2",
      title: "Formulation and Mixing",
    },
    {
      icon: <FaTools className="w-10 h-10 text-purple-600" />,
      step: "STEP 3",
      title: "Quality Inspection",
    },
    {
      icon: <FaBox className="w-10 h-10 text-purple-600" />,
      step: "STEP 4",
      title: "Packaging and Distribution",
    },
  ];

  return (
    <>
      {/* Inject the CSS styles */}
      <style>{styles}</style>

      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        {/* Title */}
        <h2 className="text-3xl font-serif text-purple-800 mb-2">
          Our Manufacturing Process
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mb-4 max-w-xl mx-auto leading-relaxed">
          Our streamlined process ensures consistent quality, from raw materials
          to the final product, giving you reliable paint solutions every time.
        </p>

        {/* Paint roller icon with longer dashed lines */}
        <div className="flex items-center justify-center mb-8 space-x-6">
          <div className="border-t-2 border-dashed border-purple-400 w-40" />
          <FaPaintRoller className="text-[#00C898] w-8 h-8" />
          <div className="border-t-2 border-dashed border-purple-400 w-40" />
        </div>

        {/* Steps container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map(({ icon, step, title }, idx) => (
            <div
              key={idx}
              className=" duration-1000 border-2 border-dashed border-purple-300 rounded-lg p-6 flex flex-col items-center space-y-4 cursor-pointer"
            >
              <div className=" hover:rotate-180 duration-1000 bg-purple-100 rounded-full p-4">
                {icon}
              </div>
              <span className="text-sm font-bold text-[#00C898]">{step}</span>
              <h3 className="text-purple-800 text-lg font-serif">{title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
 