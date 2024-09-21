import { highlightWords } from "@/app/utility/highlightWords";
import React from "react";

interface LegoFun {
  heading: string;
  subheading: string;
  centerImage: string;
}

const LegoFun: React.FC<{ legoFun: LegoFun }> = ({ legoFun }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end py-10">
      <div className="flex flex-col space-y-2 items-start text-start">
        <h1 className="text-primary text-xs font-semibold ">Hardware</h1>
        <h2 className="text-4xl lg:text-5xl font-piepie tracking-wide ">
          {highlightWords(legoFun.heading, [""], "text-primary")}
        </h2>
        <h2 className="text-sm text-secondary-foreground  w-[100%] lg:w-[80%]">
          {legoFun.subheading}
        </h2>
      </div>
      <div className="">
        <img
          src={legoFun.centerImage}
          alt="Product Image"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};
export default LegoFun;
