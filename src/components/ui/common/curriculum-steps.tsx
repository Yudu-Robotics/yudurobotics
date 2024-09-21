import renderImg from "@/imgImport";
import { title } from "process";
import React from "react";

const CurriculumSteps: React.FC<{
  data: {
    heading: string;
    subheading: string;
    step: { title: string; desc: string }[];
  };
}> = ({ data }) => {
  return (
    <div>
      <div className="hidden md:flex md:ml-40 md:-mb-16">
        <img src={renderImg("handArrow")} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex flex-col md:space-y-4 space-y-1">
          <h1 className="text-xs text-primary">Curriculum</h1>
          <h2 className="text-lg md:text-5xl font-piepie w-[100%] md:w-[80%]">
            {data.heading}
          </h2>
          <h3 className="text-sm text-secondary-foreground">
            {data.subheading}
          </h3>
        </div>

        <div className="flex flex-col md:justify-evenly space-y-4 md:space-y-0">
          {data.step.map(
            (value: { title: string; desc: string }, index: number) => (
              <>
                {data.step.length / 2 > index && (
                  <div key={index} className="flex flex-col space-y-1">
                    <h1 className="font-bold">{value.title}</h1>
                    <p className="text-xs text-secondary-foreground">
                      {value.desc}
                    </p>
                  </div>
                )}
              </>
            )
          )}
        </div>

        <div className="flex flex-col md:justify-evenly space-y-4 md:space-y-0">
          {data.step.map(
            (value: { title: string; desc: string }, index: number) => (
              <>
                {data.step.length / 2 <= index && (
                  <div key={index}>
                    <h1 className="text-lg font-bold">{value.title}</h1>
                    <p className="text-xs text-secondary-foreground">
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
