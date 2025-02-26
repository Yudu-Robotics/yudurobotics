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
import Curious from "@/components/ui/common/Curious";
import Image from "next/image";
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
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-28 bg-primary pt-16 sm:pt-20 md:pt-16 lg:pt-20 xl:pt-24 relative">
        {/* Grid background with lower z-index */}
        <div className="absolute inset-0 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] z-0" />

        {/* Gradient overlay with higher z-index */}
        <div className="absolute pointer-events-none inset-0 bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] z-10" />

        {/* Content with highest z-index */}
        <div className="relative z-20 flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10">
          <div className="w-full">
            {/* <a href="#product-features-component" className="mb-6 ">
              <NewFeaturesCard />
            </a> */}

            {/* Main Text */}

            <div className="space-y-4 border">
              {/* Main Headline */}
              <div className="font-cobaltRidge text-4xl md:text-6xl lg:text-7xl text-primary-foreground text-center md:text-left sm:space-x-4 md:w-[95%] leading-8 space-x-2">
                {highlightWords(
                  data.heading,
                  data.wordsToHighlight.text1,
                  "text-destructive"
                )}
              </div>

              {/* Subtext */}
              <div className="text-[#F2D8FE] text-lg md:text-lg lg:text-xl font-tthoves w-[100%] lg:w-[50%] text-center md:text-left">
                {data.subheading}
              </div>
            </div>
          </div>

          {/* Buttons Section */}

          <JumpingButtons
            ishorizontal={true}
            text1="I'm here to"
            text2="Join Forces"
            bgColor="#2CF7A4"
            textColor="#0A4029"
            link="/partner"
          />
        </div>
        <div className="py-10">
          {/* <a href=""> */}
          <Image
            src={renderImg("homeImage")}
            width={1000}
            height={1000}
            alt="home-image"
            className="w-full h-96 md:h-full object-cover md:object-contain rounded-xxl relative z-40"
          />
          {/* </a> */}
        </div>
        <div className="py-8 lg:py-16 relative z-40">
          <CeoReviewsContainer data={partnerDetails[0]} />
        </div>
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg("headerSection")}
      </div>
      {/* Middle Part */}
      <div className="px-4 md:px-12 lg:px-16 text-black py-5 lg:py-10 xl:px-28 ">
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
        <div>
          <Curious jumppingButton={data?.jumppingButton || []} />
        </div>
      </div>
    </>
  );
}
