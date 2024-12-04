import React from "react";

export const NewFeaturesCard = () => {
  return (
    <div className="flex text-primary text-xs font-tthover-medium mb-5">
      <div className="flex bg-primary-foreground rounded-3xl py-1 px-1 sm:px-3 space-x-2 items-center">
        <button className="rounded-full border border-primary px-1 text-nowrap text-xs sm:text-sm">
          New Product
        </button>
        <div className="flex items-center text-nowrap text-xs sm:text-sm">
          <p>We’ve just released a new feature</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
