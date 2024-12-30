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
      <div className="w-full py-16 md:pt-8 text-center ">
        <p className="text-yellow-500 md:pt-4 font-tthoves-bold text-sm">{data.title}</p>
        <div className="w-full  flex flex-col justify-center items-center md:pt-2 sm:gap-5 ">
          <div className="font-piepie text-4xl md:text-6xl lg:text-7xl text-primary-foreground text-center xs:w-full md:w-[90%] lg:w-[80%] xl:w-[70%] md:pt-4">
            {highlightWords(
              data.heading,
              data.wordsToHighlight.text1,
              "text-primary"
            )}
          </div>
          <p className="font-tthoves xl:w-[60%] text-lg sm:text-lg md:pt-5 text-center py-12 md:py-8 text-secondary-foreground">
            {data.subheading}
          </p>
        </div>
        <div className="w-full">
          <div className="grid gird-cols-1 sm:grid-cols-1  xl:grid-cols-3 gap-8 ">
            {data.tableData.map((item: any, index) => (
              <div key={index}>
                <div className="rounded-xxl sm:m-4">
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
                <div className="py-8 md:py-12">
                  <div className="text-xl font-bold text-center font-tthoves-semiBold">
                    {item.title}
                  </div>
                  <div className="text-center text-lg sm:px-12 pt-3 font-tthoves">
                    {item.desc}
                  </div>
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
