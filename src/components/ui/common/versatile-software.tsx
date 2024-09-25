import { highlightWords } from "@/app/utility/highlightWords";
import React from "react";

const VersatileSoftware = () => {
  const features = [
    {
      image: "assets/other/imagePlaceholder.png",
      heading: "3-Step Programming",
      description:
        "Coding is as easy as Select, Assemble, and Code. Perfect for first-timers, this approach makes building projects feel like child’s play.",
    },
    {
      image: "assets/other/imagePlaceholder.png",
      heading: "5 Coding Styles",
      description:
        "3 visual modes (Hexa Programming, Flowchart, Scratch-style) or go pro with C and Python scripts.",
    },
    {
      image: "assets/other/imagePlaceholder.png",
      heading: "AI Mode & App Mode",
      description:
        "Just speak and code, or create apps that control your physical projects—Plode makes it all possible.",
    },
  ];
  return (
    <div className="max-w-full flex flex-col space-y-10 py-10">
      <div className="flex flex-col space-y-2 justify-centerv items-center text-center">
        <h1 className="text-primary text-xs font-semibold ">Software</h1>
        <h2 className="text-4xl lg:text-5xl font-piepie tracking-wide ">
          {highlightWords("Versatile for All", ["Versatile"], "text-primary")}
        </h2>
        <h2 className="text-sm text-secondary-foreground  w-[100%] lg:w-[40%]">
          Plode is ready for anything, handling everything from your first
          coding steps to your wildest ideas.
        </h2>
      </div>
      <div className="grid grid-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(
          (
            value: { image: string; heading: string; description: string },
            index: number
          ) => (
            <div 
            key={index}
            className="flex flex-col justify-center items-center text-center space-y-2 ">
              <div className="mb-2">
                <img src={value.image} className="" />
              </div>
              <h1 className="text-sm font-bold">{value.heading}</h1>
              <p className="text-xs text-secondary-foreground w-[100%] lg:w-[85%]">
                {value.description}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default VersatileSoftware;
