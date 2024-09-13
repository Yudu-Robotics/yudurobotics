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

import GetInTouch from "@/components/ui/common/get-in-touch";

const FAQs = dynamic(() => import("@/components/ui/home/faqs"), {
  ssr: false, // This disables server-side rendering for the FAQ component
});

export default function HomePage() {
  return (
    <>
      <div className="px-12 lg:px-28 py-4 bg-primary">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10">
          <div className="w-full">
            <div className="mb-6">
              <NewFeaturesCard />
            </div>

            {/* Main Text */}

            <div className="space-y-4">
              {/* Main Headline */}
              <div className="font-piepie text-5xl md:text-6xl lg:text-7xl tracking-wider">
                <span className="text-white">From</span>{" "}
                <span className="text-yellow-400">Precision 3D Printers</span>{" "}
                <span className="text-white">to Playful</span>{" "}
                <span className="text-yellow-400">Robots and Drones</span>
              </div>

              {/* Subtext */}
              <div className="text-secondary-foreground text-lg md:text-xl lg:text-2xl font-body w-[100%] lg:w-[75%]">
                Unleash the power of creative robotics. Yudu makes the
                impossible fun, helping you build, play, and explore with
                groundbreaking tech.
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <JumpingButtons ishorizontal="true" />
        </div>
        <div className="py-10">
          <img src={renderImg("homeImage")} className="w-full" />
        </div>
        <div className="py-8 lg:py-16">
          <CeoReviewsContainer />
        </div>
      </div>
      <div className="w-full -mt-1">
        <img src={renderImg("headerSection")} className="w-full" />
      </div>
      {/* Middle Part */}
      <div className="px-12 lg:px-28 text-black py-5 lg:py-10 ">
        <div className="py-5 lg:py-10">
          <GlobalAwards />
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
