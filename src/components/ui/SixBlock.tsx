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
        <div className="w-full  flex flex-col justify-center items-center sm:gap-5 ">
          <div className="font-piepie text-4xl md:text-6xl lg:text-7xl text-primary-foreground text-center xs:w-[90%]">
            {highlightWords(
              data.heading,
              data.wordsToHighlight.text1,
              "text-primary"
            )}
          </div>
          <p className="font-tthoves sm:w-1/3 xl:w-[60%] text-lg sm:text-lg  text-center py-5 sm:py-0 text-secondary-foreground">
            {data.subheading}
          </p>
        </div>
        <div className="w-full">
          <div className="grid gird-cols-1 xs:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.tableData.map((item: any, index) => (
              <div key={index}>
                <div className="rounded-xxl sm:m-14 md:m-6">
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
                <div className="sm:-mt-2 sm:pt-4 md:pt-2">
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
