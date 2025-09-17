import React, { useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import icon1 from "../../assets/product img/1.avif";
import icon2 from "../../assets/product img/2.webp";
import icon3 from "../../assets/product img/3.avif";
import icon4 from "../../assets/product img/4.avif";
import icon5 from "../../assets/product img/5.jpg";
import icon6 from "../../assets/product img/6.avif";
import icon7 from "../../assets/product img/7.avif";
import icon8 from "../../assets/product img/8.avif";
import icon9 from "../../assets/product img/9.avif";

const products = [
  {
    id: 1,
    name: "Premium Interior Paint",
    description: "Smooth finish, low odor, washable.",
    price: "$25 per gallon",
    image: icon1,
  },
  {
    id: 2,
    name: "Exterior Weatherproof Paint",
    description: "Durable, UV resistant, all weather.",
    price: "$30 per gallon",
    image: icon2,
  },
  {
    id: 3,
    name: "Eco-Friendly Primer",
    description: "Low VOC, great adhesion for all surfaces.",
    price: "$20 per gallon",
    image: icon3,
  },
  {
    id: 4,
    name: "High Gloss Enamel",
    description: "Glossy finish, durable and long lasting.",
    price: "$28 per gallon",
    image: icon4,
  },
  {
    id: 5,
    name: "Matte Finish Paint",
    description: "Smooth matte finish with excellent coverage.",
    price: "$26 per gallon",
    image: icon5,
  },
  {
    id: 6,
    name: "Textured Wall Paint",
    description: "Adds texture and depth to your walls.",
    price: "$32 per gallon",
    image: icon6,
  },
  {
    id: 7,
    name: "Quick Dry Primer",
    description: "Fast drying primer for all surfaces.",
    price: "$22 per gallon",
    image: icon7,
  },
  {
    id: 8,
    name: "Weather Resistant Exterior Paint",
    description: "Protects surfaces from harsh weather.",
    price: "$35 per gallon",
    image: icon8,
  },
  {
    id: 9,
    name: "Anti-Mold Paint",
    description: "Prevents mold growth in humid areas.",
    price: "$29 per gallon",
    image: icon9,
  },
];

function ProductCard({ product }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 0.95 }}
      className="rounded-lg shadow-lg p-4 flex flex-col cursor-pointer bg-white"
    >
      {product.image ? (
        <Motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain rounded bg-white"
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-400">
          Image Placeholder
        </div>
      )}
      <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
      <p className="mt-2 text-gray-600 flex-grow">{product.description}</p>
      <p className="mt-2 font-bold text-blue-700">{product.price}</p>
      <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
        Buy Now
      </button>
    </Motion.div>
  );
}

export default function Product() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8 text-blue-700 text-center">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
