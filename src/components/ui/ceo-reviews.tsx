import renderImg from "@/imgImport";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface CeoProps {
  data?: any;
}
const CeoReviewsContainer: React.FC<CeoProps> = ({ data }) => {
  return (
    <div className="w-full relative">
      <div>
        <img alt="" src={renderImg("star1")} className="" />
      </div>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center">
          <img alt="" src={renderImg("blurStar")} className="" />
          <div className="text-3xl font-serif">PictelAI</div>
        </div>

        <div className="flex items-center">
          <p className="text-center  items-center font-piepie text-2xl md:text-4xl lg:text-5xl  text-primary-foreground">
            {data?.desc ||
              "Yudu Robotics has been an incredible partner, blending creativity with cutting-edge tech to drive innovation like never before."}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CEO</AvatarFallback>
        </Avatar>

        <h4 className="mt-2 text-xl font-tthoves-semiBold">
          {data?.name || "Mr Filepe Gracia"}
        </h4>
        <p className="font-tthoves">
          {data?.designation && data?.company
            ? `${data?.designation} , ${data?.company}`
            : "Marketing Head , Inroprin - Peru"}
        </p>
      </div>
      <div className="lg:flex justify-end lg:-mt-16 lg:px-10 hidden relative ">
        <img alt="" src={renderImg("star2")} className="" />
        <div className=" absolute right-0  -top-9 ">
          <img alt="" src={renderImg("star1")} className=" w-10 " />
        </div>
      </div>
      <div className="hidden md:block absolute md:-translate-y-60 xl:-translate-y-40 -left-28">
        <img alt="" src={renderImg("curv")} className="" />
      </div>
    </div>
  );
};

export default CeoReviewsContainer;
