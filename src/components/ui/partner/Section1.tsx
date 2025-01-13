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
          <div className="xl:px-12 xs:p-12 md:p-2">
            <p className=" text-center items-center font-tthoves text-6xl md:text-4xl lg:text-6xl xl:text-8xl  text-primary-foreground" style={{
              fontFamily: "'YourFontFamily', sans-serif",  /* Replace with your desired font family */
              fontWeight: 1000,   /* Bold weight */
              lineHeight: "1.2", /* Line height */
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none"
            }}>
              “We’re not{" "}
              <span className="relative inline-block z-10">
                playing
                <img
                  src={renderImg("imgonp")}
                  alt="Image"
                  className="absolute xs:-top-56 xs:left-52 sm:-top-36 sm:left-52 md:-top-20 lg:-top-16 -z-20"
                />
              </span>{" "}
              small.{" "}
              <span className="relative inline-block z-40">
                We’re
                {/* <img
                  src={renderImg("imgong")}
                  alt="Image"
                  className="absolute xs:-bottom-4 xs:-left-10 sm:-left-12 sm:-bottom-4 md:-bottom-20 md:-right-24 lg:top-2 lg:-right-2 -z-50"
                /> */}
              </span>{" "}

              <span className="relative inline-block z-10">
                making
                <img
                  src={renderImg("imgong")}
                  alt="Image"
                  className="absolute xs:-bottom-4 xs:-left-16 sm:-left-12 sm:-bottom-4 md:-bottom-20 md:-left-2 lg:-top-4 lg:-left-8  -z-50"
                />
              </span>{" "}
              <span className="relative inline-block z-20">robots</span> to{" "}
              <span className=" relative inline-block z-0">
                blow
                <img
                  src={renderImg("afterw")}
                  alt="Image"
                  className="absolute xs:-top-2 md:-right-16 lg:-right-30 lg:top-2 top-6 -right-16 -z-10 "
                />
              </span>{" "}
              <br />
              <span className="relative inline-block z-0">
                minds<img src={renderImg("imgonm")} alt="" className="absolute xs:-bottom-4 xs:-left-14 lg:-top-4 lg:-left-16 sm:-left-12 sm:bottom-4 md:-bottom-12 md:-left-56 -z-50" /></span>{" "}
              <br />
              and change the game!”
            </p>
          </div>
          <div className="w-[80%] sm:w-full flex items-center justify-center mt-2 mb-4 sm:ml-6">
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
          So here’s what we’re <span className="font-bold italic">NOT</span> about
        </div>
      </div>
      <div
        className="bg-red flex justify-center ml-36 mt-14"
        style={{ transform: "rotate(0deg)", transformOrigin: "top right" }}
      >
        <img src={renderImg("arrow1")} alt="arrow image" />
      </div>
      <div className="bg-red h-full w-full p-4 xs:mb-12 md:mb-4">
        {isSmallScreen ? (
          <div className="w-full flex flex-col justify-between lg:-translate-y-16">
            {data.map((item: any) => (
              <div
                key={item.id}
                className="grid grid-cols-1  justify-between sm:my-6 my-8 sm:flex-row flex-col px-5"
              >
                {/* Left section - 70% width on desktop, full width on mobile */}
                <div className="font-tthoves text-[60px] sm:text-[60px] w-full  font-display  font-bold  text-left underline-offset-from-font decoration-skip-ink-none" style={{ fontWeight: 900, lineHeight: "1",  fontFamily: "'YourFontFamily', sans-serif", textDecorationSkipInk: "none", textUnderlinePosition: "from-font" }}>
                  <span className="block">
                    {item.title1.split(" ")[0]} <span className="italic">{item.title1.split(" ")[1]}</span> {item.title1.split(" ").slice(2).join(" ")}
                  </span>
                  <span className={`font-tthoves text-[60px] sm:text-[60px] w-full  ${item.bg} block`}style={{ fontWeight: 900, lineHeight: "1", fontFamily: "'YourFontFamily', sans-serif", textDecorationSkipInk: "none", textUnderlinePosition: "from-font" }}>
                    {item.title2}
                  </span>
                </div>
                {/* Right section - 30% width on desktop, full width on mobile */}
                <div className="w-[80%] mt-4 text-lg flex items-center h-auto text-left font-light leading-[var(--Lineheighttext-lg)] decoration-skip-ink-none" style={{ fontFamily: 'var(--Fontfamilyfont-family-body)', fontSize: 'var(--Fontsizetext-lg)' }}>

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
                <div className="w-full sm:w-[30%] text-lg sm:text-base flex items-center h-auto font-light">
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
