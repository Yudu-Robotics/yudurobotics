"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import emailjs from "@emailjs/browser";
import PrivacyContent from "../../ui/footer/PrivacyContent";

export default function SubscribeSection() {
  const [activeDialog, setActiveDialog] = useState(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageCss, setMessageCss] = useState("");

  const handleDialogOpen = (dialogType: any) => {
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
    } else if (!isValidEmail(email)) {
      setMessageCss("mt-4 text-sm text-red-300 font-medium text-center");
      setMessage("Invalid email format. Please enter a valid email address.");
      return;
    } else {
      setMessageCss("mt-4 text-sm text-green-300 font-medium text-center");
      setMessage("Please wait while we add you to our subscription list.");
    }

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
    <div className="bg-primary rounded-xxl text-primary-foreground px-5 sm:px-8 py-8 sm:py-16 flex flex-col items-center justify-center">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl mb-4 text-center font-piepie tracking-wide">
        Partner with Yudu
      </h1>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-center font-tthoves sm:w-[60%] opacity-65">
        Join us in revolutionizing robotics. Get exclusive updates,
        collaboration opportunities, and insights straight to your inbox. Let’s
        innovate together.
      </p>

      <p className="text-base text-center py-8 font-tthoves lg:text-lg opacity-65">
        Stay connected. Stay innovative.
      </p>

      {/* Subscription Input */}
      <div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-2xl px-4 py-2 w-full md:w-80 text-secondary-foreground focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className="bg-[#602CF7] shadow-xl border hover:border-primary-foreground text-primary-foreground px-6 py-2 rounded-full md:ml-4 w-full md:w-auto font-tthoves-semiBold"
          >
            Subscribe
          </button>
        </div>
        {message && <p className={messageCss}>{message}</p>}

        {/* Privacy Policy */}
        <p className="text-sm py-2 mt-4 lg:mt-0 opacity-65 pb-4 sm:pb-0">
          We care about your data in our{" "}
          <button
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
      <Dialog open={!!activeDialog} onOpenChange={handleDialogClose}>
        <DialogContent
          className="w-[100%] h-[80vh] overflow-y-auto  text-black mx-auto"
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
    </div>
  );
}
