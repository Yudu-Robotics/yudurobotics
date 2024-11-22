"use client";
import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Chevron Down
import ExpandLessIcon from "@mui/icons-material/ExpandLess"; // Chevron Up
import Link from "next/link";
import renderImg from "@/imgImport";
import Footer from "@/components/ui/footer/footer";
import renderSvg from "@/svgImport";
import FloatingWhatsApp from "@/components/ui/common/floating-whatsapp";
import { products } from "@/data/mockData";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const NavBarItems = [
    { name: "Our Products", link: "/products" },
    { name: "The Partner Program", link: "/partner" },
    // { name: "Blog", link: "/blog" },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMenuView, setIsMenuView] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const toggleDrawer = (open: boolean) => (event: any) => {
    //setIsDrawerOpen(open);
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
          className="text-black text-3xl font-bold"
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
                  className="text-base font-bold text-black transition-colors duration-300 ease-in-out hover:text-destructive"
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
                      className="text-base font-bold text-gray-700 transition-colors duration-300 ease-in-out hover:text-destructive"
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
                      className="text-base font-bold text-gray-700 transition-colors duration-300 ease-in-out hover:text-destructive"
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
                        <Link href="/Roboki" className="text-gray-600">
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
                className="text-base font-bold text-black transition-colors duration-300 ease-in-out hover:text-destructive"
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
  const [selectedProduct, setSelectedProduct] = useState(0);
  const drawerListView = () => (
    <div className="px-28">
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        className=" h-auto  text-primary-foreground flex  justify-between"
      >
        <div className="w-full flex justify-between pt-4">
          <div className="mb-12">
            <img src={renderImg("logoblack")} alt="logo" />
          </div>
          <div className=" ">
            {NavBarItems.map((item, key) => (
              <Link
                key={key}
                href={item.link}
                className="text-base font-bold text-black transition-colors duration-300 ease-in-out hover:text-destructive p-3"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex space-y-2 p-2 sm:p-4 text-black rounded-lg transition-all duration-200  overflow-x-hidden">
        <div className="w-2/3 grid grid-cols-3 gap-3">
          {products.map((product, index) => (
            <div key={index} className="flex flex-wrap p-2">
              {/* Product Image */}
              <div className="w-1/2 flex justify-center items-center ">
                <div className=" flex justify-center items-center ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-24"
                  />
                </div>
              </div>
              <div className="w-1/2  ml-2 sm:ml-0">
                <h3 className="text-lg font-bold mb-2 lg:text-xl">
                  {product.name}
                </h3>

                <p className="text-start text-secondary-foreground text-xs w-full tracking-wide lg:text-sm s">
                  {product.description.substring(0, 50) + "..."}
                </p>

                <Link
                  href={product.link}
                  className="text-blue-700 text-sm sm:hidden"
                >
                  Learn more {"->"}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="p-5">
          <div className="p-5 bg-[#F4F1FE] rounded-3xl">
            <div className="p-5 ">
              <img
                src={products[selectedProduct].image}
                className="w-full h-full"
              />
            </div>
            <div className="ml-5">
              <div className="font-semibold text-lg">
                {products[selectedProduct].name}
              </div>
              <div>{products[selectedProduct].description}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <Link href="/products" className="p-2 text-primary font-semibold">
          View all products {"->"}
        </Link>
      </div>
    </div>
  );
  // useEffect(() => {
  //   if (hoveredItem === "Our Products") {
  //     setIsMenuView(true);
  //   }
  // }, [hoveredItem]);

  return (
    <div className=" group">
      <div className="px-8 lg:px-28 py-4 bg-primary ">
        {/* TopBar/NavBar */}
        <div className="flex justify-between items-center ">
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
              onClick={() => setIsDrawerOpen(true)}
              className="border border-transparent hover:border-hoverButton1 hover:bg-hoverButtonGradient bg-buttonGradient cursor-pointer items-center justify-center rounded-buttons transition-all ease-in-out"
            >
              <MenuIcon />
            </IconButton>
          </div>

          {/* Full Navbar for Desktop */}
          <div className="space-x-4 hidden lg:flex lg:justify-center lg:items-center text-primary-foreground">
            {NavBarItems.map((item, key) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={() => {
                  setHoveredItem(item.name);
                }}
              >
                <Link
                  href={item.link}
                  className="text-primary-foreground text-center text-sm px-3 hover:text-destructive"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Drawer for Mobile */}
      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {drawerList()}
      </Drawer>
      <Drawer anchor="top" open={isMenuView} onClose={toggleDrawer(false)}>
        {drawerListView()}
      </Drawer>

      <FloatingWhatsApp />

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <div className="w-full -mb-1">{renderSvg("bottomSection")}</div>
      <div className="px-8 lg:px-28 py-4 bg-primary ">
        <Footer />
      </div>
    </div>
  );
};

export default ClientLayout;
