"use client";
import React, { useState } from "react";
import ProductCard from "./product-card";
import { products } from "@/data/mockData";
import CustomHeading from "../common/custom-heading-props";
import Link from "next/link";

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

  const productCategories = ["Product Category", "Micro-controller", "Animatronics", "Toys"];

  const [filters, setFilters] = useState(initialFilters);
  const [ageGroups, setAgeGroups] = useState(initialAgeGroups);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Product Category");

  // Handle filter change
  const handleFilterChange = (index: number) => {
    const updatedFilters = filters.map((filter, i) => ({
      ...filter,
      active: i === index ? !filter.active : false,
    }));
    setFilters(updatedFilters);
  };

  // Handle age group change
  const handleAgeGroupChange = (index: number) => {
    const updatedAgeGroups = ageGroups.map((age, i) => ({
      ...age,
      active: i === index ? !age.active : false,
    }));
    setAgeGroups(updatedAgeGroups);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Handle category selection
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  // Get the active filter (type)
  const activeFilter = filters.find((filter) => filter.active)?.name;

  // Get the active age group
  const activeAgeGroup = ageGroups.find((ageGroup) => ageGroup.active)?.name;

  // Filter products based on the selected type, age group, and search term
  const filteredProducts = products.filter(
    (product) =>
      (!activeFilter || product.type === activeFilter) &&
      (!activeAgeGroup || product.ageGroup === activeAgeGroup) &&
      (!searchTerm || product.name.toLowerCase().includes(searchTerm)) &&
      (selectedCategory === "Product Category" || product.category === selectedCategory)
  );

  return (
    <div className="container mx-auto p-4">
      {/* Search and Filter Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-8 border-b pb-4">
        {/* Filters Grouped Inside Oval */}
        <div className="flex items-center px-2 py-1 rounded-full border border-gray-300 gap-1">
          {initialFilters.map((filter, index) => (
            <React.Fragment key={index}>
              <button
                className={`px-2 py-1 ${filters[index].active ? "text-purple-500 font-bold" : "text-gray-700"} bg-transparent focus:outline-none`}
                onClick={() => handleFilterChange(index)}
              >
                {filter.name}
              </button>
              {index < initialFilters.length - 1 && <span className="text-gray-400  ">|</span>} {/* Separator */}
            </React.Fragment>
          ))}
        </div>

        {/* Age Groups Grouped Inside Oval */}
        <div className="flex items-center px-2 py-1 rounded-full border border-gray-300 gap-1">
          {initialAgeGroups.map((ageGroup, index) => (
            <React.Fragment key={index}>
              <button
                className={`px-2 py-1 ${ageGroups[index].active ? "text-purple-500 font-bold" : "text-gray-700"} bg-transparent focus:outline-none`}
                onClick={() => handleAgeGroupChange(index)}
              >
                {ageGroup.name}
              </button>
              {index < initialAgeGroups.length - 1 && <span className="text-gray-400">|</span>} {/* Separator */}
            </React.Fragment>
          ))}
        </div>

        {/* Product Category Dropdown */}
        <select
          className="px-4 py-2  text-gray-700 flex items-center rounded-full border border-gray-300 gap-4"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {productCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Search Bar */}
        <input
          type="text"
          className="flex-grow px-4 py-2  text-gray-700 placeholder-gray-400 focus:outline-none  items-center  rounded-full border border-gray-300 gap-1"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Product Display */}
      <div>
        <CustomHeading title="Filtered Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Link href={product.link || "#"} key={index}>
                <ProductCard product={product} />
              </Link>
            ))
          ) : (
            <div className="text-center text-gray-500">No products found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProductsComponent;
