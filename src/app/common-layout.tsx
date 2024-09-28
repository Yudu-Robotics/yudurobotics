"use client"; // Ensure this is a client component

import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import renderImg from "@/imgImport";
import Footer from "@/components/ui/footer/footer";
import renderSvg from "@/svgImport";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import FloatingWhatsApp from "@/components/ui/common/floating-whatsapp";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const NavBarItems = ["Y(Our) Products", "The Partner Program"];

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
      <div className="mb-12">
        <img src={renderImg("logo")} alt="logo" />
      </div>
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
    <div className="">
      <div className="px-8 lg:px-28 py-4 bg-primary ">
        {/* TopBar/NavBar */}
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link
            href="/home"
            className="flex space-x-3 items-center w-[50%] lg:w-[20%]"
          >
            {renderSvg("logoYudoRobo")}
          </Link>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="border border-transparent hover:border-hoverButton1 hover:bg-hoverButtonGradient bg-buttonGradient cursor-pointer items-center justify-center rounded-buttons transition-all ease-in-out"
            >
              <MenuIcon />
            </IconButton>
          </div>

          {/* Full Navbar for Desktop */}
          <div className="space-x-4 hidden lg:flex lg:justify-center lg:items-center text-primary-foreground">
            {NavBarItems.map((item, key) => (
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
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>

      <FloatingWhatsApp />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <div className="w-full -mb-1 ">{renderSvg("bottomSection")}</div>
      <div className="px-8 lg:px-28 py-4 bg-primary ">
        <Footer />
      </div>
    </div>
  );
};

export default ClientLayout;
