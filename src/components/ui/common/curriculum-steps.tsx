import renderImg from "@/imgImport";
import { title } from "process";
import React from "react";

const CurriculumSteps: React.FC<{
  additional?: string;
  data: {
    heading: string;
    subheading: string;
    step: { title: string; desc: string }[];
  };
}> = ({ additional, data }) => {
  return (
    <div>
      <div className="hidden md:flex md:ml-40 md:-mb-16">
        <img src={renderImg("handArrow")} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col md:space-y-4 space-y-1">
          <h1 className="sm:text-sm md:text-md lg:text-lg xl:text-xl text-primary">
            Curriculum
          </h1>
          <h2 className="text-3xl md:text-5xl font-piepie w-[100%] md:w-[80%]">
            {data.heading}
          </h2>
          <h3 className="text-sm text-secondary-foreground">
            {data.subheading}
          </h3>
        </div>

        <div className="flex flex-col md:justify-evenly space-y-4 md:space-y-4">
          {additional && (
            <h3 className="text-sm text-secondary-foreground py-5">
              {additional}
            </h3>
          )}
          {data.step.map(
            (value: { title: string; desc: string }, index: number) => (
              <>
                {data.step.length / 2 > index && (
                  <div
                    key={index}
                    className="flex flex-col space-y-1 py-3 sm:py-0"
                  >
                    <h1 className="font-bold text-[#303036] text-xl sm:text-sm md:text-md lg:text-lg xl:text-xl">
                      {value.title}
                    </h1>
                    <p className="text-lg sm:text-xs md:text-sm lg:text-md xl:text-lg text-secondary-foreground">
                      {value.desc}
                    </p>
                  </div>
                )}
              </>
            )
          )}
        </div>

        <div className="flex flex-col space-y-4 md:space-y-4">
          {data.step.map(
            (value: { title: string; desc: string }, index: number) => (
              <>
                {data.step.length / 2 <= index && (
                  <div
                    key={index}
                    className="flex flex-col space-y-1 py-3 sm:py-0"
                  >
                    <h1 className="font-bold text-xl text-[#303036] sm:text-sm md:text-md lg:text-lg xl:text-xl">
                      {value.title}
                    </h1>
                    <p className="text-lg sm:text-xs md:text-sm lg:text-md xl:text-lg text-secondary-foreground">
                      {value.desc}
                    </p>
                  </div>
                )}
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CurriculumSteps;
