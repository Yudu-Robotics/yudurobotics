import CeoReviewsContainer from "@/components/ui/ceo-reviews";
import GlobalAwards from "@/components/ui/home/global-awards";
import ProductFeatures from "@/components/ui/home/product-features";
import { NewFeaturesCard } from "@/components/ui/NewFeaturesCard";
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
import TestimonialBanner from "@/components/ui/common/testimonial-banner";

const FAQs = dynamic(() => import("@/components/ui/home/faqs"), {
  ssr: false, // This disables server-side rendering for the FAQ component
});

export default async function HomePage() {
  const data = mockData.home;
  return (
    <>
      <div className="px-8 lg:px-28 py-4 bg-primary">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10">
          <div className="w-full">
            <a href="#product-features-component" className="mb-6">
              <NewFeaturesCard />
            </a>

            {/* Main Text */}

            <div className="space-y-4">
              {/* Main Headline */}
              <div className="font-piepie text-5xl md:text-6xl lg:text-7xl tracking-wider text-primary-foreground">
                {highlightWords(
                  data.heading,
                  data.wordsToHighlight.text1,
                  "text-destructive"
                )}
              </div>

              {/* Subtext */}
              <div className="text-primary-foreground text-lg md:text-xl lg:text-2xl font-body w-[100%] lg:w-[75%]">
                {data.subheading}
              </div>
            </div>
          </div>

          {/* Buttons Section */}

          <JumpingButtons ishorizontal="true" />
        </div>
        <div className="py-10">
          <a href="">
            <img src={renderImg("homeImage")} className="w-full" />
          </a>
        </div>
        <div className="py-8 lg:py-16">
          <CeoReviewsContainer />
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg("headerSection")}
      </div>
      {/* Middle Part */}
      <div className="px-12 lg:px-28 text-black py-5 lg:py-10 ">
        <div className="py-5 lg:py-10">
          <GlobalAwards />
        </div>
        <div id="product-features-component" className="py-5 lg:py-10">
          <ProductFeatures />
        </div>
        <div>
          <ProductCatalog />
        </div>
        <div className="py-6 w-full">
          <ProductCategories />
        </div>
        <div>
          <SubscribeSection />
        </div>

        <div className="py-10 lg:py-20">
          <Ourteam />
        </div>
        {/* <div>
          <LatestPosts />
        </div> */}
        <TestimonialBanner />
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
