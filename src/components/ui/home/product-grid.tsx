import { useState } from "react";
import Link from "next/link";

interface Products {
  name: string;
  description: string;
  image: string;
  link: string;
}

const ProductGrid: React.FC<{
  products: Products[];
  handleProductClick: (proDetail: any) => void;
}> = ({ products, handleProductClick }) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleClick = (product: Products) => {
    setSelectedProduct(product.name); // Store the selected product name
    handleProductClick(product);
  };

  return (
    <div className="container w-[100%] lg:ml-10 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div
            onClick={() => handleClick(product)}
            key={index}
            className={`flex flex-col space-y-2 p-4 rounded-lg transition-all duration-200 hover:bg-card-foreground hover:scale-90
              ${
                selectedProduct === product.name
                  ? "bg-card-foreground scale-90"
                  : ""
              }
            `}
          >
            {/* Product Image */}
            <div className="w-full">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full"
              />
            </div>
            {/* Product Title */}
            <h3 className="text-lg font-light mb-2 lg:text-xl">
              {product.name}
            </h3>
            {/* Product Description */}
            <p className="text-start text-secondary-foreground text-xs tracking-wide lg:text-sm">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
