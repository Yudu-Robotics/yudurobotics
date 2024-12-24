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
    <div className="flex flex-col space-y-8">
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 mr-8 md:mr-12 lg:mr-16">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            isSelected={selectedProduct === index}
            handleClick={() => handleProductClick(index, product)}
          />
        ))}
      </div>
      <div className="sm:hidden grid grid-cols-1 gap-[var(--spacing-xl)] ml-8 md:ml-12 lg:ml-16">
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
