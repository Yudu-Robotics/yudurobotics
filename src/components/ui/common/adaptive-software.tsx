import { highlightWords } from "@/app/utility/highlightWords";
import renderImg from "@/imgImport";
import renderSvg from "@/svgImport";
import React from "react";
interface SoftwareAdaptiveProps {
  data?: any;
  image?: any;
}
const SoftwareAdaptive: React.FC<SoftwareAdaptiveProps> = ({ data, image }) => {
  const features = [
    {
      icon: "monitor",
      heading: "True Multiplatform Freedom",
      description:
        "Code wherever you like—Linux, Windows, iOS, Android, or straight from the cloud. With Plode, Zing is always by your side.",
    },
    {
      icon: "rocket",
      heading: "PlayMode for Instant Fun",
      description:
        "Dive into Zing’s features without a single line of code—use the camera, chat with speech recognition, or let AI do the work. Just play and explore!",
    },
  ];
  return (
    <div className="flex flex-col  sm:-translate-y-52 sm:-mb-52">
      <div className="w-full flex justify-between">
        <div className="w-full  flex flex-col space-y-2 pl-3 sm:pl-16">
          <h1 className="text-primary sm:text-sm md:text-md lg:text-lg xl:text-xl font-tthoves-medium ">
            {data?.title || "Software"}
          </h1>
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-piepie tracking-wide  w-[100%]">
            {highlightWords("Playfully Adaptive", ["Adaptive"], "text-primary")}
          </h2>
          <h2 className="font-tthoves sm:text-sm md:text-md lg:text-lg xl:text-xl text-secondary-foreground pt-3 w-[70%] ">
            Plode adjusts itself to suit anyone, whether you're just starting
            out or ready to tackle big projects.
          </h2>
        </div>
        {/* <div className="sm:w-1/2  flex justify-center   pl-3 sm:pl-16">
          <img src={renderImg(data?.img) || ""} className="w-full" />
        </div> */}
      </div>

      <div className="w-full  flex flex-col justify-between  space-y-8 md:flex-row md:space-y-0">
        <div className="sm:w-1/2 p-5 ">
          <img
            src={renderImg(image || "monitorAndPhone")}
            alt=""
            className="w-full sm:p-6"
          />
        </div>
        <div className="xl:w-1/2  flex flex-col space-y-8 justify-center">
          {(data?.features || features)?.map((feature: any, index: any) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-2 md:px-36"
            >
              <div className="">
                {/* Icon for the feature */}
                {renderSvg(feature?.src || feature?.icon || "robotic")}
              </div>
              <div>
                <h3 className=" text-xl xl:text-2xl sm:py-3 font-tthoves-semiBold">
                  {feature?.title || feature.heading}
                </h3>
                <p className="font-tthoves text-secondary-foreground text-lg sm:text-sm md:text-md lg:text-lg xl:text-xl">
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
