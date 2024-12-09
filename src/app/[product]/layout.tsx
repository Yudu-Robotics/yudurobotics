"use client";
import "../globals.css";
import Footer from "@/components/ui/footer/footer";
import renderSvg from "@/svgImport";
import { useState } from "react";
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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: any) => {
    // if (
    //   event.type === "keydown" &&
    //   (event.key === "Tab" || event.key === "Shift")
    // ) {
    //   return;
    // }
    // setIsDrawerOpen(open);
  };
  const [isOurProductOpen, setIsOurProductOpen] = useState(false);
  const [openSubOption, setOpenSubOption] = useState<string | null>(null);
  const drawerList = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="w-full h-full p-4  text-primary-foreground"
    >
      <div className="mb-12 flex justify-between">
        <img src={renderImg("logoblack")} alt="logo" />
        <div
          className="text-black text-3xl font-tthoves-semiBold"
          onClick={() => setIsDrawerOpen(false)}
        >
          X
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        {NavBarItems.map((item, key) => (
          <div key={key} className="">
            {item.name === "Our Products" ? (
              <>
                {/* Main "Our Products" Link */}
                <div
                  onClick={() => setIsOurProductOpen(!isOurProductOpen)}
                  className="text-base font-tthoves-semiBold text-black transition-colors duration-300 ease-in-out hover:text-destructive"
                >
                  {item.name}
                  {isOurProductOpen ? (
                    <ExpandLessIcon className="ml-2" />
                  ) : (
                    <ExpandMoreIcon className="ml-2" />
                  )}
                </div>

                {isOurProductOpen && (
                  <div className=" flex flex-col items-start mt-2 ml-2">
                    <button
                      onClick={() =>
                        setOpenSubOption(
                          openSubOption === "Animatronics"
                            ? null
                            : "Animatronics"
                        )
                      }
                      className="text-base font-tthoves-semiBold text-gray-700 transition-colors duration-300 ease-in-out hover:text-destructive"
                    >
                      Animatronics
                      {openSubOption === "Animatronics" ? (
                        <ExpandLessIcon className="ml-2" />
                      ) : (
                        <ExpandMoreIcon className="ml-2" />
                      )}
                    </button>
                    {openSubOption === "Animatronics" && (
                      <div className=" flex flex-col space-y-2 ml-2">
                        <Link href="/zing" className="text-gray-600">
                          Zing
                        </Link>
                        <Link href="/crawl_e" className="text-gray-600">
                          Crawl-E
                        </Link>
                        <Link href="/klaw_b" className="text-gray-600">
                          Klaw-B
                        </Link>
                      </div>
                    )}

                    <button
                      onClick={() =>
                        setOpenSubOption(
                          openSubOption === "Micro-controllers"
                            ? null
                            : "Micro-controllers"
                        )
                      }
                      className="text-base font-tthoves-semiBold text-gray-700 transition-colors duration-300 ease-in-out hover:text-destructive"
                    >
                      Micro-controllers
                      {openSubOption === "Micro-controllers" ? (
                        <ExpandLessIcon className="ml-2" />
                      ) : (
                        <ExpandMoreIcon className="ml-2" />
                      )}
                    </button>
                    {openSubOption === "Micro-controllers" && (
                      <div className="flex flex-col space-y-2 ml-2">
                        <Link href="/roboki" className="text-gray-600">
                          Roboki
                        </Link>
                        <Link href="/peecee" className="text-gray-600">
                          TED
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.link}
                className="text-base font-tthoves-semiBold text-black transition-colors duration-300 ease-in-out hover:text-destructive"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <html lang="en">
      <body className={currentProduct == "klaw_b" ? "klaw" : currentProduct}>
        <div className="overflow-x-hidden ">
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
                        className="text-primary-foreground text-center text-md px-3 hover:text-destructive font-tthoves-semiBold"
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

          <FloatingWhatsApp />

          {/* Main Content */}
          {children}

          {/* Footer */}
          <div className="w-full -mb-1 mt-24">{renderSvg("bottomSection")}</div>
          <div className="px-8 lg:px-28 py-4 bg-primary">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
