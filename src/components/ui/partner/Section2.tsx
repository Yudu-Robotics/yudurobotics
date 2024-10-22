import { highlightWords } from "@/app/utility/highlightWords";
import React from "react";

export default function Section2() {
  const heading: string = "What’s in It for You?";
  const subhading =
    "We know you don’t have time for fluff. You’re here to see how partnering with us makes your life easier—and that’s exactly what we’re here to show you.";
  const data = [
    {
      title: "Robots that Actually Excite",
      desc: "We’re not here to put tech in your hands just for the sake of it. Our robots light up students’ imaginations and get them actually excited to learn—no more snooze-worthy lessons.",
      src: "",
    },
    {
      title: "Robots that Actually Excite",
      desc: "We’re not here to put tech in your hands just for the sake of it. Our robots light up students’ imaginations and get them actually excited to learn—no more snooze-worthy lessons.",
      src: "",
    },
    {
      title: "Robots that Actually Excite",
      desc: "We’re not here to put tech in your hands just for the sake of it. Our robots light up students’ imaginations and get them actually excited to learn—no more snooze-worthy lessons.",
      src: "",
    },
    {
      title: "Robots that Actually Excite",
      desc: "We’re not here to put tech in your hands just for the sake of it. Our robots light up students’ imaginations and get them actually excited to learn—no more snooze-worthy lessons.",
      src: "",
    },
  ];
  const bg = "text-[#000000]";
  return (
    <div className="w-full flex sm:flex-row flex-col text-black">
      <div className="sm:w-1/3">
        <div className="font-piepie text-5xl md:text-6xl lg:text-7xl tracking-wider text-primary-foreground text-[#000000]">
          {highlightWords(heading, [heading], bg)}
        </div>
        <div className="w-2/3 mt-5">{subhading}</div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:w-3/4 sm:px-12">
        {data.map((item, index) => (
          <div key={index} className="p-5 m-5">
            <div className="bg-[#5423E6] h-[50px] w-[50px] rounded-full mb-5"></div>
            <h2 className=" mt-5 font-bold">{item.title}</h2>
            <p className="mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
