import { blogData } from "@/data/mockData";

export default async function BlogPage() {
  const data = blogData;
  return (
    <div className="px-8 lg:px-28 py-10 lg:py-20 text-black">
      <div className="flex flex-col space-y-3">
        <h1 className="text-sm text-primary font-semibold">Our blog</h1>
        <h2 className="text-lg lg:text-4xl font-piepie">
          Resources and insights
        </h2>
        <p className="text-secondary-foreground">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>
      <div></div>
    </div>
  );
}
