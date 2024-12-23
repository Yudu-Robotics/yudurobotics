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
    { name: "Age 9-12", active: false },
    { name: "Age 12+", active: false },
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
      (!searchTerm || product.name.toLowerCase().includes(searchTerm))
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
      {/* Search and Filter Bar */}
      <div className="flex flex-wrap items-center gap-8 mb-8 pb-6">
        {/* Filters */}
        <div className="flex items-center border border-gray-300 rounded-full px-1 py-0.5 ml-4 mr-4">
          {filters.map((filter, index) => (
            <React.Fragment key={index}>
              <button
                className={`text-sm px-1.5 py-1 text-gray-700 ${
                  filter.active ? "font-bold text-purple-600" : "font-normal"
                }`}
                onClick={() => handleFilterChange(index)}
              >
                {filter.name}
              </button>
              {index < filters.length - 1 && (
                <span className="border-l border-gray-500 h-10 mx-3" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Age Groups */}
        <div className="flex items-center border border-gray-300 rounded-full px-1 py-0.5 ml-4 mr-4">
          {ageGroups.map((ageGroup, index) => (
            <React.Fragment key={index}>
              <button
                className={`text-sm px-1.5 py-1 text-gray-700 ${
                  ageGroup.active ? "font-bold text-purple-600" : "font-small"
                }`}
                onClick={() => handleAgeGroupChange(index)}
              >
                {ageGroup.name}
              </button>
              {index < ageGroups.length - 1 && (
                <span className="border-l border-gray-500 h-10 mx-3" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Product Category Dropdown */}
        <select
          className="bg-white text-gray-700 border border-gray-300 rounded-full px-3.5 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-purple-200 ml-5 mr-8 w-64"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Product Category</option>
          <option value="Micro-controller">Micro-controller</option>
          <option value="Electronics">Electronics</option>
          <option value="Animatronics">Animatronics</option>
          <option value="Curriculum">Curriculum</option>
          <option value="Toys">Toys</option>
        </select>

        {/* Search Bar */}
        <input
          type="text"
          className="w-64 px-4 py-1.5 border border-gray-300 rounded-full ml-8 text-black"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Hardware Products */}
      <div className="mb-8">
        <CustomHeading title="Hardware" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hardwareProducts.map((product) => (
            <Link href={product.link || "#"} key={product.name}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>

      {/* Software Products */}
      <div className="mb-8">
        <CustomHeading title="Software" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {softwareProducts.map((product) => (
            <Link href={product.link || "#"} key={product.name}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>

      {/* Curriculum Products */}
      <div className="mb-8">
        <CustomHeading title="Curriculum" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {curriculumProducts.map((product) => (
            <Link href={product.link || "#"} key={product.name}>
              <ProductCard product={product} />
            </Link>
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
