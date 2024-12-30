import { highlightWords } from "@/app/utility/highlightWords";
import React from "react";

interface Section1 {
  image: "";
  heading: "";
  description: "";
}

interface Section2 {
  image: "";
  heading: "";
  description: "";
}

interface HowItWork {
  heading: string;
  subheading: string;
  section1: Section1;
  section2: Section2;
}

const Working: React.FC<{ data: HowItWork }> = ({ data }) => {
  return (
    <div className="max-w-full flex flex-col space-y-10 py-16">
      <div className="flex flex-col space-y-2 justify-centerv items-center text-center">
        <h1 className="text-primary text-lg font-tthoves-semiBold ">
          Hardware
        </h1>
        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-piepie  ">
          {highlightWords(data.heading, ["Works"], "text-primary")}
        </h2>
        <h2 className="font-tthoves text-sm text-secondary-foreground sm:text-lg xl:text-xl w-[90%] md:w-[70%] lg:w-[75%]">
          {data.subheading}
        </h2>
      </div>
      <div className="flex flex-col items-center space-y-8 md:flex-row justify-center md:space-y-0">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div>
            <img src={data.section1.image} alt="Product Image" className="" />
          </div>
          <div className="flex flex-col justify-center space-y-1 items-center text-center">
            <h1 className="text-lg font-tthoves-semiBold">
              {data.section1.heading}
            </h1>
            <h2 className="font-tthoves text-secondary-foreground text-sm w-[100%] lg:w-[60%]">
              {data.section1.description}
            </h2>
            <a className="text-sm text-primary flex justify-center items-center space-x-2">
              {/* <p>Learn more </p> */}
              <div>
                {/* <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.16663 6.99984H12.8333M12.8333 6.99984L6.99996 1.1665M12.8333 6.99984L6.99996 12.8332"
                    stroke="#1FCC84"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> */}
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <div>
            <img src={data.section2.image} alt="Product Image" className="" />
          </div>
          <div className="flex flex-col space-y-2 items-center text-center">
            <h1 className="text-lg font-bold">{data.section2.heading}</h1>
            <h2 className="text-secondary-foreground text-sm w-[100%] lg:w-[60%]">
              {data.section2.description}
            </h2>
            <a className="text-sm text-primary flex justify-center items-center space-x-2">
              {/* <p>Learn more </p> */}
              <div className="">
                {/* <svg
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.16663 6.99984H12.8333M12.8333 6.99984L6.99996 1.1665M12.8333 6.99984L6.99996 12.8332"
                    stroke="#1FCC84"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Working;
