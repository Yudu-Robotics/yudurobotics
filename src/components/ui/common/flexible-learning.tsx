import renderSvg from "@/svgImport";
import React from "react";
import { NewFeaturesCard } from "../NewFeaturesCard";
import JumpingButtons from "./jumping-buttons";
import renderImg from "@/imgImport";
interface propsValue {
  newProduct?: boolean;
  title?: string;
  desc?: string;
  product?: string;
}
function FlexibleLearning({
  newProduct = false,
  title,
  desc,
  product,
}: propsValue) {
  return (
    <div>
      <div className="w-full -rotate-180">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg("middleHeaderSection")}
      </div>
      <div className="bg-primary w-full -mt-1">
        <div className="flex flex-col  md:flex-row md:space-x-16 lg:space-x-8 py-10 sm:px-10 md:px-12 lg:px-8 xl:px-20">
          <div className="w-full flex flex-col md:justify-start md:items-start md:space-y-8 space-y-4">
            {newProduct && (
              <div className="w-full mx-3">
                <NewFeaturesCard />
              </div>
            )}

            {/* Main Text */}

            <div className="space-y-4 px-3 ">
              {/* Main Headline */}
              <div className="font-cobaltRidge text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground">
                {title || "Flexible Learning Paths"}
              </div>

              {/* Subtext */}
              <div className="pt-5 font-tthoves text-lg md:text-lg lg:text-xl xl:text-2xl opacity-80 lg:w-[80%] text-primary-foreground">
                {desc ||
                  `${product}’s curriculum offers flexibility, allowing kits to be used independently or combined. The Adaptive LMS supports a self-paced learning approach, suitable for both individual study and flipped classrooms.`}
              </div>
            </div>
            {/* <div className="pt-8 md:pt-0">
              <JumpingButtons ishorizontal="true" />
            </div> */}
          </div>
          <div className="w-full  flex justify-center items-center p-4">
            <img src="assets/peecee/gril.webp" alt="" />
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
