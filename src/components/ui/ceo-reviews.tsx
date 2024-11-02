import renderImg from "@/imgImport";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function CeoReviewsContainer() {
  return (
    <div className="w-full relative">
      <div>
        <img src={renderImg("star1")} className="" />
      </div>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center">
          <img src={renderImg("blurStar")} className="" />
          <div className="text-3xl font-serif">PictelAI</div>
        </div>

        <div className="flex items-center">
          <p className="text-center  items-center font-piepie text-2xl md:text-4xl lg:text-6xl tracking-wider text-primary-foreground">
            Yudu Robotics has been an incredible partner, blending creativity
            with cutting-edge tech to drive innovation like never before.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CEO</AvatarFallback>
        </Avatar>

        <h4 className="mt-2 text-xl font-semibold">Ravi Mehta</h4>
        <p className="font-extralight">CEO, Innovatech Solution</p>
      </div>
      <div className="lg:flex justify-end lg:-mt-16 lg:px-10 hidden relative ">
        <img src={renderImg("star2")} className="" />
        <div className=" absolute right-0  -top-9 ">
          <img src={renderImg("star1")} className=" w-10 " />
        </div>
      </div>
      <div className="hidden 2xl:block absolute -left-28">
        <img src={renderImg("curv")} className="" />
      </div>
    </div>
  );
}

export default CeoReviewsContainer;
