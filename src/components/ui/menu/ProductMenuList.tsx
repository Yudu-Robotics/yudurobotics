import Link from "next/link";
import React from "react";
interface ProductMenuListProps {
  setHoveredItem: (item: string | null) => void; // Type for the setHoveredItem function
}

const ProductMenuList: React.FC<ProductMenuListProps> = ({
  setHoveredItem,
}) => {
  return (
    <>
      <div className="z-50 p-4 w-[100vw] h-[50vh] absolute  space-y-2 bg-white text-black border rounded-md shadow-md group-hover:block ">
        <div className="font-tthover-medium">Animatronics</div>
        <Link href="/some-link" className="block px-4 py-2 hover:bg-gray-200">
          Zing
        </Link>
        <Link
          href="/another-link"
          className="block px-4 py-2 hover:bg-gray-200"
        >
          Crawl-e
        </Link>
        <Link
          href="/another-link"
          className="block px-4 py-2 hover:bg-gray-200"
        >
          Klaw-b
        </Link>
        <div className="text-nowrap font-tthover-medium">Micro-controller</div>
        <Link href="/some-link" className="block px-4 py-2 hover:bg-gray-200">
          Roboki
        </Link>
        <Link
          href="/another-link"
          className="block px-4 py-2 hover:bg-gray-200"
        >
          TED
        </Link>
      </div>
    </>
  );
};
export default ProductMenuList;
