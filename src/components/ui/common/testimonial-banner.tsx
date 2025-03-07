/* eslint-disable react/no-unescaped-entities */
// pages/TestimonialBanner.tsx

// import renderImg from "@/imgImport";
// import ImageWithText from "./testimonial-img-with-text";
import renderSvg from "@/svgImport";
import Image from "next/image";

export default function TestimonialBanner() {
  return (
    <div className="flex flex-col space-y-16 py-20">
      <div className="hidden lg:flex justify-between px-10 lg:px-40">
        <div>{renderSvg("star1")}</div>
        <div>{renderSvg("star1")}</div>
      </div>

      <div className="flex overflow-hidden relative w-full">
        <div className="flex gap-x-6 animate-mobile-scroll sm:animate-loop-scroll">
          <Content />
          <Content />
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center">
        {renderSvg("star1")}
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative min-w-full">
      <div className="aspect-[3156/797] min-h-[300px]">
        <Image
          width={3156}
          height={797}
          src={"/assets/home/banner.webp"}
          alt="Background"
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
