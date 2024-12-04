import { blogData } from "@/data/mockData";
import renderImg from "@/imgImport";

export default async function BlogPage() {
  const data = blogData;
  const blogCategories = [
    "View all",
    "Design",
    "Product",
    "Software Development",
    "Customer Success",
    "Leadership",
    "Management",
  ];
  return (
    <div className="px-8 lg:px-28 py-10 lg:py-10 text-black ">
      <div className="flex flex-col space-y-3 py-10">
        <h1 className="text-sm text-primary font-tthover-medium">Our blog</h1>
        <h2 className="text-lg lg:text-4xl font-piepie">
          Resources and insights
        </h2>
        <p className="text-secondary-foreground">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>
      <div className="flex flex-col space-y-10 w-full lg:flex-row lg:space-x-32 lg:space-y-0">
        <div className="w-[50%]">
          <div className="flex items-center space-x-2 border border-secondary-foreground rounded-3xl px-4 py-1 ">
            <img
              className="w-4"
              src={renderImg("searchIcon")}
              alt="Background"
            />

            <input type="text" className="" placeholder="Search" />
          </div>
          <h1 className="py-6 text-xs font-bold text-primary">
            Blog Categories
          </h1>
          <div className="grid grid-cols-2 gap-2 lg:flex lg:flex-col lg:space-y-4 lg:ml-10">
            {blogCategories.map((category: string, index: number) => (
              <h2
                key={index}
                className={`${
                  index == 0 ? "text-black" : "text-secondary-foreground"
                } font-tthover-medium text-sm`}
              >
                {category}
              </h2>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-10">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <img src={data[0].image} />
            <div className="flex flex-col space-y-3 lg:w-[50%] px-10">
              <div className="py-2">
                <div className="flex items-center space-x-2 px-1 py-1 bg-[#f4f1fe] border border-[#bba5fe] rounded-full w-[45%] text-xs">
                  <div className="flex justify-center items-center px-1  border border-[#bba5fe] rounded-full text-center">
                    <span className="text-primary font-medium py-0.5">
                      Design
                    </span>
                  </div>
                  <span className="text-primary font-medium">
                    {data[0].timeToRead} read
                  </span>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <h1 className="font-piepie text-base lg:text-3xl w-[90%] lg:w-[70%] ">
                  {data[0].title}
                </h1>
                <p className="text-secondary-foreground">
                  {data[0].description}
                </p>
              </div>

              <div className="flex space-x-4 text-sm">
                <img src={data[0].writter.avatar} />
                <div className="flex flex-col justify-center">
                  <h1 className="font-tthover-medium ">
                    {data[0].writter.name}
                  </h1>
                  <p className="text-secondary-foreground">
                    {new Date(data[0].writter.date).toLocaleDateString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {data.map(
              (
                value: {
                  title: string;
                  description: string;
                  image: string;
                  topic: string;
                  tag: string;
                  timeToRead: string;
                  writter: { name: string; avatar: string; date: Date };
                },
                index: number
              ) =>
                index > 0 && (
                  <div key={index} className="flex flex-col space-y-2">
                    <div>
                      <img src={value.image} className="w-full" />
                    </div>

                    <div className="py-2">
                      <div className="flex items-center space-x-2 px-1 py-1 bg-[#f4f1fe] border border-[#bba5fe] rounded-full w-[29%] text-xs">
                        <div className="flex justify-center items-center px-1  border border-[#bba5fe] rounded-full text-center">
                          <span className="text-primary font-medium py-0.5">
                            Design
                          </span>
                        </div>
                        <span className="text-primary font-medium">
                          {value.timeToRead} read
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="font-piepie text-base lg:text-lg w-[90%] lg:w-[70%] ">
                        {value.title}
                      </h1>
                      <img
                        src={renderImg("arrowUpRight")}
                        className="w-4 h-4 lg:w-8 lg:h-8"
                      />
                    </div>
                    <p className="text-secondary-foreground truncate">
                      {value.description}
                    </p>

                    <div className="flex space-x-4 text-sm">
                      <img src={value.writter.avatar} />
                      <div className="flex flex-col justify-center">
                        <h1 className="font-tthover-medium ">
                          {value.writter.name}
                        </h1>
                        <p className="text-secondary-foreground">
                          {new Date(value.writter.date).toLocaleDateString(
                            "en-GB",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
