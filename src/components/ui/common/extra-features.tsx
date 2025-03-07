/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { highlightWords } from "@/app/utility/highlightWords";
import AnimatedContent from "@/components/bits/AnimatedContent";
import renderImg from "@/imgImport";
import renderSvg from "@/svgImport";
import renderVideo from "@/videoImport";
import Image from "next/image";
import { useState } from "react";

interface data {
  heading: string;
  subheading: string;
  centerImage: string;
  features: {
    icon: string;
    heading: string;
    description: string;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    video?: any;
  }[];
}

const ExtraFeatures: React.FC<{
  data: data;
  title: string;
  showArrow?: boolean;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  horizantal?: any;
}> = ({ data, title, showArrow }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className="flex flex-col gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:pt-16 xl:gap-10 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16">
      {showArrow && (
        <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center lg:-mb-32 lg:ml-40">
          {renderSvg("handDrawArrow2")}
        </div>
      )}
      <div className="flex flex-col space-y-2 ">
        <h1 className="text-primary text-lg  xl:text-lg text-left  w-full font-tthoves-semiBold text-[#CCBD1F] ">
          {title}
        </h1>
        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-cobaltRidge tracking-wide  w-[100%] lg:w-[50%]">
          {highlightWords(data?.heading, ["Effortless"], "text-primary")}
        </h2>
        <h2 className="text-lg text-secondary-foreground xl:text-xl w-[100%] lg:w-[35%] font-tthoves">
          {data?.subheading}
        </h2>
      </div>
      <div className="pt-10 sm:pt-20 lg:pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {data?.features.map((feature, index) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  className={`flex flex-col items-start space-y-1  h-full ${
                    !data?.features[selectedIndex]?.video
                      ? "cursor-default"
                      : "cursor-pointer"
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onMouseLeave={() => setSelectedIndex(-1)}
                >
                  <div className="">
                    {/* Icon for the feature */}
                    {renderSvg(feature.icon)}
                  </div>
                  <div className="pt-4 sm:pt-0 flex flex-col gap-1">
                    <h3 className="font-tthoves-semiBold text-xl xl:text-2xl sm:py-3">
                      {feature.heading}
                    </h3>
                    <p className="pt-2 font-tthoves text-secondary-foreground text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>

          {/* Right Side: Central Image */}

          <div className="relative flex justify-center items-center ">
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
              {selectedIndex === -1 || !data?.features[selectedIndex]?.video ? (
                <Image
                  width={606}
                  height={603}
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
            </AnimatedContent>

            {/* Arrow Image Below the Central Right Image */}

            <Image
              width={50}
              height={50}
              src={renderImg("arrowdown")}
              alt="Arrow Image"
              className="absolute bottom-[-150px] right-[10px] w-25 h-35 translate-x-0 translate-y-0 filter brightness-20 md:right-[50px] lg:translate-x-[-40px] md:translate-y-[-30px] xs:translate-x-[40px] xs:translate-y-[-35px] sm:translate-y-[-40px] lg:translate-x-[50px] lg:translate-y-[-10px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExtraFeatures;
