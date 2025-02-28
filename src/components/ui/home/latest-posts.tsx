import renderImg from "@/imgImport";
import React from "react";
import ProductTag from "../common/tag";
import { Button } from "../common/view-products-buttons";

const LatestPosts = () => {
  const posts_data = [
    {
      author_name: "Sanya Patel",
      date: "20 Jan 2024",
      title: "Future of Robotics: Trends to Watch",
      desc: "Explore emergin robotics trends shaping the future.",
      tags: ["Design", "Research", "Presentation"],
      image: "assets/home/ProductImage1.webp",
      color: "green-500",
    },
    {
      author_name: "Ravi Mehta",
      date: "19 Jan 2024",
      title: "How Robotics is Transforming Education",
      desc: "Discover how robots are revolutionizing learning environments.",
      tags: ["Product", "Tools", "Robotics"],
      image: "assets/home/ProductImage2.webp",
      color: "red-100",
    },
    {
      author_name: "Ananya Sharma",
      date: "18 Jan 2024",
      title: "Behind the Scenes: Building a Robotic Masterpiece",
      desc: "A glimpse into the creative process of our latest project.",
      tags: ["Software Development", "Robotics"],
      image: "assets/home/ProductImage3.webp",
      color: "purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      {/* heading */}
      <div className="py-6 lg:py-12 flex flex-col space-y-1 justify-center items-center">
        <h1 className="text-xs font-tthoves-medium lg:text-sm text-primary">
          {" "}
          Latest Posts
        </h1>
        <h2 className="text-lg lg:text-3xl font-cobaltRidge ">
          Dive into Our Insights
        </h2>
        <h3 className="text-secondary-foreground text-center text-sm lg:text-lg">
          Interviews, tips, guides, industry best practices and news.
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {posts_data.map(
          (
            value: {
              author_name: string;
              date: string;
              title: string;
              desc: string;
              tags: string[];
              image: string;
            },
            key: number
          ) => (
            <div key={key}>
              <img src={value.image} className="w-full " />
              <h1 className="text-primary font-tthoves-medium text-xs lg:text-sm mt-4">
                {value.author_name} {" . "} {value.date}
              </h1>
              <div className="flex justify-between py-2">
                <h1 className="font-cobaltRidge text-base lg:text-lg w-[90%] lg:w-[70%] ">
                  {value.title}
                </h1>
                <img
                  src={renderImg("arrowUpRight")}
                  className="w-4 h-4 lg:w-8 lg:h-8"
                />
              </div>
              <p className="text-sm lg:text-base text-secondary-foreground">
                {" "}
                {value.desc}
              </p>
              <div className="flex space-x-4 py-2">
                {value.tags.map((tag: string, key: number) => (
                  <ProductTag
                    key={key}
                    title={tag}
                    color={posts_data[key].color}
                  />
                ))}
              </div>
            </div>
          )
        )}
      </div>

      <div className="py-6 lg:py-12">
        <Button className="rounded-full">View all posts</Button>
      </div>
    </div>
  );
};

export default LatestPosts;
