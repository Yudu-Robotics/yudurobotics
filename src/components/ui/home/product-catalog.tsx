import { Button } from "@/components/ui/common/view-products-buttons";

export default function ProductCatalog() {
  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-primary font-semibold text-xl lg:text-base text-center lg:text-start ">
        Product Catalog
      </h2>

      <div className="w-[100%] lg:w-[40%] text-center lg:text-start font-piepie text-3xl lg:text-5xl tracking-wide">
        <span className="">See what</span>{" "}
        <span className=" text-primary">we</span> <span className="">have</span>{" "}
        <span className="text-primary">been</span>{" "}
        <span className="">cooking</span>
      </div>

      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row justify-between">
        <p className="text-secondary-foreground text-base text-center lg:text-start lg:text-lg w-[100%] lg:w-[50%]">
          Discover the exciting products we’ve been developing—each designed to
          push the boundaries of robotics.
        </p>
        <Button className="py-6 px-8 text-xs lg:text-sm rounded-3xl ">
          Veiw all products {"->"}
        </Button>
      </div>
    </div>
  );
}
