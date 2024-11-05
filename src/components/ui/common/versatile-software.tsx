import { highlightWords } from "@/app/utility/highlightWords";
import { title } from "process";
import React from "react";

interface SoftwareAdaptiveProps {
  data?: any;
}
const VersatileSoftware: React.FC<SoftwareAdaptiveProps> = ({ data }) => {
  const features = [
    {
      image: "assets/other/imagePlaceholder.png",
      title: "3-Step Programming",
      desc: "Coding is as easy as Select, Assemble, and Code. Perfect for first-timers, this approach makes building projects feel like child’s play.",
    },
    {
      image: "assets/other/imagePlaceholder.png",
      title: "5 Coding Styles",
      desc: "3 visual modes (Hexa Programming, Flowchart, Scratch-style) or go pro with C and Python scripts.",
    },
    {
      image: "assets/other/imagePlaceholder.png",
      title: "AI Mode & App Mode",
      desc: "Just speak and code, or create apps that control your physical projects—Plode makes it all possible.",
    },
  ];
  return (
    <div className="max-w-full flex flex-col space-y-10 py-10">
      <div className="flex flex-col space-y-2 justify-centerv items-center text-center">
        <h1 className="text-primary text-xs font-semibold ">
          {data ? "" : "Software"}
        </h1>
        <h2 className="text-4xl lg:text-5xl font-piepie tracking-wide ">
          {data
            ? highlightWords(data.title, [data.colorTitle], "text-primary")
            : highlightWords(
                "Versatile for All",
                ["Versatile"],
                "text-primary"
              )}
        </h2>
        <h2 className="text-sm text-secondary-foreground  w-[100%] lg:w-[40%]">
          {data?.desc ||
            "Plode is ready for anything, handling everything from your first coding steps to your wildest ideas."}
        </h2>
        <p className="text-[#5423E6] font-semibold">{data?.subheading}</p>
      </div>
      <div className="grid grid-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {(data?.features || features)?.map((feature: any, index: any) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center space-y-2 "
          >
            <div className="mb-2">
              <img src="assets/other/imagePlaceholder.png" className="" />
            </div>
            <h1 className="text-sm font-bold">{feature.title}</h1>
            <p className="text-xs text-secondary-foreground w-[100%] lg:w-[85%]">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default VersatileSoftware;
