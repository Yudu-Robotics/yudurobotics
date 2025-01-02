"use client"
import renderImg from "@/imgImport";
import React, { useEffect, useState } from "react";
import CeoReviewsContainer from "../ceo-reviews";
import { highlightWords } from "@/app/utility/highlightWords";
const data = [
  {
    title1: "We’re NOT",
    title2: "Short-Term.",
    bg: "text-[#BBA5FE]",
    desc: "We’re in this for the long haul. After 12 years of experience, we’re still in the game—growing, learning, and supporting our partners every step of the way.",
  },
  {
    title1: "We DON’T",
    title2: "Just Sell Products.",
    bg: "text-[#FEF7A5]",
    desc: "Curriculum, product, software, and service all in one place—no piecing things together on your own. And because we manufacture in-house, you’ll always have what you need, when you need it.",
  },
  {
    title1: "We DON’T",
    title2: "Do Boring Designs.",
    bg: "text-[#A5FED9]",
    desc: "Forget lazy stock images or cookie-cutter products. Our robots are designed by real people, with real style. You get beauty and brains",
  },
  {
    title1: "We DON’T",
    title2: "Recycle Old Tech. ",
    bg: "text-[#BBA5FE]",
    desc: "We’re not repackaging old ideas and calling it “innovation.” We create fresh, cutting-edge robotics that will leave outdated tech in the dust.",
  },
  {
    title1: "We WON’T",
    title2: "Sell and Run.",
    bg: "text-[#FEF7A5]",
    desc: "No disappearing acts here. Our solutions come with full support—think of us as your trusty sidekick, ready for high-fives when things go right and back-up when they don’t.",
  },
];
function Section1() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-auto">
      <div></div>
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center justify-center">
          <div className="xl:px-12 ">
            <p className=" text-center items-center font-piepie text-6xl md:text-4xl lg:text-6xl xl:text-8xl  text-primary-foreground">
              “We’re not{" "}
              <span className="relative inline-block z-10">
                playing
                <img
                  src={renderImg("imgonp")}
                  alt="Image"
                  className="absolute xs:-bottom-4 xs:-left-14 sm:-left-12 md:-top-16 lg:-top-12 -z-20"
                />
              </span>{" "}
              small. We’re{" "}
              <span className="relative inline-block z-10">
                making
                <img
                  src={renderImg("imgong")}
                  alt="Image"
                  className="absolute xs:-bottom-4 xs:-left-14 sm:-left-12 sm:-bottom-4 md:-bottom-20 md:-right-24 lg:top-2 lg:-right-2 -z-50"
                />
              </span>{" "}
              robots to{" "}
              <span className=" relative inline-block z-0">
                blow
                <img
                  src={renderImg("afterw")}
                  alt="Image"
                  className="absolute md:-right-32 top-6 -right-16 -z-10 "
                />
              </span>{" "}
              <br />
              <span className="relative inline-block z-0">
                minds<img src={renderImg("imgonm")} alt="" className="absolute xs:-bottom-4 xs:-left-14 lg:-top-12 lg:left-2 sm:-left-8 sm:bottom-8 md:bottom-4 md:left-2 -z-10" /></span>{" "}
              and change the game!”
            </p>
          </div>
          <div className="w-[80%] sm:w-full flex items-center justify-center mt-5 sm:ml-64">
            <img src={renderImg("line")} />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="text-center xl:mt-6 w-3/4">
          Let’s get real.

          <br />
          <div className="relative">
            <span>
              Yeah, we could dress this page up with sweetened marketing jargon and
              fancy sentences. But honestly, we're here to have a real conversation
              with you. No fluff, just facts—delivered with a bit of fun.
            </span>
          </div>
          <br />
          <br />
          So here’s what we’re <span className="font-bold">NOT</span> about
        </div>
      </div>
      <div
        className="bg-red flex justify-center ml-36 mt-14"
        style={{ transform: "rotate(0deg)", transformOrigin: "top right" }}
      >
        <img src={renderImg("arrow1")} alt="arrow image" />
      </div>
      <div className="bg-red h-full w-full">
        {isSmallScreen ? (
          <div className="w-full flex flex-col justify-between lg:-translate-y-16">
            {data.map((item: any) => (
              <div
                key={item.id}
                className="grid grid-cols-1 justify-between sm:my-8 my-8 sm:flex-row flex-col px-5"
              >
                {/* Left section - 70% width on desktop, full width on mobile */}
                <div className="font-piepie text-[48px] sm:text-[60px] w-full" style={{ lineHeight: "1" }}>
                  <span className="block">{item.title1}</span>
                  <span className={`font-piepie text-[48px] sm:text-[60px] w-full ${item.bg} block`}>
                    {item.title2}
                  </span>
                </div>
                {/* Right section - 30% width on desktop, full width on mobile */}
                <div className="w-[90%] mt-8 text-lg flex items-center h-auto">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col justify-between lg:-translate-y-16">
            {data.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between sm:my-8 my-3 sm:flex-row flex-col px-5"
              >
                {/* Left section - 70% width on desktop, full width on mobile */}
                <div className="font-piepie sm:text-[60x] md:text-[48px] lg:text-[60px] sm:w-[60%] md:w-[70%]" style={{ lineHeight: "1" }}>
                  <span className="block">{item.title1}</span>
                  <span className={`font-piepie sm:text-[36px] md:text-[48px] lg:text-[60px] sm:w-[70%] md:w-[70%] ${item.bg} block`}>
                    {item.title2}
                  </span>
                </div>
                {/* Right section - 30% width on desktop, full width on mobile */}
                <div className="w-full sm:w-[30%] text-lg sm:text-base flex items-center h-auto">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="sm:my-28 mx-4">
        <CeoReviewsContainer />
      </div>
    </div>
  );
}

export default Section1;
