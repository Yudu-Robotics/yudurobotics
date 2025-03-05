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
import Head from "next/head";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yudo Robotics",
  description: "LMS",
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
      <Head>
        <title>Yudu Robotics</title>
        <meta
          name="description"
          content="From Playful Robots and Drones to Precision 3D Printers Unleash the power of creative robotics. Yudu makes the impossible fun, helping you build, play, and explore with groundbreaking tech."
          key="desc"
        />
        <meta property="og:title" content="Yudu Robotics" />
        <meta
          property="og:description"
          content="From Playful Robots and Drones to Precision 3D Printers Unleash the power of creative robotics. Yudu makes the impossible fun, "
        />
        <meta property="og:image" content="/assets/favicon.ico" />
      </Head>
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
