"use client";
import { highlightWords } from "@/app/utility/highlightWords";
import renderImg from "@/imgImport";
import React from "react";
import ContactForm from "../common/contact-us-form";

export default function Section3() {
  // const [isSmallScreen, setIsSmallScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 768);
  //   };

  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

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
    <>
      <div className="text-black text-center flex justify-center flex-col items-center">
        <div className="font-cobaltRidge text-5xl md:text-6xl lg:text-7xl tex-center text-primary-foreground text-[#0A041A] px-4">
          {highlightWords(heading1, [heading1], "text-[#0A041A]")}
        </div>
        <div className="font-cobaltRidge text-5xl md:text-6xl lg:text-7xl  text-primary-foreground text-[#0A041A] px-4">
          {highlightWords(heading2, [heading2], "text-[#5423E6]")}
        </div>
        <p className="sm:w-[80%] md:w-[60%] lg:px-10 px-3 text-lg mt-5 text-[#4A4A4F]">
          {subheading}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center xl:px-20 ">
        <div className="flex-1 w-full">
          {/* {isSmallScreen ? (
        <div className="grid grid-cols-1 px-4 my-16">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-full px-2 my-2 "
            >
              <div className="h-[50px] w-[50px] bg-[#5423E6] rounded-full flex justify-center items-center mb-2">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="w-full px-2 relative pl-16 xs:bottom-16 md:bottom-16">
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
      )} */}
          {/* {isSmallScreen ? ( */}
          <div className="relative grid grid-cols-1 px-4 my-16">
            {data.map((item, index) => (
              <div key={item.id} className="relative w-full px-1 my-6 flex">
                <div
                  className="h-[50px] w-[50px] bg-[#5423E6] rounded-full flex justify-center items-center mb-2 relative z-10  gap-0 "
                  style={{ borderRadius: "100%" }}
                >
                  <img src={item.src} alt={item.title} className="" />
                </div>
                <div className="  w-[279px] h-[134px] p-4 pt-[var(--spacing-4xl)]  gap-[var(--spacing-sm)] flex-grow">
                  <h2 className="font-tthoves-bold text-base text-[#303036]  font-semibold leading-[var(--Lineheighttext-md)] text-left mb-2">
                    {item.title}
                  </h2>
                  <p className="font-tthoves text-base text-[#4A4A4F]  font-light leading-[var(--Lineheighttext-md)] text-left underline-offset-from-font decoration-skip-ink-none ">
                    {item.desc}
                  </p>
                </div>
                {index !== data.length - 1 && (
                  <div className="absolute left-[25px] top-[60px]  h-[calc(100%-20px)] w-[2px] bg-[#5423E6]" />
                )}
              </div>
            ))}
          </div>
          {/* ) : (
          <div className="flex flex-row justify-between items-start my-10 px-10">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center mx-4"
              >
                <div className="h-[50px] w-[50px] bg-[#5423E6] rounded-full flex justify-center items-center mb-4">
                  <img src={item.src} alt={item.title} />
                </div>
                <h2 className="font-tthoves-bold text-base text-[#303036]">
                  {item.title}
                </h2>
                <p className="font-tthoves px-4 text-sm md:text-base text-[#4A4A4F]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )} */}

          {/* <img
        src={renderImg("play")}
        alt="Play button for video content"
        className="w-full sm:px-12 sm:my-10 my-4 h-[30vh] sm:h-auto px-3"
      /> */}
        </div>
        <div className="flex-1 w-full px-4 xl:w-auto xl:px-10">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
