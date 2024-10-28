import React from "react";
import JumpingButtons from "../common/jumping-buttons";
import renderImg from "@/imgImport";

function ProductFeatures() {
  const features = [
    { id: 1, text: "18 Degrees of Freedom" },
    { id: 2, text: "Full Aluminium Body" },
    { id: 3, text: "Programmable using Plode App" },
  ];
  return (
    <>
      <div className="bg-primary rounded-xxl text-primary-foreground px-8  lg:px-16 pt-20 tracking-wide pb-6">
        <div className="flex flex-col justify-between space-y-16 lg:flex-row lg:space-y-0">
          <div className="w-[100%] lg:w-[55%]">
            <h6> Newly Launched!</h6>
            <h1 className="font-piepie text-3xl lg:text-5xl tracking-wide ">
              Meet <span className="text-destructive">Zing</span>: The Fun and
              Lively Humanoid Robot
            </h1>
            <p className="py-2 lg:py-6 text-lg font-body font-thin opacity-80">
              A 30 cm marvel with 17 degrees of freedom, crafted for endless
              exploration and creativity.
            </p>
            <ul className="space-y-4 opacity-50">
              {features.map((feature) => (
                <li key={feature.id} className="flex space-x-2 font-extralight">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <JumpingButtons
            ishorizontal="false"
            text1="Lemme"
            text2="Meet Zing"
            bgColor="#2CF7A4"
            textColor="#0A4029"
            link="/zing"
          />
        </div>
        <div className="relative w-full py-16 mt-10 lg:mt-0">
          {/* Background image */}
          <img
            className="w-full"
            src={renderImg("productBackground")}
            alt="Background"
          />

          {/* Humanoid image - placed on top */}
          <img
            className="absolute -inset-8 lg:-inset-16 w-full h-full object-contain"
            src={renderImg("humanoid")}
            alt="Humanoid"
          />
        </div>
        <div className="h-[10px] w-full flex justify-center gap-4">
          <div className="w-[40px] h-full bg-[#602CF7] rounded-xl"></div>
          {/* <div className="w-[40px] h-full bg-[#ffffff] rounded-xl"></div>
          <div className="w-[40px] h-full bg-[#ffffff] rounded-xl"></div> */}
        </div>
      </div>
    </>
  );
}

export default ProductFeatures;
