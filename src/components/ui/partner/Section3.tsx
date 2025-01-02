"use client"
import { highlightWords } from "@/app/utility/highlightWords";
import renderImg from "@/imgImport";
import React, { useEffect, useState } from "react";

export default function Section3() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      <div className="text-black text-center flex justify-center flex-col items-center">
        <div className="sm:w-[90%] md:w-[70%] font-piepie text-5xl md:text-6xl lg:text-7xl tex-center text-primary-foreground text-[#0A041A] px-4">
          {highlightWords(heading1, [heading1], "text-[#0A041A]")}
        </div>
        <div className="font-piepie text-5xl md:text-6xl lg:text-7xl  text-primary-foreground text-[#0A041A] px-4">
          {highlightWords(heading2, [heading2], "text-[#5423E6]")}
        </div>
        <p className="sm:w-[80%] md:w-[60%] lg:px-10 px-3 text-lg mt-5 text-[#4A4A4F]">{subheading}</p>
      </div>
      {isSmallScreen ? (
        <div className="grid grid-cols-1 px-4 my-12">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full px-2 my-4"
            >
              <div className="h-[50px] w-[50px] bg-[#5423E6] rounded-full flex justify-center items-center mb-2">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="w-full px-2 relative pl-16 sm:bottom-16 md:bottom-16">
                <h2 className="font-tthoves-bold align-left text-base text-[#303036]">{item.title}</h2>
                <p className="font-tthoves text-base md:text-base text-[#4A4A4F]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row justify-between items-start my-10 px-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center mx-4"
            >
              <div className="h-[50px] w-[50px] bg-[#5423E6] rounded-full flex justify-center items-center mb-4">
                <img src={item.src} alt={item.title} />
              </div>
              <h2 className="font-tthoves-bold text-base text-[#303036]">{item.title}</h2>
              <p className="font-tthoves px-4 text-sm md:text-base text-[#4A4A4F]">{item.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* <img
        src={renderImg("play")}
        alt="Play button for video content"
        className="w-full sm:px-12 sm:my-10 my-4 h-[30vh] sm:h-auto px-3"
      /> */}
    </div>
  );
}
