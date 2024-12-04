import { highlightWords } from "@/app/utility/highlightWords";
import React from "react";

interface PeeceeFuture {
  heading: string;
  subheading: string;
  centerImage: string;
}

const PeeceeFuture: React.FC<{ peeceeFuture: PeeceeFuture }> = ({
  peeceeFuture,
}) => {
  return (
    <div className="w-full    flex flex-col-reverse space-y-8 md:flex-row md:space-x-28 md:items-center py-10 justify-center">
      <div className="sm:w-1/2  ">
        <img
          src={peeceeFuture.centerImage}
          alt="Product Image"
          className="w-full"
        />
      </div>
      <div className="sm:w-1/2 flex flex-col md:w-[50%] space-y-2">
        <h1 className=" text-primary sm:text-sm md:text-md lg:text-lg xl:text-xl font-tthover-medium ">
          Hardware
        </h1>

        <h2 className="text-4xl lg:text-6xl xl:text-7xl font-piepie tracking-wide">
          {highlightWords(
            peeceeFuture.heading,
            ["Future-Proof"],
            "text-primary"
          )}
        </h2>

        <h2 className="font-tthover text-lg text-secondary-foreground w-[100%] lg:w-[80%] xl:text-xl pt-4">
          {peeceeFuture.subheading}
        </h2>
      </div>
    </div>
  );
};
export default PeeceeFuture;
