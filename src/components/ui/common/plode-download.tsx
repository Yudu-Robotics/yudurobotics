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
    <div className="bg-primary rounded-[2.5rem] sm:rounded-[3.5rem] xs:mt-14 sm:mt-8">
      <div
        className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-8 px-2 xs:px-8 sm:px-6 lg:py-16 lg:px-20  "
        style={{
          fontWeight: 400,
          textAlign: "left",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        <div className="w-full">
          {/* Main Text */}

          <div className="space-y-4">
            {/* Main Headline */}
            <div className="font-cobaltRidge tracking-wide text-4xl md:text-3xl lg:text-4xl xl:text-6xl  text-primary-foreground lg:w-[70%] gap-[var(--spacing-xl)] ">
              {heading}
            </div>

            {/* Subtext */}
            <div className="font-tthoves text-primary-foreground text-lg lg:text-lg xl:text-xl  w-[100%] lg:w-[60%] opacity-70">
              {desc}
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        {/* {
         
          <JumpingButtons
            ishorizontal="false"
            text1={jumppingdata?.text1 || ""}
            text2={jumppingdata?.text2 || ""}
            // bgColor={jumppingdata?.bgColor || ""}
            bgColor={jumppingdata?.bgColor || ""}
            textColor={jumppingdata?.textColor || ""}
            link={jumppingdata?.link || ""}
          />
        } */}
        <div className="xs:mr-36 sm:mr-40 md:mr-0 ">
          {
            <JumpingButtons
              ishorizontal="false"
              text1={jumppingdata?.text1 || ""}
              text2={jumppingdata?.text2 || ""}
              // bgColor={jumppingdata?.bgColor || ""}
              bgColor={jumppingdata?.bgColor || ""}
              textColor={jumppingdata?.textColor || ""}
              link={jumppingdata?.link || ""}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default PlodeDownloade;
