import renderImg from "@/imgImport";
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
      {/* Arrow Image */}
      <div className="flex xs:ml-40 xs:mr-10 xs:mt-[-50px]">
        {" "}
        {/* Added right margin */}
        <img
          src={renderImg("handArrow")}
          alt="Hand Arrow"
          className="md:-mb-16 rotate-[0.77deg]" // Applying rotation here
        />
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Heading and Subheading Section */}
        <div className="flex flex-col md:space-y-2 space-y-1">
          <h1 className="font-tthoves-semiBold sm:text-sm md:text-base lg:text-lg xl:text-xl text-primary">
            Curriculum
          </h1>

          <div className="flex flex-col gap-8">
            <h2 className="text-4xl lg:text-4xl xl:text-6xl font-cobaltRidge w-[100%] md:w-[80%]">
              {data.heading}
            </h2>
            <h3 className="text-xl text-secondary-foreground font-tthoves">
              {data.subheading}
            </h3>
          </div>

          {/* <h2 className="text-4xl md:text-5xl font-cobaltRidge w-[100%] md:w-[80%] gap-8 xs:mb-4">
            {data.heading}
          </h2>
          <h3 className="text-xl text-secondary-foreground font-tthoves xs:mt-[32px] gap-4">
            {data.subheading}
          </h3> */}
        </div>

        {/* Left Column (First Half of Steps) */}
        <div className="flex flex-col space-y-2 md:space-y-2">
          {additional && (
            <h3 className="text-sm text-secondary-foreground py-3">
              {additional}
            </h3>
          )}
          {data.step.map((value, index) => (
            <>
              {data.step.length / 2 > index && (
                <div key={index} className="flex flex-col space-y-1 py-2">
                  <h1 className="font-tthoves-semiBold text-[#303036] text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    {value.title}
                  </h1>
                  <p className="font-tthoves text-lg sm:text-sm md:text-sm lg:text-base xl:text-base text-secondary-foreground">
                    {value.desc}
                  </p>
                </div>
              )}
            </>
          ))}
        </div>

        {/* Right Column (Second Half of Steps) */}
        <div className="flex flex-col space-y-2 md:space-y-2">
          {data.step.map((value, index) => (
            <>
              {data.step.length / 2 <= index && (
                <div key={index} className="flex flex-col space-y-1 py-2">
                  <h1 className="font-tthoves-semiBold text-[#303036] text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    {value.title}
                  </h1>
                  <p className="font-tthoves text-lg sm:text-sm md:text-sm lg:text-base xl:text-base text-secondary-foreground">
                    {value.desc}
                  </p>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumSteps;
