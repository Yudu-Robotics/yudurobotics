import { highlightWords } from "@/app/utility/highlightWords";
import renderImg from "@/imgImport";
import renderSvg from "@/svgImport";
import React from "react";

const SoftwareAdaptive = () => {
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
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-2 ">
        <h1 className="text-primary text-xs font-semibold ">Software</h1>
        <h2 className="text-4xl lg:text-6xl font-piepie tracking-wide  w-[100%]">
          {highlightWords("Playfully Adaptive", ["Adaptive"], "text-primary")}
        </h2>
        <h2 className="text-sm text-secondary-foreground  w-[100%] lg:w-[35%]">
          Plode adjusts itself to suit anyone, whether you're just starting out
          or ready to tackle big projects.
        </h2>
      </div>

      <div className="flex flex-col space-y-8 md:flex-row md:space-y-0">
        <div>
          <img src={renderImg("monitorAndPhone")} className="w-full" />
        </div>
        <div className="flex flex-col space-y-8 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start space-y-2 md:px-36"
            >
              <div className="">
                {/* Icon for the feature */}
                {renderSvg(feature.icon)}
              </div>
              <div>
                <h3 className="font-bold text-lg">{feature.heading}</h3>
                <p className="text-secondary-foreground text-sm">
                  {feature.description}
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
