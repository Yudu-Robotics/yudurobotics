// mockData.js
type ProductData = {
  heading: string;
  wordsToHighlight: { text1: string[]; text2: string[] };
  subheading: string;
  images: string[];
  sectionHeader: string;
  ceoComment: string;
  features_data: {
    section1: {
      heading: string;
      subheading: string;
      centerImage: string;
      features: {
        icon: string;
        heading: string;
        description: string;
      }[];
    };
    section2?: {
      heading: string;
      subheading: string;
      centerImage: string;
      features: {
        icon: string;
        heading: string;
        description: string;
      }[];
    };
    section3?: {
      heading: string;
      subheading: string;
      centerImage: string;
    };
    hardware_precision?: {
      heading: string;
      subheading: string;
      centerImage: string;
      features: {
        icon: string;
        heading: string;
        description: string;
      }[];
    };
    software_experience: {
      heading: string;
      subheading: string;
      centerImage: string;
      features: {
        icon: string;
        heading: string;
        description: string;
      }[];
    };
    cirriculum: {
      heading: string;
      subheading: string;
      centerImage: string;
      features: {
        icon: string;
        heading: string;
        description: string;
      }[];
      steps?: {
        heading: string;
        subheading: string;
        step: {
          title: string;
          desc: string;
        }[];
      }[];
    };
  };
  legofun?: {
    heading: string;
    subheading: string;
    centerImage: string;
  };
  futureProff?: {
    heading: string;
    subheading: string;
    centerImage: string;
  };
  working?: {
    heading: string;
    subheading: string;
    section1: {
      image: string;
      heading: string;
      description: string;
    };
    section2: {
      image: string;
      heading: string;
      description: string;
    };
  };
  components: {
    shared: string[];
    unique: string[];
  };
};

type BlogData = {
  title: string;
  description: string;
  image: string;
  content: string;
  topic: string;
  tag: string;
  timeToRead: string;
  writter: {
    name: string;
    avatar: string;
    date: Date;
  };
}[];

export const mockData: { [key: string]: ProductData } = {
  home: {
    heading: "From Playful Robots and Drones to Precision 3D Printers",
    wordsToHighlight: {
      text1: ["Playful Robots and Drones", "3D Printers"],
      text2: ["Zing"],
    },
    subheading:
      "Unleash the power of creative robotics. Yudu makes the impossible fun, helping you build, play, and explore with groundbreaking tech.",
    images: ["assets/peecee/peecee.png", "/images/home2.jpg"],
    sectionHeader: "headerSection",
    ceoComment: "",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "PeeCee TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
        centerImage: "assets/peecee/peeceehardware1.png",
        features: [
          {
            icon: "assets/peecee/Featured icon.png",
            heading: "Power-Packed and Portable",
            description:
              "With a built-in battery, PeeCee TED is always ready to roll—no need to worry about recharging during those epic coding sessions.",
          },
          {
            icon: "assets/peecee/Featured icon (1).png",
            heading: "Brainy 3-Core Processor",
            description:
              "PeeCee TED’s got the brains to handle anything you throw at it, making your ideas come to life without a hitch.",
          },
          {
            icon: "assets/peecee/Featured icon (2).png",
            heading: "Buzz-worthy",
            description:
              "PeeCee TED’s buzzer gives you instant audio feedback, making your projects not just fun to see, but fun to hear too!",
          },
          {
            icon: "assets/peecee/Featured icon (3).png",
            heading: "Sensors Galore",
            description:
              "From color and light to touch and temperature, PeeCee TED’s built-in sensors give you the power to interact with the world around you in all kinds of cool ways.",
          },
          {
            icon: "assets/peecee/Featured icon (4).png",
            heading: "Expressive LEDs",
            description:
              "Let PeeCee TED show off with customizable LED displays—whether it’s a smiley face or a light show, the possibilities are endless.",
          },
          {
            icon: "assets/peecee/Featured icon (5).png",
            heading: "Rainbow Bright",
            description:
              "With 12 RGB LEDs, you can add a splash of color to your projects—because everything’s better in color, right?",
          },
        ],
      },
      software_experience: {
        heading: "Effortless Experience",
        subheading:
          "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
        centerImage: "assets/other/imagePlaceholder2.png",
        features: [
          {
            icon: "userFriendly",
            heading: "User-Friendly and Fun",
            description:
              "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
          },
          {
            icon: "virtual",
            heading: "Virtual Simulator",
            description:
              "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
          },

          {
            icon: "instaLink",
            heading: "InstaLink Real-Time Magic",
            description:
              "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
          },
          {
            icon: "data",
            heading: "Data Capture and Visualization Mode",
            description:
              "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
          },
        ],
      },
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "assets/other/circulamImage.png",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    components: {
      shared: ["Navbar", "Footer", "ContactForm"],
      unique: ["HomeBanner", "ProductOverview"],
    },
  },
  peecee: {
    heading: "PeeCee: Your Cute Codable Computer",
    wordsToHighlight: {
      text1: ["PeeCee"],
      text2: ["Zing"],
    },
    subheading:
      "PeeCee TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
    images: ["assets/peecee/peecee.png", "assets/peecee/peeceehardware1.png"],
    sectionHeader: "headerSection",
    ceoComment:
      "PeeCee’s innovative design and seamless LEGO integration make it a game-changer for our tech projects.",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "PeeCee TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
        centerImage: "assets/peecee/peeceehardware1.png",
        features: [
          {
            icon: "assets/peecee/Featured icon.png",
            heading: "Power-Packed and Portable",
            description:
              "With a built-in battery, PeeCee TED is always ready to roll—no need to worry about recharging during those epic coding sessions.",
          },
          {
            icon: "assets/peecee/Featured icon (1).png",
            heading: "Brainy 3-Core Processor",
            description:
              "PeeCee TED’s got the brains to handle anything you throw at it, making your ideas come to life without a hitch.",
          },
          {
            icon: "assets/peecee/Featured icon (2).png",
            heading: "Buzz-worthy",
            description:
              "PeeCee TED’s buzzer gives you instant audio feedback, making your projects not just fun to see, but fun to hear too!",
          },
          {
            icon: "assets/peecee/Featured icon (3).png",
            heading: "Sensors Galore",
            description:
              "From color and light to touch and temperature, PeeCee TED’s built-in sensors give you the power to interact with the world around you in all kinds of cool ways.",
          },
          {
            icon: "assets/peecee/Featured icon (4).png",
            heading: "Expressive LEDs",
            description:
              "Let PeeCee TED show off with customizable LED displays—whether it’s a smiley face or a light show, the possibilities are endless.",
          },
          {
            icon: "assets/peecee/Featured icon (5).png",
            heading: "Rainbow Bright",
            description:
              "With 12 RGB LEDs, you can add a splash of color to your projects—because everything’s better in color, right?",
          },
        ],
      },
      section2: {
        heading: "Effortless Connectivity",
        subheading:
          "PeeCee TED is all about making connections easy and fun, so kids can dive right into the world of coding and creativity.",
        centerImage: "assets/peecee/peeceehardware2.png",
        features: [
          {
            icon: "iot",
            heading: "IoT Magic via the Cloud",
            description:
              "Connect PeeCee TED to the cloud and unlock a world of IoT possibilities. Smart projects? Data at your fingertips? It’s all just a tap away!",
          },
          {
            icon: "plug",
            heading: "Plug and Power",
            description:
              "Need extra juice? Hook up PeeCee TED to an external power bank through USB and keep those big ideas running as long as you need.",
          },
          {
            icon: "wifi",
            heading: "Wire-Free Wonder",
            description:
              "Program PeeCee TED from anywhere—whether you’re on the cloud or on your phone. No wires, no limits—just pure creative freedom.",
          },
          {
            icon: "liveData",
            heading: "Live Data Fun",
            description:
              "Watch PeeCee TED come to life as it relays real-time sensor data, making your projects interactive and exciting.",
          },
        ],
      },
      section3: {
        heading: "Team Play!",
        subheading:
          "Got more than one PeeCee TED? Let them chat and collaborate on projects together—because teamwork makes the dream work!",
        centerImage: "assets/peecee/peeceehardware3.png",
      },
      software_experience: {
        heading: "Effortless Experience",
        subheading:
          "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
        centerImage: "assets/other/imagePlaceholder2.png",
        features: [
          {
            icon: "userFriendly",
            heading: "User-Friendly and Fun",
            description:
              "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
          },
          {
            icon: "virtual",
            heading: "Virtual Simulator",
            description:
              "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
          },

          {
            icon: "instaLink",
            heading: "InstaLink Real-Time Magic",
            description:
              "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
          },
          {
            icon: "data",
            heading: "Data Capture and Visualization Mode",
            description:
              "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
          },
        ],
      },
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "assets/other/circulamImage.png",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
        steps: [
          {
            heading: "7-Step Quest for Older Kids",
            subheading: "Projects follow a structured path",
            step: [
              {
                title: "The Challenge",
                desc: "Define the mission and set the stage for discovery.",
              },
              {
                title: "Guided Exploration",
                desc: "Follow along with a video guide to start your journey.",
              },
              {
                title: "Collaborate and Reflect",
                desc: "Share your progress and insights with others to gain feedback.",
              },
              {
                title: "Research and Innovate",
                desc: "Enhance your project with independent research and creative improvements.",
              },
              {
                title: "Gear Up",
                desc: "Gather the components you’ll need for the project.",
              },
              {
                title: "Test and Tweak",
                desc: "Experiment, adjust, and perfect your creation.",
              },
              {
                title: "Discuss and Explore",
                desc: "Dive deeper into the concepts and expand your understanding.",
              },
            ],
          },
          {
            heading: "4-Step Path for Younger Explorers",
            subheading: "Projects follow a structured path",
            step: [
              {
                title: "Guided Exploration",
                desc: "Follow along with an engaging video to kickstart the project.",
              },
              {
                title: "Adaptive LMS",
                desc: "The Adaptive LMS streamlines resource management, including videos, activity sheets, materials, and assessments. This tool helps students, teachers, and parents stay organized and track progress effectively.",
              },
              {
                title: "Gear Up",
                desc: "Collect the components needed.",
              },
              {
                title: "Test and Tweak",
                desc: "Play around, make adjustments, and see what works.",
              },
            ],
          },
        ],
      },
    },
    legofun: {
      heading: "Lego Fun",
      subheading:
        "PeeCee TED is best buddies with Lego Technic kits, so you can build, expand, and create to your heart’s content.",
      centerImage: "assets/other/lego-fun.png",
    },
    futureProff: {
      heading: "Future-Proof with Edge Connectors",
      subheading:
        "As your skills grow, so does PeeCee TED! Expand with edge connector capabilities and take on even bigger challenges.",
      centerImage: "assets/peecee/peecee-future.png",
    },
    components: {
      shared: ["Navbar", "Footer", "ProductCard"],
      unique: ["PeeCeeSpecs", "UserReviews"],
    },
  },
  roboki: {
    heading: "Roboki: The Ultimate Fun-Packed Robotics Kit",
    wordsToHighlight: {
      text1: ["Roboki"],
      text2: ["Zing"],
    },
    subheading:
      "A durable and upgradable kit packed with everything you need to build, learn, and explore robotics. Perfect for kids, hobbyists, and budding engineers alike.",
    images: ["assets/roboki/roboki.png", "assets/roboki/robokihardware1.png"],
    sectionHeader: "middleHeaderSection",
    ceoComment:
      "Roboki’s seamless integration and flexibility have made learning and creating so much more engaging for our users.",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "PeeCee TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
        centerImage: "assets/roboki/robokihardware1.png",
        features: [
          {
            icon: "assets/roboki/Featured icon (6).png",
            heading: "Powerful and Versatile",
            description:
              "Equipped with a RISC-V 32 Bit processor for fast performance, Roboki is the perfect platform to kickstart your robotics journey.",
          },
          {
            icon: "assets/roboki/Featured icon (7).png",
            heading: "Long-Lasting Fun",
            description:
              "Enjoy hours of exploration with the rechargeable 1200mAh Li-Ion battery.",
          },
          {
            icon: "assets/roboki/Featured icon (8).png",
            heading: "Playful, Upgradable Design",
            description:
              "From coding to mechanics, Roboki evolves with you. Upgrade it with additional sensors, robotic arms, or even AI cameras to push the boundaries of what's possible. Perfect for non-stop learning and action.",
          },
          {
            icon: "assets/roboki/Featured icon (9).png",
            heading: "Wireless & Easy-to-Control",
            description:
              "Connect via Bluetooth 5.0, Zigbee, or USB Type C, and control your robot effortlessly.",
          },
          {
            icon: "assets/roboki/Featured icon (10).png",
            heading: "Interactive & Fun Learning",
            description:
              "With plug-and-play sensors, big sturdy wheels, and a durable plastic chassis, Roboki is built for both creativity and hands-on fun. Its 15 starter projects will keep you busy for hours!",
          },
          {
            icon: "assets/roboki/Featured icon (11).png",
            heading: "Advanced Motor Control",
            description:
              "Roboki comes with dual motor drivers and servo motor ports, enabling smooth and precise movements for a variety of fun robotic tasks.",
          },
        ],
      },
      software_experience: {
        heading: "Effortless Experience",
        subheading:
          "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
        centerImage: "assets/other/imagePlaceholder2.png",
        features: [
          {
            icon: "userFriendly",
            heading: "User-Friendly and Fun",
            description:
              "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
          },
          {
            icon: "virtual",
            heading: "Virtual Simulator",
            description:
              "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
          },

          {
            icon: "instaLink",
            heading: "InstaLink Real-Time Magic",
            description:
              "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
          },
          {
            icon: "data",
            heading: "Data Capture and Visualization Mode",
            description:
              "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
          },
        ],
      },
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "assets/other/circulamImage.png",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    legofun: {
      heading: "Lego Fun",
      subheading:
        "PeeCee TED is best buddies with Lego Technic kits, so you can build, expand, and create to your heart’s content.",
      centerImage: "assets/other/lego-fun.png",
    },
    components: {
      shared: ["Navbar", "Footer", "ProductCard"],
      unique: ["RobokiFeatures", "PerformanceChart"],
    },
  },
  zing: {
    heading: "Meet Zing: The Fun and Lively Humanoid Robot",
    wordsToHighlight: {
      text1: ["Zing"],
      text2: ["Zing"],
    },
    subheading:
      "A 30 cm marvel with 17 degrees of freedom, crafted for endless exploration and creativity.",
    images: ["assets/zing/zing.png", "assets/zing/zinghardware1.png"],
    sectionHeader: "sideHeaderSection",
    ceoComment:
      "Zing’s lifelike movements and intuitive controls have redefined interactive robotics for our team.",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "PeeCee TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
        centerImage: "assets/zing/zinghardware1.png",
        features: [
          {
            icon: "assets/zing/Featured icon (12).png",
            heading: "Power-Packed and Portable",
            description:
              "Zing's 12V Li-Ion battery delivers up to 2 hours of action-packed fun. Lightweight and durable, it's designed for adventure and learning.",
          },
          {
            icon: "assets/zing/Featured icon (13).png",
            heading: "Smart Movements",
            description:
              "With 17 degrees of freedom, Zing can walk, squat, turn its head, and more. Explore its expressive capabilities and integrated ultrasonic sensor.",
          },
          {
            icon: "assets/zing/Featured icon (14).png",
            heading: "Interactive Fun",
            description:
              "Features a high-quality 3W speaker for audio feedback and options for plug-and-play sensors, AI cameras, and laser cannons.",
          },
          {
            icon: "assets/zing/Featured icon (15).png",
            heading: "Interactive Sensors",
            description:
              "Equipped with accelerometer, gyroscope, and ultrasonic sensors to make every interaction engaging.",
          },
          {
            icon: "assets/zing/Featured icon (16).png",
            heading: "Versatile Connectivity",
            description:
              "Enjoy WiFi, Bluetooth 5.0, and USB support. Program and control Zing using Plode for a full-featured experience.",
          },
          {
            icon: "assets/zing/Featured icon (17).png",
            heading: "DIY-Friendly Design",
            description:
              "Built to be repair-friendly with replaceable servos. A 3D simulator is coming soon to enhance your programming adventures.",
          },
        ],
      },
      software_experience: {
        heading: "Effortless Experience",
        subheading:
          "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
        centerImage: "assets/other/imagePlaceholder2.png",
        features: [
          {
            icon: "userFriendly",
            heading: "User-Friendly and Fun",
            description:
              "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
          },
          {
            icon: "virtual",
            heading: "Virtual Simulator",
            description:
              "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
          },

          {
            icon: "instaLink",
            heading: "InstaLink Real-Time Magic",
            description:
              "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
          },
          {
            icon: "data",
            heading: "Data Capture and Visualization Mode",
            description:
              "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
          },
        ],
      },
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "assets/other/circulamImage.png",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    working: {
      heading: "How It Works",
      subheading:
        "Connect Zing to the Plode app to program lifelike movements and interactive behaviors. Easily control its actions with user-friendly coding tools.",
      section1: {
        image: "assets/zing/zingwork.png",
        heading: "Explore & Create",
        description:
          "Dive into projects and experiments, expanding your robotics skills with Zing.",
      },
      section2: {
        image: "assets/zing/zing-plode.png",
        heading: "Program with Plode",
        description:
          "Easy-to-use software lets you program actions by moving motors and capturing movements.",
      },
    },
    components: {
      shared: ["Navbar", "Footer", "ContactForm"],
      unique: ["ZingSpeedChart", "DeliveryOptions"],
    },
  },
  crawl_e: {
    heading: "Meet Crawl-e: The Agile Hexapod Robot",
    wordsToHighlight: {
      text1: ["Crawl-e"],
      text2: ["Zing"],
    },
    subheading:
      "This 6-legged marvel with 18 motors brings the thrill of robotic exploration to life with nimble moves and high-tech features.",
    images: ["assets/crawle/crawle.png", "assets/crawle/crawlehard1.png"],
    sectionHeader: "middleHeaderSection",
    ceoComment:
      "Crawl-E’s versatile design and reliable performance have been key to our exploration projects.",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "PeeCee TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
        centerImage: "assets/crawle/crawlehardware1.png",
        features: [
          {
            icon: "assets/zing/Featured icon (12).png",
            heading: "Spider-Like Agility",
            description:
              "With 18 motors and 6 legs, Crawl-e moves with the precision and versatility of a spider. Perfect for intricate tasks and dynamic movements.",
          },
          {
            icon: "assets/zing/Featured icon (13).png",
            heading: "Flexible Movement",
            description:
              "From crawling to turning, Crawl-e handles a variety of actions with smooth, coordinated movements.",
          },
          {
            icon: "assets/zing/Featured icon (14).png",
            heading: "Interactive Fun",
            description:
              "Features a high-quality 3W speaker for audio feedback and options for plug-and-play sensors, AI cameras, and laser cannons.",
          },
          {
            icon: "assets/zing/Featured icon (15).png",
            heading: "Tech-Packed Sensors",
            description:
              "Includes an ultrasonic sensor for obstacle detection and a range of other sensors to enhance interaction.",
          },
          {
            icon: "assets/zing/Featured icon (16).png",
            heading: "Versatile Connectivity",
            description:
              "Supports WiFi, Bluetooth 5.0, and USB connections. Program and control Crawl-e using Plode for a comprehensive robotic experience.",
          },
          {
            icon: "assets/zing/Featured icon (17).png",
            heading: "DIY-Friendly Design",
            description:
              "Designed with replaceable parts and a 3D simulator coming soon, making it easy to customize and repair.",
          },
        ],
      },
      software_experience: {
        heading: "Effortless Experience",
        subheading:
          "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
        centerImage: "assets/other/imagePlaceholder2.png",
        features: [
          {
            icon: "userFriendly",
            heading: "User-Friendly and Fun",
            description:
              "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
          },
          {
            icon: "virtual",
            heading: "Virtual Simulator",
            description:
              "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
          },

          {
            icon: "instaLink",
            heading: "InstaLink Real-Time Magic",
            description:
              "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
          },
          {
            icon: "data",
            heading: "Data Capture and Visualization Mode",
            description:
              "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
          },
        ],
      },
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "assets/other/circulamImage.png",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    working: {
      heading: "How It Works",
      subheading:
        "Pair Crawl-e with the Plode app for seamless navigation across any terrain. Customize its movements and exploration patterns with simple coding features.",
      section1: {
        image: "assets/crawle/crawle-work.png",
        heading: "Explore & Create",
        description:
          "Dive into projects and experiments, expanding your robotics skills with Crawl-e.",
      },
      section2: {
        image: "assets/crawle/crawle-plode.png",
        heading: "Program with Plode",
        description:
          "Easy-to-use software lets you program actions by moving motors and capturing movements.",
      },
    },
    components: {
      shared: ["Navbar", "Footer", "ProductCard"],
      unique: ["CrawlENavigation", "TerrainMapping"],
    },
  },
  klaw_b: {
    heading: "Meet Klaw-b: The Dynamic 5-DOF Robotic Arm",
    wordsToHighlight: {
      text1: ["Klaw-b"],
      text2: ["Zing"],
    },
    subheading:
      "A versatile robotic arm with a built-in gripper, perfect for hands-on learning and creative projects. Control it manually or program its movements with ease.",
    images: ["assets/klawb/klawb.png", "assets/klawb/klawbhardware1.png"],
    sectionHeader: "headerSection",
    ceoComment:
      "Klaw-B’s accuracy and ease of use have made it an essential tool in our automation process.",
    features_data: {
      section1: {
        heading: "Ready to Go, Right Out of the Box",
        subheading:
          "PeeCee TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
        centerImage: "assets/klawb/klawbhardware1.png",
        features: [
          {
            icon: "assets/klawb/Featured icon (24).png",
            heading: "Advanced Connectivity",
            description:
              "Equipped with WiFi, Bluetooth 5.0, and USB for seamless integration with your devices. Supports battery operation with a DC adapter included.",
          },
          {
            icon: "assets/klawb/Featured icon (25).png",
            heading: "Versatile Connectivity",
            description:
              "Equipped with WiFi, Bluetooth 5.0, and USB for seamless integration with your devices. Supports battery operation with a DC adapter included.",
          },
          {
            icon: "assets/klawb/Featured icon (26).png",
            heading: "Degrees of Freedom",
            description:
              "5 DOF allowing for a wide range of motion and flexibility.",
          },
          {
            icon: "assets/klawb/Featured icon (27).png",
            heading: "Programmable Fun",
            description:
              "Retains all Plode functionalities, allowing you to program and control Claw-b with ease. Compatible with AI cameras and external accessories for enhanced interaction.",
          },
          {
            icon: "assets/klawb/Featured icon (28).png",
            heading: "Movement Capabilities",
            description:
              "Precise articulation for various tasks including grabbing, lifting, and rotating.",
          },
          {
            icon: "assets/klawb/Featured icon (29).png",
            heading: "Lift Capacity",
            description: "Capable of lifting up to 100 grams.",
          },
        ],
      },
      hardware_precision: {
        heading: "Precision Redefined",
        subheading:
          "With advanced mechanics and flexible reach, Klaw-B handles complex tasks effortlessly. Its robust build ensures reliable performance, while intuitive controls make integration seamless.",
        centerImage: "assets/klawb/klaw-2.png",
        features: [
          {
            icon: "strong",
            heading: "Robust Design",
            description:
              "Klaw-b features a sturdy metal body and a built-in gripper for precise handling and manipulation of objects. With a lift capacity of up to 100 grams, it’s designed to tackle a range of tasks.",
          },
          {
            icon: "dimension",
            heading: "Dimensions",
            description:
              "Compact and efficient,Klaw-b measures [insert dimensions here] and offers a range of motion that suits various applications.",
          },
          {
            icon: "flexibleControl",
            heading: "Flexible Control",
            description:
              "Switch between manual mode and programmable control to suit your project needs. Easily connect to additional accessories for expanded functionality.",
          },
          {
            icon: "tech",
            heading: "Tech-Packed Features",
            description:
              "Includes digital servos with clutch protection to prevent damage and ensure long-lasting performance.",
          },
        ],
      },
      software_experience: {
        heading: "Effortless Experience",
        subheading:
          "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
        centerImage: "assets/other/imagePlaceholder2.png",
        features: [
          {
            icon: "userFriendly",
            heading: "User-Friendly and Fun",
            description:
              "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
          },
          {
            icon: "virtual",
            heading: "Virtual Simulator",
            description:
              "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
          },

          {
            icon: "instaLink",
            heading: "InstaLink Real-Time Magic",
            description:
              "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
          },
          {
            icon: "data",
            heading: "Data Capture and Visualization Mode",
            description:
              "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
          },
        ],
      },
      cirriculum: {
        heading: "Feedback and Reflection",
        subheading: "Enhance learning with continuous feedback and reflection.",
        centerImage: "assets/other/circulamImage.png",
        features: [
          {
            icon: "checkpoint",
            heading: "Assessment Checkpoints",
            description: "Track progress and reinforce understanding.",
          },
          {
            icon: "reflective",
            heading: "Reflective Journaling",
            description:
              "Use activity and design sheets to reflect on learning and growth.",
          },
          {
            icon: "feedback",
            heading: "Collaborative Feedback",
            description: "Peer and teacher insights enrich learning.",
          },
          {
            icon: "fun",
            heading: "FUN and Purposeful Learning",
            description:
              "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
          },
        ],
      },
    },
    working: {
      heading: "How It Works",
      subheading:
        "Link Klaw-B to the Plode app for precise control over tasks and automation. Program its movements and operations effortlessly with intuitive coding.",
      section1: {
        image: "assets/klawb/klawb-work.png",
        heading: "Explore & Create",
        description:
          "Dive into projects and experiments, expanding your robotics skills with Zing.",
      },
      section2: {
        image: "assets/klawb/klawb-plode.png",
        heading: "Program with Plode",
        description:
          "Easy-to-use software lets you program actions by moving motors and capturing movements.",
      },
    },
    components: {
      shared: ["Navbar", "Footer", "ProductCard"],
      unique: ["PlodeEntertainmentFeatures", "UserFeedback"],
    },
  },
  // plode: {
  //   heading: "Klaw-B - The Heavy-Duty Worker",
  //   wordsToHighlight: {
  //     text1: ["PeeCee"],
  //     text2: ["Zing"],
  //   },
  //   subheading: "Strong, durable, and built for tough tasks",
  //   images: ["assets/klawb/klawb.png", "/images/klaw-b2.jpg"],
  //   sectionHeader: "headerSection",
  //   ceoComment:
  //     "Plode simplifies coding with its user-friendly interface, making it perfect for beginners and experienced coders alike.",
  //   features_data: {
  //     section1: {
  //       heading: "Ready to Go, Right Out of the Box",
  //       subheading:
  //         "PeeCee TED is your all-in-one buddy, packed and ready to jump into action whenever you are.",
  //       centerImage: "assets/peecee/peeceehardware1.png",
  //       features: [
  //         {
  //           icon: "assets/peecee/Featured icon.png",
  //           heading: "Power-Packed and Portable",
  //           description:
  //             "With a built-in battery, PeeCee TED is always ready to roll—no need to worry about recharging during those epic coding sessions.",
  //         },
  //         {
  //           icon: "assets/peecee/Featured icon (6).png",
  //           heading: "Brainy 3-Core Processor",
  //           description:
  //             "PeeCee TED’s got the brains to handle anything you throw at it, making your ideas come to life without a hitch.",
  //         },
  //         {
  //           icon: "assets/peecee/Featured icon (7).png",
  //           heading: "Buzz-worthy",
  //           description:
  //             "PeeCee TED’s buzzer gives you instant audio feedback, making your projects not just fun to see, but fun to hear too!",
  //         },
  //         {
  //           icon: "assets/peecee/Featured icon (8).png",
  //           heading: "Sensors Galore",
  //           description:
  //             "From color and light to touch and temperature, PeeCee TED’s built-in sensors give you the power to interact with the world around you in all kinds of cool ways.",
  //         },
  //         {
  //           icon: "assets/peecee/Featured icon (9).png",
  //           heading: "Expressive LEDs",
  //           description:
  //             "Let PeeCee TED show off with customizable LED displays—whether it’s a smiley face or a light show, the possibilities are endless.",
  //         },
  //         {
  //           icon: "assets/peecee/Featured icon (10).png",
  //           heading: "Rainbow Bright",
  //           description:
  //             "With 12 RGB LEDs, you can add a splash of color to your projects—because everything’s better in color, right?",
  //         },
  //       ],
  //     },
  //     software_experience: {
  //       heading: "Effortless Experience",
  //       subheading:
  //         "Everything about Plode is designed to make your experience smooth, simple, and super fun.",
  //       centerImage: "assets/klawb/klaw-2.png",
  //       features: [
  //         {
  //           icon: "userFriendly",
  //           heading: "User-Friendly and Fun",
  //           description:
  //             "Bright colors, playful UX/UI elements, and an interface that feels like an adventure make coding with Plode pure joy.",
  //         },
  //         {
  //           icon: "virtual",
  //           heading: "Virtual Simulator",
  //           description:
  //             "Test your projects in a virtual playground before bringing them to life, ensuring everything works just right.",
  //         },

  //         {
  //           icon: "instaLink",
  //           heading: "InstaLink Real-Time Magic",
  //           description:
  //             "Instantly see what your sensors and accessories are up to, tweaking on the fly. InstaLive even makes servo calibration a snap.",
  //         },
  //         {
  //           icon: "data",
  //           heading: "Data Capture and Visualization Mode",
  //           description:
  //             "Turn data into visuals! Plot graphs, capture live sensor data, compare, and store your findings—all in one place. Plode makes data fun and easy to understand.",
  //         },
  //       ],
  //     },
  //     cirriculum: {
  //       heading: "Feedback and Reflection",
  //       subheading: "Enhance learning with continuous feedback and reflection.",
  //       centerImage: "assets/other/circulamImage.png",
  //       features: [
  //         {
  //           icon: "checkpoint",
  //           heading: "Assessment Checkpoints",
  //           description: "Track progress and reinforce understanding.",
  //         },
  //         {
  //           icon: "reflective",
  //           heading: "Reflective Journaling",
  //           description:
  //             "Use activity and design sheets to reflect on learning and growth.",
  //         },
  //         {
  //           icon: "feedback",
  //           heading: "Collaborative Feedback",
  //           description: "Peer and teacher insights enrich learning.",
  //         },
  //         {
  //           icon: "fun",
  //           heading: "FUN and Purposeful Learning",
  //           description:
  //             "Emphasizes the 'Make and Play' approach, blending creativity with fun. The Adaptive LMS simplifies resource management and tracking, ensuring a dynamic and enjoyable experience.",
  //         },
  //       ],
  //     },
  //   },
  //   working: {
  //     heading: "How It Works",
  //     subheading: "",
  //     section1: {
  //       image: "",
  //       heading: "",
  //       description: "",
  //     },
  //     section2: {
  //       image: "",
  //       heading: "",
  //       description: "",
  //     },
  //   },
  //   components: {
  //     shared: ["Navbar", "Footer", "ContactForm"],
  //     unique: ["KlawBStrengthTest", "TaskAutomation"],
  //   },
  // },
};

export const blogData: BlogData = [
  {
    title: "UX review presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    image: "assets/blog/image1.png",
    content:
      "Artificial Intelligence (AI) has become a key player in shaping the future of technology. From self-driving cars to intelligent personal assistants, AI is pushing the boundaries of what machines can do...",
    topic: "Technology",
    tag: "Design",
    timeToRead: "5 min",
    writter: {
      name: "Jane Doe",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-09-01"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    image: "assets/blog/image2.png",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description:
      "Everything you need to know to get started with JavaScript. Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.",
    image: "assets/blog/image2.png",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-09-10"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    image: "assets/blog/image2.png",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description:
      "Everything you need to know to get started with JavaScript. Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.",
    image: "assets/blog/image2.png",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-09-10"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    image: "assets/blog/image2.png",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description:
      "Everything you need to know to get started with JavaScript. Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.",
    image: "assets/blog/image2.png",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-09-10"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    image: "assets/blog/image2.png",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description:
      "Everything you need to know to get started with JavaScript. Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.Everything you need to know to get started with JavaScript.",
    image: "assets/blog/image2.png",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-09-10"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    image: "assets/blog/image2.png",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description: "Everything you need to know to get started with JavaScript.",
    image: "assets/blog/image2.png",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-09-10"),
    },
  },
  {
    title: "Migrating to Linear 101",
    description:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    image: "assets/blog/image2.png",
    content:
      "Sustainable living is not just a trend; it's a necessity. By making small, conscious changes in our daily lives, we can significantly reduce our carbon footprint and help protect the environment...",
    topic: "Lifestyle",
    tag: "Design",
    timeToRead: "3 min",
    writter: {
      name: "John Smith",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-08-15"),
    },
  },
  {
    title: "Mastering JavaScript: A Beginner's Guide",
    description: "Everything you need to know to get started with JavaScript.",
    image: "assets/blog/image2.png",
    content:
      "JavaScript is a powerful and versatile language that every web developer should master. In this guide, we'll cover the basics of JavaScript and provide tips on how to become proficient in the language...",
    topic: "Programming",
    tag: "JavaScript",
    timeToRead: "7 min",
    writter: {
      name: "Emily Johnson",
      avatar: "assets/peecee/avatar.png",
      date: new Date("2024-09-10"),
    },
  },
];

export const positions = [
  {
    title: "Product Designer",
    department: "Design",
    departmentColor: "text-blue-600 bg-blue-100 border-blue-200",
    description:
      "We’re looking for a mid-level product designer to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Engineering Manager",
    department: "Software Development",
    departmentColor: "text-red-600 bg-red-100 border-red-200",
    description:
      "We’re looking for an experienced engineering manager to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    departmentColor: "text-blue-600 bg-blue-100 border-blue-200",
    description:
      "We’re looking for a mid-level product designer to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Engineering Manager",
    department: "Software Development",
    departmentColor: "text-red-600 bg-red-100 border-red-200",
    description:
      "We’re looking for an experienced engineering manager to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Product Designer",
    department: "Design",
    departmentColor: "text-blue-600 bg-blue-100 border-blue-200",
    description:
      "We’re looking for a mid-level product designer to join our team.",
    remote: true,
    type: "Full-time",
  },
  {
    title: "Engineering Manager",
    department: "Software Development",
    departmentColor: "text-red-600 bg-red-100 border-red-200",
    description:
      "We’re looking for an experienced engineering manager to join our team.",
    remote: true,
    type: "Full-time",
  },
];
