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

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const NavBarItems = [
    "Y/Our Products",
    "The Partner Program",
    "Crazier Behind",
    "Resources",
    "Blogs",
  ];
  return (
    <div className="">
      <div className="px-12 lg:px-28 py-4 bg-primary">
        {/* TopBar/NavBar */}
        <div className="flex justify-between">
          <div className="flex space-x-3 justify-start items-center w-[50%]">
            <img className="" src={renderImg("favicon")} />
            <img className="" src={renderImg("logo")} />
          </div>
          <div className="space-x-4 hidden lg:flex">
            {NavBarItems.map((item: string, key: number) => (
              <div key={key}>
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
              </div>
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}


