import { highlightWords } from "@/app/utility/highlightWords";
import React from "react";

interface LegoFun {
  heading: string;
  subheading: string;
  centerImage: string;
}

const LegoFun: React.FC<{ legoFun: LegoFun }> = ({ legoFun }) => {
  return (
    <div className="w-full h-full  flex flex-col md:flex-row justify-between items-center pb-10 mb-5">
      <div className="  sm:w-1/2 h-full bg-yellow-300-700 flex items-center space-y-2 justify-center text-start">
        <div className="">
          <h1 className="text-primary sm:text-sm md:text-md lg:text-lg xl:text-xl font-semibold ">
            Hardware
          </h1>
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-piepie tracking-wide ">
            {highlightWords(legoFun.heading, [""], "text-primary")}
          </h2>
          <h2 className="text-lg text-secondary-foreground  w-[100%] lg:w-[80%] xl:text-xl mt-4">
            {legoFun.subheading}
          </h2>
        </div>
      </div>
      <div className="sm:w-1/2 ">
        <img
          src={legoFun.centerImage}
          alt="Product"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
export default LegoFun;
