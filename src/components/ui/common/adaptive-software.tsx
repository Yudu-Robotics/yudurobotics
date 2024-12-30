import { highlightWords } from "@/app/utility/highlightWords";
import renderImg from "@/imgImport";
import renderSvg from "@/svgImport";
import React from "react";

interface SoftwareAdaptiveProps {
  data?: any;
  image?: any;
  product?: string;
}

const SoftwareAdaptive: React.FC<SoftwareAdaptiveProps> = ({ data, image, product }) => {
  const features = [
    {
      icon: "monitor",
      heading: "True Multiplatform Freedom",
      description: `Code wherever you like—Linux, Windows, iOS, Android, or straight from the cloud. With ${product}, ${product} is always by your side.`,
    },
    {
      icon: "rocket",
      heading: "PlayMode for Instant Fun",
      description: `Dive into ${product}’s features without a single line of code—use the camera, chat with speech recognition, or let AI do the work. Just play and explore!`,
    },
  ];

  return (
    <div className="flex flex-col sm:-translate-y-2 sm:-mb-52 md:-translate-y-20 md:-mb-20 lg:-translate-y-16 lg:-mb-16 xl:-translate-y-48 xl:-mb-48 2xl:-translate-y-8 2xl:-mb-8">
      <div className="w-full flex justify-between">
        <div className="w-full  flex flex-col space-y-2 pl-3 sm:pl-16">
          <h1 className="text-primary sm:text-sm md:text-sm lg:text-base xl:text-base font-tthoves-medium ">
            {data?.title || "Software"}
          </h1>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-piepie tracking-wide  w-[100%] sm:pt-5 md:pt-2">
            {highlightWords("Playfully Adaptive", ["Adaptive"], "text-primary")}
          </h2>
          <h2 className="font-tthoves sm:text-sm md:text-base lg:text-lg xl:text-xl text-secondary-foreground pt-3 w-[70%] ">
            {`${product} adjusts itself to suit anyone, whether you're just starting out or ready to tackle big projects.`}
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col justify-between gap-8 md:flex-row md:gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
        <div className="w-full md:w-1/2 p-4 md:p-8 lg:p-10 xl:p-12">
          <img
            src={renderImg(image || "monitorAndPhone")}
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="w-full lg:w-3/4 xl:w-1/2 flex flex-col gap-4 lg:gap-6 xl:gap-8 justify-center">
          {(data?.features || features)?.map((feature: any, index: any) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 sm:gap-3 lg:gap-4 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24"
            >
              <div className="">
                {/* Icon for the feature */}
                {renderSvg(feature?.src || feature?.icon || "robotic")}
              </div>
              <div>
                <h3 className=" text-xl xl:text-2xl sm:py-3 font-tthoves-semiBold">
                  {feature?.title || feature.heading}
                </h3>
                <p className="font-tthoves text-secondary-foreground text-base sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  {feature?.desc || feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default SoftwareAdaptive;
