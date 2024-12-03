"use client";
import React, { useEffect, useState } from "react";
import ProductTag from "../common/tag";
import ProductGrid from "./product-grid";
import renderImg from "@/imgImport";
import SearchAndFilter from "../home/search-filter";
import Link from "next/link";
import { products } from "@/data/mockData";

interface Products {
  name: string;
  description: string;
  image: string;
  category: string;
  type: string;
  ageGroup: string;
  link: string;
}

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

  const initialProductDetails = {
    name: "",
    description: "",
    image: "",
    category: "",
    type: "",
    ageGroup: "",
    link: "",
  };

  const [filters, setFilters] = useState(initialFilters);
  const [ageGroups, setAgeGroups] = useState(initialAgeGroups);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [productDetails, setProductDetails] = useState<Products>(
    initialProductDetails
  );
  const [selectedProduct, setSelectedProduct] = useState<number>(0);
  const allowedProductNames = ["TED", "Roboki", "Zing", "Crawl-e", "Klaw-b"];
  const [isAllowedFlag, setIsAllowedFlag] = useState<boolean>(true);

  // Update product details when the category or other filters change
  useEffect(() => {
    if (filteredProducts.length > 0) {
      filteredProducts.length == 1
        ? setIsAllowedFlag(false)
        : setIsAllowedFlag(true);
      setProductDetails(filteredProducts[0]);
    } else {
      setProductDetails(initialProductDetails);
    }
  }, [selectedCategory, filters, ageGroups]);

  // handle ProductClick
  const handleProductClick = (index: number, product: Products) => {
    setProductDetails(product);
    setSelectedProduct(index);
    let isAllowed = allowedProductNames.includes(product.name);
    setIsAllowedFlag(isAllowed);
  };

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

  // Handle category selection
  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  // Get the active filter (type)
  const activeFilter = filters.find((filter) => filter.active)?.name;

  // Get the active age group
  const activeAgeGroup = ageGroups.find((ageGroup) => ageGroup.active)?.name;

  // Filter products based on selected category, active type filter, and active age group
  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      (!activeFilter || product.type === activeFilter) &&
      (!activeAgeGroup || product.ageGroup === activeAgeGroup)
  );

  const limitedProducts = filteredProducts.slice(0, 4);

  return (
    <div className="flex flex-col space-y-10 lg:space-y-20 py-7 lg:py-14">
      {/* <SearchAndFilter
        filters={filters}
        ageGroups={ageGroups}
        onFilterChange={handleFilterChange}
        onAgeGroupChange={handleAgeGroupChange}
      /> */}
      <div className="flex flex-col space-y-2 lg:flex-row">
        <div className="flex flex-col space-y-2 lg:space-y-6 w-[100%] lg:w-[25%] font-tthoves-semiBold">
          <h2 className="text-primary font-tthoves-semiBold text-md lg:text-start">
            Product Categories
          </h2>
          <div className="flex flex-col space-y-3 lg:ml-4 items-center ">
            {product_categories.map((category: string, key: number) => (
              <div
                key={key}
                className={`flex justify-start w-full sm:p-2  items-center font-tthoves-semiBold sm:font-bold text-sm lg:text-md cursor-pointer ${
                  selectedCategory === category
                    ? "text-primary bg-purple-100 rounded-full "
                    : ""
                }`}
                onClick={() => handleCategorySelection(category)}
              >
                {category}
                {category === "Toys" && (
                  <div className="flex justify-center px-1 items-center text-[#067647] ">
                    <ProductTag title="New" color="green-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {limitedProducts.length > 0 && (
          <>
            <div className="flex flex-col">
              <div className="container">
                {limitedProducts.length > 0 && (
                  <ProductGrid
                    products={limitedProducts}
                    handleProductClick={handleProductClick}
                    selectedProduct={selectedProduct}
                  />
                )}
              </div>
              <div className="hidden sm:flex justify-center my-8">
                <Link href="/products">
                  <button className="px-4 py-2 bg-primary font-bold text-white rounded-lg border-2 hover:border-destructive transition-all duration-200">
                    All Products
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden h-full sm:flex flex-col space-y-3 bg-card-foreground rounded-xlg lg:w-[90%] p-8">
              <div>
                <img src={productDetails.image} className="w-[100%]" />
              </div>
              <div>
                <h1 className="font-tthoves-semiBold text-xl">
                  {productDetails.name}
                </h1>
                <p className="font-tthover text-lg py-1">
                  {productDetails.description}
                </p>
                {isAllowedFlag && (
                  <Link
                    href={productDetails.link}
                    className="text-primary mt-4 text-base font-bold hover:scale-125 "
                  >
                    <div className="flex space-x-2 items-center s">
                      <div>Learn More</div>
                      <div>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.16699 7.00008H12.8337M12.8337 7.00008L7.00033 1.16675M12.8337 7.00008L7.00033 12.8334"
                            stroke="#4A1FCC"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
        {limitedProducts.length === 0 && (
          <div className="flex justify-end items-end font-thin py-20">
            New Products Coming Soon...
          </div>
        )}
      </div>
    </div>
  );
}
