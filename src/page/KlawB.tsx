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
import renderSvg from "@/svgImport";
import React from "react";

export default function KlawB() {
  const data = mockData.klaw_b;
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
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data.ceoComment} />
        </div>
        <div className="py-8 lg:py-12">
          <Unboxing />
        </div>
        <div>
          <ExtraFeatures
            // @ts-ignore
            data={data.features_data?.hardware_precision}
            title="software"
          />
        </div>
        <div className="text-sm py-8 lg:py-16 text-center font-bold flex flex-col space-y-6 justify-center items-center">
          <p>
            Hover over each feature below to{" "}
            <span className="text-primary italic">see it in action!</span>
          </p>
          {renderSvg("doubleArrow")}
        </div>
        <div>{<HardwareProductFeatures hardware={data.features_data} />}</div>
        <div>
          <Working
            // @ts-ignore
            data={data.working}
          />{" "}
        </div>
        <div className="">
          <PlodeSoftware />
        </div>
        <div className="lg:-mt-52 ">
          <SoftwareAdaptive />
        </div>
        <div className=" md:py-20">
          <VersatileSoftware />
        </div>
        <div>
          <ExtraFeatures
            data={data.features_data?.software_experience}
            title="software"
          />
        </div>
        <div className="py-16 lg:py-20">
          <PlodeDownloade
            heading="Unleash Your Creativity with Plode"
            desc="Download the Plode app today and start coding fun, engaging projects. Whether you’re new to coding or a seasoned pro, Plode makes learning and creating a breeze!"
          />
        </div>
      </div>
      <div>
        <CeoComments />
      </div>{" "}
      <div className="py-20">
        <FlexibleLearning />
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
