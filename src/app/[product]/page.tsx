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
import KlawB from "@/page/KlawB";

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
  const route = ["peecee", "roboki", "zing", "crawl_e", "klaw_b", "plode"];

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
  if (index >= 0) {
    if (index == 0) {
      return <Peecee />;
    } else if (index == 1) {
      return <Roboki />;
    } else if (index == 2) {
      return <Zing />;
    } else if (index == 3) {
      return <CrawlE />;
    } else if (index == 4) {
      return <KlawB />;
    } else if (index == 5) {
      return <Plode />;
    }
  }
}
