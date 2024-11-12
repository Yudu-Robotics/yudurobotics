import React, { useEffect, useState } from "react";
import JumpingButtons from "../common/jumping-buttons";
import renderImg from "@/imgImport";
import ContactForm from "../common/contact-us-form";
import BottomFooter from "./bottom-footer";
import renderSvg from "@/svgImport";
import { usePathname } from "next/navigation";
import { tree } from "next/dist/build/templates/app-page";
import FooterIcon from "./fotterIcon";

const Footer = () => {
  const route = [
    "home",
    "peecee",
    "roboki",
    "zing",
    "crawl_e",
    "klaw_b",
    "plode",
  ];
  const iconColor = [
    "#BBA5FE",
    "#B3A61A",
    "#B3A61A",
    "#A5E8FE",
    "#A5E8FE",
    "#1AB374",
    "#BBA5FE",
  ];

  const social_share = [
    "twitterIcon",
    "linkedInIcon",
    "fbIcon",
    "instaIcon",
    "ytIcon",
    "googleIcon",
  ];
  const pathname = usePathname();
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(`${window.location.origin}${pathname}`);
    }
  }, [pathname]);
  const lastSegment = currentUrl.split("/").pop() || "-1";

  const index =
    route.indexOf(lastSegment) !== -1 ? route.indexOf(lastSegment) : -1;

  let ishorizontal: string = "true";
  let text1: string = "I'm here to";
  let text2: string = "Join Forces";
  let bgColor: string = "#2CF7A4";
  let textColor: string = "#0A4029";

  interface Style {
    bgColor: string;
    textColor: string;
  }

  const styles: Record<number, Style> = {
    0: { bgColor: "#2CF7A4", textColor: "#0A4029" },
    1: { bgColor: "#602CF7", textColor: "#FAF9FE" },
    2: { bgColor: "#602CF7", textColor: "#FAF9FE" },
    3: { bgColor: "#F72D3E", textColor: "#FEF9F9" },
    4: { bgColor: "#F72D3E", textColor: "#FEF9F9" },
    5: { bgColor: "#F7812D", textColor: "#FEFBF9" },
    6: { bgColor: "#2CF7A4", textColor: "#0A4029" },
  };
  const contact_options = [
    {
      type: "Email",
      text: "Our friendly team is here to help.",
      contact_by: "support@yudurobotics.com",
      icon_image: <FooterIcon iconType="mail" color={iconColor[index]} />,
    },
    {
      type: "Live chat",
      text: "Our friendly team is here to help.",
      contact_by: "start new chat",
      icon_image: <FooterIcon iconType="livechat" color={iconColor[index]} />,
    },
    {
      type: "Office",
      text: "Come say hello at our office HQ.",
      contact_by:
        "No.29, Bereterna Agrahara Next to Play Factor Hosur Main Road, Electronic City Bangalore Karnataka, India",
      icon_image: <FooterIcon iconType="map" color={iconColor[index]} />,
    },
    {
      type: "Phone",
      text: "Mon-Fri from 8am to 5pm.",
      contact_by: "+91 9606755032",
      icon_image: <FooterIcon iconType="phone" color={iconColor[index]} />,
    },
  ];

  if (index in styles) {
    const { bgColor: newBgColor, textColor: newTextColor } = styles[index];
    bgColor = newBgColor;
    textColor = newTextColor;
    text1 = "I'm Ready to";
    text2 = "Join Forces";
  }

  return (
    <div className="text-primary-foreground flex flex-col justify-around">
      {/* First Section */}
      <div className="flex flex-col space-y-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-start items-center lg:items-start lg:text-start">
          <h1 className="font-piepie text-4xl lg:text-6xl">
            Ready to Innovate Together?
          </h1>
          <h1 className="font-thin py-4">
            Partner with us and drive the futre of robotics
          </h1>
        </div>
        <div className="flex">
          {index !== -1 && (
            <JumpingButtons
              ishorizontal={ishorizontal}
              text1={text1}
              text2={text2}
              bgColor={bgColor}
              textColor={textColor}
              link="/partner"
            />
          )}
        </div>
      </div>
      {/* Contact us Section */}
      <div className="py-20">
        <div className="flex flex-col  lg:items-start">
          <h1>Contact us</h1>

          <h1 className="font-piepie text-3xl lg:text-4xl tracking-wider">
            Chat to our friendly team
          </h1>
          <h1 className="font-thin py-4">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </h1>
        </div>

        <div
          id="footer-contact-form-component"
          className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 justify-between py-4 lg:py-20 "
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:w-[50%] ">
            {contact_options.map(
              (
                value:
                  | {
                      type: string;
                      text: string;
                      contact_by: string;
                      icon_image: any;
                    }
                  | {
                      type: string;
                      text: string;
                      contact_by: string;
                      icon_image: string;
                    },
                key: number
              ) => (
                <div key={key} className="flex flex-col space-y-2">
                  <div>{value.icon_image}</div>
                  <h1>{value.type}</h1>
                  <p className="font-thin">{value.text}</p>
                  <p className="w-[70%] text-xl">{value.contact_by}</p>
                </div>
              )
            )}
          </div>

          <ContactForm />
        </div>
      </div>

      {/* Footer-Bottom */}
      <div className="flex flex-col space-y-12">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-3 justify-start items-center">
              {renderSvg("logoYudoRobo")}
            </div>
            <p className="font-thin w-[70%] text-xl">
              Empowering innovation and creativity through cutting-edge
              robotics.
            </p>
          </div>

          <div className="hidden sm:flex flex-col space-y-4">
            <h1 className="text-xl">Get the Plode app</h1>
            <a
              href="https://apps.apple.com/us/app/plode/id1580203387"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={renderImg("appStore")}
                alt="Download on the App Store"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.bibox.bisoftsuite&hl=en_IN&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className=""
                src={renderImg("googlePlay")}
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>

        <BottomFooter />

        <div className="flex flex-col space-y-4 justify-between lg:flex-row lg:space-y-0 ">
          <p className="text-xs lg:text-xl font-thin">
            © 2024 Yudu Robotics. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {social_share.map((value: string, key: number) => (
              <div key={key}>{renderSvg(value)}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[40vh] w-full flex justify-center items-center">
        <img src={renderImg("madeInIndia")} />
      </div>
    </div>
  );
};

export default Footer;
