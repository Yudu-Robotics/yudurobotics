import renderImg from "@/imgImport";

export default function SearchAndFilter() {
  const filters = [
    { name: "Hardware", active: true },
    { name: "Software", active: false },
    { name: "Curriculum", active: false },
  ];

  const ageGroups = [
    { name: "Age 5-8", active: false },
    { name: "Age 9-12", active: false },
    { name: "Age 12+", active: true },
  ];

  return (
    <div className="flex flex-col space-y-6 lg:flex-row lg:justify-between lg:space-y-0">
      {/* Search Box */}

      <div className="flex items-center space-x-2 border border-gray-500 rounded-3xl px-4 py-3 w-[100%] lg:w-[20%] ">
        <img className="w-6" src={renderImg("searchIcon")} alt="Background" />

        <input type="text" className="" placeholder="Search" />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0 font-bold">
        <div className="flex items-center space-x-2 bg-white border border-gray-500 rounded-full px-2 py-1 text-sm lg:text-base">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-2 py-2 rounded-full focus:outline-none hover:text-primary ${
                filter.active ? "text-primary" : "text-gray-500"
              } ${index == 1 ? "border-x rounded-none border-gray-500" : ""}`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 border border-gray-500 rounded-full px-2 py-1 text-sm lg:text-base">
          {ageGroups.map((age, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded-full focus:outline-none hover:text-primary ${
                age.active ? "text-primary" : "text-gray-500"
              } ${index == 1 ? "border-x rounded-none border-gray-500" : ""}`}
            >
              {age.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
