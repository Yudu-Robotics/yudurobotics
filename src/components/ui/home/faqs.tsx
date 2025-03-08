"use client";
import React from "react";
import { faqData } from "@/data/faq";
import { MinusCircle, PlusCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = ({ product }: { product: string }) => {
  // Filter FAQs by product name
  const filteredFAQs =
    faqData.find((item) => item.product === product)?.faqs || [];

  return (
    <div className="flex flex-col space-y-4 pt-16">
      <div className="flex flex-col space-y-2 justify-center items-center">
        <h1 className="w-full font-cobaltRidge text-center text-3xl sm:text-4xl text-black sm:racking-wider">
          Got Questions? We&apos;ve Got Answers
        </h1>
        <p className="text-secondary-foreground text-center text-lg sm:text-start sm:text-sm md:text-base lg:text-lg xl:text-xl pt-4 font-tthoves">
          Find the information you need with our frequently asked questions.
        </p>
      </div>
      <div className="max-w-4xl mx-auto w-full px-4 py-0 lg:py-10">
        <Accordion type="single" collapsible className="w-full">
          {filteredFAQs.map((item, index) => (
            <AccordionItem
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              value={`item-${index}`}
              className="border-b border-[#E3E3E4] py-3"
            >
              <div className="flex w-full justify-between items-center">
                <AccordionTrigger className="flex justify-between items-center w-full outline-none hover:no-underline gap-4">
                  <span className="text-base text-start lg:text-lg xl:text-xl text-[#0A041A] font-tthoves-medium">
                    {item.question}
                  </span>
                  {/* Custom Icon */}
                </AccordionTrigger>
                <div data-state="closed" className="accordion-icon">
                  <PlusCircle color="#BDBDBF" className="h-6 w-6" />
                  <MinusCircle color="#BDBDBF" className="h-6 w-6" />
                </div>
              </div>
              <AccordionContent className="font-tthoves text-secondary-foreground text-sm lg:text-md xl:text-lg">
                {item.answer.split("\n").map((line, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  <React.Fragment key={i}>
                    {line}
                    {i < item.answer.split("\n").length - 1 && <br />}
                  </React.Fragment>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;
