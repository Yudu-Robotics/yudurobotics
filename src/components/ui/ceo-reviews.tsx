import renderImg from "@/imgImport";
// import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { TypingAnimation } from "../magicui/typing-animation";
interface CeoProps {
  data?: {
    name: string;
    designation: string;
    company: string;
    desc: string;
  };
}
const CeoReviewsContainer: React.FC<CeoProps> = ({ data }) => {
  return (
    <div className="w-full relative">
      <div>
        <Image
          width={500}
          height={500}
          alt=""
          src={renderImg("star1")}
          className="h-8 w-8 hidden md:block"
        />
      </div>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center" />

        <div className="flex items-center">
          <div
            className="text-center items-center font-TThoves text-2xl md:text-4xl lg:text-5xl  text-primary-foreground text-[var(--Fontsizedisplay-sm)] font-bold leading-[var(--Lineheightdisplay-sm)] underline-offset-from-font decoration-skip-ink-none"
            style={{
              fontFamily: "'YourFontFamily', sans-serif",
              fontWeight: 1000,
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            <TypingAnimation duration={50}>
              {data?.desc ||
                "Yudu Robotics has been an incredible partner, blending creativity with cutting-edge tech to drive innovation like never before."}
            </TypingAnimation>
          </div>
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
        <div className="">
          <Image
            width={500}
            height={500}
            alt=""
            src={renderImg("star1")}
            className="h-10 w-10 hidden md:block absolute right-16 top-4 "
          />
          <Image
            width={500}
            height={500}
            alt=""
            src={renderImg("star2")}
            className="h-8 w-8 hidden md:block"
          />
        </div>
      </div>
      {/* <div className="hidden lg:block absolute md:-translate-y-60 xl:-translate-y-40  -left-40">
        <img alt="" src={renderImg("curv")} className="" />
      </div> */}
      <div className="hidden lg:block absolute md:-translate-y-60 xl:-translate-y-40  -left-40 z-40">
        <Image
          width={500}
          height={500}
          alt=""
          src={renderImg("curv")}
          className="w-56 hidden md:block"
        />
      </div>
    </div>
  );
};

export default CeoReviewsContainer;
// style={{
//   fontFamily: "'YourFontFamily', sans-serif",  /* Replace with your desired font family */
//   fontWeight: 1000,   /* Bold weight */
//   lineHeight: "1.2", /* Line height */
//   textUnderlinePosition: "from-font",
//   textDecorationSkipInk: "none"
// }}>
