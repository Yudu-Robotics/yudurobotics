import { highlightWords } from "@/app/utility/highlightWords";
import renderImg from "@/imgImport";
import React from "react";

export default function Section2() {
  const heading = "What’s in It for You?";
  const subhading =
    "We know you don’t have time for fluff. You’re here to see how partnering with us makes your life easier—and that’s exactly what we’re here to show you.";
  const data = [
    {
      title: "Robots that Actually Excite",
      desc: "We’re not here to put tech in your hands just for the sake of it. Our robots light up students’ imaginations and get them actually excited to learn—no more snooze-worthy lessons.",
      src: renderImg("robot"),
    },
    {
      title: "A Whole Lot Less Stress",
      desc: "Forget running around piecing together a million different things. We’ve bundled it all—curriculum, training, the works—so you don’t have to lift a finger trying to make sense of it all.",
      src: renderImg("peace"),
    },
    {
      title: "A Partner Who’s Actually There",
      desc: "We’re not the kind of people who disappear after the deal’s done. We’ll be right here, with a real human, whenever you need us. No frustrating runaround. Just support when you need it most.",
      src: renderImg("Icon"),
    },
    {
      title: "Results You Can Actually See",
      desc: "We don’t just talk the talk. Our partners see real results—engaged students, better learning outcomes, and a robotics program that’s more than just a shiny add-on.",
      src: renderImg("result"),
    },
  ];
  const bg = "text-[#000000]";
  return (
    <div className="w-full flex sm:flex-row flex-col text-black">
      <div className="sm:w-1/3">
        <div className="font-piepie text-5xl md:text-6xl lg:text-7xl tracking-wider  ">
          {highlightWords(heading, [heading], "text-[#0A041A]")}
        </div>
        <div className="w-2/3 mt-5">{subhading}</div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:w-3/4 sm:px-12">
        {data.map((item, index) => (
          <div key={index} className="p-5 m-5">
            <div className=" h-[50px] w-[50px] rounded-full mb-5 bg-[#5423E6] flex justify-center items-center">
              <img src={item.src} />
            </div>
            <h2 className=" mt-5 font-bold">{item.title}</h2>
            <p className="mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}