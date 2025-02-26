/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { highlightWords } from "@/app/utility/highlightWords";
import AnimatedContent from "@/components/bits/AnimatedContent";
import renderVideo from "@/videoImport";
import Image from "next/image";
import { useState } from "react";

interface HardwareFeature {
  icon: string;
  heading: string;
  description: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
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
// interface PageData {
//   heading: string;
//   wordsToHighlight: { text1: string[]; text2: string[] };
//   subheading: string;
//   images: string[];
//   sectionHeader: string;
//   ceoComment: string;
//   features_data?: HardwareData; // Mark hardware as optional
//   components: {
//     shared: string[];
//     unique: string[];
//   };
// }

// interface PageProps {
//   data: PageData;
// }

const HardwareProductFeatures: React.FC<{ hardware: HardwareData }> = ({
  hardware,
}) => {
  const { section1 } = hardware;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <div className="flex flex-col justify-center space-y-2 items-center text-center mt-16 pt-4">
        <h1 className="text-primary text-lg  xl:text-lg text-left sm:text-center w-full font-tthoves-semiBold text-[#CCBD1F]">
          Hardware
        </h1>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl w-[100%] md:w-[75%] lg:w-[85%] font-cobaltRidge tracking-wide  text-left sm:text-center">
          {highlightWords(section1.heading, ["Ready to Go"], "text-primary")}
        </h2>
        <h2 className="sm:w-[90%] md:w-[75%] lg:w-[90%] text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl text-secondary-foreground pt-3 text-left sm:text-center font-tthoves">
          {section1.subheading}
        </h2>
      </div>
      <div className="sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-16">
          {/* Left Side: Feature Icons and Text */}
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={true}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="space-y-10 lg:mr-16">
              {hardware.section1.features.map(
                (feature, index) =>
                  hardware.section1.features.length / 2 > index && (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={index}
                      className="flex flex-col items-start space-y-1 cursor-pointer "
                      onMouseEnter={() => setSelectedIndex(index)}
                      onMouseLeave={() => setSelectedIndex(-1)}
                    >
                      <div className="lg:py-2 sm:py-5">
                        {/* Icon for the feature */}
                        <Image
                          width={50}
                          height={50}
                          src={feature.icon}
                          alt={feature.heading}
                          className="w-full h-14"
                        />
                      </div>
                      <div>
                        <h3 className=" text-lg xl:text-2xl font-tthoves-semiBold text-[#1A1804]">
                          {feature.heading}
                        </h3>
                        <p className="pt-2 sm:pt-3 text-secondary-foreground sm:text-sm md:text-base lg:text-lg xl:text-xl font-tthoves">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </AnimatedContent>

          {/* Right Side: Central Image */}
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="relative flex justify-center">
              {selectedIndex === -1 ||
              !hardware?.section1?.features[selectedIndex]?.video ? (
                <Image
                  width={488}
                  height={696}
                  src={hardware.section1.centerImage}
                  alt="Product"
                  className="w-full h-auto"
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
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            config={{ tension: 80, friction: 20 }}
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
          >
            <div className="space-y-10 lg:ml-16">
              {hardware.section1.features.map(
                (feature, index) =>
                  hardware.section1.features.length / 2 <= index && (
                    <div
                      // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                      key={index}
                      className="flex flex-col items-start space-y-1 cursor-pointer "
                      onMouseEnter={() => setSelectedIndex(index)}
                      onMouseLeave={() => setSelectedIndex(-1)}
                    >
                      <div className="py-2">
                        {/* Icon for the feature */}
                        <Image
                          width={50}
                          height={50}
                          src={feature.icon}
                          alt={feature.heading}
                          className="w-full h-14"
                        />
                      </div>
                      <div>
                        <h3 className=" text-lg xl:text-2xl font-tthoves-semiBold text-[#1A1804]">
                          {feature.heading}
                        </h3>
                        <p className="pt-2 sm:pt-3 text-secondary-foreground sm:text-sm md:text-base lg:text-lg xl:text-xl font-tthoves">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
              )}
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};
export default HardwareProductFeatures;
