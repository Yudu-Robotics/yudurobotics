import { highlightWords } from "@/app/utility/highlightWords";
import React from "react";

interface HardwareFeature {
  icon: string;
  heading: string;
  description: string;
}

interface HardwareSection {
  heading: string;
  subheading: string;
  centerImage: string;
  features: HardwareFeature[];
}

interface HardwareData {
  section1: HardwareSection;
}

// Props for the main data structure
interface PageData {
  heading: string;
  wordsToHighlight: { text1: string[]; text2: string[] };
  subheading: string;
  images: string[];
  sectionHeader: string;
  ceoComment: string;
  features_data?: HardwareData; // Mark hardware as optional
  components: {
    shared: string[];
    unique: string[];
  };
}

interface PageProps {
  data: PageData;
}

const HardwareProductFeatures: React.FC<{ hardware: HardwareData }> = ({
  hardware,
}) => {
  const { section1 } = hardware;

  return (
    <div>
      <div className="flex flex-col justify-center space-y-2 items-center text-center">
        <h1 className="text-primary text-xs font-semibold">Hardware</h1>
        <h2 className="text-4xl lg:text-5xl w-[100%] lg:w-[50%] font-piepie tracking-wide">
          {highlightWords(section1.heading, ["Ready to Go"], "text-primary")}
        </h2>
        <h2 className="text-sm text-secondary-foreground">
          {section1.subheading}
        </h2>
      </div>
      <div className=" py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Side: Feature Icons and Text */}
          <div className="space-y-10 lg:mr-20">
            {hardware.section1.features.map(
              (feature, index) =>
                hardware.section1.features.length / 2 > index && (
                  <div
                    key={index}
                    className="flex flex-col items-start space-y-1"
                  >
                    <div className="">
                      {/* Icon for the feature */}
                      <img
                        src={feature.icon}
                        alt={feature.heading}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{feature.heading}</h3>
                      <p className="text-secondary-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>

          {/* Right Side: Central Image */}
          <div className="relative flex justify-center">
            <img
              src={hardware.section1.centerImage}
              alt="Product Image"
              className="max-w-full h-auto"
            />
          </div>

          <div className="space-y-10 lg:ml-20">
            {hardware.section1.features.map(
              (feature, index) =>
                hardware.section1.features.length / 2 <= index && (
                  <div
                    key={index}
                    className="flex flex-col items-start space-y-1"
                  >
                    <div className="">
                      {/* Icon for the feature */}
                      <img
                        src={feature.icon}
                        alt={feature.heading}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{feature.heading}</h3>
                      <p className="text-secondary-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HardwareProductFeatures;
