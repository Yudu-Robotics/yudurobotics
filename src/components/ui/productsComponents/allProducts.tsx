"use client";
import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import { products } from "@/data/mockData";
import CustomHeading from "../common/custom-heading-props";
// import Link from "next/link";
// import renderImg from "@/imgImport";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import AnimatedContent from "@/components/bits/AnimatedContent";

// interface Products {
//   name: string;
//   description: string;
//   image: string;
//   link: string;
//   type: string;
//   category: string;
//   ageGroup: string;
// }

const AllProductsComponent = () => {
  const initialFilters = [
    { name: "Hardware", active: false },
    { name: "Software", active: false },
    { name: "Curriculum", active: false },
  ];

  const initialAgeGroups = [
    { name: "Age 5-8", active: false },
    { name: "9-12", active: false },
    { name: "12+", active: false },
  ];

  useEffect(() => {
    setFilters(initialFilters);
    setAgeGroups(initialAgeGroups);
    setSearchTerm("");
    setSelectedCategory("");
  }, []);

  const [filters, setFilters] = useState(initialFilters);
  const [ageGroups, setAgeGroups] = useState(initialAgeGroups);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const router = useRouter();
  // Handle filter change
  const handleFilterChange = (index: number) => {
    const updatedFilters = filters.map((filter, i) => ({
      ...filter,
      active: i === index ? !filter.active : filter.active,
    }));
    setFilters(updatedFilters);
  };

  // Handle age group change
  const handleAgeGroupChange = (index: number) => {
    const updatedAgeGroups = ageGroups.map((age, i) => ({
      ...age,
      active: i === index ? !age.active : age.active,
    }));
    setAgeGroups(updatedAgeGroups);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Handle category change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  // Get active filter (type) and age group
  const activeFilters = filters
    .filter((filter) => filter.active)
    .map((filter) => filter.name);
  const activeAgeGroups = ageGroups
    .filter((ageGroup) => ageGroup.active)
    .map((ageGroup) => ageGroup.name);

  // Filter products based on multiple criteria
  const filteredProducts = products.filter(
    (product) =>
      (activeFilters.length === 0 || activeFilters.includes(product.type)) &&
      (activeAgeGroups.length === 0 ||
        activeAgeGroups.includes(product.ageGroup)) &&
      (!selectedCategory || product.category === selectedCategory) &&
      (!searchTerm || product.name.toLowerCase().startsWith(searchTerm))
  );

  // Separate products by type for displaying categories
  const hardwareProducts = filteredProducts.filter(
    (product) => product.type === "Hardware"
  );
  const softwareProducts = filteredProducts.filter(
    (product) => product.type === "Software"
  );
  const curriculumProducts = filteredProducts.filter(
    (product) => product.type === "Curriculum"
  );

  return (
    <div className="container mx-auto p-4">
      {/* Filters and Search */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg font-tthoves-medium">
        {/* Filters */}
        <div className="flex border border-gray-300 rounded-lg overflow-hidden w-full xl:w-[28%] bg-white h-[40px]">
          {filters.map((filter, index) => (
            <button
              type="button"
              key={filter.name}
              className={`flex-1 text-center text-sm px-4 py-2 border-r last:border-r-0 whitespace-nowrap transition-colors h-full ${
                filter.active
                  ? "font-tthoves-bold text-purple-600 bg-purple-100"
                  : "font-tthoves-medium text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleFilterChange(index)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Age Groups */}
        <div className="flex border border-gray-300 rounded-lg overflow-hidden w-full xl:w-[19%] bg-white h-[40px]">
          {ageGroups.map((ageGroup, index) => (
            <button
              type="button"
              key={ageGroup.name}
              className={`flex-1 text-center text-sm px-4 py-2 border-r last:border-r-0 whitespace-nowrap transition-colors h-full ${
                ageGroup.active
                  ? "font-tthoves-bold text-purple-600 bg-purple-100"
                  : "font-tthoves-medium text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => handleAgeGroupChange(index)}
            >
              {ageGroup.name}
            </button>
          ))}
        </div>

        {/* Product Category Dropdown */}
        <div className="relative w-full  xl:w-[23%] font-tthoves">
          <select
            className="w-full h-[40px] px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-purple-600 bg-white"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Product Category</option>
            <option value="Codable">Codable Kits</option>
            <option value="Electronics">Electronics</option>
            <option value="Animatronics">Animatronics</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Curriculum">Curriculum</option>
            <option value="Software">Software</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="relative w-full  xl:w-[23%] font-tthoves">
          <input
            type="text"
            className="w-full h-[40px] pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-purple-600 focus:outline-none bg-white"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Hardware Products */}
      <div className="mb-8">
        <CustomHeading title="Hardware" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardwareProducts.map((product, i) =>
            product.link && product.link !== "#" ? (
              <AnimatedContent
                key={product.name}
                // delay={i * 100}
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <ProductCard
                  product={product}
                  handleClick={() => router.push(product.link)}
                />
              </AnimatedContent>
            ) : (
              <div key={product.name} className="cursor-pointer">
                <AnimatedContent
                  key={product.name}
                  // delay={i * 100}
                  distance={150}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <ProductCard product={product} />
                </AnimatedContent>
              </div>
            )
          )}
        </div>
      </div>

      {/* Software Products */}
      <div className="mb-8">
        <CustomHeading title="Software" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {softwareProducts.map((product) =>
            product.link && product.link !== "#" ? (
              <AnimatedContent
                key={product.name}
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <ProductCard
                  product={product}
                  handleClick={() => router.push(product.link)}
                />
              </AnimatedContent>
            ) : (
              <div key={product.name} className="cursor-pointer">
                <AnimatedContent
                  key={product.name}
                  distance={150}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <ProductCard product={product} />
                </AnimatedContent>{" "}
              </div>
            )
          )}
        </div>
      </div>

      {/* Curriculum Products */}
      <div className="mb-8">
        <CustomHeading title="Curriculum" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {curriculumProducts.map((product) =>
            product.link && product.link !== "#" ? (
              // <Link href={product.link} key={product.name}>
              //   <ProductCard product={product} />
              // </Link>
              <AnimatedContent
                key={product.name}
                distance={150}
                direction="vertical"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <ProductCard
                  product={product}
                  handleClick={() => router.push(product.link)}
                />
              </AnimatedContent>
            ) : (
              <div key={product.name} className="cursor-pointer">
                <AnimatedContent
                  key={product.name}
                  distance={150}
                  direction="vertical"
                  reverse={false}
                  config={{ tension: 80, friction: 20 }}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <ProductCard product={product} />
                </AnimatedContent>{" "}
              </div>
            )
          )}
        </div>
      </div>

      {/* No Products Found */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500">No products found</div>
      )}
    </div>
  );
};

export default AllProductsComponent;
