import renderImg from "@/imgImport";
import renderSvg from "@/svgImport";
import React from "react";

interface propsValue{
  product?: string;
}

function Unboxing({product}: propsValue) {
  const features = [
    {
      icon: "smileyFace",
      heading: "Cute and Cuddly Design",
      subheading:
        `With its super cute form factor, ${product} is as friendly as it looks—perfect for young learners who want a companion, not just a tool.`,
    },
    {
      icon: "strong",
      heading: "Playful Yet Strong",
      subheading:
        `Don’t let the playful look fool you—${product} is built to withstand all the drops, bumps, and scrapes that come with serious fun and it comes in a colorful sturdy storage BOX designed for reuseability.`,
    },
  ];
  return (
    <div className="flex flex-col space-y-12 md:space-y-32">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-20 lg:space-x-16 xl:space-x-12 justify-center">
        <div className="w-full flex flex-col space-y-2 ">
          <h1 className="text-primary text-lg font-tthoves-medium xl:text-lg">
            Hardware
          </h1>
          <h2 className="text-[#1A1804] text-4xl lg:text-6xl xl:text-7xl font-piepie tracking-wide xl:w-[80%]">
            Built to Last and Play
          </h2>
          <h2 className="text-lg sm:text-lg xl:text-xl text-secondary-foreground pt-2 sm:pt-4 font-tthoves">
            {product} is designed to be as tough as it is fun, ready for all
            the adventures you can dream up.
          </h2>
        </div>

        <div className="w-full flex flex-col space-y-8 justify-center sm:pt-0 md:pt-4">
          {features.map(
            (
              value: { icon: string; heading: string; subheading: string },
              index: number
            ) => (
              <div key={index} className="flex space-x-1">
                <div>{renderSvg(value.icon)}</div>
                <div className="sm:pl-3 flex flex-col space-y-1">
                  <h1 className="font-tthoves-semiBold text-xl xl:text-2xl">
                    {value.heading}
                  </h1>
                  <h2 className="text-md sm:text-md xl:text-xl text-secondary-foreground md:w-[80%] pt-1 font-tthoves">
                    {value.subheading}
                  </h2>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {/* <div>
        <img src={renderImg("videoPlayer")} className="w-full" />
      </div> */}
    </div>
  );
}

export default Unboxing;
