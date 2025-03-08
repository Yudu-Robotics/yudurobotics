import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Chevron Down
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; // Chevron Up
import Link from "next/link";
import renderImg, { type ImageName } from "@/imgImport";
import Image from "next/image";
import { X } from "lucide-react";
type Product = {
  id: number;
  name: string;
  description: string;
  image: ImageName; // Use the ImageName type here
  link: string;
};
interface NavbarProps {
  setIsDrawerOpen: (isOpen: boolean) => void;
}

const Navbar = ({ setIsDrawerOpen }: NavbarProps) => {
  const NavBarItems = [
    { name: "Our Products", link: "/products", id: "products" },
    { name: "The Partner Program", link: "/partner", id: "partner" },
  ];
  const productsData: {
    id: string;
    category: string;
    products: Product[];
  }[] = [
    {
      id: "1",
      category: "Codable Kits",
      products: [
        {
          id: 1,
          name: "TED",
          description:
            "TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
          image: "ted8",
          link: "/peecee",
        },
        {
          id: 2,
          name: "AI-1",
          description:
            "An intelligent camera powered by AI for dynamic object detection, tracking, and insights.",
          image: "AIIII",
          link: "",
        },
        {
          id: 3,
          name: "Roboki",
          description:
            "A durable and upgradable kit packed with everything you need to build, learn and explore robotics.",
          image: "Roboki1",
          link: "/roboki",
        },
        {
          id: 4,
          name: "Toki",
          description:
            "Affordable alternative to Arduino, offering superior customization options and advanced capabilities to unleash your creativity.",
          image: "Toki0",
          link: "",
        },
      ],
    },
    {
      id: "2",
      category: "Animatronics",
      products: [
        {
          id: 1,
          name: "Zing",
          description:
            "A lifelike humanoid robot, perfect for interactive learning.",
          image: "Zing1",
          link: "/zing",
        },
        {
          id: 2,
          name: "Crawl-e",
          description: "A versatile hexapod explorer designed for learning.",
          image: "Crawle1",
          link: "/crawl-e",
        },
      ],
    },
    {
      id: "3",
      category: "Mechanical",
      products: [
        {
          id: 1,
          name: "Play Dynamex",
          description:
            "Colorful plastic blocks inspiring creativity and hands-on building.",
          image: "toy",
          link: "/play-dynamex",
        },
      ],
    },
  ];
  const social_share = [
    {
      icon: "/assets/home/Twitter.svg",
      link: "https://twitter.com/YuduRobotics/",
    },
    {
      icon: "/assets/home/Linkedin.svg",
      link: "https://www.linkedin.com/showcase/yudu-robotics/",
    },
    {
      icon: "/assets/home/Instagram.svg",
      link: "https://www.instagram.com/yudurobotics/",
    },
    {
      icon: "/assets/home/Youtube.svg",
      link: "https://www.youtube.com/@YuduRobotics",
    },
  ];
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOurProductOpen, setIsOurProductOpen] = useState(false);
  const [openSubOption, setOpenSubOption] = useState<string | null>(null);
  return (
    <div className="w-full pt-4 px-4 text-primary-foreground">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <Image
          width={500}
          height={500}
          src={renderImg("logoblack")}
          alt="logo"
          className="w-auto h-10"
          priority
        />
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <div className="cursor-pointer" onClick={() => setIsDrawerOpen(false)}>
          <X className="w-6 h-6" color="black" />
        </div>
      </div>

      <div className="flex flex-col space-y-4 border-b  border-gray-300 pb-6">
        {NavBarItems.map((item) => {
          const { id } = item;
          return (
            <div key={id} className="font-tthoves-semiBold text-primary ">
              {item.name === "Our Products" ? (
                <>
                  {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                  <div
                    onClick={() => setIsOurProductOpen(!isOurProductOpen)}
                    className="text-base font-tthoves-semiBold text-black transition-colors duration-300 ease-in-out hover:text-purple-600 cursor-pointer flex justify-between items-center"
                  >
                    {item.name}
                    {isOurProductOpen ? (
                      <ExpandLessIcon className="ml-2" />
                    ) : (
                      <ExpandMoreIcon className="ml-2" />
                    )}
                  </div>
                  {isOurProductOpen && (
                    <div className="flex flex-col items-start mt-2 ml-2">
                      {productsData.map((category) => (
                        <div key={category.id} className="mb-4">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenSubOption(
                                openSubOption === category.category
                                  ? "null text-primary bg-purple-100 rounded-full"
                                  : category.category
                              )
                            }
                            className="text-base font-tthoves-semiBold text-gray-700 transition-colors duration-300 ease-in-out hover:text-purple-600"
                          >
                            {category.category}
                            {openSubOption === category.category ? (
                              <ExpandLessIcon className="ml-2" />
                            ) : (
                              <ExpandMoreIcon className="ml-2" />
                            )}
                          </button>
                          {openSubOption === category.category && (
                            <div className="flex flex-col space-y-4 mt-2">
                              {category.products.map((product) => (
                                <div
                                  key={product.id}
                                  className="flex items-start space-x-4 mb-4"
                                >
                                  {/* Image */}
                                  <div className="w-32 h-20 flex-shrink-0">
                                    <Image
                                      width={100}
                                      height={100}
                                      src={renderImg(product.image)}
                                      alt={product.name}
                                      className="w-full h-full object-cover rounded-md"
                                    />
                                  </div>
                                  {/* Details */}
                                  <div className="flex-1">
                                    <h3 className="text-base font-tthoves-semiBold text-black">
                                      {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                      {product.description}
                                    </p>
                                    <Link
                                      href={product.link || "#"}
                                      className="text-blue-600 text-sm mt-1 block"
                                    >
                                      Learn More &rarr;
                                    </Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        className="mt-4"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        <Link
                          href="/products"
                          className="text-blue-600 text-sm font-medium block"
                        >
                          View all products →
                        </Link>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="flex flex-col space-y-  gap-1  border-t border-gray-400 pt-6">
                  <Link
                    href={item.link}
                    className="text-base font-tthoves-semiBold text-black transition-colors duration-300 ease-in-out hover:text-purple-600"
                  >
                    {item.name}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Footer Links */}
      <div
        // onClick={() => setIsDrawerOpen(false)}
        className="flex-col grid grid-cols-1 gap-0 h-full space-y-2 border-t border-gray-300 pt-6"
      >
        {/* <Link
          href="/about"
          className="text-sm text-gray-400 font-tthoves-semiBold hover:text-destructive"
        >
          About us
        </Link> */}
        {/* <Link
          href="#Contact"
          className="text-sm text-gray-400 font-tthoves-semiBold hover:text-destructive"
        >
          Contact us
        </Link> */}
        <button type="button" onClick={() => setIsDrawerOpen(false)}>
          <Link
            href="#Contact"
            className="text-sm text-gray-400 font-tthoves-semiBold hover:text-purple-600"
          >
            Contact us
          </Link>
        </button>
        <div className="relative">
          {/* {isSocialOpen && ( */}
          <div className="w-full rounded-md">
            <div className="flex justify-center gap-x-8 w-full">
              {social_share.map((social) => (
                <Link
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 text-sm text-gray-700 hover:bg-gray-100"
                  aria-label="social link"
                >
                  <Image
                    width={100}
                    height={100}
                    src={social.icon}
                    alt="social icon"
                    className="w-full h-6 mb-10" // Adjust icon size
                  />
                  <span className="sr-only">{social.link}</span>{" "}
                  {/* Screen reader text */}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Add more footer links as needed */}
      </div>
    </div>
  );
};

export default Navbar;
