"use client";

import JumpingButtons from "./jumping-buttons";
import React from "react";
// import renderImg from "@/imgImport";

interface JumpingData {
  text1?: string;
  text2?: string;
  text3?: string;
  bgColor?: string;
  textColor?: string;
  link?: string;
}

interface CuriousProps {
  jumppingButton: JumpingData[];
}

export default function Curious({ jumppingButton }: CuriousProps) {
  // Ensure we safely access index 4 by checking the array length
  const selectedButton = jumppingButton[4];

  return (
    <div className="w-full relative mb-2 ">
      <div className="bg-primary  rounded-[2.25rem] sm:rounded-[2.5rem] p-6 sm:p-6 md:p-8 mt-16  lg:mt-40 relative shadow-xl overflow-hidden">
        {/* Gradient Blur Effect */}
        <div className="absolute inset-0 rounded-xlg sm:rounded-xxl bg-gradient-to-r from-purple-500 via-transparent to-purple-500 opacity-50 blur-lg -z-10" />

        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between items-center lg:items-start py-4 px-4 sm:px-8 lg:py-8 md:px-12 lg:px-16 xl:px-20">
          {/* Text Section */}
          <div className="w-full">
            <div className="space-y-4">
              {/* Main Heading */}
              <div className="font-cobaltRidge text-4xl md:text-3xl lg:text-4xl xl:text-6xl text-primary-foreground leading-tight">
                Curious about the
                <br />
                <span className="text-destructive">Partnering with Us?</span>
              </div>

              {/* Subtitle */}
              <div className="font-tthoves text-primary-foreground text-lg lg:text-lg xl:text-xl w-[100%] lg:w-[60%] pt-4 opacity-70">
                Here&apos;s what&apos;s in it for you (spoiler: It&apos;s
                awesome!)
              </div>
            </div>
          </div>

          {/* Only Render Button if it Exists */}
          {selectedButton && (
            <JumpingButtons
              text1={selectedButton.text1}
              text2={selectedButton.text2}
              text3={selectedButton.text3}
              bgColor={selectedButton.bgColor}
              textColor={selectedButton.textColor}
              link={selectedButton.link}
            />
          )}
        </div>
      </div>
      {/* <div className="hidden opacity-80  sm:block absolute md:-translate-y-60 xl:-translate-y-60 -left-40">
        <img alt="" src={renderImg("curv")} className="" />
      </div> */}
    </div>
  );
}
