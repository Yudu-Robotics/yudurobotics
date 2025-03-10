"use client";
import { highlightWords } from "@/app/utility/highlightWords";
import SoftwareAdaptive from "@/components/ui/common/adaptive-software";
import CeoComments from "@/components/ui/common/ceo-comments";
import PlodeDifference from "@/components/ui/plode/plodeDifference";
import ProductCeoReviewsContainer from "@/components/ui/common/ceo-product-review";
import ExtraFeatures from "@/components/ui/common/extra-features";
import FlexibleLearning from "@/components/ui/common/flexible-learning";
import GetInTouch from "@/components/ui/common/get-in-touch";
import HardwareProductFeatures from "@/components/ui/common/hardware-product-feature";
import JumpingButtons from "@/components/ui/common/jumping-buttons";
import TestimonialBanner from "@/components/ui/common/testimonial-banner";
import VersatileSoftware from "@/components/ui/common/versatile-software";
import FAQs from "@/components/ui/home/faqs";
import SixBlock from "@/components/ui/SixBlock";
import { mockData } from "@/data/mockData";
import renderImg from "@/imgImport";
import renderSvg from "@/svgImport";
import React from "react";
import Getstart from "@/components/ui/plode/getStart";
import Curious from "@/components/ui/common/Curious";

export default function Plode() {
  const data = mockData.plode;
  interface PlugAndPlayAccessory {
    title: string;
    desc: string;
  }
  interface PlugAndPlayData {
    title: string;
    heading: string;
    wordsToHighlight: {
      text1: string[];
    };
    subheading: string;
    tableData: PlugAndPlayAccessory[];
  }
  const defaultPlugAndPlayData: PlugAndPlayData = {
    title: "Default Title",
    heading: "Default Heading",
    wordsToHighlight: {
      text1: [],
    },
    subheading: "Default Subheading",
    tableData: [],
  };
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 bg-primary pt-16 sm:pt-20 md:pt-16 lg:pt-20 xl:pt-24">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10 ">
          <div className="flex justify-between">
            {/* Main Text */}

            <div className="space-y-4 flex flex-col items-start ">
              {/* Main Headline */}
              <div className="font-cobaltRidge text-5xl md:text-6xl lg:text-7xl  text-primary-foreground lg:w-[80%]">
                {highlightWords(
                  data.heading,
                  data.wordsToHighlight.text1,
                  "text-destructive"
                )}
              </div>

              {/* Subtext */}
              <div className="text-xl w-[100%] lg:w-[60%] text-[#E2D8FE]">
                {data.subheading}
              </div>
              <div className="sm:pt-20 ">
                {
                  <JumpingButtons
                    ishorizontal={true}
                    text1={data?.jumppingButton?.[0]?.text1 || ""}
                    text2={data?.jumppingButton?.[0]?.text2 || ""}
                    bgColor={data?.jumppingButton?.[0]?.bgColor || ""}
                    textColor={data?.jumppingButton?.[0]?.textColor || ""}
                    link={data?.jumppingButton?.[0]?.link || ""}
                  />
                }
              </div>
            </div>

            <div className="sm:w-1/2  ">
              <img src={data.images[0]} className="w-full  p-5 sm:p-0" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg(data.sectionHeader)}
      </div>
      <div className="px-4 sm:px-12 lg:px-28">
        <div className="py-8 lg:py-16 -mx-10">
          <ProductCeoReviewsContainer comment={data} />
        </div>
        <div className="hidden text-sm py-24 my-8 text-center font-bold md:flex flex-col space-y-6 justify-center items-center">
          <p className="text-[#4A4A4F]">
            <span className="text-black ">
              Hover over each feature below to{" "}
            </span>
            <span className="text-primary italic">see it in action!</span>
          </p>
          {renderSvg("doubleArrow")}
        </div>
        <div className=" text-black py-5 lg:py-10 flex justify-center items-center">
          <SoftwareAdaptive data={data.adaptive} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="px-4 sm:px-12 lg:px-28 text-black py-5 lg:py-10 overflow-x-hidden">
          <SixBlock data={data?.plugandplay || defaultPlugAndPlayData} />
        </div>

        <div className="px-4 sm:px-12 lg:px-28 text-black py-5 lg:py-10 flex ">
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data?.software_experience[0]}
              title=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={renderImg("uparrow")} className="" />
      </div>
      <div className=" text-black py-5 lg:py-10 flex justify-center">
        <p className="sm:w-1/2 text-[#4A4A4F] sm:text-xl text-sm text-center font-tthoves-medium italic ">
          <span className="text-[#5423E6]">
            Not every Play option is available for all kits{" "}
          </span>
          — only the features specific to the selected kit will be enabled,
          ensuring a streamlined and engaging experience. Each interaction is
          tailored to enhance creativity and functionality, bringing your
          robotics journey to life with effortless, hands-on fun.
        </p>
      </div>
      <div className="px-4 md:px-12 lg:px-16 text-black py-5 lg:py-10 xl:px-28 ">
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data} />
        </div>
        <div className=" text-black py-5 lg:py-10">
          {<HardwareProductFeatures hardware={data.features_data} />}
          <div className="flex w-full flex-col items-center justify-center mt-11">
            <div className="w-full flex justify-center">
              <img src={renderImg("uparrow")} className="" />
            </div>
            <p className="sm:w-1/2 text-center font-tthoves-medium">
              This adaptive mode ensures every kit delivers a unique data
              experience, empowering users to experiment, track performance, and
              visualise results{" "}
              <span className="text-[#5423E6]">
                — all with just a few taps.
              </span>
            </p>
          </div>
        </div>
        <div className=" text-black py-5 lg:py-10">
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data?.software_experience[1]}
              title=""
            />
          </div>
        </div>
        <div className=" text-black py-5 lg:py-10">
          <FlexibleLearning
            newProduct={false}
            title="Code Mode - Unlock the Future of Learning with Hands-On Programming"
            desc="Designed to blend the power of visual tools and script-based coding, Code Mode empowers users of all ages to seamlessly build, control, and interact with hardware through intuitive platforms. Whether you’re new to coding or an experienced developer, Code Mode makes the learning journey engaging and practical.
"
          />
        </div>
        <div className=" text-black py-5 lg:py-10">
          <VersatileSoftware data={data.versatile[0]} />
        </div>
        <div className="w-full flex justify-center flex-col items-center font-tthoves-medium">
          <img src={renderImg("uparrow")} />
          <p className="text-[#5423E6]">Why Visual Programming?</p>
          <p className="sm:w-1/3 text-center text-sm sm:text-lg ">
            With instant feedback and error-free assembly, visual programming
            allows you to prototype faster, learn by doing, and transition
            easily into more complex coding.
          </p>
        </div>
        <div className=" text-black py-5 lg:py-10">
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data?.software_experience[4]}
              title=""
            />
          </div>
        </div>
        <div className="w-full flex justify-center flex-col items-center font-tthoves-medium">
          <img src={renderImg("uparrow")} />
          <p className="text-[#5423E6]">Build to Solve, Learn to Innovate</p>
          <p className="sm:w-1/3 text-sm sm:text-lg text-center">
            Project-based programming helps learners explore real-world
            applications, fostering creativity and problem-solving through
            experimentation.
          </p>
        </div>
        <div className=" text-black py-5 lg:py-10">
          <VersatileSoftware data={data.versatile[1]} />
        </div>
        <div className="w-full flex justify-center flex-col items-center font-tthoves-medium">
          <img src={renderImg("uparrow")} />
          <p className="text-[#5423E6]">Build to Solve, Learn to Innovate</p>
          <p className="sm:w-1/3 text-sm sm:text-lg text-center">
            Project-based programming helps learners explore real-world
            applications, fostering creativity and problem-solving through
            experimentation.
          </p>
        </div>
        <div className=" text-black py-5 lg:py-10">
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data?.software_experience[2]}
              title=""
            />
          </div>
        </div>
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data} />
        </div>
        <div className="py-8 lg:py-16 min-h-[30vh] flex flex-col sm:flex-row">
          <div className="sm:w-1/2 w-full flex justify-center items-center ">
            <div className="sm:w-2/3 h-full w-full  bg-red-600 rounded-xxl"></div>
          </div>
          <div className="sm:w-1/2 p-5">
            <p className="text-black font-cobaltRidge text-3xl md:text-6xl lg:text-6xl   sm:w-[70%]">
              <span className="text-[#5423E6]">Script Programming – </span>
              Take Control with Text-Based Code
            </p>
            <p className="text-[#4A4A4F] sm:w-[70%] mt-6">
              Script programming introduces users to real-world coding
              languages. If you’re ready to dive deeper, you can explore C
              programming and Python—both powerful tools for building advanced
              hardware solutions.
            </p>
          </div>
        </div>
        <div className=" text-black py-5 lg:py-10">
          <VersatileSoftware data={data.versatile[2]} />
        </div>
        <div className=" text-black py-5 lg:py-10">
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data?.software_experience[3]}
              title=""
              horizantal={true}
            />
          </div>
        </div>
        <div className="w-full flex justify-center flex-col items-center font-tthoves-medium">
          <img src={renderImg("uparrow")} />
          <p className="text-[#5423E6]">Why Python?</p>
          <p className="sm:w-1/3 text-sm sm:text-lg text-center">
            Python is ideal for learners transitioning to text-based coding,
            offering a gentle learning curve with direct access to hardware
            features.
          </p>
        </div>
        <div className="py-20 -mx-8 lg:-mx-28">
          <PlodeDifference data={data.plodeDifference} />
        </div>
        {/* <div className=" text-black">
          <CeoComments title="Plode makes coding accessible and fun for all ages, turning complex programming into an engaging, intuitive experience." />
        </div>{" "} */}
        <div className="py-20">
          <Getstart
            title="Get Started Today – Create, Code, and Control"
            desc="Plode’s Code Mode offers a complete learning experience, from drag-and-drop assembly to advanced coding in Python and C. Whether you’re building your first project or perfecting a complex solution, our tools are designed to make learning programming fun, engaging, and rewarding."
          />
        </div>
        <div className="w-screen -mx-4 md:-mx-12 lg:-mx-16 xl:-mx-28">
          <TestimonialBanner />
        </div>
        <div className="py-5 lg:py-20">
          <FAQs product="home" />
        </div>
        <div>
          <GetInTouch />
        </div>
        <div>
          <Curious jumppingButton={data?.jumppingButton || []} />
        </div>
      </div>
    </>
  );
}
