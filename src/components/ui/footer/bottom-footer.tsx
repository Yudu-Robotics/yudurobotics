// components/Footer.js
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PrivacyContent from "./PrivacyContent";
import TermsContent from "./TermsContent";
const footerData = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Features", href: "#" },
      { name: "Solutions", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Releases", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms", href: "#", dialog: "terms" },
      { name: "Privacy", href: "#", dialog: "privacy" },
      { name: "Cookies", href: "#" },
      { name: "Licenses", href: "#" },
      { name: "Settings", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", href: "#" },
      { name: "Careers", href: "#" },
      // { name: "Press", href: "#" },
      // { name: "News", href: "#" },
      // { name: "Media kit", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  // {
  //   title: "Resources",
  //   links: [
  //     { name: "Blog", href: "#" },
  //     { name: "Newsletter", href: "#" },
  //     { name: "Events", href: "#" },
  //     { name: "Help centre", href: "#" },
  //     { name: "Tutorials", href: "#" },
  //     { name: "Support", href: "#" },
  //   ],
  // },
  // {
  //   title: "Use cases",
  //   links: [
  //     { name: "Startups", href: "#" },
  //     { name: "Enterprise", href: "#" },
  //     { name: "Government", href: "#" },
  //     { name: "SaaS centre", href: "#" },
  //     { name: "Marketplaces", href: "#" },
  //     { name: "Ecommerce", href: "#" },
  //   ],
  // },
  {
    title: "Social",
    links: [
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Facebook", href: "#" },
      // { name: "GitHub", href: "#" },
      // { name: "AngelList", href: "#" },
      // { name: "Dribbble", href: "#" },
    ],
  },
];

export default function BottomFooter() {
  const [activeDialog, setActiveDialog] = useState(null);

  // Function to handle opening of the dialog content
  const handleDialogOpen = (dialogType: any) => {
    setActiveDialog(dialogType);
  };

  const handleDialogClose = () => {
    setActiveDialog(null);
  };
  return (
    <footer className="py-6">
      <div className="">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {footerData.map((section, index) => (
            <div key={index}>
              <h4 className="font-thin mb-4 text-xs">{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.dialog ? (
                      <button
                        onClick={() => handleDialogOpen(link.dialog)}
                        className="text-primary-foreground transition-colors duration-200 text-sm font-semibold"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-primary-foreground transition-colors duration-200 text-sm font-semibold"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Dialog open={!!activeDialog} onOpenChange={handleDialogClose}>
        <DialogContent className="w-[100%] h-[80vh] overflow-y-auto text-black mx-auto">
          <DialogHeader>
            <DialogTitle>
              {activeDialog === "privacy"
                ? "Privacy Policy"
                : "Terms of Service"}
            </DialogTitle>
            <DialogDescription className="text-black">
              {activeDialog === "privacy"
                ? "Read our Privacy Policy below:"
                : "Read our Terms of Service below:"}
            </DialogDescription>
          </DialogHeader>

          <div className="text-black">
            {activeDialog === "privacy" && <PrivacyContent />}
            {activeDialog === "terms" && <TermsContent />}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
