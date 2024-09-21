import CeoReviewsContainer from "@/components/ui/ceo-reviews";
import GlobalAwards from "@/components/ui/home/global-awards";
import ProductFeatures from "@/components/ui/home/product-features";
import renderImg from "@/imgImport";
import JumpingButtons from "../../components/ui/common/jumping-buttons";
import ProductCatalog from "@/components/ui/home/product-catalog";
import SearchAndFilter from "@/components/ui/home/search-filter";
import ProductCategories from "@/components/ui/home/product-categories";
import SubscribeSection from "@/components/ui/home/subscribe-section";
import TeamGrid from "@/components/ui/home/team-grid";
import Ourteam from "@/components/ui/home/our-team";
import LatestPosts from "@/components/ui/home/latest-posts";
import dynamic from "next/dynamic";
import { mockData } from "@/data/mockData";

import GetInTouch from "@/components/ui/common/get-in-touch";
import renderSvg from "@/svgImport";
import { highlightWords } from "../utility/highlightWords";
import ProductCeoReviewsContainer from "@/components/ui/common/ceo-product-review";
import HardwareProductFeatures from "@/components/ui/common/hardware-product-feature";
import TeamPlay from "@/components/ui/peecee/team-play";
import LegoFun from "@/components/ui/common/lego-fun";
import PeeceeFuture from "@/components/ui/peecee/peecee-future";
import Working from "@/components/ui/common/how-it-works";
import PlodeSoftware from "@/components/ui/common/plode-software";
import SoftwareAdaptive from "@/components/ui/common/adaptive-software";
import VersatileSoftware from "@/components/ui/common/versatile-software";
import ExtraFeatures from "@/components/ui/common/extra-features";
import PlodeDownloade from "@/components/ui/common/plode-download";
import CeoComments from "@/components/ui/common/ceo-comments";
import FlexibleLearning from "@/components/ui/common/flexible-learning";
import CurriculumSteps from "@/components/ui/common/curriculum-steps";
import AdaptiveLMS from "@/components/ui/common/adaptive-lms";

const FAQs = dynamic(() => import("@/components/ui/home/faqs"), {
  ssr: false, // This disables server-side rendering for the FAQ component
});

export default async function ProductPage({ params }: any) {
  const { product } = params;

  const data = mockData[product as keyof typeof mockData];

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
          {<JumpingButtons ishorizontal="true" />}
        </div>
        <div className="">
          <img src={data.images[0]} className="w-full -mt-[8%]" />
        </div>
        {/* <div className="py-8 lg:py-16">
          <CeoReviewsContainer />
        </div> */}
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg(data.sectionHeader)}
      </div>
      {/* Middle Part */}
      <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
        {product == "peecee" && (
          <div className="py-5 lg:py-10">
            <GlobalAwards />
          </div>
        )}
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data.ceoComment} />
        </div>
        <div className="text-sm py-8 lg:py-16 text-center font-bold flex flex-col space-y-6 justify-center items-center">
          <p>
            Hover over each feature below to{" "}
            <span className="text-primary italic">see it in action!</span>
          </p>
          {renderSvg("doubleArrow")}
        </div>
        <div>{<HardwareProductFeatures hardware={data.features_data} />}</div>
        {params.product == "peecee" && (
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data.section2}
              title="hardware"
            />
            <TeamPlay
              // @ts-ignore
              hardware={data.features_data}
            />
          </div>
        )}
        {(params.product == "peecee" || params.product == "roboki") && (
          <div>
            <LegoFun
              // @ts-ignore
              legoFun={data.legofun}
            />
          </div>
        )}
        {params.product == "peecee" && (
          <div>
            <PeeceeFuture
              // @ts-ignore
              peeceeFuture={data.futureProff}
            />
          </div>
        )}

        {(params.product == "zing" ||
          params.product == "klaw_b" ||
          params.product == "crawl_e") && (
          <div>
            <Working
              // @ts-ignore
              data={data.working}
            />{" "}
          </div>
        )}
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
        <div>
          <CeoComments />
        </div>
        <div className="py-20">
          <FlexibleLearning />
        </div>
        {params.product == "peecee" && (
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
        )}
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
