"use client";

import { useEffect, useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

import Footer from "@/components/ui/footer/footer";
import renderSvg from "@/svgImport";
import FloatingWhatsApp from "@/components/ui/common/floating-whatsapp";
import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import { ArrowUp } from "lucide-react";
import Navbar from "@/components/ui/common/navbar";

const cobaltRidge = localFont({
  src: "./../../fonts/CobaltRidge.otf",
  variable: "--font-cobalt",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesRegular = localFont({
  src: "./../../fonts/TT Hoves Regular.otf",
  variable: "--font-tthoves-regular",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesMedium = localFont({
  src: "./../../fonts/TT Hoves Medium.otf",
  variable: "--font-tthoves-medium",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesDemiBold = localFont({
  src: "./../../fonts/TT Hoves DemiBold.otf",
  variable: "--font-tthoves-demibold",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ttHovesBold = localFont({
  src: "./../../fonts/TT Hoves Bold.otf",
  variable: "--font-tthoves-bold",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    // Prefetch important routes
    router.prefetch("/home");
    router.prefetch("/products");
    router.prefetch("/partner");
  }, [router]);
  const NavBarItems = [
    { name: "Our Products", link: "/products", id: "products" },
    { name: "The Partner Program", link: "/partner", id: "partner" },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    if (window.location.pathname === link) {
      event.preventDefault();
      window.location.href = link;
    }
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [isSocialOpen, setIsSocialOpen] = useState(true);
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

  // const toggleDrawer = (open: boolean) => (event: any) => {
  //   setIsDrawerOpen(open);
  // };
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
    <html
      lang="en"
      className={`${cobaltRidge.variable} ${ttHovesRegular.variable} ${ttHovesMedium.variable} ${ttHovesDemiBold.variable} ${ttHovesBold.variable} w-screen overflow-x-hidden`}
    >
      <head>
        <link rel="icon" href="assets/favicon.ico" />
      </head>
      <body>
        <div className="group">
          <div className="fixed w-screen top-0 left-0 h-[75px] z-50">
            <div className="px-8 lg:px-28 py-4 bg-primary">
              <div className="flex justify-between items-center">
                <Link
                  href="/home"
                  className="flex space-x-3 items-center w-[50%] lg:w-[20%]"
                >
                  {renderSvg("logoYudoRobo")}
                </Link>
                <div className="lg:hidden">
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={() => setIsDrawerOpen(true)}
                    className="border border-transparent hover:border-hoverButton1 hover:bg-hoverButtonGradient bg-buttonGradient cursor-pointer items-center justify-center rounded-buttons transition-all ease-in-out"
                  >
                    <MenuIcon />
                  </IconButton>
                </div>
                <div className="space-x-4 hidden lg:flex lg:justify-center lg:items-center text-primary-foreground">
                  {NavBarItems.map((item) => (
                    <div
                      key={item.id}
                      className="relative group font-tthoves-semiBold hover:scale-105 transition-all ease-in-out"
                    >
                      <Link
                        href={item.link}
                        onClick={(e) => handleLinkClick(e, item.link)}
                        className="text-primary-foreground text-center text-base px-3  transition-all"
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Drawer
            anchor="top"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList()}
          </Drawer>
          <FloatingWhatsApp />
          {showScrollToTop && (
            <button
              type="button"
              onClick={scrollToTop}
              className="fixed bottom-2 sm:right-4 z-40 right-2 text-white flex border-2 border-blue-950/40 justify-center items-center p-2 w-16 h-16 bg-white rounded-full shadow-lg transition-all "
              title="Scroll to top"
            >
              {/* <div> */}
              <ArrowUp color="black" />
              {/* </div> */}
            </button>
          )}
          <main className="mb-24">{children}</main>
          {/* <div className="w-full -mb-1 mt-24 pt-24">{renderSvg("bottomSection")}</div> */}
          <div className="px-4 lg:px-28 py-4 bg-primary">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
};

export default ClientLayout;
