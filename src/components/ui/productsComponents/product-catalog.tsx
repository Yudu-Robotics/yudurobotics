import { Button } from "@/components/ui/common/view-products-buttons";
import renderImg from "@/imgImport";
import Link from "next/link";

export default function ProductCatalog() {
  return (
    <>
      <div className=" ">
        <div className="flex flex-col space-y-4 pt-14">
          <h2 className="font-tthoves-semiBold text-primary font-semibold text-xl lg:text-base text-center lg:text-start ">
            Product Catalog
          </h2>
          <div className="flex justify-between ">
            <div className="w-[100%] lg:w-[40%] lg:text-start font-piepie text-3xl lg:text-6xl tracking-wide">
              <span className="">See what</span>{" "}
              <span className=" text-primary">we</span>{" "}
              <span className="">have</span>{" "}
              <span className="text-primary">been</span>{" "}
              <span className="text-primary">cooking</span>
            </div>
            <div className=" -translate-y-40 -translate-x-36 -mb-40">
              <img src={renderImg("zigzaginhome")} className="" />
            </div>
          </div>

          <div className=" flex flex-col sm:space-y-6 lg:space-y-0 lg:flex-row justify-between">
            <p className="text-secondary-foreground text-base  lg:text-start lg:text-lg w-[100%] lg:w-[50%]">
              Discover the exciting products we’ve been developing—each designed
              to push the boundaries of robotics.
            </p>
            <div className="bg-[#602CF7] flex space-x-3 items-center px-6 rounded-full">
              <div className="font-tthoves-semiBold text-[#FAF9FE] font-md">
                View all products
              </div>
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
                    stroke="#FAF9FE"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
