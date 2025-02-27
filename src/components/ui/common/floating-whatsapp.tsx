// components/ui/FloatingWhatsApp.tsx
import React from "react";
import renderSvg from "@/svgImport";

const FloatingWhatsApp = () => {
  const phoneNumber = "919606755032"; // Replace with your WhatsApp number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <div onClick={handleClick} className="fixed bottom-20 sm:right-4  xs:-right-2 shadow-2xl" style={{ zIndex: 100}}>
      <div>{renderSvg("floatingWhatsApp")}</div>
    </div>
  );
};

export default FloatingWhatsApp;
