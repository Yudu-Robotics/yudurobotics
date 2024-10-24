import { Button } from "@/components/ui/common/view-products-buttons";
import renderImg from "@/imgImport";
import Link from "next/link";

export default function ProductCatalog() {
  return (
    <>
      <div className="relative ">
        <div className="w-full flex justify-end items-start absolute -top-28 right-24">
          <img src={renderImg("zigzaginhome")} />
        </div>
        <div className="flex flex-col space-y-4 pt-14">
          <h2 className="text-primary font-semibold text-xl lg:text-base text-center lg:text-start ">
            Product Catalog
          </h2>

          <div className="w-[100%] lg:w-[40%] text-center lg:text-start font-piepie text-3xl lg:text-5xl tracking-wide">
            <span className="">See what</span>{" "}
            <span className=" text-primary">we</span>{" "}
            <span className="">have</span>{" "}
            <span className="text-primary">been</span>{" "}
            <span className="text-primary">cooking</span>
          </div>

          <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between">
            <p className="text-secondary-foreground text-base text-center lg:text-start lg:text-lg w-[100%] lg:w-[50%]">
              Discover the exciting products we’ve been developing—each designed
              to push the boundaries of robotics.
            </p>
            <Link href="/products">
              <Button className="py-6 px-8 text-xs lg:text-sm rounded-3xl ">
                View all products {"->"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
