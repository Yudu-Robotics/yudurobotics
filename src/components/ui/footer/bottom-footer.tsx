// components/Footer.js
import React from "react";

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
    title: "Company",
    links: [
      { name: "About us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "News", href: "#" },
      { name: "Media kit", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "#" },
      { name: "Newsletter", href: "#" },
      { name: "Events", href: "#" },
      { name: "Help centre", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Support", href: "#" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { name: "Startups", href: "#" },
      { name: "Enterprise", href: "#" },
      { name: "Government", href: "#" },
      { name: "SaaS centre", href: "#" },
      { name: "Marketplaces", href: "#" },
      { name: "Ecommerce", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "GitHub", href: "#" },
      { name: "AngelList", href: "#" },
      { name: "Dribbble", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Terms", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Licenses", href: "#" },
      { name: "Settings", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
];

export default function BottomFooter() {
  return (
    <footer className="py-6">
      <div className="">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {footerData.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-thin mb-4 text-xs">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="">
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-semibold"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
