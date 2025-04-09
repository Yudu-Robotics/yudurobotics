type ProductMeta = {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
      type: string;
    }>;
    type: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
};
export const productMetadata: Record<string, ProductMeta> = {
  peecee: {
    title: "Peecee - Educational Robotics Kit | Yudu Robotics",
    description:
      "Advanced educational robotics kit for kids. Learn coding, robotics, and STEM with our interactive Peecee robot kit. Perfect for ages 8-15.",
    keywords: [
      "Peecee robot",
      "Educational robotics kit",
      "STEM toys for kids",
      "Coding toys for children",
      "DIY robotics kit",
      "Interactive learning robot",
      "Programming for kids",
      "Educational toys",
      "Robotics for beginners",
      "Kids coding kit",
    ],
    openGraph: {
      title: "Peecee - Educational Robotics Kit | Yudu Robotics",
      description:
        "Advanced educational robotics kit for kids. Learn coding, robotics, and STEM with our interactive Peecee robot kit. Perfect for ages 8-15.",
      images: [
        {
          url: "/assets/peecee/preview.png",
          width: 1200,
          height: 630,
          alt: "Peecee Educational Robot Kit - Perfect for learning robotics and coding",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Peecee - Educational Robotics Kit | Yudu Robotics",
      description:
        "Advanced educational robotics kit for kids. Learn coding, robotics, and STEM with our interactive Peecee robot kit.",
      images: ["/assets/peecee/preview.png"],
    },
  },
  zing: {
    title: "Zing - All-Terrain Robot Kit | Yudu Robotics",
    description:
      "Build your own all-terrain robot with Zing. Perfect for learning robotics, coding, and engineering. Suitable for schools and hobbyists.",
    keywords: [
      "All terrain robot",
      "Zing robot kit",
      "DIY robot kit",
      "STEM learning kit",
      "Robotics project kit",
      "Sensor-based robot",
      "Educational robotics",
      "Arduino compatible robot",
      "Coding robot kit",
      "Engineering toys",
    ],
    openGraph: {
      title: "Zing - All-Terrain Robot Kit | Yudu Robotics",
      description:
        "Build your own all-terrain robot with Zing. Perfect for learning robotics, coding, and engineering.",
      images: [
        {
          url: "/assets/zing/preview.png",
          width: 1200,
          height: 630,
          alt: "Zing All-Terrain Robot Kit - Advanced robotics learning platform",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Zing - All-Terrain Robot Kit | Yudu Robotics",
      description:
        "Build your own all-terrain robot with Zing. Perfect for learning robotics, coding, and engineering.",
      images: ["/assets/zing/preview.png"],
    },
  },
  klaw_b: {
    title: "Klaw-B Humanoid Robot | Yudu Robotics",
    description:
      "Advanced humanoid robot for education and events. Features AI capabilities, visual programming, and multiple functionalities.",
    keywords: [
      "Humanoid robot",
      "AI robot",
      "Educational robot",
      "Event display robot",
      "Programmable humanoid",
      "Robotic teaching aid",
      "Smart robot",
      "Interactive humanoid",
      "School robotics",
      "Advanced robotics kit",
    ],
    openGraph: {
      title: "Klaw-B Humanoid Robot | Yudu Robotics",
      description:
        "Advanced humanoid robot for education and events. Features AI capabilities and visual programming.",
      images: [
        {
          url: "/assets/klawb/preview.png",
          width: 1200,
          height: 630,
          alt: "Klaw-B Humanoid Robot - Advanced AI-powered educational robot",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Klaw-B Humanoid Robot | Yudu Robotics",
      description:
        "Advanced humanoid robot for education and events. Features AI capabilities and visual programming.",
      images: ["/assets/klawb/preview.png"],
    },
  },
  roboki: {
    title: "Roboki - Educational Robot Kit for Beginners | Yudu Robotics",
    description:
      "Start your robotics journey with Roboki. Perfect introductory robot kit for young learners, featuring easy-to-use programming interface and engaging activities.",
    keywords: [
      "Roboki robot",
      "Beginner robotics kit",
      "Kids first robot",
      "Easy programming robot",
      "Entry level robotics",
      "STEM education kit",
      "Simple coding robot",
      "Learning robotics",
      "Educational robot toy",
      "Starter robotics kit",
      "Children's coding kit",
      "Basic robotics learning",
      "Interactive robot for kids",
    ],
    openGraph: {
      title: "Roboki - Educational Robot Kit for Beginners | Yudu Robotics",
      description:
        "Start your robotics journey with Roboki. Perfect introductory robot kit for young learners, featuring easy-to-use programming interface and engaging activities.",
      images: [
        {
          url: "/assets/roboki/preview.png",
          width: 1200,
          height: 630,
          alt: "Roboki Educational Robot Kit - Perfect for learning robotics and coding",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Roboki - Educational Robot Kit for Beginners | Yudu Robotics",
      description:
        "Start your robotics journey with Roboki. Perfect introductory robot kit for young learners, featuring easy-to-use programming interface and engaging activities.",
      images: ["/assets/roboki/preview.png"],
    },
  },
  plode: {
    title: "Plode - Advanced 3D Printer Kit | Yudu Robotics",
    description:
      "High-precision 3D printer kit for educational institutions and makers. Learn additive manufacturing with hands-on experience and comprehensive tutorials.",
    keywords: [
      "3D Printer Kit",
      "Educational 3D printer",
      "DIY 3D printer",
      "STEM learning printer",
      "Maker space equipment",
      "School 3D printer",
      "Lab equipment",
      "Additive manufacturing",
      "3D printing education",
      "Precision printing",
      "Learning 3D printing",
      "Hands-on technology",
      "Manufacturing education",
    ],
    openGraph: {
      title: "Plode - Advanced 3D Printer Kit | Yudu Robotics",
      description:
        "High-precision 3D printer kit for educational institutions and makers. Learn additive manufacturing with hands-on experience and comprehensive tutorials.",
      images: [
        {
          url: "/assets/plode/preview.png",
          width: 1200,
          height: 630,
          alt: "Plode Advanced 3D Printer Kit - Perfect for learning 3D printing and additive manufacturing",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Plode - Advanced 3D Printer Kit | Yudu Robotics",
      description:
        "High-precision 3D printer kit for educational institutions and makers. Learn additive manufacturing with hands-on experience and comprehensive tutorials.",
      images: ["/assets/plode/preview.png"],
    },
  },
  crawl_e: {
    title: "Crawl-E - All-Terrain Educational Robot | Yudu Robotics",
    description:
      "Versatile all-terrain robot kit for hands-on learning. Features advanced sensors, programmable controls, and rugged design for various environments.",
    keywords: [
      "All terrain robot",
      "Crawling robot kit",
      "Outdoor robotics",
      "Sensor-based robot",
      "Educational robot kit",
      "STEM learning robot",
      "Programming robot",
      "Rugged robot design",
      "Advanced robotics kit",
      "Environmental sensing",
      "Robot exploration kit",
      "Terrain navigation",
      "Hands-on robotics",
    ],
    openGraph: {
      title: "Crawl-E - All-Terrain Educational Robot | Yudu Robotics",
      description:
        "Versatile all-terrain robot kit for hands-on learning. Features advanced sensors, programmable controls, and rugged design for various environments.",
      images: [
        {
          url: "/assets/crawle/preview.png",
          width: 1200,
          height: 630,
          alt: "Crawl-E All-Terrain Educational Robot - Perfect for learning robotics and STEM",
          type: "image/png",
        },
      ],
      type: "product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Crawl-E - All-Terrain Educational Robot | Yudu Robotics",
      description:
        "Versatile all-terrain robot kit for hands-on learning. Features advanced sensors, programmable controls, and rugged design for various environments.",
      images: ["/assets/crawle/preview.png"],
    },
  },
};
