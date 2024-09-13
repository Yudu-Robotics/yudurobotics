export default function ProductGrid() {
  const products = [
    {
      name: "Play Trons",
      description:
        "Simple plug-and-play electronics for instant fun, learning, and creativity.",
      image: "/assets/zing/ProductImage1.png",
    },
    {
      name: "Zing",
      description:
        "Advanced humanoid robot designed for interactive learning, companionship, and play.",
      image: "/assets/zing/ProductImage2.png",
    },
    {
      name: "Firepen 3D",
      description:
        "High-precision 3D printer for creative, customizable, and rapid prototyping solutions.",
      image: "/assets/zing/ProductImage3.png",
    },
    {
      name: "Play Dynamex",
      description:
        "Colorful LEGO blocks inspiring creativity, imagination, and hands-on building fun.",
      image: "/assets/zing/ProductImage4.png",
    },
  ];

  return (
    <div className="container w-[100%] lg:ml-10 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col space-y-2 p-4 hover:bg-card-foreground rounded-lg hover:scale-90">
            {/* Product Image */}
            <div className="w-full">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full"
              />
            </div>
            {/* Product Title */}
            <h3 className="text-lg font-light mb-2 lg:text-xl">{product.name}</h3>
            {/* Product Description */}
            <p className="text-start text-gray-600 text-xs tracking-wide lg:text-sm">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
    
  );
}
