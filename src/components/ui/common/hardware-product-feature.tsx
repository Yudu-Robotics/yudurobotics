"use client";
import { highlightWords } from "@/app/utility/highlightWords";
import renderVideo from "@/videoImport";
import React, { useState } from "react";

interface HardwareFeature {
  icon: string;
  heading: string;
  description: string;
  video?: any;
}

interface HardwareSection {
  heading: string;
  subheading: string;
  centerImage: string;
  features: HardwareFeature[];
}

interface HardwareData {
  section1: HardwareSection;
}

// Props for the main data structure
interface PageData {
  heading: string;
  wordsToHighlight: { text1: string[]; text2: string[] };
  subheading: string;
  images: string[];
  sectionHeader: string;
  ceoComment: string;
  features_data?: HardwareData; // Mark hardware as optional
  components: {
    shared: string[];
    unique: string[];
  };
}

interface PageProps {
  data: PageData;
}

const HardwareProductFeatures: React.FC<{ hardware: HardwareData }> = ({
  hardware,
}) => {
  const { section1 } = hardware;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <div className="flex flex-col justify-center space-y-2 items-center text-center">
        <h1 className="text-primary text-lg  xl:text-lg text-left sm:text-center w-full font-tthoves-semiBold text-[#CCBD1F]">
          Hardware
        </h1>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl w-[100%] lg:w-[50%] font-piepie tracking-wide  text-left sm:text-center">
          {highlightWords(section1.heading, ["Ready to Go"], "text-primary")}
        </h2>
        <h2 className="sm:w-[50%] text-lg sm:text-sm md:text-md lg:text-lg xl:text-xl text-secondary-foreground pt-3 text-left sm:text-center font-tthover">
          {section1.subheading}
        </h2>
      </div>
      <div className=" py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Side: Feature Icons and Text */}
          <div className="space-y-10 lg:mr-20">
            {hardware.section1.features.map(
              (feature, index) =>
                hardware.section1.features.length / 2 > index && (
                  <div
                    key={index}
                    className="flex flex-col items-start space-y-1 cursor-pointer "
                    onMouseEnter={() => setSelectedIndex(index)}
                    onMouseLeave={() => setSelectedIndex(-1)}
                  >
                    <div className="py-2 sm:py-5">
                      {/* Icon for the feature */}
                      <img
                        src={feature.icon}
                        alt={feature.heading}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h3 className=" text-lg xl:text-2xl font-tthoves-semiBold">
                        {feature.heading}
                      </h3>
                      <p className="pt-2 sm:pt-3 text-secondary-foreground sm:text-sm md:text-md lg:text-lg xl:text-xl font-tthover">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Right Side: Central Image */}
          <div className="relative flex justify-center  ">
            {selectedIndex == -1 ? (
              <img
                src={hardware.section1.centerImage}
                alt="Product Image"
                className="max-w-full h-auto"
              />
            ) : (
              <video
                src={renderVideo(
                  hardware.section1.features[selectedIndex].video
                )}
                className="w-[488px] h-[696px]  rounded-xxl"
                autoPlay
                loop
                muted
                style={{
                  width: "488px",
                  height: "696px",
                }}
              />
            )}
          </div>

          <div className="space-y-10 lg:ml-20">
            {hardware.section1.features.map(
              (feature, index) =>
                hardware.section1.features.length / 2 <= index && (
                  <div
                    key={index}
                    className="flex flex-col items-start space-y-1 cursor-pointer "
                    onMouseEnter={() => setSelectedIndex(index)}
                    onMouseLeave={() => setSelectedIndex(-1)}
                  >
                    <div className="py-2">
                      {/* Icon for the feature */}
                      <img
                        src={feature.icon}
                        alt={feature.heading}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h3 className=" text-lg xl:text-2xl font-tthoves-semiBold">
                        {feature.heading}
                      </h3>
                      <p className="pt-2 text-secondary-foreground sm:text-sm md:text-md lg:text-lg xl:text-xl">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HardwareProductFeatures;
