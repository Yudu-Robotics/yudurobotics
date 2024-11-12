import { highlightWords } from "@/app/utility/highlightWords";
import renderVideo from "@/videoImport";
import React from "react";

interface PlugAndPlayAccessory {
  title: string;
  desc: string;
  video?: string;
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
      <div className="w-full py-24 text-center ">
        <p className="text-yellow-500 font-bold">{data.title}</p>
        <div className="w-full flex flex-col justify-center items-center sm:gap-5 ">
          <div className=" font-piepie text-2xl md:text-6xl lg:text-7xl tracking-wider text-primary-foreground text-center">
            {highlightWords(
              data.heading,
              data.wordsToHighlight.text1,
              "text-destructive"
            )}
          </div>
          <p className="sm:w-1/3 sm:text-lg text-sm text-center py-5 sm:py-0 ">
            {data.subheading}
          </p>
        </div>
        <div className="w-full">
          <div className="grid gird-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.tableData.map((item: any, index) => (
              <div key={index}>
                <div className="rounded-xxl sm:m-14">
                  {item?.video ? (
                    <video
                      src={renderVideo(item?.video)}
                      className="  rounded-xxl"
                      autoPlay
                      loop
                      muted
                      style={{}}
                    />
                  ) : (
                    <div className="w-full h-[30vh] rounded-xxl bg-red-600"></div>
                  )}
                </div>
                <div className="sm:-mt-6">
                  <div className="text-xl font-bold text-center">
                    {item.title}
                  </div>
                  <div className="text-center sm:px-12 pt-3">{item.desc}</div>
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
