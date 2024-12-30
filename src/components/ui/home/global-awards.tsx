import renderImg from "@/imgImport";
import React from "react";

function GlobalAwards() {
  const awardsImage = ["reddot", "good", "india"];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-y-0">
      <div className="font-piepie text-4xl text-center lg:text-start lg:text-5xl w-full lg:w-[50%]">
        Being recognized globally
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        {awardsImage.map((image: string, index: number) => (
          <div key={index} className="flex">
            <img src={renderImg(image)} alt="logo" className="p-5 m-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlobalAwards;
