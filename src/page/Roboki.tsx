import { highlightWords } from "@/app/utility/highlightWords";
import SoftwareAdaptive from "@/components/ui/common/adaptive-software";
import CeoComments from "@/components/ui/common/ceo-comments";
import ProductCeoReviewsContainer from "@/components/ui/common/ceo-product-review";
import ExtraFeatures from "@/components/ui/common/extra-features";
import FlexibleLearning from "@/components/ui/common/flexible-learning";
import GetInTouch from "@/components/ui/common/get-in-touch";
import HardwareProductFeatures from "@/components/ui/common/hardware-product-feature";
import JumpingButtons from "@/components/ui/common/jumping-buttons";
import LegoFun from "@/components/ui/common/lego-fun";
import PlodeDownloade from "@/components/ui/common/plode-download";
import PlodeSoftware from "@/components/ui/common/plode-software";
import TestimonialBanner from "@/components/ui/common/testimonial-banner";
import Unboxing from "@/components/ui/common/unboxing";
import VersatileSoftware from "@/components/ui/common/versatile-software";
import FAQs from "@/components/ui/home/faqs";
import { mockData } from "@/data/mockData";
import renderImg from "@/imgImport";
import renderSvg from "@/svgImport";
import React from "react";

export default function Roboki() {
  const data = mockData.roboki;
  return (
    <>
      <div className="flex flex-col px-8 lg:px-28 sm:py-4 bg-primary ">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10">
          <div className="w-full">
            {/* Main Text */}

            <div className="space-y-4 w-full ">
              {/* Main Headline */}
              <div className="font-piepie text-5xl md:text-6xl lg:text-7xl xl:text-8xl  text-primary-foreground w-[100%] lg:w-[80%] sm:text-start text-center ">
                {highlightWords(
                  data.heading,
                  data.wordsToHighlight.text1,
                  "text-destructive"
                )}
              </div>

              {/* Subtext */}
              <div className="font-tthoves text-opacity-35 text-primary-foreground sm:text-sm md:text-md lg:text-lg xl:text-xl  w-[100%] sm:w-[60%] text-lg sm:text-start text-center">
                {data.subheading}
              </div>
            </div>
          </div>
          {/* Buttons Section */}
          {
            <JumpingButtons
              ishorizontal="true"
              text1={data?.jumppingButton?.[0]?.text1 || ""}
              text2={data?.jumppingButton?.[0]?.text2 || ""}
              bgColor={data?.jumppingButton?.[0]?.bgColor || ""}
              textColor={data?.jumppingButton?.[0]?.textColor || ""}
              link={data?.jumppingButton?.[0]?.link || ""}
            />
          }
        </div>
        <div className="hidden sm:flex  ">
          <img
            src={data.images[0]}
            className="w-full "
            style={{ marginTop: "-9%" }}
          />
        </div>
        <div className="sm:hidden pb-10">
          <img src={renderImg("robokim")} className="w-full " />
        </div>
      </div>
      <div className="w-full -mt-1 ">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg(data.sectionHeader)}
      </div>
      <div className="px-4 sm:px-12 lg:px-28 text-black py-5 lg:py-10">
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data} />
        </div>
        <div className="py-8 lg:py-12">
          <Unboxing product="Roboki"/>
        </div>
        <div className="text-sm py-24 text-center font-bold flex flex-col space-y-6 justify-center items-center">
          <p className="text-lg sm:text-lg md:text-md lg:text-lg xl:text-xl font-tthoves-semiBold">
            <span className="text-[#4A4A4F] opacity-70">
              Hover over each feature below to{" "}
            </span>
            <span className="text-primary italic">see it in action!</span>
          </p>
          {renderSvg("doubleArrow")}
        </div>
        <div>{<HardwareProductFeatures hardware={data.features_data} />}</div>
        <div className="pb-5">
          <LegoFun
            // @ts-ignore
            legoFun={data.legofun}
          />
        </div>
        <div className="">
          <PlodeSoftware jumppingdata={data.jumppingButton?.[1] || {}} />
        </div>
        <div className="">
          <SoftwareAdaptive image="playroboki" />
        </div>
        <div className=" md:py-20">
          <VersatileSoftware name="roboki" />
        </div>
        <div>
          <ExtraFeatures
            data={data.features_data?.software_experience[0]}
            title="Software"
          />
        </div>
        <div className="py-16 lg:py-20">
          <PlodeDownloade
            jumppingdata={data.jumppingButton?.[2] || {}}
            heading="Unleash Your Creativity with Plode"
            desc="Download the Plode app today and start coding fun, engaging projects. Whether you’re new to coding or a seasoned pro, Plode makes learning and creating a breeze!"
          />
        </div>
        {/* <div>
          <CeoComments />
        </div>{" "} */}
        <div className="py-20">
          <FlexibleLearning product="Roboki"/>
        </div>
        <div className="py-16 md:py-20">
          <ExtraFeatures
            data={data.features_data.cirriculum}
            title="Curriculum"
          />
        </div>
        <div className="py-16 lg:py-20">
          {/* <PlodeDownloade
            jumppingdata={data.jumppingButton?.[3] || {}}
            heading="Transform Your Learning with Our Curriculum"
            desc="Explore our comprehensive curriculum designed to make coding and robotics accessible and exciting. Get started with structured lessons and hands-on projects today!"
          /> */}
        </div>
        <div className="-mx-8 lg:-mx-28">
          <TestimonialBanner />
        </div>
        <div className="py-5 lg:py-20">
          <FAQs product="roboki" />
        </div>
        <div>
          <GetInTouch />
        </div>
      </div>
    </>
  );
}
