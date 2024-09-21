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
    <div className="flex flex-col space-y-8 md:flex-row md:space-x-28 md:items-center py-10">
      <div className="">
        <img
          src={peeceeFuture.centerImage}
          alt="Product Image"
          className="max-w-full"
        />
      </div>
      <div className="flex flex-col md:w-[50%] space-y-2">
        <h1 className="text-primary text-xs font-semibold ">Hardware</h1>
        <h2 className="text-4xl lg:text-5xl font-piepie tracking-wide w-[100%] lg:w-[80%] ">
          {highlightWords(
            peeceeFuture.heading,
            ["Future-Proof"],
            "text-primary"
          )}
        </h2>
        <h2 className="text-sm text-secondary-foreground  w-[100%] lg:w-[60%]">
          {peeceeFuture.subheading}
        </h2>
      </div>
    </div>
  );
};
export default PeeceeFuture;
