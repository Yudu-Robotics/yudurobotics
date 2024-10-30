import { highlightWords } from "@/app/utility/highlightWords";
import AdaptiveLMS from "@/components/ui/common/adaptive-lms";
import ProductCeoReviewsContainer from "@/components/ui/common/ceo-product-review";
import CurriculumSteps from "@/components/ui/common/curriculum-steps";
import ExtraFeatures from "@/components/ui/common/extra-features";
import FlexibleLearning from "@/components/ui/common/flexible-learning";
import GetInTouch from "@/components/ui/common/get-in-touch";
import JumpingButtons from "@/components/ui/common/jumping-buttons";
import LegoFun from "@/components/ui/common/lego-fun";
import PlodeDownloade from "@/components/ui/common/plode-download";
import TestimonialBanner from "@/components/ui/common/testimonial-banner";
import Unboxing from "@/components/ui/common/unboxing";
import FAQs from "@/components/ui/home/faqs";
import GlobalAwards from "@/components/ui/home/global-awards";
import PeeceeFuture from "@/components/ui/peecee/peecee-future";
import TeamPlay from "@/components/ui/peecee/team-play";
import { mockData } from "@/data/mockData";
import renderSvg from "@/svgImport";
import React from "react";

export default function Peecee() {
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
              <div className="text-primary-foreground text-xs md:text-sm lg:text-base font-body w-[100%] lg:w-[60%]">
                {data.subheading}
              </div>
            </div>
          </div>
          {/* Buttons Section */}
          {
            <JumpingButtons
            // ishorizontal={ishorizontal}
            // text1={text1}
            // text2={text2}
            // bgColor={bgColor}
            // textColor={textColor}
            // link=""
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
      <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
        <div className="py-5 lg:py-10">
          <GlobalAwards />
        </div>
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data.ceoComment} />
        </div>
      </div>
      <div className="py-8 lg:py-12">
        <Unboxing />
      </div>
      <div className="">
        <ExtraFeatures
          // @ts-ignore
          data={data.features_data.section2}
          title="hardware"
          showArrow={true}
        />
        <TeamPlay
          // @ts-ignore
          hardware={data.features_data}
        />
      </div>
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
          heading="Transform Your Learning with Our Curriculum"
          desc="Explore our comprehensive curriculum designed to make coding and robotics accessible and exciting. Get started with structured lessons and hands-on projects today!"
        />
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
    </>
  );
}
