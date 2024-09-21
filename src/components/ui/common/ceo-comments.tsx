import renderImg from "@/imgImport";
import React from "react";

const CeoComments = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 ">
      <div className="flex flex-col md:justify-evenly space-y-4">
        <div className="w-[50%] md:w-[25%]">
          <img src={renderImg("stars")} className="w-full" />
        </div>
        <h1 className="font-piepie text-sm md:text-5xl">
          Crawl-E’s adaptability and stability have taken our robotics projects
          to the next level.
        </h1>
        <div className="flex justify-between">
          <div className="flex space-x-4 justify-center items-center">
            <div>
              <img src={renderImg("avatar")} className="w-full" />
            </div>
            <div className="flex flex-col text-xs md:text-sm">
              <h1 className="font-bold ">Aditi Nair</h1>
              <p className="text-secondary-foreground">
                CEO, Robotics Integration Specialist{" "}
              </p>
            </div>
          </div>
          <div className="hidden md:flex md:space-x-4 md:px-6">
            <button className="rounded-full md:px-4 border border-secondary-foreground text-secondary-foreground">
              {"<-"}
            </button>
            <button className="rounded-full md:px-4 border border-secondary-foreground text-secondary-foreground">
              {"->"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full -order-1 md:order-1">
        <img src={renderImg("profileImage")} className="w-full" />
      </div>
    </div>
  );
};

export default CeoComments;
