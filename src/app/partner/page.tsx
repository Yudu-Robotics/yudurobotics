import CeoReviewsContainer from "@/components/ui/ceo-reviews";
import dynamic from "next/dynamic";
import { mockData } from "@/data/mockData";
import renderSvg from "@/svgImport";
import Section1 from "@/components/ui/partner/Section1";
import PlodeDownloade from "@/components/ui/common/plode-download";
import Section2 from "@/components/ui/partner/Section2";
import Section3 from "@/components/ui/partner/Section3";

const FAQs = dynamic(() => import("@/components/ui/home/faqs"), {
  ssr: false, // This disables server-side rendering for the FAQ component
});

export default async function HomePage() {
  const data = mockData.partner;
  return (
    <>
      <div className="sm:px-8 lg:px-28 py-4 bg-primary">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-between py-10">
          <div className="h-[77vh] w-screen flex flex-col justify-center items-center">
            <div className="sm:w-[30vw] w-[80vw] font-tthoves-medium text-xl text-center">
              “We’re here to build a world where robotics sparks creativity and
              inspires young minds.”
            </div>
            <br />
            <br />
            <div className="sm:w-[22vw]  w-[80vw] text-center text-lg font-normal">
              This is what ChatGPT says we should write. I mean, of course, it
              does the job. But then, that’s not what we are here to do, are we?
              <br /> <br />
              So instead, we thought of telling you..
            </div>
          </div>

          {/* Buttons Section */}
        </div>

        <div className="py-8 lg:py-16">
          <Section1 />
        </div>
      </div>
      <div className="w-full -mt-1 scale-x-[-1] ">
        {renderSvg("headerSection")}
      </div>

      <div className="py-16 lg:py-20 px-8 lg:px-16">
        <PlodeDownloade
          jumppingdata={data?.jumppingButton?.[0] || {}}
          heading="Say No More! This is exactly what I’ve been Looking For!"
          desc=""
        />
      </div>
      <div className="py-16 lg:py-20 px-8 lg:px-16">
        <Section2 />
      </div>
      <div className="py-16 lg:py-20">
        <Section3 />
      </div>
      <div className="py-16 lg:py-20 bg-[#5423E6] sm:mx-8 mx-3 lg:mx-16 rounded-xxl sm:px-10 px-3 my-10">
        <CeoReviewsContainer />
      </div>
      {/* Middle Part */}
    </>
  );
}
