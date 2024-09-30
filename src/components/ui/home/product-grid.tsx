import Link from "next/link";

interface Products {
  name: string;
  description: string;
  image: string;
};

const ProductGrid: React.FC<{ products: Products[]}> = ({
  products,
}) =>  {
 
  return (
    <div className="container lg:ml-10 lg:w-[80%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <Link
            href="/zing"
            key={index}
            className="flex flex-col space-y-2 p-4 hover:bg-card-foreground rounded-lg hover:scale-90"
          >
            {/* Product Image */}
            <div className="max-w-[80%] lg:max-w-full">
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
