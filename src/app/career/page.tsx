import { positions } from "@/data/mockData";
import renderSvg from "@/svgImport";

export default function CareerPage() {
  return (
    <div className="px-8 lg:px-28 py-10 lg:py-10 text-black">
      <div className="flex flex-col justify-start items-center text-center space-y-2 py-16">
        <h1 className="text-sm text-primary">Open positions</h1>
        <h2 className="text-3xl font-semibold font-piepie">
          We're looking for talented people
        </h2>
        <h3 className="text-gray-500">
          We’re a 100% remote team spread all across the world. Join us!
        </h3>
      </div>

      {/* Job Listings */}
      <div className="flex justify-center">
        <div className="flex flex-col">
          {positions.map((job, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-8 first:border-t last:border-0"
            >
              <div className="flex space-x-4 items-center">
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`items-center px-3 py-0.5 rounded-full border text-red-600 border-red-400 bg-red-100 text-xs font-medium`}
                  >
                   {job.department}
                  </span>
                </div>
              </div>
              <p className="mt-2 text-secondary-foreground">
                {job.description}
              </p>

              <div className="flex items-center space-x-4 mt-4 text-secondary-foreground">
                <div className="flex items-center space-x-1">
                  <div className="">{renderSvg("mapIcon")}</div>
                  <span>{job.remote ? "Remote" : "On-site"}</span>
                </div>

                <div className="flex items-center space-x-1">
                  <div>{renderSvg("clockIcon")}</div>
                  <span>{job.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
