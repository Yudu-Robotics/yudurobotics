import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqQuestions = [
    {
      question: "What does Yudu Robotics do?",
      answer:
        "We create innovative, playful robotics that inspire creativity and push tech boundaries.",
    },
    {
      question: "Who can use Yudu products?",
      answer:
        "We create innovative, playful robotics that inspire creativity and push tech boundaries.",
    },
    {
      question: "What platforms are Yudu products compatible with?",
      answer:
        "We create innovative, playful robotics that inspire creativity and push tech boundaries.",
    },
    {
      question: "How can I purchase Yudu products??",
      answer:
        "We create innovative, playful robotics that inspire creativity and push tech boundaries.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "We create innovative, playful robotics that inspire creativity and push tech boundaries.",
    },
    {
      question: "How do I get started with Yudu products?",
      answer:
        "We create innovative, playful robotics that inspire creativity and push tech boundaries.",
    },
  ];
  return (
    <div className="flex flex-col space-y-4 ">
      <div className="flex flex-col space-y-2 justify-center items-center">
        <h1 className="font-piepie text-xl lg:text-2xl text-black">
          Got Questions? We{"'"} Got Answers
        </h1>
        <p className="text-gray-600">
          Find the information you need with our frequently asked questions.
        </p>
      </div>
      <div className="flex flex-col space-y-6 justify-start items-center">
        {faqQuestions.map(
          (value: { question: string; answer: string }, key: number) => (
           <div>
             <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>{value.question}</AccordionTrigger>
                <AccordionContent>{value.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FAQs;
