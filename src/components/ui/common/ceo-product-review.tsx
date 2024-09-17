import renderImg from "@/imgImport";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import renderSvg from "@/svgImport";
import { comment } from "postcss";

const ProductCeoReviewsContainer: React.FC<{ comment: string }> = ({
  comment,
}) => {
  return (
    <div className="w-full ">
      <div>{renderSvg("star1")}</div>
      <div className="bg-primary py-12 rounded-xxl text-primary-foreground">
        <h1 className="text-center font-thin">Tech</h1>
        <div className="flex flex-col items-center space-y-6 px-20">
          <div className="flex items-center">
            <p className="text-center  items-center font-piepie text-lg md:text-2xl lg:text-3xl tracking-wider ">
              {comment}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-8">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CEO</AvatarFallback>
            </Avatar>
          </div>
          <h4 className="mt-2 text-xl font-semibold">Ravi Mehta</h4>
          <p className="font-extralight">CEO, Innovatech Solution</p>
        </div>
      </div>
      <div className="lg:flex justify-end mt-4 hidden">
        {renderSvg("star2")}
      </div>
    </div>
  );
};

export default ProductCeoReviewsContainer;
