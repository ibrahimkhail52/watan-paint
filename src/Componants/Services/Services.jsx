import React from "react";
import { motion as Motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Interior Painting",
    description:
      "Transform your interiors with smooth, long-lasting, and vibrant finishes tailored to your style.",
    icon: "🎨",
  },
  {
    id: 2,
    title: "Exterior Painting",
    description:
      "Protect and beautify your building exterior with weather-resistant coatings and expert application.",
    icon: "🏠",
  },
  {
    id: 3,
    title: "Consultation & Color Matching",
    description:
      "Professional advice and precise color matching to help you pick the perfect shade for any space.",
    icon: "🧑‍🎨",
  },
  {
    id: 4,
    title: "Protective Coatings",
    description:
      "High-performance protective coatings for durability against weather, mold, and wear.",
    icon: "🛡️",
  },
];

// Card fade-in + slide up animation
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

// Icon scale animation variants
const iconVariants = {
  initial: { scale: 1 },
  hovered: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 300 },
  },
};

export default function Services() {
  return (
    <div className="services-page container mx-auto p-6 mt-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map(({ id, title, description, icon }, index) => (
          <Motion.div
            key={id}
            className="service-card border rounded shadow p-6 hover:shadow-lg transition flex items-start space-x-4 cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {/* Icon that scales up on icon hover only */}
            <Motion.div
              className="text-5xl"
              variants={iconVariants}
              initial="initial"
              whileHover="hovered" // <-- scale icon on icon hover only
            >
              {icon}
            </Motion.div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-700">{description}</p>
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  );
}
