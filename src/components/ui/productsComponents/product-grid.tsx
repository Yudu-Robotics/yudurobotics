import { useState } from "react";
import ProductCard from "./product-card";
import Link from "next/link";

interface Products {
  name: string;
  description: string;
  image: string;
  category: string;
  type: string;
  ageGroup: string;
  link: string;
}

const ProductGrid: React.FC<{
  products: Products[];
  handleProductClick: (index: number, product: Products) => void;
  selectedProduct: number;
}> = ({ products, handleProductClick, selectedProduct }) => {
  return (
    <div className="container w-[100%] lg:ml-10 lg:px-24">
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            isSelected={selectedProduct === index}
            handleClick={() => handleProductClick(index, product)}
          />
        ))}
      </div>
      <div className="sm:hidden grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            isSelected={selectedProduct === index}
            handleClick={() => handleProductClick(index, product)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
