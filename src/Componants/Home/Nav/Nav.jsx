import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/Home img/nav/LOGO.png";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "Products", "Services", "About Us"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
        {/* Logo */}
        <div
          className="flex-shrink-0 flex items-center "
          style={{ minHeight: "80px" }}
        >
          <Link to="/">
            <img src={logo} alt="Logo" style={{ height: "80px" }} />
          </Link>
        </div>

        {/* Menu with blur */}
        <div
          className={`hidden md:flex md:space-x-8 items-center px-6 py-3 rounded-md transition-all duration-300 ${
            showNav && isScrolled
              ? "backdrop-blur-md bg-white/70 shadow-md"
              : "bg-transparent"
          }`}
        >
          {menuItems.map((text, idx) => {
            const to =
              text === "Home"
                ? "/"
                : `/${text.toLowerCase().replace(/\s+/g, "")}`;
            const isActive =
              location.pathname === to ||
              (to !== "/" && location.pathname.startsWith(to));

            return (
              <Link
                key={idx}
                to={to}
                className="relative flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-black hover:text-blue-700 transform transition-transform duration-200 hover:scale-105"
              >
                {/* Dot to the left */}
                {isActive && (
                  <span className="h-2 w-2 rounded-full bg-blue-700"></span>
                )}
                <span>{text}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none text-black hover:text-blue-700"
            aria-label="Main menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {menuItems.map((text, idx) => {
            const to =
              text === "Home"
                ? "/"
                : `/${text.toLowerCase().replace(/\s+/g, "")}`;
            const isActive =
              location.pathname === to ||
              (to !== "/" && location.pathname.startsWith(to));

            return (
              <Link
                key={idx}
                to={to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center px-4 py-3 text-black hover:bg-gray-200 relative transform transition-transform duration-200 hover:scale-105 ${
                  isActive ? "font-semibold text-blue-700" : ""
                }`}
              >
                {/* Dot on left for mobile menu */}
                {isActive && (
                  <span className="h-2 w-2 rounded-full bg-blue-700 mr-2"></span>
                )}
                {text}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
