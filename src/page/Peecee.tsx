/* eslint-disable @typescript-eslint/ban-ts-comment */
import { highlightWords } from "@/app/utility/highlightWords";
import AdaptiveLMS from "@/components/ui/common/adaptive-lms";
import SoftwareAdaptive from "@/components/ui/common/adaptive-software";
// import CeoComments from "@/components/ui/common/ceo-comments";
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
import renderImg from "@/imgImport";
import renderSvg from "@/svgImport";
import React from "react";
import Curious from "@/components/ui/common/Curious";
import Image from "next/image";
import AnimatedContent from "@/components/bits/AnimatedContent";
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
      <div className="px-8 sm:px-8 lg:px-16 xl:px-28 bg-primary pt-16 sm:pt-20 md:pt-16 lg:pt-20 xl:pt-24">
        <div className="flex flex-col space-y-8 sm:space-y-16 lg:flex-row lg:space-y-0 justify-between py-10">
          <div className="w-full">
            {/* Main Text */}

            <div className="space-y-4 ">
              {/* Main Headline */}
              <div className="font-cobaltRidge text-5xl md:text-6xl lg:text-7xl xl:text-8xl  text-primary-foreground lg:w-[60%] xl:w-[60%] sm:text-start text-center">
                {highlightWords(
                  data.heading,
                  data.wordsToHighlight.text1,
                  "text-destructive"
                )}
              </div>

              {/* Subtext */}
              <div className="text-lg text-opacity-35 text-primary-foreground sm:text-sm md:text-base lg:text-lg xl:text-xl font-tthoves w-[100%] sm:w-[60%] sm:text-start text-center">
                {data.subheading}
              </div>
            </div>
          </div>
          {/* Buttons Section */}
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
          <div className="hidden sm:flex ">
            <Image
              width={1000}
              height={1000}
              src={data.images[0]}
              className="w-full"
              style={{ marginTop: "-9%" }}
              alt="Example"
              priority
            />
          </div>
        </AnimatedContent>
        <div className="sm:hidden pb-10">
          <img src={renderImg("peeceem")} className="w-full" alt="Example" />
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {/* {renderSvg(data.sectionHeader)} */}
      </div>
      <div className="px-4 md:px-12 lg:px-16 text-black py-5 lg:py-10 xl:px-28 ">
        <div className="py-5 lg:py-10">
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
            <GlobalAwards />
          </AnimatedContent>
        </div>
        <div className="py-8 lg:py-16">
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
            <ProductCeoReviewsContainer comment={data} />
          </AnimatedContent>
        </div>
        <div className="py-8 lg:py-16">
          <Unboxing product="PeeCee TED" />
        </div>
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className="text-sm py-24 my-8 text-center font-bold flex flex-col space-y-6 justify-center items-center">
            <p className="text-lg sm:text-lg md:text-base lg:text-lg xl:text-xl font-tthoves-semiBold">
              <span className="text-[#4A4A4F] opacity-70">
                Hover over each feature below to{" "}
              </span>
              <span className="text-primary italic">see it in action!</span>
            </p>
            {renderSvg("doubleArrow")}
          </div>
        </AnimatedContent>
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
          <div>{<HardwareProductFeatures hardware={data.features_data} />}</div>
        </AnimatedContent>
        <div className="mt-16">
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
            <div className="flex  justify-center items-center ">
              <ExtraFeatures
                // @ts-expect-error
                data={data.features_data.section2}
                title="Hardware"
                showArrow={true}
              />
            </div>{" "}
          </AnimatedContent>
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
            <div className="flex py-16 justify-center items-center">
              <TeamPlay
                // @ts-ignore
                hardware={data.features_data}
              />
            </div>
          </AnimatedContent>
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
          <SixBlock data={data?.plugandplay || defaultPlugAndPlayData} />
        </AnimatedContent>
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
          <div>
            <LegoFun
              // @ts-ignore
              legoFun={data.legofun}
            />
          </div>
        </AnimatedContent>
        <div>
          <PeeceeFuture
            // @ts-ignore
            peeceeFuture={data.futureProff}
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
          <div className="">
            <PlodeSoftware
              jumppingdata={data.jumppingButton?.[1] || {}}
              subheading="PeeCee TED’s Plode software is as fun as it is powerful—tailored to inspire creativity, adapt to all levels, and make coding feel like a breeze."
            />
          </div>
        </AnimatedContent>
        <div className="  ">
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
            <SoftwareAdaptive image="playpeecee" product="Peecee" />
          </AnimatedContent>
        </div>
        <div className=" md:py-20 xl:py-24">
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
            <VersatileSoftware name="peecee" />
          </AnimatedContent>
        </div>
        <div className="py-8">
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
            <ExtraFeatures
              data={data.features_data?.software_experience[0]}
              title="Software"
            />
          </AnimatedContent>
        </div>
        <div className="py-16 lg:py-20">
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
            <PlodeDownloade
              jumppingdata={data.jumppingButton?.[2] || {}}
              heading="Unleash Your Creativity with Plode"
              desc="Download the Plode app today and start coding fun, engaging projects. Whether you’re new to coding or a seasoned pro, Plode makes learning and creating a breeze!"
            />
          </AnimatedContent>
        </div>
        {/* <div>
          <CeoComments />
        </div>{" "} */}
        <div className="py-20">
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
            <FlexibleLearning product="PeeCee TED" />
          </AnimatedContent>
        </div>
        <div className="flex flex-col md:space-y-36 space-y-20">
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
            <CurriculumSteps
              // @ts-ignore
              data={data.features_data.cirriculum.steps?.[0]}
            />
          </AnimatedContent>
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
            <CurriculumSteps
              // @ts-ignore
              //additional="Set the stage for discovery."
              // @ts-ignore
              data={data.features_data.cirriculum.steps?.[1]}
            />
          </AnimatedContent>
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
            <AdaptiveLMS />
          </AnimatedContent>
        </div>
        <div className="py-16 md:py-20">
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
            <ExtraFeatures
              data={data.features_data.cirriculum}
              title="Curriculum"
            />
          </AnimatedContent>
        </div>
        {/* <div className="py-16 lg:py-20">
          <PlodeDownloade
            jumppingdata={data.jumppingButton?.[3] || {}}
            heading="Transform Your Learning with Our Curriculum"
            desc="Explore our comprehensive curriculum designed to make coding and robotics accessible and exciting. Get started with structured lessons and hands-on projects today!"
          />
        </div> */}
        <div className="w-screen -mx-4 md:-mx-12 lg:-mx-16 xl:-mx-28">
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
            <TestimonialBanner />
          </AnimatedContent>
        </div>
        <div className="py-5 lg:py-20">
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
            <FAQs product="peecee" />
          </AnimatedContent>
        </div>
        <div className="pb-16 ">
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
            <GetInTouch />
          </AnimatedContent>
        </div>
        <div>
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
            <Curious jumppingButton={data?.jumppingButton || []} />
          </AnimatedContent>
        </div>
      </div>
    </>
  );
}
