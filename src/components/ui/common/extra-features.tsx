"use client";
import { highlightWords } from "@/app/utility/highlightWords";
import renderImg from "@/imgImport";
import renderSvg from "@/svgImport";
import renderVideo from "@/videoImport";
import React, { useState } from "react";

interface data {
  heading: string;
  subheading: string;
  centerImage: string;
  features: {
    icon: string;
    heading: string;
    description: string;
    video?: any;
  }[];
}

const ExtraFeatures: React.FC<{
  data: data;
  title: string;
  showArrow?: boolean;
  horizantal?: any;
}> = ({ data, title, showArrow }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className="flex flex-col space-y-2 lg:space-y-0">
      {showArrow && (
        <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center lg:-mb-32 lg:ml-40">
          {renderSvg("handDrawArrow2")}
        </div>
      )}
      <div className="flex flex-col space-y-2 ">
        <h1 className="text-primary text-xs font-semibold ">{title}</h1>
        <h2 className="text-4xl lg:text-5xl font-piepie tracking-wide  w-[100%] lg:w-[50%]">
          {highlightWords(data?.heading, ["Effortless"], "text-primary")}
        </h2>
        <h2 className="text-sm text-secondary-foreground  w-[100%] lg:w-[35%]">
          {data?.subheading}
        </h2>
      </div>
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Feature Icons and Text */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {data?.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start space-y-1"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="">
                  {/* Icon for the feature */}
                  {renderSvg(feature.icon)}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{feature.heading}</h3>
                  <p className="text-secondary-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Central Image */}
          <div className="relative flex justify-center items-center ">
            {selectedIndex == -1 ? (
              <img
                src={data.centerImage}
                alt="Product Image"
                className="max-w-full h-auto"
              />
            ) : (
              <video
                src={renderVideo(data.features[selectedIndex].video)}
                className="w-[606px] h-[603px]  rounded-xxl"
                autoPlay
                loop
                muted
                style={{
                  width: "606px",
                  height: "603px",
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExtraFeatures;
