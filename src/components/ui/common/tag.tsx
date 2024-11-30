import React from "react";

const ProductTag: React.FC<{ title: string; color: string }> = ({
  title,
  color,
}) => {
  return (
    <div
      className={`rounded-2xl text-xs border font-medium border-[#ABEFC6] font-body text-[#067647] px-2 py-1 text-center bg-[#ECFDF3] ml-1`}
    >
      {title}
    </div>
  );
};

export default ProductTag;
