import renderImg from "@/imgImport";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import renderSvg from "@/svgImport";
import { comment } from "postcss";

const ProductCeoReviewsContainer: React.FC<{ comment: any }> = ({
  comment,
}) => {
  return (
    <div className="w-full ">
      <div>{renderSvg("star1")}</div>
      <div className="bg-primary py-12 rounded-xlg sm:rounded-xxl text-primary-foreground">
        <h1 className="text-center  ">Tech</h1>
        <div className="flex flex-col items-center space-y-6 sm:px-20 px-5">
          <div className="flex items-center">
            <p className="text-center items-center font-piepie text-3xl md:text-3xl lg:text-5xl ">
              {comment.ceoComment}
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
          <h4 className="mt-2 text-xl font-tthover-medium">
            {comment.ceoName}
          </h4>
          <p className="font-extralight">
            {comment.ceoPosition}, {comment.companyName}
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-4 ">{renderSvg("star1")}</div>
      <div className="flex justify-end mr-5 mt-1 ">{renderSvg("star2")}</div>
    </div>
  );
};

export default ProductCeoReviewsContainer;
