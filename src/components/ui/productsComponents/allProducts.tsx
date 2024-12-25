"use client";
import React, { useState } from "react";
import ProductCard from "./product-card";
import { products } from "@/data/mockData";
import CustomHeading from "../common/custom-heading-props";
import Link from "next/link";
import renderImg from "@/imgImport";

interface Products {
  name: string;
  description: string;
  image: string;
  link: string;
  type: string;
  category: string;
  ageGroup: string;
}

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

  const [filters, setFilters] = useState(initialFilters);
  const [ageGroups, setAgeGroups] = useState(initialAgeGroups);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

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
  const activeFilter = filters.find((filter) => filter.active)?.name;
  const activeAgeGroup = ageGroups.find((ageGroup) => ageGroup.active)?.name;

  // Filter products based on type, age group, category, and search term
  const filteredProducts = products.filter(
    (product) =>
      (!activeFilter || product.type === activeFilter) &&
      (!activeAgeGroup || product.ageGroup === activeAgeGroup) &&
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
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg">
        {/* Filters */}
        <div className="flex border border-gray-300 rounded-lg overflow-hidden w-full sm:w-[48%] xl:w-[28%] bg-white h-[40px]">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`flex-1 text-center text-sm px-4 py-2 border-r last:border-r-0 whitespace-nowrap transition-colors h-full ${filter.active
                  ? "font-bold text-purple-600 bg-purple-100"
                  : "font-medium text-gray-700 hover:bg-gray-100"
                }`}
              onClick={() => handleFilterChange(index)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Age Groups */}
        <div className="flex border border-gray-300 rounded-lg overflow-hidden w-full sm:w-[48%] xl:w-[19%] bg-white h-[40px]">
          {ageGroups.map((ageGroup, index) => (
            <button
              key={index}
              className={`flex-1 text-center text-sm px-4 py-2 border-r last:border-r-0 whitespace-nowrap transition-colors h-full ${ageGroup.active
                  ? "font-bold text-purple-600 bg-purple-100"
                  : "font-medium text-gray-700 hover:bg-gray-100"
                }`}
              onClick={() => handleAgeGroupChange(index)}
            >
              {ageGroup.name}
            </button>
          ))}
        </div>

        {/* Product Category Dropdown */}
        <div className="relative w-full sm:w-[48%] xl:w-[23%]">
          <select
            className="w-full h-[40px] px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-purple-600 bg-white"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Product Category</option>
            <option value="Codable Kits">Codable</option>
            <option value="Electronics">Electronics</option>
            <option value="Animatronics">Animatronics</option>
            <option value="Curriculum">Curriculum</option>
            <option value="Mechanical">Robotics</option>
          </select>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-[48%] xl:w-[23%]">
          <input
            type="text"
            className="w-full h-[40px] pl-10 pr-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:ring-2 focus:ring-purple-600 focus:outline-none bg-white"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <img src={renderImg("search")} alt="search" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Hardware Products */}
      <div className="mb-8">
        <CustomHeading title="Hardware" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardwareProducts.map((product) => (
            product.link && product.link !== "#" ? (
              <Link href={product.link} key={product.name}>
                <ProductCard product={product} />
              </Link>
            ) : (
              <div key={product.name} className="cursor-pointer">
                <ProductCard product={product} />
              </div>
            )
          ))}
        </div>
      </div>

      {/* Software Products */}
      <div className="mb-8">
        <CustomHeading title="Software" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {softwareProducts.map((product) => (
            product.link && product.link !== "#" ? (
              <Link href={product.link} key={product.name}>
                <ProductCard product={product} />
              </Link>
            ) : (
              <div key={product.name} className="cursor-pointer">
                <ProductCard product={product} />
              </div>
            )
          ))}
        </div>
      </div>

      {/* Curriculum Products */}
      <div className="mb-8">
        <CustomHeading title="Curriculum" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {curriculumProducts.map((product) => (
            product.link && product.link !== "#" ? (
              <Link href={product.link} key={product.name}>
                <ProductCard product={product} />
              </Link>
            ) : (
              <div key={product.name} className="cursor-pointer">
                <ProductCard product={product} />
              </div>
            )
          ))}
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
