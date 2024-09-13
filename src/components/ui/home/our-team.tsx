import React from "react";
import { Button } from "../common/view-products-buttons";
import TeamGrid from "./team-grid";

const Ourteam = () => {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-3">
        <h1 className="text-primary text-sm"> Our team</h1>
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:justify-between lg:items-end">
          <p className="font-piepie text-3xl text-black lg:w-[50%] tracking-wide">
            Meet the Minds Behind the Magic - the folks{" "}
            <span className="text-primary">work with you</span>
          </p>
          <div className="flex space-x-4">
            <Button className="bg-primary-foreground text-gray-800 border border-gray-400 hover:text-secondary-foreground">
              About us{" "}
            </Button>
            <Button className="hover:border "> Open positions </Button>
          </div>
        </div>
        <p className="text-sm lg:text-base lg:w-[50%] text-gray-700">
          Here are some of the talented people who bring Yudu Robotics to life.
          Creative thinkers, tech innovators, and problem solvers—get to know
          the team that turns "crazy" ideas into groundbreaking realities.
        </p>
      </div>
      <TeamGrid />
    </div>
  );
};

export default Ourteam;
