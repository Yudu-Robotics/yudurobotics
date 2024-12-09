import renderImg from "@/imgImport";
import React from "react";
import { Button } from "./view-products-buttons";

const GetInTouch = () => {
  return (
    <div className="flex flex-col space-y-6 justify-center items-center">
      <img src={renderImg("avtarGroup")} className="w-24 h-12" />
      <div className="flex flex-col space-y-1 items-center text-center">
        <h1 className="text-base font-tthoves-semiBold sm:text-sm md:text-md lg:text-lg xl:text-xl ">
          Still have questions?
        </h1>
        <p className="text-secondary-foreground font-tthoves sm:text-sm md:text-md lg:text-lg xl:text-xl ">
          Can't find the answer you're looking for? Please chat to our friendly
          team
        </p>
      </div>

      <a href="#footer-contact-form-component" className="py-3">
        <Button className="rounded-full">Get in touch</Button>
      </a>
    </div>
  );
};

export default GetInTouch;
