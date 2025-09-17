import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

export default function ContactIcons() {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <div className="flex justify-center gap-6 text-2xl">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/16ccvU185h/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 p-4 rounded-full hover:text-blue-600 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/murtaza-ibrahimkhail-a302b0347"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 p-4 rounded-full hover:text-blue-800 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/93785032858"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 p-4 rounded-full hover:text-green-500 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ibrahimkhail52"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 p-4 rounded-full hover:text-gray-800 transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
