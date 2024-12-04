import React from "react";

interface CustomHeadingProps {
  title: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="border-b border-gray-300 flex-grow"></div>
      <h2 className="px-4 font-tthover-medium text-gray-600">{title}</h2>
      <div className="border-b border-gray-300 flex-grow"></div>
    </div>
  );
};

export default CustomHeading;
