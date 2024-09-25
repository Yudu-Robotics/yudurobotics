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
    <div className="px-8 lg:px-28 py-20 text-black flex flex-col space-y-20">
      <div className="flex flex-col space-y-3 ">
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
      </div>
    </div>
  );
}
