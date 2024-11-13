import { highlightWords } from "@/app/utility/highlightWords";
import AdaptiveLMS from "@/components/ui/common/adaptive-lms";
import SoftwareAdaptive from "@/components/ui/common/adaptive-software";
import CeoComments from "@/components/ui/common/ceo-comments";
import ProductCeoReviewsContainer from "@/components/ui/common/ceo-product-review";
import CurriculumSteps from "@/components/ui/common/curriculum-steps";
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
import GlobalAwards from "@/components/ui/home/global-awards";
import PeeceeFuture from "@/components/ui/peecee/peecee-future";
import TeamPlay from "@/components/ui/peecee/team-play";
import SixBlock from "@/components/ui/SixBlock";
import { mockData } from "@/data/mockData";
import renderSvg from "@/svgImport";
import React from "react";

export default function Peecee() {
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

  const data = mockData.peecee;
  return (
    <>
      <div className="px-8 lg:px-28 py-4 bg-primary">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10">
          <div className="w-full">
            {/* Main Text */}

            <div className="space-y-4">
              {/* Main Headline */}
              <div className="font-piepie text-5xl md:text-6xl lg:text-7xl tracking-wider text-primary-foreground lg:w-[80%]">
                {highlightWords(
                  data.heading,
                  data.wordsToHighlight.text1,
                  "text-destructive"
                )}
              </div>

              {/* Subtext */}
              <div className="text-opacity-35 text-primary-foreground text-sm md:text-ms lg:text-lg font-body w-[100%] lg:w-[60%]">
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

        <div className="">
          <img src={data.images[0]} className="w-full -mt-[8%]" />
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg(data.sectionHeader)}
      </div>
      <div className="px-4 sm:px-12 lg:px-28 text-black py-5 lg:py-10 ">
        <div className="py-5 lg:py-10">
          <GlobalAwards />
        </div>
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data} />
        </div>
        <div className="py-8 lg:py-12">
          <Unboxing />
        </div>
        <div className="text-sm py-8 lg:py-16 text-center font-bold flex flex-col space-y-6 justify-center items-center">
          <p>
            <span className="text-[#4A4A4F]">
              Hover over each feature below to{" "}
            </span>
            <span className="text-primary italic">see it in action!</span>
          </p>
          {renderSvg("doubleArrow")}
        </div>
        <div>{<HardwareProductFeatures hardware={data.features_data} />}</div>
        <div className="">
          <div className="flex  justify-center items-center ">
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data.section2}
              title="hardware"
              showArrow={true}
            />
          </div>
          <div className="flex py-5  justify-center items-center">
            <TeamPlay
              // @ts-ignore
              hardware={data.features_data}
            />
          </div>
        </div>
        <SixBlock data={data?.plugandplay || defaultPlugAndPlayData} />
        <div>
          <LegoFun
            // @ts-ignore
            legoFun={data.legofun}
          />
        </div>
        <div>
          <PeeceeFuture
            // @ts-ignore
            peeceeFuture={data.futureProff}
          />
        </div>
        <div className="">
          <PlodeSoftware jumppingdata={data.jumppingButton?.[1] || {}} />
        </div>
        <div className="lg:-mt-56 ">
          <SoftwareAdaptive />
        </div>
        <div className=" md:py-20 ">
          <VersatileSoftware />
        </div>
        <div className="">
          <ExtraFeatures
            data={data.features_data?.software_experience[0]}
            title="software"
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
          <FlexibleLearning />
        </div>
        <div className="flex flex-col md:space-y-36 space-y-20">
          <CurriculumSteps
            // @ts-ignore
            data={data.features_data.cirriculum.steps?.[0]}
          />
          <CurriculumSteps
            // @ts-ignore
            data={data.features_data.cirriculum.steps?.[1]}
          />

          <AdaptiveLMS />
        </div>
        <div className="py-16 md:py-20">
          <ExtraFeatures
            data={data.features_data.cirriculum}
            title="Curriculum"
          />
        </div>
        <div className="py-16 lg:py-20">
          <PlodeDownloade
            jumppingdata={data.jumppingButton?.[3] || {}}
            heading="Transform Your Learning with Our Curriculum"
            desc="Explore our comprehensive curriculum designed to make coding and robotics accessible and exciting. Get started with structured lessons and hands-on projects today!"
          />
        </div>
        <div className="-mx-8 lg:-mx-28">
          <TestimonialBanner />
        </div>
        <div className="py-5 lg:py-20">
          <FAQs product="peecee"/>
        </div>
        <div className="pb-16 ">
          <GetInTouch />
        </div>
      </div>
    </>
  );
}
