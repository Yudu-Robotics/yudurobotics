import React from "react";
import { NewFeaturesCard } from "../NewFeaturesCard";
import JumpingButtons from "./jumping-buttons";
import renderSvg from "@/svgImport";
import renderImg from "@/imgImport";
interface JumppingData {
  text1?: string;
  text2?: string;
  bgColor?: string;
  textColor?: string;
  link?: string;
}

interface PlodeSoftwareProps {
  jumppingdata?: JumppingData; // Use the defined structure
  subheading?: string;
}
const PlodeSoftware: React.FC<PlodeSoftwareProps> = ({
  jumppingdata,
  subheading,
}) => {
  return (
    <>
      <div className="sm:translate-y-9 ">
        <div className="w-full -rotate-180 ">
          {/* <img src={renderImg("headerSection")} className="w-full" /> */}
          {renderSvg("headerSection")}
        </div>
        <div className="bg-primary w-full -mt-1">
          <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10 sm:px-10 lg:px-20">
            <div className="w-full">
              {/* <div className="mb-6">
              <NewFeaturesCard />
            </div> */}

              {/* Main Text */}

              <div className="space-y-4 px-3">
                {/* Main Headline */}
                <div className="font-piepie text-4xl md:text-6xl lg:text-7xl text-primary-foreground">
                  Plode: Smart and Simple Software
                </div>

                {/* Subtext */}
                <div className="font-tthoves text-primary-foreground ext-lg sm:text-lg md:text-md lg:text-lg xl:text-xl w-[100%] lg:w-[50%]">
                  {subheading ||
                    "Roboki’s Plode software is as fun as it is powerful—tailored to inspire creativity, adapt to all levels, and make coding feel like a breeze."}
                </div>
              </div>
            </div>

            {/* Buttons Section */}

            <JumpingButtons
              ishorizontal="true"
              text1={jumppingdata?.text1 || ""}
              text2={jumppingdata?.text2 || ""}
              bgColor={jumppingdata?.bgColor || ""}
              textColor={jumppingdata?.textColor || ""}
              link={jumppingdata?.link || ""}
            />
          </div>
        </div>
        <div className="w-full -mt-1">
          {/* <img src={renderImg("headerSection")} className="w-full" /> */}
          {renderSvg("sideHeaderSection")}
        </div>
        <div className="flex justify-end  sm:-translate-x-20  -mt-16 lg:-mt-48 relative z-10">
          <img src={renderImg("iphone")} className="" />
        </div>
      </div>
    </>
  );
};

export default PlodeSoftware;
