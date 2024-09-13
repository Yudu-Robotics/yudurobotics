import React from "react";
import ProductTag from "../common/tag";
import ProductGrid from "./product-grid";
import renderImg from "@/imgImport";
import SearchAndFilter from "./search-filter";

export default function ProductCategories() {
  const product_categories = ["Micro-controller", "Animatronics", "Toys"];
  return (
    <div className="flex flex-col space-y-20 py-14">
      <SearchAndFilter />
      <div className="lg:flex">
      <div className="flex flex-col space-y-6 lg:w-[20%]">
        <h2 className="text-primary font-semibold text-sm lg:text-base text-center lg:text-start ">
          Product Catagories
        </h2>
        <div className="flex flex-col space-y-6 lg:ml-4 items-center">
          {product_categories.map((category: string, key: number) => {
            return (
              <div key={key} className="flex font-bold text-lg lg:text-xl">
                {category}
                {category == "Toys" && (
                  <div className="px-2">
                    <ProductTag title="New" />
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
      <div className="flex flex-col space-y-3 bg-card-foreground rounded-xlg lg:w-[70%] p-12">
        <div className="">
          <img src={renderImg("productDetail1")} className="w-[100%]" />
        </div>
        <div>
          <h1 className="font-bold text-xl">Crawl-e</h1>
          <p className="font-light text-lg py-1">
            Auto Layout is a constraint-based layout system to create an
            adaptive UI.
          </p>
          <h3 className="text-primary mt-4 text-lg font-bold">Learn More {"->"}</h3>
        </div>
      </div>
      </div>
    </div>
  );
}
