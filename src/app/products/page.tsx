import { blogData, products } from "@/data/mockData";
import renderImg from "@/imgImport";
import { highlightWords } from "../utility/highlightWords";
import ProductGrid from "@/components/ui/productsComponents/product-grid";
import ProductCard from "@/components/ui/productsComponents/product-card";
import AllProductsComponent from "@/components/ui/productsComponents/allProducts";

export default async function ProductsPage() {
  const data = blogData;

  return (
    <>
      <div className="px-8 lg:px-28 py-4 bg-primary rounded-b-3xl">
        <div className="py-6 lg:py-20">
          <div className=" font-tthoves-medium py-2">Product Catalog</div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-20 space-y-4 lg:space-y-0">
            <div className="font-piepie text-3xl md:text-4xl lg:text-5xl tracking-wide text-primary-foreground">
              Explore what we have been cooking up!
            </div>
            <div className="text-base md:text-lg lg:text-xl font-tthoves">
              Learn more about the company and the world-class team behind Untitled.
            </div>
          </div>

        </div>
      </div>

      <div className="px-8 lg:px-28 py-4">
        <AllProductsComponent />
      </div>
    </>
  );
}
