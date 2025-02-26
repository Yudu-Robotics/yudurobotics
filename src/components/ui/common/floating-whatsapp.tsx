// components/ui/FloatingWhatsApp.tsx
import React from "react";
import renderSvg from "@/svgImport";

const FloatingWhatsApp = () => {
  const phoneNumber = "919606755032"; // Replace with your WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="fixed bottom-20 sm:right-4  xs:-right-2"
      style={{ zIndex: 100 }}
    >
      <div>{renderSvg("floatingWhatsApp")}</div>
    </button>
  );
};

export default FloatingWhatsApp;
