"use client";
import React, { useState } from "react";
import { faqData } from "@/data/faq";

const FAQs = ({ product }: { product: string }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQs by product name
  const filteredFAQs =
    faqData.find((item) => item.product === product)?.faqs || [];

  return (
    <div className="flex flex-col space-y-4 ">
      <div className="flex flex-col space-y-2 justify-center items-center">
        <h1 className="w-full font-piepie text-center  text-3xl sm:text-5xl text-black sm:racking-wider">
          Got Questions? We’ve Got Answers
        </h1>
        <p className="text-secondary-foreground text-center text-lg sm:text-start sm:text-sm md:text-md lg:text-lg xl:text-xl pt-4">
          Find the information you need with our frequently asked questions.
        </p>
      </div>
      {/* <div className="flex flex-col space-y-6 justify-start items-center"> */}
      <div className="max-w-4xl mx-auto px-4 py-0 lg:py-10">
        {filteredFAQs.map((item, index) => (
          <div
            key={index}
            className="border-b border-secondary-foreground py-6"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full focus:outline-none"
            >
              <h3 className="text-xl text-start lg:text-lg text-black">
                {item.question}
              </h3>
              <img
                src={
                  openIndex === index
                    ? "assets/icons/minus-circle.png"
                    : "assets/icons/plus-circle.png"
                }
                alt={openIndex === index ? "Minus sign" : "Plus sign"}
                className="w-6 h-6"
              />
            </button>
            <div
              className={`mt-2 text-secondary-foreground transition-max-height duration-500 ease-in-out overflow-hidden text-md lg:text-base ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default FAQs;
