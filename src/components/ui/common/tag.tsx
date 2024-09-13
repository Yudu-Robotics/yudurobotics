import React from "react";

const ProductTag: React.FC<{ title: string; color: string }> = ({
  title,
  color,
}) => {
  return (
    <div
      className={`rounded-2xl text-xs border font-medium border-${color} font-body text-${color} px-2 py-1 text-center`}
    >
      {title}
    </div>
  );
};

export default ProductTag;
