import React from "react";
import { NewFeaturesCard } from "../NewFeaturesCard";
import JumpingButtons from "./jumping-buttons";
import renderSvg from "@/svgImport";
import renderImg from "@/imgImport";

const PlodeSoftware = () => {
  return (
    <>
      <div className="w-full -rotate-180">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg("headerSection")}
      </div>
      <div className="bg-primary w-full -mt-1">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10 px-10 lg:px-20">
          <div className="w-full">
            <div className="mb-6">
              <NewFeaturesCard />
            </div>

            {/* Main Text */}

            <div className="space-y-4">
              {/* Main Headline */}
              <div className="font-piepie text-xl md:text-6xl lg:text-7xl text-primary-foreground">
                Plode: Smart and Simple Software
              </div>

              {/* Subtext */}
              <div className="text-primary-foreground text-sm md:text-base lg:text-lg font-body w-[100%] lg:w-[50%]">
                Roboki’s Plode software is as fun as it is powerful—tailored to
                inspire creativity, adapt to all levels, and make coding feel
                like a breeze.
              </div>
            </div>
          </div>

          {/* Buttons Section */}

          <JumpingButtons ishorizontal="true" />
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg("sideHeaderSection")}
      </div>
      <div className="flex justify-end -mt-16 lg:-mt-40 relative z-10">
        <img src={renderImg("iphone")} className="" />
      </div>
    </>
  );
};

export default PlodeSoftware;
