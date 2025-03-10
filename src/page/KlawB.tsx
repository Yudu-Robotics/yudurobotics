import { highlightWords } from "@/app/utility/highlightWords";
import SoftwareAdaptive from "@/components/ui/common/adaptive-software";
import CeoComments from "@/components/ui/common/ceo-comments";
import ProductCeoReviewsContainer from "@/components/ui/common/ceo-product-review";
import ExtraFeatures from "@/components/ui/common/extra-features";
import FlexibleLearning from "@/components/ui/common/flexible-learning";
import GetInTouch from "@/components/ui/common/get-in-touch";
import HardwareProductFeatures from "@/components/ui/common/hardware-product-feature";
import Working from "@/components/ui/common/how-it-works";
import JumpingButtons from "@/components/ui/common/jumping-buttons";
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
import Curious from "@/components/ui/common/Curious";
export default function KlawB() {
  const data = mockData.klaw_b;
  return (
    <>
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 bg-primary pt-16 sm:pt-20 md:pt-16 lg:pt-20 xl:pt-24">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10">
          <div className="w-full">
            {/* Main Text */}

            <div className="space-y-4 h-full">
              {/* Main Headline */}
              <div className="w-2/3 font-cobaltRidge text-5xl md:text-6xl lg:text-7xl  text-primary-foreground ">
                {highlightWords(
                  data.heading,
                  data.wordsToHighlight.text1,
                  "text-destructive"
                )}
              </div>

              {/* Subtext */}
              <div className="font-tthoves text-opacity-35 text-primary-foreground sm:text-sm md:text-base lg:text-lg xl:text-xl  w-[100%] sm:w-[60%] text-lg  ">
                {data.subheading}
              </div>
              {/* Buttons Section */}
              <div className="flex justify-start w-full">
                <JumpingButtons
                  ishorizontal={true}
                  text1={data?.jumppingButton?.[0]?.text1 || ""}
                  text2={data?.jumppingButton?.[0]?.text2 || ""}
                  bgColor={data?.jumppingButton?.[0]?.bgColor || ""}
                  textColor={data?.jumppingButton?.[0]?.textColor || ""}
                  link={data?.jumppingButton?.[0]?.link || ""}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex ">
          <img
            src={data.images[0]}
            className="w-full"
            style={{ marginTop: "-35%" }}
          />
        </div>
        <div className="sm:hidden pb-10">
          <img src={renderImg("klawbm")} className="w-full" />
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg(data.sectionHeader)}
      </div>
      <div className="px-4 md:px-12 lg:px-16 text-black py-5 lg:py-10 xl:px-28 ">
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data} />
        </div>
        <div className="py-8 lg:py-24">
          <Unboxing product="Klaw-b" />
        </div>
        <div className="hidden text-sm py-24 my-8 text-center font-bold sm:flex flex-col space-y-6 justify-center items-center">
          <div className="text-lg sm:text-lg md:text-base lg:text-lg xl:text-xl font-tthoves-semiBold">
            <p className="opacity-70 mt-8">
              Hover over each feature below to{" "}
              <span className="text-primary italic">see it in action!</span>
            </p>
            <div className="flex justify-center">
              {renderSvg("doubleArrow")}
            </div>
          </div>
        </div>
        <div>
          <ExtraFeatures
            // @ts-ignore
            data={data.features_data?.hardware_precision}
            title="Hardware"
          />
        </div>
        {/* <div className="text-sm py-8 lg:py-16 text-center font-bold flex flex-col space-y-6 justify-center items-center">
          <p>
            Hover over each feature below to{" "}
            <span className="text-primary italic">see it in action!</span>
          </p>
          {renderSvg("doubleArrow")}
        </div> */}
        <div>{<HardwareProductFeatures hardware={data.features_data} />}</div>
        <div>
          <Working
            // @ts-ignore
            data={data.working}
          />{" "}
        </div>
        <div className="py-16">
          <PlodeSoftware
            jumppingdata={data.jumppingButton?.[1] || {}}
            subheading="Klaw-b’s Plode software is as fun as it is powerful—tailored to inspire creativity, adapt to all levels, and make coding feel like a breeze."
          />
        </div>
        <div className="lg:-mt-52 ">
          <SoftwareAdaptive image="playklawb" product="KlawB" />
        </div>
        <div className=" md:py-20">
          <VersatileSoftware name="klaw" />
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
          <FlexibleLearning product="Klaw-b" />
        </div>
        <div className="py-16 md:py-20">
          <ExtraFeatures
            data={data.features_data.cirriculum}
            title="Curriculum"
          />
        </div>
        {/* <div className="py-16 lg:py-20">
          <PlodeDownloade
            jumppingdata={data.jumppingButton?.[3] || {}}
            heading="Transform Your Learning with Our Curriculum"
            desc="Explore our comprehensive curriculum designed to make coding and robotics accessible and exciting. Get started with structured lessons and hands-on projects today!"
          />
        </div> */}
        <div className="w-screen -mx-4 md:-mx-12 lg:-mx-16 xl:-mx-28">
          <TestimonialBanner />
        </div>
        <div className="py-5 lg:py-20">
          <FAQs product="klaw" />
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
