// components/ImageWithText.tsx
import renderImg from "@/imgImport";
import React from "react";

interface ImageWithTextProps {
  imgSrc: string;
  text1: string;
  text2: string;
  text3?: string;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({
  imgSrc,
  text1,
  text2,
  text3,
}) => {
  return (
    <div className="relative font-tthoves">
      <img
        src={renderImg(imgSrc)}
        alt="Background"
        className="w-full h-full object-cover rounded-lg" // Use object-cover to cover the container
      />

      <div className="absolute inset-0 text-secondary-foreground text-xs lg:text-lg flex flex-col justify-between text-center py-14 px-20">
        <h2 className="">"{text1}"</h2>
        <h2 className="">"{text3}"</h2>
        <h2 className="">{text2}</h2>
      </div>
    </div>
  );
};

export default ImageWithText;
