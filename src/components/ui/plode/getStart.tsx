import renderImg from "@/imgImport";
import renderSvg from "@/svgImport";
import React from "react";

interface GetStartProps {
  title: string;
  desc: string;
}

const GetStart: React.FC<GetStartProps> = ({ title, desc }) => {
  return (
    <div>
      <div className="bg-primary rounded-xxl">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-8 px-10 lg:py-16 lg:px-20">
          <div className="w-full">
            {/* Main Text */}

            <div className="space-y-4">
              {/* Main Headline */}
              <div className="font-piepie text-2xl md:text-3xl lg:text-5xl   text-primary-foreground lg:w-[70%]">
                {title}
              </div>

              {/* Subtext */}
              <div className="text-[#BBA5FE] text-lg font-body w-[100%] lg:w-[60%]">
                {desc}
              </div>
            </div>
          </div>
          {/* Buttons Section */}
          <div className="h-auto sm:w-1/3 flex justify-center items-center">
            <img src={renderImg("playstore")} alt="Play Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
