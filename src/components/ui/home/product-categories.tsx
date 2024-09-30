"use client";
import React, { useState } from "react";
import ProductTag from "../common/tag";
import ProductGrid from "./product-grid";
import renderImg from "@/imgImport";
import SearchAndFilter from "./search-filter";
import Link from "next/link";

export default function ProductCategories() {
  const product_categories = ["Micro-controller", "Animatronics", "Toys"];

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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const products = [
    {
      name: "Play Trons",
      description:
        "Simple plug-and-play electronics for instant fun, learning, and creativity.",
      image: "assets/zing/ProductImage1.png",
      category: "Toys",
      type: "Hardware",
      ageGroup: "Age 9-12",
    },
    {
      name: "Zing",
      description:
        "Advanced humanoid robot designed for interactive learning, companionship, and play.",
      image: "assets/zing/ProductImage2.png",
      category: "Animatronics",
      type: "Hardware",
      ageGroup: "Age 12+",
    },
    {
      name: "Firepen 3D",
      description:
        "High-precision 3D printer for creative, customizable, and rapid prototyping solutions.",
      image: "assets/zing/ProductImage3.png",
      category: "Micro-controller",
      type: "Software",
      ageGroup: "Age 12+",
    },
    {
      name: "Play Dynamex",
      description:
        "Colorful LEGO blocks inspiring creativity, imagination, and hands-on building fun.",
      image: "assets/zing/ProductImage4.png",
      category: "Toys",
      type: "Curriculum",
      ageGroup: "Age 5-8",
    },
  ];

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
      active: i === index ? !age.active : false, // Toggle active age group on double-tap
    }));
    setAgeGroups(updatedAgeGroups);
  };

  // Handle category selection
  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category); // Toggle category selection
  };

  // Get the active filter (type)
  const activeFilter = filters.find((filter) => filter.active)?.name;

  // Get the active age group
  const activeAgeGroup = ageGroups.find((ageGroup) => ageGroup.active)?.name;

  // Filter products based on selected category, active type filter, and active age group
  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) && // Filter by category
      (!activeFilter || product.type === activeFilter) && // Filter by type (Hardware, Software, Curriculum)
      (!activeAgeGroup || product.ageGroup === activeAgeGroup) // Filter by age group
  );

  return (
    <div className="flex flex-col space-y-10 lg:space-y-20 py-7 lg:py-14">
      <SearchAndFilter
        filters={filters}
        ageGroups={ageGroups}
        onFilterChange={handleFilterChange}
        onAgeGroupChange={handleAgeGroupChange}
      />
      <div className="flex flex-col space-y-2 lg:flex-row">
        <div className="flex flex-col space-y-2 lg:space-y-6 w-[100%] lg:w-[30%]">
          <h2 className="text-primary font-semibold text-sm lg:text-sm text-center lg:text-start ">
            Product Catagories
          </h2>
          <div className="flex flex-col space-y-3 lg:space-y-6 lg:ml-4 items-center">
            {product_categories.map((category: string, key: number) => {
              return (
                <div
                  key={key}
                  className={`flex justify-center items-center font-bold text-xl lg:text-sm cursor-pointer ${
                    selectedCategory === category
                      ? "text-primary bg-purple-100 p-2 rounded-full"
                      : ""
                  }`}
                  onClick={() => handleCategorySelection(category)}
                >
                  {category}
                  {category == "Toys" && (
                    <div className="flex justify-center px-1 items-center">
                      <ProductTag title="New" color="green-500" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="container">
          {filteredProducts.length > 0 && (
            <ProductGrid products={filteredProducts} />
          )}
          {filteredProducts.length == 0 && (
            <div className="flex justify-center items-center font-thin py-20">
              New Products Comming Soon...
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-3 bg-card-foreground rounded-xlg p-8 w-[90%]">
          <div className="">
            <img src={renderImg("productCrawle")} className="" />
          </div>
          <div>
            <h1 className="font-bold text-xl">Crawl-e</h1>
            <p className="font-light text-lg py-1">
              Auto Layout is a constraint-based layout system to create an
              adaptive UI.
            </p>
            <Link
              href="/crawl_e"
              className="text-primary mt-4 text-base font-bold hover:scale-125"
            >
              Learn More {"->"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
