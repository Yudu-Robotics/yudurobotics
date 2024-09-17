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
      <div className="px-12 lg:px-28 text-black py-5 lg:py-10 ">
        {product == "peecee" && (
          <div className="py-5 lg:py-10">
            <GlobalAwards />
          </div>
        )}
        <div className="py-8 lg:py-16">
          <ProductCeoReviewsContainer comment={data.ceoComment} />
        </div>
        <div className="py-5 lg:py-10">
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
        <div>
          <LatestPosts />
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
