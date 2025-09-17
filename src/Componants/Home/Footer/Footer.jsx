import React, { useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "../../../assets/Home img/nav/LOGO.png";

// Animated heading component with fade-in and slight y animation only on load, no hover movement except zoom
function AnimatedHeading({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return (
    <Motion.h3
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="text-lg font-semibold mb-4 cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </Motion.h3>
  );
}

export default function Footer() {
  const menuItems = {
    Dulux: ["About Dulux", "Contact Us", "Find a Dulux store", "Sitemap"],
    "Popular categories": [
      "Colours",
      "Products",
      "Decoration Ideas",
      "Expert Help",
      "Colour of the Year",
    ],
    Access: ["Accessibility", "Colour Accuracy"],
  };

  return (
    <footer className="bg-[#002776] text-white">
      {/* Top section */}
      <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(menuItems).map(([section, items]) => (
          <div key={section}>
            <AnimatedHeading>{section}</AnimatedHeading>
            <ul className="space-y-2 text-sm text-gray-200">
              {items.map((item) => (
                <Motion.li
                  key={item}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.05, color: "#60a5fa" }} // subtle blue color on hover
                  transition={{ duration: 0.3 }}
                >
                  <a href="#">{item}</a>
                </Motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Middle section with logo */}
      <div className="bg-white py-6">
        <img
          src={logo}
          alt="Dulux Logo"
          className="mx-auto h-32 object-contain"
        />
      </div>

      {/* Bottom links */}
      <div className="bg-white text-xs text-gray-600 text-center py-4 px-4 border-t border-gray-200">
        <div className="flex flex-wrap justify-center gap-4 mb-2">
          {[
            "Cookies",
            "Cookie settings",
            "Privacy policy",
            "Legal",
            "Other Watan websites",
            "Accessibility statement",
          ].map((link) => (
            <a key={link} href="#" className="hover:underline cursor-pointer">
              {link}
            </a>
          ))}
        </div>
        <p className="text-gray-500">
          Copyright © 2024 Watan Paints &nbsp;
          <span className="text-[#002776] font-semibold">Watan</span>
        </p>
      </div>
    </footer>
  );
}
