import React, { useEffect, useState } from "react";
import JumpingButtons from "../common/jumping-buttons";
import renderImg from "@/imgImport";
import ContactForm from "../common/contact-us-form";
import BottomFooter from "./bottom-footer";
import renderSvg from "@/svgImport";
import { usePathname } from "next/navigation";

const Footer = () => {
  const contact_options = [
    {
      type: "Email",
      text: "Our friendly team is here to help.",
      contact_by: "support@yudurobotics.com",
      icon_image: "mailIcon",
    },
    {
      type: "Live chat",
      text: "Our friendly team is here to help.",
      contact_by: "start new chat",
      icon_image: "liveChatIcon",
    },
    {
      type: "Office",
      text: "Come say hello at our office HQ.",
      contact_by:
        "No.29, Bereterna Agrahara Next to Play Factor Hosur Main Road, Electronic City Bangalore Karnataka, India",
      icon_image: "mapIcon",
    },
    {
      type: "Phone",
      text: "Mon-Fri from 8am to 5pm.",
      contact_by: "+91 9606755032",
      icon_image: "phoneIcon",
    },
  ];

  const social_share = [
    "twitterIcon",
    "linkedInIcon",
    "fbIcon",
    "instaIcon",
    "ytIcon",
    "googleIcon",
  ];
  // const pathname = usePathname();
  // const [currentUrl, setCurrentUrl] = useState("");

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     setCurrentUrl(`${window.location.origin}${pathname}`);
  //   }
  // }, [pathname]);
  // console.log({ currentUrl });
  return (
    <div className="text-primary-foreground flex flex-col justify-around">
      {/* First Section */}
      <div className="flex flex-col space-y-16 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center items-center lg:items-start lg:text-start">
          <h1 className="font-piepie text-2xl lg:text-6xl">
            Ready to Innovate Together?
          </h1>
          <h1 className="font-thin py-4">
            Partner with us and drive the futre of robotics
          </h1>
        </div>
        <div className="flex">
          <JumpingButtons
            ishorizontal="true"
            text1="I'm here to"
            text2="Join Forces"
            bgColor="#2CF7A4"
            textColor="#0A4029"
          />
          <JumpingButtons
            ishorizontal="true"
            text1="Hmmm, I've"
            text2="Questions"
            bgColor="#ffffff"
            textColor="#12734A"
          />
        </div>
      </div>
      {/* Contact us Section */}
      <div className="py-20">
        <div className="flex flex-col text-center lg:items-start">
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
                      icon_image: string;
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
                  {renderSvg(value.icon_image)}
                  <h1>{value.type}</h1>
                  <p className="font-thin">{value.text}</p>
                  <p className="w-[70%] text-sm">{value.contact_by}</p>
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
            <p className="font-thin w-[70%] text-sm">
              Empowering innovation and creativity through cutting-edge
              robotics.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h1 className="text-sm">Get the Plode app</h1>
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
          <p className="text-xs lg:text-sm font-thin">
            © 2024 Yudu Robotics. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {social_share.map((value: string, key: number) => (
              <div key={key}>{renderSvg(value)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
