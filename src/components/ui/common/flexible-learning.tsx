import renderSvg from "@/svgImport";
import React from "react";
import { NewFeaturesCard } from "../NewFeaturesCard";
import JumpingButtons from "./jumping-buttons";
import renderImg from "@/imgImport";

function FlexibleLearning() {
  return (
    <div>
      <div className="w-full -rotate-180">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg("middleHeaderSection")}
      </div>
      <div className="bg-primary w-full -mt-1">
        <div className="flex flex-col space-y-16 md:flex-row md:space-x-16 py-10 px-10 md:px-20">
          <div className="w-full flex flex-col md:justify-start md:items-start md:space-y-8 space-y-4">
            <div className="w-full">
              <NewFeaturesCard />
            </div>

            {/* Main Text */}

            <div className="space-y-4">
              {/* Main Headline */}
              <div className="font-piepie text-2xl md:text-4xl lg:text-6xl text-primary-foreground">
                Flexible Learning Paths
              </div>

              {/* Subtext */}
              <div className="text-primary-foreground text-xs md:text-sm lg:text-lg font-body lg:w-[80%]">
                PeeCee TED’s curriculum offers flexibility, allowing kits to be
                used independently or combined. The Adaptive LMS supports a
                self-paced learning approach, suitable for both individual study
                and flipped classrooms.
              </div>
            </div>
            <div className="pt-8 md:pt-0">
              <JumpingButtons ishorizontal="true" />
            </div>
          </div>
          <div className="w-full">
            <img src={renderImg("girls")} className="w-full" />
          </div>
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg("sideHeaderSection")}
      </div>
    </div>
  );
}

export default FlexibleLearning;
