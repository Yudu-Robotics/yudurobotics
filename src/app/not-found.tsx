// pages/404.tsx
"use client";
import Link from "next/link";
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

import React from "react";
import renderImg from "@/imgImport";
import Footer from "@/components/ui/footer/footer";
import renderSvg from "@/svgImport";
import { WrongPageComponent } from "@/components/ui/not-found-component";

const NotFoundPage = () => {
  const NavBarItems = [
    "Y/Our Products",
    "The Partner Program",
    // "Crazies Behind",
    // "Resources",
    // "Blogs",
  ];
  return (
    <div className="">
      <div className="px-8 lg:px-28 py-4 bg-primary ">
        {/* TopBar/NavBar */}
        <div className="flex justify-between ">
          <a
            href="/home"
            className="flex space-x-3 justify-start items-center w-[50%]"
          >
            {/* <img className="" src={renderImg("favicon")} />
            <img className="" src={renderImg("logo")} /> */}
            {renderSvg("logoYudoRobo")}
          </a>
          <div className="space-x-4 hidden lg:flex lg:justify-center lg:items-center text-primary-foreground">
            {NavBarItems.map((item: string, key: number) => (
              <div key={key}>
                {key == 0 ? (
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>{item}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {/* <NavigationMenuLink>Link</NavigationMenuLink> */}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                ) : (
                  <a
                    href="/blog"
                    className="text-primary-foreground text-center text-sm px-3 hover:text-destructive bg-primary"
                  >
                    {item}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <WrongPageComponent />
      <div className="w-full -mb-1">
        {renderSvg("bottomSectionForNotFound")}
      </div>

      <div className="px-8 lg:px-28 py-4 bg-primary">
        <Footer />
      </div>
    </div>
  );
};

export default NotFoundPage;
