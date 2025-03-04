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
