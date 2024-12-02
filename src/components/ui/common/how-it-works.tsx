import { highlightWords } from "@/app/utility/highlightWords";
import React from "react";

interface Section1 {
  image: "";
  heading: "";
  description: "";
}

interface Section2 {
  image: "";
  heading: "";
  description: "";
}

interface HowItWork {
  heading: string;
  subheading: string;
  section1: Section1;
  section2: Section2;
}

const Working: React.FC<{ data: HowItWork }> = ({ data }) => {
  return (
    <div className="max-w-full flex flex-col space-y-10 py-10">
      <div className="flex flex-col space-y-2 justify-centerv items-center text-center">
        <h1 className="text-primary text-xs font-tthoves-semiBold ">Hardware</h1>
        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-piepie  ">
          {highlightWords(data.heading, ["Works"], "text-primary")}
        </h2>
        <h2 className="font-tthover text-sm text-secondary-foreground sm:text-lg xl:text-xl  w-[100%] lg:w-[40%]">
          {data.subheading}
        </h2>
      </div>
      <div className="flex flex-col items-center space-y-8 md:flex-row justify-center md:space-y-0">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div>
            <img src={data.section1.image} alt="Product Image" className="" />
          </div>
          <div className="flex flex-col justify-center space-y-1 items-center text-center">
            <h1 className="text-lg font-tthoves-semiBold">{data.section1.heading}</h1>
            <h2 className="font-tthover text-secondary-foreground text-sm w-[100%] lg:w-[60%]">
              {data.section1.description}
            </h2>
            <a className="text-sm text-primary">Learn more {"->"}</a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <div>
            <img src={data.section2.image} alt="Product Image" className="" />
          </div>
          <div className="flex flex-col space-y-2 items-center text-center">
            <h1 className="text-lg font-bold">{data.section2.heading}</h1>
            <h2 className="text-secondary-foreground text-sm w-[100%] lg:w-[60%]">
              {data.section2.description}
            </h2>
            <a className="text-sm text-primary">Learn more {"->"}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Working;
