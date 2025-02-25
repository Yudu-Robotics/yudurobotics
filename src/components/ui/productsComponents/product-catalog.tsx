import renderImg from "@/imgImport";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCatalog() {
  return (
    <div className=" ">
      <div className="flex flex-col space-y-4 pt-14">
        <h2 className="font-tthoves-semiBold text-primary text-base md:text-xl text-start mb-2 ">
          Product Catalog
        </h2>
        <div className="relative flex justify-between ">
          <div className="w-[80%] md:w-[50%] lg:w-[40%] lg:text-start font-cobaltRidge text-4xl lg:text-6xl tracking-wide">
            <span className="">See what</span>{" "}
            <span className=" md:text-primary">we</span>{" "}
            <span className="">have</span>{" "}
            <span className="md:text-primary">been</span>{" "}
            <span className="md:text-primary">cooking</span>
          </div>
          {/* update in zigzag */}
          <div className="absolute right-0 md:right-32 -translate-y-10">
            <Image
              width={100}
              height={100}
              alt=""
              className="w-2/5 md:w-2/3 lg:w-56 float-right"
              src={renderImg("zigzaginhome")}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-1">
          <p className="text-secondary-foreground text-base lg:text-xl w-full md:w-[50%] font-tthoves mb-2 md:mb-0">
            Discover the exciting products we&apos;ve been developing—each
            designed to push the boundaries of robotics.
          </p>

          {/* Desktop/Tablet button */}
          <Link
            href="/products"
            className="hidden md:inline-flex bg-[#602CF7] items-center space-x-3 px-6 py-2 rounded-full"
          >
            <span className="font-tthoves-semiBold text-[#FAF9FE] font-md">
              View all products
            </span>
            <MoveRight color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
