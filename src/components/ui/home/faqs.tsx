"use client";
import React, { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What does Yudu Robotics do?",
      answer:
        "We create innovative, playful robotics that inspire creativity and push tech boundaries.",
    },
    {
      question: "Who can use Yudu products?",
      answer:
        "Yudu products are suitable for anyone interested in robotics, from beginners to professionals.",
    },
    {
      question: "What platforms are Yudu products compatible with?",
      answer:
        "Yudu products are compatible with all major platforms including Windows, macOS, and Linux.",
    },
    {
      question: "How can I purchase Yudu products?",
      answer:
        "Yudu products are compatible with all major platforms including Windows, macOS, and Linux.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yudu products are compatible with all major platforms including Windows, macOS, and Linux.",
    },
    {
      question: "How do I get started with Yudu products?",
      answer:
        "Yudu products are compatible with all major platforms including Windows, macOS, and Linux.",
    },
  ];
  return (
    <div className="flex flex-col space-y-4 ">
      <div className="flex flex-col space-y-2 justify-center items-center">
        <h1 className="font-piepie  lg:text-3xl text-black tracking-wider">
          Got Questions? We’ve Got Answers
        </h1>
        <p className="text-secondary-foreground">
          Find the information you need with our frequently asked questions.
        </p>
      </div>
      {/* <div className="flex flex-col space-y-6 justify-start items-center"> */}
      <div className="max-w-4xl mx-auto px-4 py-0 lg:py-10">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-secondary-foreground py-6"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full focus:outline-none"
            >
              <h3 className="text-sm text-start lg:text-lg text-black">
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
              className={`mt-2 text-secondary-foreground transition-max-height duration-500 ease-in-out overflow-hidden text-xs lg:text-base ${
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
