import React from "react";
import ProductTag from "../common/tag";
import ProductGrid from "./product-grid";
import renderImg from "@/imgImport";
import SearchAndFilter from "./search-filter";
import Link from "next/link";

export default function ProductCategories() {
  const product_categories = ["Micro-controller", "Animatronics", "Toys"];
  return (
    <div className="flex flex-col  space-y-10 lg:space-y-20 py-7 lg:py-14">
      <SearchAndFilter />
      <div className="flex flex-col space-y-2 lg:flex-row">
        <div className="flex flex-col space-y-2 lg:space-y-6 w-[100%] lg:w-[25%]">
          <h2 className="text-primary font-semibold text-sm lg:text-sm text-center lg:text-start ">
            Product Catagories
          </h2>
          <div className="flex flex-col space-y-3 lg:space-y-6 lg:ml-4 items-center">
            {product_categories.map((category: string, key: number) => {
              return (
                <div key={key} className="flex font-bold text-xl lg:text-sm">
                  {category}
                  {category == "Toys" && (
                    <div className="flex justify-center px-2 items-center">
                      <ProductTag title="New" color="green-500" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <ProductGrid />
        </div>
        <div className="flex flex-col space-y-3 bg-card-foreground rounded-xlg lg:w-[90%] p-8">
          <div className="">
            <img src={renderImg("productCrawle")} className="w-[100%]" />
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
