"use client";
import "../globals.css";
import Footer from "@/components/ui/footer/footer";
import renderSvg from "@/svgImport";
import { useEffect, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import FloatingWhatsApp from "@/components/ui/common/floating-whatsapp";
import localFont from "next/font/local";
import { ArrowUp } from "lucide-react";
import Navbar from "@/components/ui/common/navbar";

const cobaltRidge = localFont({
  src: "./../../../fonts/CobaltRidge.otf",
  variable: "--font-cobalt",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesRegular = localFont({
  src: "./../../../fonts/TT Hoves Regular.otf",
  variable: "--font-tthoves-regular",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesMedium = localFont({
  src: "./../../../fonts/TT Hoves Medium.otf",
  variable: "--font-tthoves-medium",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesDemiBold = localFont({
  src: "./../../../fonts/TT Hoves DemiBold.otf",
  variable: "--font-tthoves-demibold",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesBold = localFont({
  src: "./../../../fonts/TT Hoves Bold.otf",
  variable: "--font-tthoves-bold",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

type ProductMetadata = {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
      type: string;
    }[];
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
};

const productMetadata: Record<string, ProductMetadata> = {
  peecee: {
    title: "Peecee - Educational Robotics Kit | Yudu Robotics",
    description:
      "Advanced educational robotics kit for kids. Learn coding, robotics, and STEM with our interactive Peecee robot kit. Perfect for ages 8-15.",
    keywords: [
      "Peecee robot",
      "Educational robotics kit",
      "STEM toys for kids",
      "Coding toys for children",
      "DIY robotics kit",
      "Interactive learning robot",
      "Programming for kids",
      "Educational toys",
      "Robotics for beginners",
      "Kids coding kit",
    ],
    openGraph: {
      title: "Peecee - Educational Robotics Kit | Yudu Robotics",
      description:
        "Advanced educational robotics kit for kids. Learn coding, robotics, and STEM with our interactive Peecee robot kit. Perfect for ages 8-15.",
      images: [
        {
          url: "/assets/peecee/preview.png",
          width: 1200,
          height: 630,
          alt: "Peecee Educational Robot Kit - Perfect for learning robotics and coding",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Peecee - Educational Robotics Kit | Yudu Robotics",
      description:
        "Advanced educational robotics kit for kids. Learn coding, robotics, and STEM with our interactive Peecee robot kit.",
      images: ["/assets/peecee/preview.png"],
    },
  },
  zing: {
    title: "Zing - All-Terrain Robot Kit | Yudu Robotics",
    description:
      "Build your own all-terrain robot with Zing. Perfect for learning robotics, coding, and engineering. Suitable for schools and hobbyists.",
    keywords: [
      "All terrain robot",
      "Zing robot kit",
      "DIY robot kit",
      "STEM learning kit",
      "Robotics project kit",
      "Sensor-based robot",
      "Educational robotics",
      "Arduino compatible robot",
      "Coding robot kit",
      "Engineering toys",
    ],
    openGraph: {
      title: "Zing - All-Terrain Robot Kit | Yudu Robotics",
      description:
        "Build your own all-terrain robot with Zing. Perfect for learning robotics, coding, and engineering.",
      images: [
        {
          url: "/assets/zing/preview.png",
          width: 1200,
          height: 630,
          alt: "Zing All-Terrain Robot Kit - Advanced robotics learning platform",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Zing - All-Terrain Robot Kit | Yudu Robotics",
      description:
        "Build your own all-terrain robot with Zing. Perfect for learning robotics, coding, and engineering.",
      images: ["/assets/zing/preview.png"],
    },
  },
  klaw_b: {
    title: "Klaw-B Humanoid Robot | Yudu Robotics",
    description:
      "Advanced humanoid robot for education and events. Features AI capabilities, visual programming, and multiple functionalities.",
    keywords: [
      "Humanoid robot",
      "AI robot",
      "Educational robot",
      "Event display robot",
      "Programmable humanoid",
      "Robotic teaching aid",
      "Smart robot",
      "Interactive humanoid",
      "School robotics",
      "Advanced robotics kit",
    ],
    openGraph: {
      title: "Klaw-B Humanoid Robot | Yudu Robotics",
      description:
        "Advanced humanoid robot for education and events. Features AI capabilities and visual programming.",
      images: [
        {
          url: "/assets/klawb/preview.png",
          width: 1200,
          height: 630,
          alt: "Klaw-B Humanoid Robot - Advanced AI-powered educational robot",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Klaw-B Humanoid Robot | Yudu Robotics",
      description:
        "Advanced humanoid robot for education and events. Features AI capabilities and visual programming.",
      images: ["/assets/klawb/preview.png"],
    },
  },
  roboki: {
    title: "Roboki - Educational Robot Kit for Beginners | Yudu Robotics",
    description:
      "Start your robotics journey with Roboki. Perfect introductory robot kit for young learners, featuring easy-to-use programming interface and engaging activities.",
    keywords: [
      "Roboki robot",
      "Beginner robotics kit",
      "Kids first robot",
      "Easy programming robot",
      "Entry level robotics",
      "STEM education kit",
      "Simple coding robot",
      "Learning robotics",
      "Educational robot toy",
      "Starter robotics kit",
      "Children's coding kit",
      "Basic robotics learning",
      "Interactive robot for kids",
    ],
    openGraph: {
      title: "Roboki - Educational Robot Kit for Beginners | Yudu Robotics",
      description:
        "Start your robotics journey with Roboki. Perfect introductory robot kit for young learners, featuring easy-to-use programming interface and engaging activities.",
      images: [
        {
          url: "/assets/roboki/preview.png",
          width: 1200,
          height: 630,
          alt: "Roboki Educational Robot Kit - Perfect for learning robotics and coding",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Roboki - Educational Robot Kit for Beginners | Yudu Robotics",
      description:
        "Start your robotics journey with Roboki. Perfect introductory robot kit for young learners, featuring easy-to-use programming interface and engaging activities.",
      images: ["/assets/roboki/preview.png"],
    },
  },
  plode: {
    title: "Plode - Advanced 3D Printer Kit | Yudu Robotics",
    description:
      "High-precision 3D printer kit for educational institutions and makers. Learn additive manufacturing with hands-on experience and comprehensive tutorials.",
    keywords: [
      "3D Printer Kit",
      "Educational 3D printer",
      "DIY 3D printer",
      "STEM learning printer",
      "Maker space equipment",
      "School 3D printer",
      "Lab equipment",
      "Additive manufacturing",
      "3D printing education",
      "Precision printing",
      "Learning 3D printing",
      "Hands-on technology",
      "Manufacturing education",
    ],
    openGraph: {
      title: "Plode - Advanced 3D Printer Kit | Yudu Robotics",
      description:
        "High-precision 3D printer kit for educational institutions and makers. Learn additive manufacturing with hands-on experience and comprehensive tutorials.",
      images: [
        {
          url: "/assets/plode/preview.png",
          width: 1200,
          height: 630,
          alt: "Plode Advanced 3D Printer Kit - Perfect for learning 3D printing and additive manufacturing",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Plode - Advanced 3D Printer Kit | Yudu Robotics",
      description:
        "High-precision 3D printer kit for educational institutions and makers. Learn additive manufacturing with hands-on experience and comprehensive tutorials.",
      images: ["/assets/plode/preview.png"],
    },
  },
  crawl_e: {
    title: "Crawl-E - All-Terrain Educational Robot | Yudu Robotics",
    description:
      "Versatile all-terrain robot kit for hands-on learning. Features advanced sensors, programmable controls, and rugged design for various environments.",
    keywords: [
      "All terrain robot",
      "Crawling robot kit",
      "Outdoor robotics",
      "Sensor-based robot",
      "Educational robot kit",
      "STEM learning robot",
      "Programming robot",
      "Rugged robot design",
      "Advanced robotics kit",
      "Environmental sensing",
      "Robot exploration kit",
      "Terrain navigation",
      "Hands-on robotics",
    ],
    openGraph: {
      title: "Crawl-E - All-Terrain Educational Robot | Yudu Robotics",
      description:
        "Versatile all-terrain robot kit for hands-on learning. Features advanced sensors, programmable controls, and rugged design for various environments.",
      images: [
        {
          url: "/assets/crawle/preview.png",
          width: 1200,
          height: 630,
          alt: "Crawl-E All-Terrain Educational Robot - Perfect for learning robotics and STEM",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Crawl-E - All-Terrain Educational Robot | Yudu Robotics",
      description:
        "Versatile all-terrain robot kit for hands-on learning. Features advanced sensors, programmable controls, and rugged design for various environments.",
      images: ["/assets/crawle/preview.png"],
    },
  },
};

export default function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { product: string };
}) {
  let currentProduct = params.product === "roboki" ? "peecee" : params.product;
  currentProduct = currentProduct === "crawl_e" ? "zing" : currentProduct;

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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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

  useEffect(() => {
    const metadata = productMetadata[currentProduct];
    if (metadata) {
      // Update page title
      document.title = metadata.title;

      // Update meta description
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute("content", metadata.description);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = metadata.description;
        document.head.appendChild(meta);
      }

      // Update meta keywords
      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta) {
        keywordsMeta.setAttribute("content", metadata.keywords.join(", "));
      } else {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        meta.content = metadata.keywords.join(", ");
        document.head.appendChild(meta);
      }

      // Update OpenGraph metadata
      const ogTags = {
        "og:title": metadata.openGraph.title,
        "og:description": metadata.openGraph.description,
        "og:type": metadata.openGraph.type,
        "og:image": metadata.openGraph.images[0].url,
        "og:image:width": metadata.openGraph.images[0].width.toString(),
        "og:image:height": metadata.openGraph.images[0].height.toString(),
        "og:image:alt": metadata.openGraph.images[0].alt,
      };

      Object.entries(ogTags).forEach(([property, content]) => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (meta) {
          meta.setAttribute("content", content);
        } else {
          meta = document.createElement("meta");
          meta.setAttribute("property", property);
          meta.setAttribute("content", content);
          document.head.appendChild(meta);
        }
      });

      // Update Twitter metadata
      const twitterTags = {
        "twitter:card": metadata.twitter.card,
        "twitter:title": metadata.twitter.title,
        "twitter:description": metadata.twitter.description,
        "twitter:image": metadata.twitter.images[0],
      };

      Object.entries(twitterTags).forEach(([name, content]) => {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (meta) {
          meta.setAttribute("content", content);
        } else {
          meta = document.createElement("meta");
          meta.setAttribute("name", name);
          meta.setAttribute("content", content);
          document.head.appendChild(meta);
        }
      });
    }
  }, [currentProduct]);

  const toggleDrawer =
    (open: boolean) => (event: React.MouseEvent | React.KeyboardEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsDrawerOpen(open);
    };
  const drawerList = () => (
    <div className="w-full pt-4 px-4 text-primary-foreground">
      <Navbar setIsDrawerOpen={setIsDrawerOpen} />
    </div>
  );
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${currentProduct === "klaw_b" ? "klaw" : currentProduct} ${
          cobaltRidge.variable
        } ${ttHovesRegular.variable} ${ttHovesMedium.variable} ${
          ttHovesDemiBold.variable
        } ${ttHovesBold.variable}`}
      >
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
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
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
              type="button"
              onClick={scrollToTop}
              className="fixed bottom-0 right-4  z-40  text-white p-3 rounded-full shadow-lg transition-all "
              title="Scroll to top"
            >
              <ArrowUp color="black" />{" "}
            </button>
          )}

          {/* Main Content */}
          {children}

          {/* Footer */}
          <div className="w-full -mb-1 mt-24 pt-24">
            {renderSvg("bottomSection")}
          </div>
          <div className="px-8 lg:px-28 py-4 bg-primary">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
