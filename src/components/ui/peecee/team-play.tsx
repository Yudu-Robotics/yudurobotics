import { highlightWords } from "@/app/utility/highlightWords";
import React from "react";

interface HardwareFeature {
  icon: string;
  heading: string;
  description: string;
}

interface HardwareSection {
  heading: string;
  subheading: string;
  centerImage: string;
  features: HardwareFeature[];
}

interface HardwareData {
  section3: HardwareSection;
}

const TeamPlay: React.FC<{ hardware: HardwareData }> = ({ hardware }) => {
  const { section3 } = hardware;

  return (
    <div className="w-full  flex flex-col space-y-10 py-10">
      <div className="w-full  flex flex-col space-y-2 justify-centerv items-center text-center">
        <h1 className="font-tthoves-semiBold w-full text-left  sm:text-center text-primary sm:text-sm md:text-md lg:text-lg xl:text-xl font-tthoves-medium ">
          Hardware
        </h1>
        <h2 className="w-full text-left  sm:text-center  text-4xl lg:text-5xl xl:text-6xl font-piepie tracking-wide ">
          {highlightWords(section3.heading, ["Play!"], "text-primary")}
        </h2>
        <h2 className="w-full font-tthoves text-left  sm:text-center  sm:text-sm md:text-md lg:text-lg xl:text-xl text-secondary-foreground  text-lg lg:w-[80%] pt-2">
          {section3.subheading}
        </h2>
      </div>
      <div className=" w-full sm:pt-10">
        <img
          src={hardware.section3.centerImage}
          alt="Product Image"
          className="w-full  h-auto"
        />
      </div>
    </div>
  );
};
export default TeamPlay;
