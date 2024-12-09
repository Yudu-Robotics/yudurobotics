import Link from "next/link";

interface ProductCardProps {
  product: {
    name: string;
    description: string;
    image: string;
    link: string;
  };
  isSelected?: boolean;
  handleClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isSelected = false, // Default value is false
  handleClick = () => {}, // Default is an empty function
}) => (
  <div
    onClick={handleClick}
    className={`flex sm:flex-col space-y-2 p-2 sm:p-4 text-black rounded-lg transition-all duration-200 hover:bg-card-foreground hover:scale-90 
        ${isSelected ? "bg-card-foreground scale-90" : ""}
      `}
  >
    {/* Product Image */}
    <div className="w-1/2 h-full flex justify-center items-center sm:w-full">
      <div className="w-full flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Title */}
    </div>

    {/* Product Description */}
    <div className="w-1/2 sm:w-full ml-3 sm:ml-0">
      <h3 className="text-lg font-tthoves-semiBold mb-2 lg:text-xl">
        {product.name}
      </h3>
      <p className="text-start font-tthoves text-secondary-foreground text-xs tracking-wide lg:text-sm hidden sm:flex ">
        {product.description}
      </p>
      <p className="text-start text-secondary-foreground text-sm w-full tracking-wide lg:text-sm  sm:hidden font-tthoves">
        {product.description.substring(0, 50) + "..."}
      </p>

      <Link href={product.link} className="text-blue-700 text-sm sm:hidden font-tthoves-semiBold">
        Learn more {"->"}
      </Link>
    </div>
  </div>
);

export default ProductCard;
