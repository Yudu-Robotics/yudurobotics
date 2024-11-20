import { highlightWords } from "@/app/utility/highlightWords";
import React from "react";
import JumpingButtons from "./jumping-buttons";
interface JumppingData {
  text1?: string;
  text2?: string;
  bgColor?: string;
  textColor?: string;
  link?: string;
}

interface PlodeDownloadeProps {
  heading: string;
  desc: string;
  jumppingdata?: JumppingData; // Add the jumppingdata prop
}

const PlodeDownloade: React.FC<PlodeDownloadeProps> = ({
  heading,
  desc,
  jumppingdata,
}) => {
  return (
    <div className="bg-primary rounded-xlg sm:rounded-xxl">
      <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-8 px-5 sm:px-10 lg:py-16 lg:px-20">
        <div className="w-full">
          {/* Main Text */}

          <div className="space-y-4">
            {/* Main Headline */}
            <div className="font-piepie text-4xl md:text-3xl lg:text-5xl xl:text-7xl tracking-wider text-primary-foreground lg:w-[70%]">
              {heading}
            </div>

            {/* Subtext */}
            <div className="text-primary-foreground text-lg lg:text-lg xl:text-xl font-body w-[100%] lg:w-[60%]">
              {desc}
            </div>
          </div>
        </div>
        {/* Buttons Section */}
        {
          <JumpingButtons
            ishorizontal="true"
            text1={jumppingdata?.text1 || ""}
            text2={jumppingdata?.text2 || ""}
            bgColor={jumppingdata?.bgColor || ""}
            textColor={jumppingdata?.textColor || ""}
            link={jumppingdata?.link || ""}
          />
        }
      </div>
    </div>
  );
};

export default PlodeDownloade;
