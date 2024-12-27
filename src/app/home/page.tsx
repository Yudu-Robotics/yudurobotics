import CeoReviewsContainer from "@/components/ui/ceo-reviews";
import GlobalAwards from "@/components/ui/home/global-awards";
import ProductFeatures from "@/components/ui/home/product-features";
import renderImg from "@/imgImport";
import JumpingButtons from "../../components/ui/common/jumping-buttons";
import ProductCatalog from "@/components/ui/productsComponents/product-catalog";
import ProductCategories from "@/components/ui/productsComponents/product-categories";
import SubscribeSection from "@/components/ui/home/subscribe-section";
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
  const partnerDetails = [
    {
      name: "Mr Filepe Gracia",
      company: "Inroprin - Peru",
      designation: "Marketing Head",
      src: "",
      desc: "Impressed by the quality of the kits and program, happy with the services and looking forward to expand in Peru markets.",
    },
  ];
  return (
    <>
      <div className="px-4 sm:px-16 md:px-20 lg:px-24 xl:px-28 py-4 bg-primary ">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10">
          <div className="w-full">
            {/* <a href="#product-features-component" className="mb-6 ">
              <NewFeaturesCard />
            </a> */}

            {/* Main Text */}

            <div className="space-y-4 border">
              {/* Main Headline */}
              <div className="font-piepie text-4xl md:text-6xl lg:text-7xl  text-primary-foreground text-center sm:text-left sm:w-[95%] leading-8 space-x-2">
                {highlightWords(
                  data.heading,
                  data.wordsToHighlight.text1,
                  "text-destructive"
                )}
              </div>

              {/* Subtext */}
              <div className="text-[#F2D8FE] text-lg md:text-lg lg:text-xl font-tthoves w-[100%] lg:w-[50%] text-center sm:text-left">
                {data.subheading}
              </div>
            </div>
          </div>

          {/* Buttons Section */}

          <JumpingButtons
            ishorizontal="true"
            text1="I'm here to"
            text2="Join Forces"
            bgColor="#2CF7A4"
            textColor="#0A4029"
            link="/partner"
          />
        </div>
        <div className="py-10">
          {/* <a href=""> */}
            <img src={renderImg("homeImage")} className="w-full" />
          {/* </a> */}
        </div>
        <div className="py-8 lg:py-16">
          <CeoReviewsContainer data={partnerDetails[0]} />
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg("headerSection")}
      </div>
      {/* Middle Part */}
      <div className="px-4 sm:px-12 lg:px-16 text-black py-5 lg:py-10 xl:px-28 ">
        <div className="py-5 lg:py-10">
          <GlobalAwards />
        </div>
        <div id="product-features-component" className=" lg:mx-0 lg:py-10">
          <ProductFeatures />
        </div>
        <div>
          <ProductCatalog />
        </div>
        <div className="py-6 w-full">
          <ProductCategories />
        </div>
        <div className="-mx-8 lg:-mx-28">
          <TestimonialBanner />
        </div>
        <div className=" sm:mx-0">
          <SubscribeSection />
        </div>

        {/* <div className="py-10 lg:py-20">
          <Ourteam />
        </div> */}
        {/* <div>
          <LatestPosts />
        </div> */}

        <div className="py-5 lg:py-20  sm:mx-0">
          <FAQs product="home" />
        </div>

        <div className="sm:mb-24 ">
          <GetInTouch />
        </div>
      </div>
    </>
  );
}
