import { highlightWords } from "@/app/utility/highlightWords";
import AnimatedContent from "@/components/bits/AnimatedContent";
import Image from "next/image";

interface PeeceeFuture {
  heading: string;
  subheading: string;
  centerImage: string;
}

const PeeceeFuture: React.FC<{ peeceeFuture: PeeceeFuture }> = ({
  peeceeFuture,
}) => {
  return (
    <div className="w-full flex flex-col-reverse space-y-8 md:flex-row md:space-x-28 md:items-center xs:py-4 md:py-10 justify-center xs:mb-12 sm:mb-12">
      <div className="md:w-1/2 ">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <Image
            width={1000}
            height={1000}
            src={peeceeFuture.centerImage}
            alt="Product Image"
            className="w-full"
          />
        </AnimatedContent>
      </div>
      <div className="md:w-1/2 flex flex-col space-y-2">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <h1 className=" text-primary sm:text-sm md:text-base lg:text-lg xl:text-xl font-tthoves-medium ">
            Hardware
          </h1>

          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-cobaltRidge tracking-wide">
            {highlightWords(
              peeceeFuture.heading,
              ["Future-Proof"],
              "text-primary"
            )}
          </h2>

          <h2 className="font-tthoves text-lg text-secondary-foreground w-[100%] lg:w-[80%] xl:text-xl pt-4">
            {peeceeFuture.subheading}
          </h2>
        </AnimatedContent>
      </div>
    </div>
  );
};
export default PeeceeFuture;
