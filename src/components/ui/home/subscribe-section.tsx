"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import emailjs from "@emailjs/browser";
import PrivacyContent from "../../ui/footer/PrivacyContent";
import { Squircle } from "corner-smoothing";

export default function SubscribeSection() {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageCss, setMessageCss] = useState("");
  const [cornerRadius, setCornerRadius] = useState(40);

  useEffect(() => {
    const updateCornerRadius = () => {
      setCornerRadius(window.innerWidth >= 1024 ? 80 : 40);
    };
    updateCornerRadius();
    window.addEventListener("resize", updateCornerRadius);
    return () => window.removeEventListener("resize", updateCornerRadius);
  }, []);
  const handleDialogOpen = (dialogType: string) => {
    //e.preventDefault();
    setActiveDialog(dialogType);
  };

  const handleDialogClose = () => {
    setActiveDialog(null);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    if (!email) {
      setMessageCss("mt-4 text-sm text-red-300 font-medium text-center");
      setMessage("Email address cannot be empty. Please enter your email.");
      return;
    }

    if (!isValidEmail(email)) {
      setMessageCss("mt-4 text-sm text-red-300 font-medium text-center");
      setMessage("Invalid email format. Please enter a valid email address.");
      return;
    }

    setMessageCss("mt-4 text-sm text-green-300 font-medium text-center");
    setMessage("Please wait while we add you to our subscription list.");

    try {
      const params = {
        to_email: email,
      };

      const result = await emailjs.send(
        "service_914xqcq",
        "template_99dwsab",
        params,
        { publicKey: "Kk2NEj5Tha3DvZ3HK" }
      );

      if (result.status === 200) {
        setMessageCss("mt-4 text-sm text-green-300 font-medium text-center");
        setMessage("Subscription successful! Check your inbox for updates.");
        setEmail(""); // Clear the input field
      }
    } catch (error) {
      setMessageCss("mt-4 text-sm text-red-300 font-medium text-center");
      setMessage("Failed to subscribe. Please try again later.");
      console.error("Error sending email:", error);
    }
  };

  return (
    <Squircle
      cornerRadius={cornerRadius}
      className="bg-primary rounded-[2.5rem] md:rounded-[4rem] text-primary-foreground px-5 xs:px-8 xs:py-10 py-8 md:py-16 flex flex-col items-center justify-center"
    >
      {" "}
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl mb-4 text-center font-cobaltRidge tracking-wide">
        Partner with Yudu
      </h1>
      {/* Subtitle */}
      <p className="text-base md:text-lg text-center font-tthoves md:w-[60%] opacity-65">
        Join us in revolutionizing robotics. Get exclusive updates,
        collaboration opportunities, and insights straight to your inbox.
        Let&apos;s innovate together.
      </p>
      <p className="text-base text-center py-8 font-tthoves lg:text-lg opacity-65">
        Stay connected. Stay innovative.
      </p>
      {/* Subscription Input */}
      <div className="w-full md:w-fit">
        <div className="flex flex-col md:flex-row items-start space-y-0 md:space-y-0">
          <div className="flex w-full flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-xl px-4 py-2 w-full md:w-80 text-secondary-foreground focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Privacy Policy */}
            <p className="text-sm mt-1 font-thin lg:mt-0 opacity-65 pb-4 md:pb-0">
              We care about your data in our{" "}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault(); // Prevent form submission
                  handleDialogOpen("privacy");
                }}
                className="underline"
              >
                privacy policy
              </button>
              .
            </p>
          </div>
          <button
            type="button"
            onClick={handleSubscribe}
            className="bg-[#602CF7] shadow-xl border hover:border-primary-foreground text-primary-foreground px-6 py-2 rounded-full md:ml-4 w-full md:w-auto font-tthoves-semiBold"
          >
            Subscribe
          </button>
        </div>
        {message && <p className={messageCss}>{message}</p>}
      </div>
      <Dialog open={!!activeDialog} onOpenChange={handleDialogClose}>
        <DialogContent
          className="w-[100%] h-[80vh] overflow-y-auto text-black mx-auto"
          style={{
            overflowY: "auto",
            WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // Internet Explorer/Edge
          }}
        >
          <DialogHeader>
            <DialogTitle>
              {activeDialog === "privacy"
                ? "Privacy Policy"
                : "Terms & Conditions"}
            </DialogTitle>
            <DialogDescription className="text-black">
              Last Updated: 31st October 2024
            </DialogDescription>
          </DialogHeader>

          <div className="text-black ">
            {activeDialog === "privacy" && <PrivacyContent />}
          </div>
        </DialogContent>
      </Dialog>
    </Squircle>
  );
}
