// components/ui/FloatingWhatsApp.tsx
import React, { useEffect, useState } from "react";
import renderSvg from "@/svgImport";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { X } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "919606755032";
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem('whatsappPopupShown');
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('whatsappPopupShown', 'true');
      }, 5000);
    
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          onClick={handleClick}
          className="fixed bottom-20 sm:right-4 right-2 outline-none"
          style={{ zIndex: 100 }}
        >
          <div>{renderSvg("floatingWhatsApp")}</div>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 bg-gray-50 mr-2 md:mr-4">
        <div className="flex justify-between items-center bg-green-600 p-3 text-white rounded-t-lg">
          <h4 className="font-medium">Chat with us!</h4>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="hover:bg-green-700 rounded-full p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Hi! 👋</p>
            <p className="text-sm text-gray-600">How can i help you</p>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Start Chatting
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FloatingWhatsApp;
