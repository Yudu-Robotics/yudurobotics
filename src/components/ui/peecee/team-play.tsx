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
    <div className="fle flex-col space-y-10 py-10">
      <div className="flex flex-col space-y-2 justify-centerv items-center text-center">
        <h1 className="text-primary text-xs font-semibold ">Hardware</h1>
        <h2 className="text-4xl lg:text-5xl font-piepie tracking-wide ">
          {highlightWords(section3.heading, ["Play!"], "text-primary")}
        </h2>
        <h2 className="text-sm text-secondary-foreground  w-[100%] lg:w-[60%]">
          {section3.subheading}
        </h2>
      </div>
      <div className="">
        <img
          src={hardware.section3.centerImage}
          alt="Product Image"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};
export default TeamPlay;
