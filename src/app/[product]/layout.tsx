"use client";
import { useTheme } from "next-themes";
import { mockData } from "../../data/mockData"; // Adjust the path
import "../globals.css";
import Footer from "@/components/ui/footer/footer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import renderSvg from "@/svgImport";
import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import FloatingWhatsApp from "@/components/ui/common/floating-whatsapp";

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
    "Y/Our Products",
    "The Partner Program",
    "Crazies Behind",
    "Resources",
    "Blogs",
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="w-64 h-full p-4 bg-primary text-primary-foreground"
    >
      <div className="mb-12">{renderSvg("logoYudoRobo")}</div>
      <div className="flex flex-col space-y-8">
        {NavBarItems.map((item, key) => (
          <Link
            key={key}
            href={key === 0 ? "/" : "/blog"}
            className="text-base font-bold text-primary-foreground transition-colors duration-300 ease-in-out hover:text-destructive"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <html lang="en">
      <body className={currentProduct == "klaw_b" ? "klaw" : currentProduct}>
        <div className="">
          <div className="px-8 lg:px-28 py-4 bg-primary">
            {/* TopBar/NavBar */}
            <div className="flex justify-between items-center">
              <a
                href="/home"
                className="flex space-x-3 justify-start items-center w-[50%]"
              >
                {renderSvg("logoYudoRobo")}
              </a>

              {/* Hamburger Menu for Mobile */}
              <div className="lg:hidden">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                  className="border border-transparent hover:border-hoverButton1 hover:bg-hoverButtonGradient bg-buttonGradient cursor-pointer items-center justify-center rounded-buttons transition-all ease-in-out"
                >
                  <MenuIcon className="text-primary-foreground" />
                </IconButton>
              </div>

              {/* Full Navbar for Desktop */}
              <div className="space-x-4 hidden lg:flex lg:justify-center lg:items-center text-primary-foreground">
                {NavBarItems.map((item: string, key: number) => (
                  <div key={key}>
                    {
                      // key === 0 ? (
                      //   <NavigationMenu>
                      //     <NavigationMenuList>
                      //       <NavigationMenuItem>
                      //         <NavigationMenuTrigger>{item}</NavigationMenuTrigger>
                      //         <NavigationMenuContent>
                      //           {/* Add Dropdown Content Here */}
                      //         </NavigationMenuContent>
                      //       </NavigationMenuItem>
                      //     </NavigationMenuList>
                      //   </NavigationMenu>
                      // ) :

                      <Link
                        href="/blog"
                        className="text-primary-foreground text-center text-sm px-3 hover:text-destructive"
                      >
                        {item}
                      </Link>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drawer for Mobile */}
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList()}
          </Drawer>

          <FloatingWhatsApp />

          {/* Main Content */}
          {children}

          {/* Footer */}
          <div className="w-full -mb-1">{renderSvg("bottomSection")}</div>
          <div className="px-8 lg:px-28 py-4 bg-primary">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
