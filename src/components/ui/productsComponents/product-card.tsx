import Image from "next/image";
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
  <button
    type="button"
    onClick={() => {
      handleClick();
    }}
    className={`flex md:flex-col space-y-2 p-2 md:p-4 text-black rounded-lg transition-all duration-200 hover:bg-card-foreground hover:scale-90 
      ${isSelected ? "bg-card-foreground scale-90" : ""}
    `}
  >
    {/* Product Image */}
    <div className="w-1/2 h-full flex justify-center items-center md:w-full">
      <div className="w-full flex justify-center items-center">
        <Image
          width={1000}
          height={1000}
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Title */}
    </div>

    {/* Product Description */}
    <div className="w-1/2 md:w-full ml-3 md:ml-0">
      <h3 className="text-lg font-tthoves-semiBold mb-2 lg:text-xl">
        {product.name}
      </h3>
      <p className="text-start font-tthoves text-secondary-foreground text-xs tracking-wide lg:text-sm hidden md:flex">
        {product.description}
      </p>
      <p className="text-start text-secondary-foreground text-sm w-full tracking-wide lg:text-sm md:hidden font-tthoves">
        {product.description.substring(0, 50) + "..."}
      </p>

      {product.link && product.link !== "" ? (
        <Link
          href={product.link}
          className="text-[#4A1FCC] text-sm md:hidden font-tthoves-semiBold"
        >
          Learn more {"->"}
        </Link>
      ) : (
        <div className="text-sm text-[#4A1FCC] mt-2 md:hidden font-tthoves-semiBold">
          Coming Soon
        </div>
      )}
    </div>
  </button>
);

export default ProductCard;
