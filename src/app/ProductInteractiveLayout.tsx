"use client";
import { useState, useEffect } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import Navbar from "@/components/ui/common/navbar";
import FloatingWhatsApp from "@/components/ui/common/floating-whatsapp";
import renderSvg from "@/svgImport";

export default function ProductInteractiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const NavBarItems = [
    { name: "Our Products", link: "/products" },
    { name: "The Partner Program", link: "/partner" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  return (
    <div className="overflow-x-hidden">
      <div className="fixed w-full top-0 left-0 h-[75px] z-50">
        <div className="px-8 lg:px-28 py-4 bg-primary">
          <div className="flex justify-between items-center">
            <Link
              href="/home"
              className="flex space-x-3 justify-start items-center w-[50%]"
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
                <MenuIcon className="text-primary-foreground" />
              </IconButton>
            </div>

            <div className="space-x-4 hidden lg:flex lg:justify-center lg:items-center text-primary-foreground">
              {NavBarItems.map((item) => (
                <div key={item.link}>
                  <Link
                    href={item.link}
                    className="text-primary-foreground text-center text-base px-3 hover:text-destructive font-tthoves-semiBold"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <div className="w-full pt-4 px-4 text-primary-foreground">
            <Navbar setIsDrawerOpen={setIsDrawerOpen} />
          </div>
        </Drawer>
      </div>

      <FloatingWhatsApp />
      {showScrollToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-2 sm:right-4 z-40 right-2 text-white flex border-2 border-blue-950/40 justify-center items-center p-2 w-16 h-16 bg-white rounded-full shadow-lg transition-all "
          title="Scroll to top"
        >
          <ArrowUp color="black" />
        </button>
      )}

      {children}
    </div>
  );
}
