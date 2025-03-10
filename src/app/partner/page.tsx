import CeoReviewsContainer from "@/components/ui/ceo-reviews";
// import dynamic from "next/dynamic";
import { mockData } from "@/data/mockData";
import renderSvg from "@/svgImport";
import Section1 from "@/components/ui/partner/Section1";
import PlodeDownloade from "@/components/ui/common/plode-download";
// import Section2 from "@/components/ui/partner/Section2";
import Section3 from "@/components/ui/partner/Section3";
import AnimatedContent from "@/components/bits/AnimatedContent";
import type { PartnerDetail } from "@/lib/types";

// const FAQs = dynamic(() => import("@/components/ui/home/faqs"), {
//   ssr: false, // This disables server-side rendering for the FAQ component
// });
const partnerDetails: PartnerDetail[] = [
  {
    name: "Vivek Kalkunte",
    company: "Think Pro Academy",
    designation: "",
    src: "vivek",
    desc: "Yudu Robotics and Roboki with the Plode app have made robotics fun and easy to learn, simplifying complex concepts through engaging visual programming.",
  },
]; // the partner list is defined here as an array because in future if there is multiple partner we can add them here
export default async function HomePage() {
  const data = mockData.partner;
  return (
    <>
      <div className="sm:px-0 md:px-4 lg:px-20 py-4 bg-primary w-screen overflow-x-hidden sm:overflow-visible">
        <div className="flex flex-col space-y-16 lg:flex-row lg:space-y-0 justify-center py-10">
          <div className="h-[85vh] w-auto flex flex-col justify-center items-center">
            <div className="sm:w-[80vw] w-[80vw] font-tthoves-medium  text-xl font-semibold leading-normal text-center  decoration-skip-ink-none">
              <AnimatedContent
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                “We’re here to build a world where robotics sparks creativity
                and inspires young minds.”
              </AnimatedContent>
            </div>
            <br />
            <br />
            <AnimatedContent
              distance={150}
              direction="vertical"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="sm:w-[80vw]  w-[80vw] lg:text-lg md:text-md sm:text-sm font-tthoves xs:text-sm font-normal leading-snug text-center  decoration-skip-ink-none">
                This is what ChatGPT says we should write. I mean, of course, it
                does the job. But then, that’s not what we are here to do, are
                we?
                <br /> <br />
                So instead, we thought of telling you..
              </div>
            </AnimatedContent>
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
      {/* <div className="py-16 lg:py-20 px-4 md:px-8 lg:px-16">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <Section2 />
        </AnimatedContent>
      </div> */}
      <div className="py-8 md:py-14 lg:py-20">
        <Section3 />
      </div>
      <div className="py-16 lg:py-20 bg-[#5423E6] sm:mx-8 mx-3 lg:mx-16 rounded-xxl sm:px-10 px-3 my-10">
        <CeoReviewsContainer data={partnerDetails[0]} />
      </div>
      {/* Middle Part */}
    </>
  );
}
