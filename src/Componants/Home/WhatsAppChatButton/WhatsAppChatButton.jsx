// WhatsAppChatButton.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppChatButton = () => {
  const whatsappNumber = "93785032858"; // Your number without + or spaces
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-button"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        width: 64,
        height: 64,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 6px 12px rgba(37, 211, 102, 0.6)",
        zIndex: 1000,
        cursor: "pointer",
        textDecoration: "none",
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(37, 211, 102, 0.8)";
        e.currentTarget.style.backgroundColor = "#1ebe57";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(37, 211, 102, 0.6)";
        e.currentTarget.style.backgroundColor = "#25D366";
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} color="white" size="2x" />
    </a>
  );
};

export default WhatsAppChatButton;
