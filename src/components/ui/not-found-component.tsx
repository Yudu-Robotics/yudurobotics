import renderImg from "@/imgImport";
import React from "react";

export function WrongPageComponent() {
  const redirectOptions = [
    {
      icon: "assets/404/documentation.png",
      title: "Documentation",
      desc: "Dive in to learn all about our product.",
      redirectText: "Start learning ->",
      redirectPath: "/",
    },
    {
      icon: "assets/404/blogBook.png",
      title: "Our blog",
      desc: "Read the latest posts on our blog.",
      redirectText: "View latest posts ->",
      redirectPath: "/blog",
    },
    {
      icon: "assets/404/message-chat-circleBlog.png",
      title: "Chat to us",
      desc: "Can’t find what you’re looking for?",
      redirectText: "Chat to our team ->",
      redirectPath: "/",
    },
  ];

  return (
    <div className="px-8 lg:px-28  text-black flex justify-center flex-col items-center space-y-20 bg-primary">
      {/* <div className="flex flex-col space-y-3 ">
        <h1 className="text-xs text-primary">404 error</h1>
        <h2 className="text-2xl lg:text-4xl font-piepie">We lost this page</h2>
        <h3 className="text-secondary-foreground">
          {
            "We searched high and low, but couldn’t find what you’re looking for. Let us find a better place for you to go."
          }
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {redirectOptions.map(
          (
            value: {
              icon: string;
              title: string;
              desc: string;
              redirectText: string;
              redirectPath: string;
            },
            index: number
          ) => (
            <div key={index} className="flex flex-col space-y-8">
              <div>
                <img src={value.icon} />
              </div>
              <div className="flex flex-col space-y-1 ">
                <h1 className="font-semibold">{value.title}</h1>
                <h2 className="text-secondary-foreground">{value.desc}</h2>
              </div>
              <a href={value.redirectPath} className="text-primary">
                {value.redirectText}
              </a>
            </div>
          )
        )}
      </div> */}
      <div className="w-[100vw]">
        <img src={renderImg("notFound")} className="w-full" />
      </div>
      <div className="w-1/2  flex flex-col justify-center items-center text-[#BBA5FE] gap-5">
        <p>
          Sorry, the page you are looking for doesn't exist or has been moved.
          Try searching our site:
        </p>
        <div className="w-1/2 flex gap-5 ">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search our site"
            />
          </div>
          <button className="bg-[#602CF7] text-[#FAF9FE] rounded-sm font-semibold px-6 py-2 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
