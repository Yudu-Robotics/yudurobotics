"use client";
import renderImg from "@/imgImport";
import React from "react";
import CeoReviewsContainer from "../ceo-reviews";
// import { highlightWords } from "@/app/utility/highlightWords";
import Image from "next/image";
import AnimatedContent from "@/components/bits/AnimatedContent";
const data = [
  {
    id: 1,
    title1: "We’re NOT",
    title2: "Short-Term.",
    bg: "text-[#BBA5FE]",
    desc: "We’re in this for the long haul. After 12 years of experience, we’re still in the game—growing, learning, and supporting our partners every step of the way.",
  },
  {
    id: 2,
    title1: "We DON’T",
    title2: "Just Sell Products.",
    bg: "text-[#FEF7A5]",
    desc: "Curriculum, product, software, and service all in one place—no piecing things together on your own. And because we manufacture in-house, you’ll always have what you need, when you need it.",
  },
  {
    id: 3,
    title1: "We DON’T",
    title2: "Do Boring Designs.",
    bg: "text-[#A5FED9]",
    desc: "Forget lazy stock images or cookie-cutter products. Our robots are designed by real people, with real style. You get beauty and brains",
  },
  {
    id: 4,
    title1: "We DON’T",
    title2: "Recycle Old Tech. ",
    bg: "text-[#BBA5FE]",
    desc: "We’re not repackaging old ideas and calling it “innovation.” We create fresh, cutting-edge robotics that will leave outdated tech in the dust.",
  },
  {
    id: 5,
    title1: "We WON’T",
    title2: "Sell and Run.",
    bg: "text-[#FEF7A5]",
    desc: "No disappearing acts here. Our solutions come with full support—think of us as your trusty sidekick, ready for high-fives when things go right and back-up when they don’t.",
  },
];
function Section1() {
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 768);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className="w-full h-auto">
      {/* <div></div> */}
      <div className="flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center justify-center">
          <div className="xl:px-12 xs:p-12 md:p-2">
            <p
              className=" text-center items-center font-cobaltRidge text-6xl md:text-4xl lg:text-6xl xl:text-8xl  text-primary-foreground"
              style={{
                fontWeight: 1000 /* Bold weight */,
                lineHeight: "1.2" /* Line height */,
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              “We build{" "}
              <span className="relative inline-block z-10">
                robots
                <Image
                  width={100}
                  height={100}
                  src={renderImg("imgonp")}
                  alt="Image"
                  className="absolute xs:-top-56 xs:left-52 sm:-top-36 sm:left-52 md:-top-20 lg:-top-16 -z-20"
                />
              </span>{" "}
              to amaze,{" "}
              <span className="relative inline-block z-40">
                inspire,
                {/* <img
                  src={renderImg("imgong")}
                  alt="Image"
                  className="absolute xs:-bottom-4 xs:-left-10 sm:-left-12 sm:-bottom-4 md:-bottom-20 md:-right-24 lg:top-2 lg:-right-2 -z-50"
                /> */}
              </span>{" "}
              <span className="relative inline-block z-10">
                and
                <Image
                  width={100}
                  height={100}
                  src={renderImg("imgong")}
                  alt="Image"
                  className="absolute xs:-bottom-4 xs:-left-16 sm:-left-12 sm:-bottom-4 md:-bottom-20 md:-left-2 lg:-top-4 lg:-left-8  -z-50"
                />
              </span>{" "}
              <span className="relative inline-block z-20">redefine </span> the{" "}
              <span className=" relative inline-block z-0">
                game!
                <Image
                  width={100}
                  height={100}
                  src={renderImg("afterw")}
                  alt="Image"
                  className="absolute xs:-top-2 md:-right-16 lg:-right-30 lg:top-2 top-6 -right-16 -z-10 "
                />
              </span>{" "}
              <br />
              {/* <span className="relative inline-block z-0">
                minds
                <img
                  src={renderImg("imgonm")}
                  alt=""
                  className="absolute xs:-bottom-4 xs:-left-14 lg:-top-4 lg:-left-16 sm:-left-12 sm:bottom-4 md:-bottom-12 md:-left-56 -z-50"
                />
              </span>{" "}
              <br />
              and change the game!” */}
            </p>
          </div>
          <div className="w-screen sm:w-full flex items-center justify-center mt-2 mb-4 ">
            <Image
              width={1000}
              height={1000}
              alt=""
              className="w-[50%] md:w-[30%]"
              src={renderImg("line")}
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="text-center xl:mt-6 w-3/4">
          Let’s get real.
          <br />
          <div className="relative">
            <span>
              Yeah, we could dress this page up with sweetened marketing jargon
              and fancy sentences. But honestly, we&lsquo;re here to have a real
              conversation with you. No fluff, just facts—delivered with a bit
              of fun.
            </span>
          </div>
          <br />
          <br />
          So here&apos;s what we&apos;re{" "}
          <span className="font-bold italic">NOT</span> about
        </div>
      </div>
      <div
        className="bg-red flex justify-center mt-14"
        style={{ transform: "rotate(0deg)", transformOrigin: "top right" }}
      >
        <Image
          width={100}
          height={100}
          src={renderImg("arrow1")}
          alt="arrow"
          className="w-40"
        />
      </div>
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <div className="bg-red h-full w-full p-4 xs:mb-12 md:mb-4">
          <div className="w-full flex flex-wrap justify-center mt-20 ">
            {data.map((item: (typeof data)[0]) => (
              <div
                key={item.id}
                className="flex sm:w-96 justify-between sm:my-8 my-3 flex-col sm:px-5"
              >
                <div
                  className="font-cobaltRidge  text-[48px] lg:text-[60px]"
                  style={{ lineHeight: "1" }}
                >
                  <span className="block">{item.title1}</span>
                  <span
                    className={`font-cobaltRidge sm:text-[36px] md:text-[48px] lg:text-[60px] ${item.bg} block`}
                  >
                    {item.title2}
                  </span>
                </div>
                <div className="w-9/12 text-lg sm:text-base flex items-center h-auto font-light">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </AnimatedContent>

      <div className="sm:my-28 mx-4">
        <CeoReviewsContainer />
      </div>
    </div>
  );
}

export default Section1;
