import type { Metadata } from "next";
import localFont from "next/font/local";

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

// import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yudu Robotics",
  description:
    "From Playful Robots and Drones to Precision 3D Printers Unleash the power of creative robotics. Yudu makes the impossible fun, helping you build, play, and explore with groundbreaking tech.",
  openGraph: {
    title: "Yudu Robotics",
    description:
      "From Playful Robots and Drones to Precision 3D Printers Unleash the power of creative robotics. Yudu makes the impossible fun",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Yudu Robotics - Unleashing the power of creative robotics",
        type: "image/png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yudu Robotics",
    description:
      "From Playful Robots and Drones to Precision 3D Printers Unleash the power of creative robotics. Yudu makes the impossible fun",
    images: ["/assets/logo.png"],
  },
  keywords: [
    "Yudu Robotics",
    "Robots",
    "Drones",
    "3D Printers",
    "Robotics",
    "Technology",
    "Innovation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cobaltRidge.variable} ${ttHovesRegular.variable} ${ttHovesMedium.variable} ${ttHovesDemiBold.variable} ${ttHovesBold.variable} w-screen overflow-x-hidden`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="root"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
