import CeoReviewsContainer from "@/components/ui/ceo-reviews";
import GlobalAwards from "@/components/ui/home/global-awards";
import ProductFeatures from "@/components/ui/home/product-features";
import renderImg from "@/imgImport";
import JumpingButtons from "../../components/ui/common/jumping-buttons";
import ProductCatalog from "@/components/ui/productsComponents/product-catalog";
import SearchAndFilter from "@/components/ui/home/search-filter";
import ProductCategories from "@/components/ui/productsComponents/product-categories";
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
import Unboxing from "@/components/ui/common/unboxing";
import { notFound } from "next/navigation";
import TestimonialBanner from "@/components/ui/common/testimonial-banner";
import Plode from "@/page/Plode";
import Zing from "@/page/Zing";
import Peecee from "@/page/Peecee";
import Roboki from "@/page/Roboki";
import CrawlE from "@/page/CrawlE";

const FAQs = dynamic(() => import("@/components/ui/home/faqs"), {
  ssr: false, // This disables server-side rendering for the FAQ component
});

export async function generateStaticParams() {
  // Fetch or define the list of product slugs/IDs
  const products = ["roboki", "peecee", "zing", "crawl_e", "klaw_b", "plode"]; // Example product slugs

  return products.map((product) => ({
    product, // This will create paths like /roboki, /peecee, etc.
  }));
}

export default async function ProductPage({ params }: any) {
  const { product } = params;

  const data = mockData[product as keyof typeof mockData];

  if (!data) {
    // Redirect or render 404 page when the product doesn't exist
    notFound();
  }
  const route = [
    "home",
    "peecee",
    "roboki",
    "zing",
    "crawl_e",
    "klaw_b",
    "plode",
  ];

  const index = route.indexOf(params.product);

  let ishorizontal: string = "true";
  let text1: string = "I'm here to";
  let text2: string = "Join Forces";
  let bgColor: string = "#2CF7A4";
  let textColor: string = "#0A4029";

  interface Style {
    text1: string;
    text2: string;
    bgColor: string;
    textColor: string;
  }

  const styles: Record<number, Style> = {
    0: {
      text1: "I’m here to",
      text2: "Join Forces",
      bgColor: "#2CF7A4",
      textColor: "#0A4029",
    },
    1: {
      text1: "Own One",
      text2: "Now!",
      bgColor: "#602CF7",
      textColor: "#FAF9FE",
    },
    2: {
      text1: "Own One",
      text2: "Now!",
      bgColor: "#602CF7",
      textColor: "#FAF9FE",
    },
    3: {
      text1: "Own One",
      text2: "Now!",
      bgColor: "#F72D3E",
      textColor: "#FEF9F9",
    },
    4: {
      text1: "Own One",
      text2: "Now!",
      bgColor: "#F72D3E",
      textColor: "#FEF9F9",
    },
    5: {
      text1: "Own One",
      text2: "Now!",
      bgColor: "#F7812D",
      textColor: "#FEFBF9",
    },
    6: {
      text1: "Button",
      text2: "CTA",
      bgColor: "#2CF7A4",
      textColor: "#0A4029",
    },
  };

  if (index >= 0 && index in styles) {
    const {
      text1: newText1,
      text2: newText2,
      bgColor: newBgColor,
      textColor: newTextColor,
    } = styles[index];

    text1 = newText1;
    text2 = newText2;
    bgColor = newBgColor;
    textColor = newTextColor;
  }
  if (params.product === "crawl_e") {
    return (
      <>
        <CrawlE />
      </>
    );
  }
  return (
    <>
      <div className="px-8 lg:px-28 py-4 bg-primary">
        {params.product !== "plode" && (
          <>
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
                  ishorizontal={ishorizontal}
                  text1={text1}
                  text2={text2}
                  bgColor={bgColor}
                  textColor={textColor}
                  link=""
                />
              }
            </div>

            <div className="">
              <img src={data.images[0]} className="w-full -mt-[8%]" />
            </div>
          </>
        )}
        {params.product === "plode" && (
          <>
            <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10 ">
              <div className=" flex justify-between">
                {/* Main Text */}

                <div className="space-y-4 flex flex-col items-start ">
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
                  <div className="pt-20">
                    {
                      <JumpingButtons
                        ishorizontal={ishorizontal}
                        text1={text1}
                        text2={text2}
                        bgColor={bgColor}
                        textColor={textColor}
                        link=""
                      />
                    }
                  </div>
                </div>

                <div className="w-1/2">
                  <img src={data.images[0]} className="w-full " />
                </div>
              </div>
            </div>
          </>
        )}
        {/* <div className="py-8 lg:py-16">
          <CeoReviewsContainer />
        </div> */}
      </div>
      <div className="w-full -mt-1">
        {/* <img src={renderImg("headerSection")} className="w-full" /> */}
        {renderSvg(data.sectionHeader)}
      </div>

      {params.product === "plode" && (
        <div className="px-12 lg:px-28">
          <div className="py-8 lg:py-16">
            <ProductCeoReviewsContainer comment={data.ceoComment} />
          </div>
          <div className="text-sm py-8  text-center font-bold flex flex-col space-y-6 justify-center items-center">
            <p className="text-[#4A4A4F]">
              Hover over each feature below to{" "}
              <span className="text-primary italic">see it in action!</span>
            </p>
            {renderSvg("doubleArrow")}
          </div>
          <div className=" text-black py-5 lg:py-10 ">
            <SoftwareAdaptive />
          </div>
        </div>
      )}
      {params.product === "plode" && (
        <div className="flex flex-col justify-center items-center">
          <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
            <VersatileSoftware />
          </div>

          <div className="px-12 lg:px-28 text-black py-5 lg:py-10 flex ">
            <div>
              <ExtraFeatures
                // @ts-ignore
                data={data.features_data?.software_experience}
                title=""
              />
            </div>
          </div>
        </div>
      )}
      {params.product == "plode" && (
        <div className="px-12 lg:px-28 text-black py-5 lg:py-10 flex justify-center">
          <p className="w-1/2 text-[#4A4A4F] text-xl font-semibold italic">
            <span className="text-[#5423E6]">
              Not every Play option is available for all kits{" "}
            </span>
            — only the features specific to the selected kit will be enabled,
            ensuring a streamlined and engaging experience. Each interaction is
            tailored to enhance creativity and functionality, bringing your
            robotics journey to life with effortless, hands-on fun.
          </p>
        </div>
      )}
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
        {params.product == "plode" && (
          <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
            {<HardwareProductFeatures hardware={data.features_data} />}
            <p>
              This adaptive mode ensures every kit delivers a unique data
              experience, empowering users to experiment, track performance, and
              visualise results — all with just a few taps.
            </p>
          </div>
        )}
        {params.product == "plode" && (
          <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
            <div>
              <ExtraFeatures
                // @ts-ignore
                data={data.features_data?.software_experience}
                title="software"
              />
            </div>
          </div>
        )}
        {params.product == "plode" && (
          <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
            <FlexibleLearning />
          </div>
        )}
        {params.product == "plode" && (
          <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
            <VersatileSoftware />
          </div>
        )}
        {params.product == "plode" && (
          <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
            <div>
              <ExtraFeatures
                // @ts-ignore
                data={data.features_data?.software_experience}
                title="software"
              />
            </div>
          </div>
        )}
        {params.product == "plode" && (
          <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
            <VersatileSoftware />
          </div>
        )}
        {params.product == "plode" && (
          <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
            <div>
              <ExtraFeatures
                // @ts-ignore
                data={data.features_data?.software_experience}
                title="software"
              />
            </div>
          </div>
        )}
        {params.product == "plode" && (
          <div className="py-8 lg:py-16">
            <ProductCeoReviewsContainer comment={data.ceoComment} />
          </div>
        )}
        {params.product == "plode" && (
          <div className="py-8 lg:py-16 min-h-[30vh] flex ">
            <div className="w-1/2 flex justify-center items-center ">
              <div className="w-2/3 h-full bg-[#2CF7A4] rounded-xxl"></div>
            </div>
            <div className="w-1/2 p-5">
              <p className="text-black font-piepie text-5xl md:text-6xl lg:text-6xl tracking-wider  w-[70%]">
                <span className="text-[#5423E6]">Script Programming – </span>
                Take Control with Text-Based Code
              </p>
              <p className="text-[#4A4A4F] w-[70%] mt-6">
                Script programming introduces users to real-world coding
                languages. If you’re ready to dive deeper, you can explore C
                programming and Python—both powerful tools for building advanced
                hardware solutions.
              </p>
            </div>
          </div>
        )}
        {params.product == "plode" && (
          <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
            <VersatileSoftware />
          </div>
        )}
        {params.product == "plode" && (
          <>
            <div className="px-12 lg:px-28 text-black py-5 lg:py-10">
              <div>
                <ExtraFeatures
                  // @ts-ignore
                  data={data.features_data?.software_experience}
                  title="software"
                />
              </div>
            </div>
            <div className="py-20">
              <FlexibleLearning />
            </div>
          </>
        )}
        {params.product !== "plode" && (
          <div className="py-8 lg:py-12">
            <Unboxing />
          </div>
        )}
        {params.product == "klaw_b" && (
          <div>
            <ExtraFeatures
              // @ts-ignore
              data={data.features_data?.hardware_precision}
              title="software"
            />
          </div>
        )}
        {params.product !== "plode" && (
          <div className="text-sm py-8 lg:py-16 text-center font-bold flex flex-col space-y-6 justify-center items-center">
            <p>
              Hover over each feature below to{" "}
              <span className="text-primary italic">see it in action!</span>
            </p>
            {renderSvg("doubleArrow")}
          </div>
        )}
        {params.product !== "plode" && (
          <div>{<HardwareProductFeatures hardware={data.features_data} />}</div>
        )}
        {params.product == "peecee" && (
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
        {params.product !== "plode" && (
          <>
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
          </>
        )}
        <div>
          <CeoComments />
        </div>{" "}
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
        {params.product !== "plode" && (
          <>
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
          </>
        )}
        <div className="-mx-8 lg:-mx-28">
          <TestimonialBanner />
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
