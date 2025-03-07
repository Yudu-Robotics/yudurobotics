import type { Metadata } from "next";
import ClientLayout from "../common-layout";

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
        url: "/preview.png",
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
    images: ["/preview.png"],
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

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="overflow-x-hidden">
    <ClientLayout>{children}</ClientLayout>
    // </div>
  );
}
