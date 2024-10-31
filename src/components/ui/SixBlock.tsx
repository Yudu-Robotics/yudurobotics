import { highlightWords } from "@/app/utility/highlightWords";
import React from "react";

interface PlugAndPlayAccessory {
  title: string;
  desc: string;
}

interface PlugAndPlayData {
  title: string;
  heading: string;
  wordsToHighlight: {
    text1: string[];
  };
  subheading: string;
  tableData: PlugAndPlayAccessory[];
}

interface SixBlockProps {
  data: PlugAndPlayData;
}

const SixBlock: React.FC<SixBlockProps> = ({ data }) => {
  return (
    <>
      <div className="w-full py-24 text-center">
        <p className="text-yellow-500 font-bold">{data.title}</p>
        <div className="w-full flex flex-col justify-center items-center gap-5 ">
          <div className="w-1/2 font-piepie text-5xl md:text-6xl lg:text-7xl tracking-wider text-primary-foreground  text-center">
            {highlightWords(
              data.heading,
              data.wordsToHighlight.text1,
              "text-destructive"
            )}
          </div>
          <p className="w-1/3 text-lg text-center">{data.subheading}</p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-3 gap-8">
            {data.tableData.map((item, index) => (
              <div>
                <div
                  key={index}
                  className=" h-[500px] bg-red-600 rounded-xxl m-14"
                ></div>
                <div className="-mt-6">
                  <div className="text-xl font-bold text-center">
                    {item.title}
                  </div>
                  <div className="text-center px-12">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SixBlock;
