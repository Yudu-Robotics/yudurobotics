"use client";
import renderImg from "@/imgImport";
import type { ImageName } from "@/imgImport";
import Image from "next/image";
import React from "react";
import ScrollFloat from "../../bits/ScrollFloat";

function GlobalAwards() {
  const awardsImage: ImageName[] = ["reddot", "good", "india"];

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-y-0">
      <div className="font-cobaltRidge text-4xl text-center lg:text-start lg:text-5xl w-full lg:w-[50%]">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          Being recognized globally
        </ScrollFloat>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-10">
        {awardsImage.map((image) => (
          <div key={image} className="flex">
            <Image
              width={100}
              height={100}
              src={renderImg(image)}
              alt="logo"
              className="p-5 m-4 h-40 w-40"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlobalAwards;
