interface ProductCardProps {
    product: {
        name: string
        description: string
        image: string
        link: string
    }
    isSelected?: boolean
    handleClick?: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
    product,
    isSelected = false, // Default value is false
    handleClick = () => {}, // Default is an empty function
}) => (
    <div
        onClick={handleClick}
        className={`flex flex-col space-y-2 p-4 text-black rounded-lg transition-all duration-200 hover:bg-card-foreground hover:scale-90
        ${isSelected ? 'bg-card-foreground scale-90' : ''}
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
        <h3 className="text-lg font-bold mb-2 lg:text-xl">{product.name}</h3>

        {/* Product Description */}
        <p className="text-start text-secondary-foreground text-xs tracking-wide lg:text-sm">
            {product.description}
        </p>
    </div>
)

export default ProductCard
