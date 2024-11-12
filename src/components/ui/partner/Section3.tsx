import { highlightWords } from "@/app/utility/highlightWords";
import renderImg from "@/imgImport";
import React from "react";

export default function Section3() {
  const heading1 = "Here’s how you can";
  const heading2 = "Partner With Us";
  const subheading =
    "And hey, don’t take it from us—check out what our partners have to say about their experience";

  const data = [
    {
      id: 1,
      title: "Say Hello",
      desc: "Send us a message or give us a quick call. We’re here to chat, learn about what you need, and figure out how we can help.",
      src: renderImg("hand"),
    },
    {
      id: 2,
      title: "Let’s Make a Plan",
      desc: "We’ll put together a game plan that fits your needs—nothing cookie-cutter. We’re all about making this partnership work for you.",
      src: renderImg("plan"),
    },
    {
      id: 3,
      title: "Get Set Up",
      desc: "We’ll handle all the heavy lifting. Our team will get you up and running with the robots, the curriculum, and any training you need. We’re with you every step of the way.",
      src: renderImg("strong"),
    },
    {
      id: 4,
      title: "Keep Winning",
      desc: "This isn’t a one-and-done. We’ll keep the support rolling, updating your resources, and making sure everything runs smoothly while you focus on the bigger picture.",
      src: renderImg("winning"),
    },
  ];

  return (
    <div>
      <div className="text-black flex justify-center flex-col items-center">
        <div className="font-piepie text-5xl md:text-6xl lg:text-7xl tracking-wider text-primary-foreground text-[#000000] px-3 sm:px-0">
          {highlightWords(heading1, [heading1], "text-black")}
        </div>
        <div className="font-piepie text-5xl md:text-6xl lg:text-7xl tracking-wider text-primary-foreground text-[#000000] px-3 sm:px-0">
          {highlightWords(heading2, [heading2], "text-[#5423E6]")}
        </div>
        <p className="sm:px-10 px-3 text-sm mt-5">{subheading}</p>
      </div>
      <div className="my-10 w-full flex sm:flex-col flex-row">
        <div className="sm:w-full h-screen w-1/4 flex sm:h-[50px] sm:px-14 sm:flex-row flex-col justify-center items-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`sm:w-1/4 h-1/4 flex ${
                index === 3 ? "justify-start" : "justify-end"
              } items-center sm:flex-row flex-col`}
            >
              <div
                className={`flex-1 sm:h-[5px] w-[10px] ${
                  index === 0 ? "" : "bg-[#5423E6]"
                }`}
              ></div>
              <div className="h-[50px] w-[50px] bg-[#5423E6] rounded-full flex justify-center items-center">
                <img src={data[index].src} />
              </div>
              <div
                className={`flex-1 sm:h-[5px] w-[10px] ${
                  index === 3 ? "" : "bg-[#5423E6]"
                }`}
              ></div>
            </div>
          ))}
        </div>
        <div className="text-black flex sm:flex-row flex-col sm:px-14 text-center sm:w-full w-3/4 my-5 h-screen sm:h-auto">
          {data.map((item) => (
            <div
              key={item.id}
              className="sm:w-1/4  h-1/4 flex flex-col  justify-center "
            >
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="sm:px-16">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <img
        src={renderImg("play")}
        alt="Play button for video content"
        className="w-full sm:px-12 sm:my-10 my-4 h-[30vh] sm:h-auto px-3"
      /> */}
    </div>
  );
}
