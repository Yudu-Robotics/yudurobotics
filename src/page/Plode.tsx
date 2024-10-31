"use client";
import { highlightWords } from "@/app/utility/highlightWords";
import SoftwareAdaptive from "@/components/ui/common/adaptive-software";
import CeoComments from "@/components/ui/common/ceo-comments";
import ProductCeoReviewsContainer from "@/components/ui/common/ceo-product-review";
import ExtraFeatures from "@/components/ui/common/extra-features";
import FlexibleLearning from "@/components/ui/common/flexible-learning";
import GetInTouch from "@/components/ui/common/get-in-touch";
import HardwareProductFeatures from "@/components/ui/common/hardware-product-feature";
import JumpingButtons from "@/components/ui/common/jumping-buttons";
import PlodeDownloade from "@/components/ui/common/plode-download";
import PlodeSoftware from "@/components/ui/common/plode-software";
import TestimonialBanner from "@/components/ui/common/testimonial-banner";
import VersatileSoftware from "@/components/ui/common/versatile-software";
import FAQs from "@/components/ui/home/faqs";
import SixBlock from "@/components/ui/SixBlock";
import { mockData } from "@/data/mockData";
import renderSvg from "@/svgImport";
import React from "react";

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
      <div className="px-8 lg:px-28 py-4 bg-primary">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10 ">
          <div className=" flex justify-between">
            {/* Main Text */}

            <div className="space-y-4 flex flex-col items-start ">
              {/* Main Headline */}
              <div className="font-piepie text-5xl md:text-6xl lg:text-7xl tracking-wider text-primary-foreground lg:w-[80%]">
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
              <div className="pt-20">
                {
                  <JumpingButtons
                    ishorizontal="true"
                    text1={data?.jumppingButton?.[0]?.text1 || ""}
                    text2={data?.jumppingButton?.[0]?.text2 || ""}
                    bgColor={data?.jumppingButton?.[0]?.bgColor || ""}
                    textColor={data?.jumppingButton?.[0]?.textColor || ""}
                    link=""
                  />
                }
              </div>
            </div>

            <div className="w-1/2">
              <img src={data.images[0]} className="w-full " />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg(data.sectionHeader)}
      </div>
      <div className="px-12 lg:px-28">
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data.ceoComment} />
        </div>
        <div className="text-sm py-8  text-center font-bold flex flex-col space-y-6 justify-center items-center">
          <p className="text-[#4A4A4F]">
            Hover over each feature below to{" "}
            <span className="text-primary italic">see it in action!</span>
          </p>
          {renderSvg("doubleArrow")}
        </div>
        <div className=" text-black py-5 lg:py-10 ">
          <SoftwareAdaptive />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
          <SixBlock data={data?.plugandplay || defaultPlugAndPlayData} />
        </div>

        <div className="px-12 lg:px-28 text-black py-5 lg:py-10 flex ">
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data?.software_experience[0]}
              title=""
            />
          </div>
        </div>
      </div>
      <div className="px-12 lg:px-28 text-black py-5 lg:py-10 flex justify-center">
        <p className="w-1/2 text-[#4A4A4F] text-xl font-semibold italic">
          <span className="text-[#5423E6]">
            Not every Play option is available for all kits{" "}
          </span>
          — only the features specific to the selected kit will be enabled,
          ensuring a streamlined and engaging experience. Each interaction is
          tailored to enhance creativity and functionality, bringing your
          robotics journey to life with effortless, hands-on fun.
        </p>
      </div>
      <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data.ceoComment} />
        </div>
        <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
          {<HardwareProductFeatures hardware={data.features_data} />}
          <div className="flex w-full justify-center">
            <p className="w-1/2 text-center font-semibold">
              This adaptive mode ensures every kit delivers a unique data
              experience, empowering users to experiment, track performance, and
              visualise results{" "}
              <span className="text-[#5423E6]">
                — all with just a few taps.
              </span>
            </p>
          </div>
        </div>
        <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data?.software_experience[1]}
              title="software"
            />
          </div>
        </div>
        <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
          <FlexibleLearning
            title="Code Mode - Unlock the Future of Learning with Hands-On Programming"
            desc="Designed to blend the power of visual tools and script-based coding, Code Mode empowers users of all ages to seamlessly build, control, and interact with hardware through intuitive platforms. Whether you’re new to coding or an experienced developer, Code Mode makes the learning journey engaging and practical.
"
          />
        </div>
        <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
          <VersatileSoftware />
        </div>
        <div className="w-full flex justify-center flex-col items-center font-semibold">
          <p className="text-[#5423E6]">Why Visual Programming?</p>
          <p className="w-1/3 text-center">
            With instant feedback and error-free assembly, visual programming
            allows you to prototype faster, learn by doing, and transition
            easily into more complex coding.
          </p>
        </div>
        <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data?.software_experience[4]}
              title="software"
            />
          </div>
        </div>
        <div className="w-full flex justify-center flex-col items-center font-semibold">
          <p className="text-[#5423E6]">Build to Solve, Learn to Innovate</p>
          <p className="w-1/3 text-center">
            Project-based programming helps learners explore real-world
            applications, fostering creativity and problem-solving through
            experimentation.
          </p>
        </div>
        <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
          <VersatileSoftware />
        </div>
        <div className="w-full flex justify-center flex-col items-center font-semibold">
          <p className="text-[#5423E6]">Build to Solve, Learn to Innovate</p>
          <p className="w-1/3 text-center">
            Project-based programming helps learners explore real-world
            applications, fostering creativity and problem-solving through
            experimentation.
          </p>
        </div>
        <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data?.software_experience[2]}
              title="software"
            />
          </div>
        </div>
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data.ceoComment} />
        </div>
        <div className="py-8 lg:py-16 min-h-[30vh] flex ">
          <div className="w-1/2 flex justify-center items-center ">
            <div className="w-2/3 h-full bg-[#2CF7A4] rounded-xxl"></div>
          </div>
          <div className="w-1/2 p-5">
            <p className="text-black font-piepie text-5xl md:text-6xl lg:text-6xl tracking-wider  w-[70%]">
              <span className="text-[#5423E6]">Script Programming – </span>
              Take Control with Text-Based Code
            </p>
            <p className="text-[#4A4A4F] w-[70%] mt-6">
              Script programming introduces users to real-world coding
              languages. If you’re ready to dive deeper, you can explore C
              programming and Python—both powerful tools for building advanced
              hardware solutions.
            </p>
          </div>
        </div>
        <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
          <VersatileSoftware />
        </div>
        <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data?.software_experience[3]}
              title="software"
            />
          </div>
        </div>
        <div className="py-20">
          <FlexibleLearning />
        </div>
        {/* <div className="">
          <PlodeSoftware />
        </div>
        <div className="lg:-mt-52 ">
          <SoftwareAdaptive />
        </div> */}
        {/* <div className=" md:py-20">
          <VersatileSoftware />
        </div>
        <div>
          <ExtraFeatures
            data={data.features_data?.software_experience[0]}
            title="software"
          />
        </div> */}
        {/* <div className="py-16 lg:py-20">
          <PlodeDownloade
            heading="Unleash Your Creativity with Plode"
            desc="Download the Plode app today and start coding fun, engaging projects. Whether you’re new to coding or a seasoned pro, Plode makes learning and creating a breeze!"
          />
        </div> */}
        <div className=" text-black">
          <CeoComments />
        </div>{" "}
        <div className="py-20">
          <FlexibleLearning />
        </div>
        <div className="-mx-8 lg:-mx-28">
          <TestimonialBanner />
        </div>
        <div className="py-5 lg:py-20">
          <FAQs />
        </div>
        <div>
          <GetInTouch />
        </div>
      </div>
    </>
  );
}
