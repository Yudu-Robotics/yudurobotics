import { highlightWords } from "@/app/utility/highlightWords";
import renderImg from "@/imgImport";
import { title } from "process";
import React from "react";

interface SoftwareAdaptiveProps {
  data?: any;
}
const VersatileSoftware: React.FC<SoftwareAdaptiveProps> = ({ data }) => {
  const images = ["threestep", "fivecoding", "aimodel"];
  const features = [
    {
      image: "assets/other/threestep.png",
      title: "3-Step Programming",
      desc: "Coding is as easy as Select, Assemble, and Code. Perfect for first-timers, this approach makes building projects feel like child’s play.",
    },
    {
      image: "assets/other/fivecoding.png",
      title: "5 Coding Styles",
      desc: "3 visual modes (Hexa Programming, Flowchart, Scratch-style) or go pro with C and Python scripts.",
    },
    {
      image: "assets/other/aimodel.png",
      title: "AI Mode & App Mode",
      desc: "Just speak and code, or create apps that control your physical projects—Plode makes it all possible.",
    },
  ];
  return (
    <div className="max-w-full flex flex-col space-y-10 py-10 xl:py-14  sm:mt-16">
      <div className="flex flex-col space-y-2 justify-centerv items-center text-center">
        <h1 className="text-primary text-lg font-semibold ">
          {data ? "" : "Software"}
        </h1>
        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-piepie tracking-wide ">
          {data
            ? highlightWords(data.title, [data.colorTitle], "text-primary")
            : highlightWords(
                "Versatile for All",
                ["Versatile"],
                "text-primary"
              )}
        </h2>
        <h2 className="text-lg sm:text-sm md:text-md lg:text-lg xl:text-xl text-secondary-foreground pt-2 w-[100%] lg:w-[40%]">
          {data?.desc ||
            "Plode is ready for anything, handling everything from your first coding steps to your wildest ideas."}
        </h2>
        <p className="text-[#5423E6] font-semibold">{data?.subheading}</p>
      </div>
      <div className="grid grid-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
        {(data?.features || features)?.map((feature: any, index: any) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center space-y-2 mt-4"
          >
            <div className="bg-primary h-full p-5 flex justify-center items-center rounded-xxl ">
              <div className="flex justify-between items-center h-full">
                <img
                  src={renderImg(images[index])}
                  className="object-contain  rounded-2xl"
                />
              </div>
            </div>

            <h1 className="text-xl sm:text-xl font-bold pt-4">
              {feature.title}
            </h1>
            <p className="text-lg sm:text-lg text-secondary-foreground w-[100%] lg:w-[85%]">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default VersatileSoftware;
