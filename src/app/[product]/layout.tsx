"use client";
import "../globals.css";
import Footer from "@/components/ui/footer/footer";
import renderSvg from "@/svgImport";
import { useEffect, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Chevron Down
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; // Chevron Up
import Link from "next/link";
import FloatingWhatsApp from "@/components/ui/common/floating-whatsapp";
import renderImg from "@/imgImport";

export default function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { product: string };
}) {
  let currentProduct = params.product == "roboki" ? "peecee" : params.product;
  currentProduct = currentProduct == "crawl_e" ? "zing" : currentProduct;

  const NavBarItems = [
    { name: "Our Products", link: "/products" },
    { name: "The Partner Program", link: "/partner" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const productsData = [
    {
      category: "Microcontrollers",
      products: [
        {
          name: "TED",
          description:
            "TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
          image: "ted8",
          link: "/peecee",
        },
        {
          name: "AI-1",
          description:
            "An intelligent camera powered by AI for dynamic object detection, tracking, and insights.",
          image: "AIIII",
          link: "",
        },
        {
          name: "Roboki",
          description:
            "A durable and upgradable kit packed with everything you need to build, learn and explore robotics.",
          image: "Roboki1",
          link: "/roboki",
        },
        {
          name: "Toki",
          description:
            "Affordable alternative to Arduino, offering superior customization options and advanced capabilities to unleash your creativity.",
          image: "Toki0 ",
          link: "",
        },
      ],
    },
    {
      category: "Animatronics",
      products: [
        {
          name: "Zing",
          description:
            "A lifelike humanoid robot, perfect for interactive learning.",
          image: "Zing1",
          link: "/animatronics/zing",
        },
        {
          name: "Crawl-e",
          description: "A versatile hexapod explorer designed for learning.",
          image: "Crawle1",
          link: "/animatronics/crawl-e",
        },
      ],
    },
    {
      category: "Toys",
      products: [
        {
          name: "Play Dynamex",
          description:
            "Colorful plastic blocks inspiring creativity and hands-on building.",
          image: "toy",
          link: "/toys/play-dynamex",
        },
      ],
    },
  ];
  const social_share = [
    { icon: "assets/home/Twitter.svg", link: "https://twitter.com/YuduRobotics/" },
    { icon: "assets/home/Linkedin.svg", link: "https://www.linkedin.com/showcase/yudu-robotics/" },
    { icon: "assets/home/Instagram.svg", link: "https://www.instagram.com/yudurobotics/" },
    { icon: "assets/home/Youtube.svg", link: "https://www.youtube.com/@YuduRobotics" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button only after scrolling down 200px
      if (window.scrollY > 350) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = (open: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const [isOurProductOpen, setIsOurProductOpen] = useState(false);
  const [openSubOption, setOpenSubOption] = useState<string | null>(null);

  const drawerList = () => (
    <div className="w-full pt-4 px-4 text-primary-foreground">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <img src={renderImg("logoblack")} alt="logo" />
        <div
          className="cursor-pointer"
          onClick={() => setIsDrawerOpen(false)}
        >
          <img src="assets/home/x-close.svg" alt="Close" className="w-6 h-6" />
        </div>
      </div>

      <div className="flex flex-col space-y-4 border-b  border-gray-300 pb-6">
        {NavBarItems.map((item, key) => (
          <div key={key} className="font-tthoves-semiBold text-primary ">
            {item.name === "Our Products" ? (
              <>
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
                    {productsData.map((category, index) => (
                      <div key={index} className="mb-4">
                        <button
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
                          {openSubOption === category.category ?
                            (
                              <ExpandLessIcon className="ml-2" />
                            ) : (
                              <ExpandMoreIcon className="ml-2" />
                            )}
                        </button>
                        {openSubOption === category.category && (
                          <div className="flex flex-col space-y-4 mt-2">
                            {category.products.map((product, productIndex) => (
                              <div
                                key={productIndex}
                                className="flex items-start space-x-4 mb-4"
                              >

                                {/* Image */}
                                <div className="flex flex-cols">
                                  {/* {console.log('KKKKKKKKKK',product.image)} */}
                                  <img
                                    src={renderImg(product.image)}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                {/* Details */}
                                <div>
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
                    <div className="mt-4" onClick={() => setIsDrawerOpen(false)}>
                      <Link
                        href="/products"
                        className="text-blue-600 text-sm font-medium block"
                      >
                        View all products →
                      </Link>
                    </div>
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
        ))}

      </div>
      {/* Footer Links */}
      <div
        // onClick={() => setIsDrawerOpen(false)}
        className="flex flex-col grid grid-cols-1 gap-0 h-full space-y-2 border-t border-gray-300 pt-6">
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
        <div
          onClick={() => setIsDrawerOpen(false)}>
          <Link
            href="#Contact"
            className="text-sm text-gray-400 font-tthoves-semiBold hover:text-purple-600"
          >
            Contact us
          </Link>
        </div>
        <div className="relative">
          {isSocialOpen && (
            <div className="w-full rounded-md">
              <div className="flex justify-center gap-x-8 w-full">
                {social_share.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 text-sm text-gray-700 hover:bg-gray-100"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <img
                      src={social.icon}
                      alt="social icon"
                      className="w-full h-6 mb-10" // Adjust icon size
                    />
                    <span className="sr-only">{social.link}</span> {/* Screen reader text */}
                  </a>
                ))}
              </div>


            </div>
          )}
        </div>


        {/* Add more footer links as needed */}
      </div>

    </div>
  );

  return (
    <html lang="en">
      <body className={currentProduct == "klaw_b" ? "klaw" : currentProduct}>
        <div className="overflow-x-hidden ">
          <div className="fixed w-full top-0 left-0 h-[75px] z-50">
            <div className="px-8 lg:px-28 py-4 bg-primary">
              {/* TopBar/NavBar */}
              <div className="flex justify-between items-center ">
                <Link
                  href="/home"
                  className="flex space-x-3 justify-start items-center w-[50%]"
                >
                  {renderSvg("logoYudoRobo")}
                </Link>

                {/* Hamburger Menu for Mobile */}
                <div className="lg:hidden">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setIsDrawerOpen(true)}
                    className="border border-transparent hover:border-hoverButton1 hover:bg-hoverButtonGradient bg-buttonGradient cursor-pointer items-center justify-center rounded-buttons transition-all ease-in-out"
                  >
                    <MenuIcon className="text-primary-foreground" />
                  </IconButton>
                </div>

                {/* Full Navbar for Desktop */}
                <div className="space-x-4 hidden lg:flex lg:justify-center lg:items-center text-primary-foreground">
                  {NavBarItems.map((item, key: number) => (
                    <div key={key}>
                      {
                        <Link
                          href={item.link}
                          className="text-primary-foreground text-center text-base px-3 hover:text-destructive font-tthoves-semiBold"
                        >
                          {item.name}
                        </Link>
                      }
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer for Mobile */}
            <Drawer
              anchor="top"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              {drawerList()}
            </Drawer>
          </div>

          <FloatingWhatsApp />
          {showScrollToTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-0 right-4  z-40  text-white p-3 rounded-full shadow-lg transition-all "
              title="Scroll to top"
            >
              <img src="assets/home/Arrowup.png" alt="scroll-up" />

            </button>
          )}

          {/* Main Content */}
          {children}

          {/* Footer */}
          <div className="w-full -mb-1 mt-24 pt-24">{renderSvg("bottomSection")}</div>
          <div className="px-8 lg:px-28 py-4 bg-primary">
            <Footer />
          </div>
        </div>

      </body>
    </html>
  );
}
