import renderSvg from "@/svgImport";
import React from "react";
import renderImg from "@/imgImport";

interface propsValue {
  data?: any;
}
function plodeDifference({ data }: propsValue) {
  return (
    <div>
      <div className="w-full -rotate-180">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg("middleHeaderSection")}
      </div>
      <div className="bg-primary w-full -mt-1">
        <div className="flex flex-col space-y-16  md:space-x-16 py-10 px-10 md:px-20">
          <div className="flex">
            <div className="sm:w-2/3">
              <div className="font-piepie text-2xl md:text-4xl lg:text-6xl text-primary-foreground">
                {data.title}
              </div>
              <div className="text-[#BBA5FE] mt-5 sm:w-2/3">{data.desc}</div>
            </div>
            <div>
              <img src={renderImg("whitezigzag")} />
            </div>
          </div>
          <div className="flex flex-wrap gap-7 justify-betweens">
            {data.features.map((feature: any, index: any) => (
              <div key={index}>
                <div>
                  <img src={renderImg(feature.src)} />
                  <p className="text-white font-semibold">{feature.title}</p>
                  <p className="text-[#BBA5FE] w-3/4">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg("sideHeaderSection")}
      </div>
    </div>
  );
}

export default plodeDifference;
