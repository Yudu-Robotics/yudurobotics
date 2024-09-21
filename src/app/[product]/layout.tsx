"use client"
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

  return (
    <html lang="en">
      <body className={currentProduct == "klaw_b" ? 'klaw' : currentProduct}> <div className="">
      <div className=" px-8 lg:px-28 py-4 bg-primary">
        {/* TopBar/NavBar */}
        <div className="flex justify-between">
          <div className="flex space-x-3 justify-start items-center w-[50%]">
            {/* <img className="" src={renderImg("favicon")} />
            <img className="" src={renderImg("logo")} /> */}
            {renderSvg("logoYudoRobo")}
          </div>
          <div className="space-x-4 hidden lg:flex text-primary-foreground">
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
      <div className="w-full -mb-1">{renderSvg("bottomSection")}</div>
      <div className="px-8 lg:px-28 py-4 bg-primary">
        <Footer />
      </div>
    </div></body>
    </html>
  );
}
