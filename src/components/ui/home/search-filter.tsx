import React from "react";
import renderImg from "@/imgImport";

interface Filters {
  name: string;
  active: boolean;
}

interface AgeGroup {
  name: string;
  active: boolean;
}

const SearchAndFilter: React.FC<{
  filters: Filters[];
  ageGroups: AgeGroup[];
  onFilterChange: (index: number) => void;
  onAgeGroupChange: (index: number) => void;
}> = ({ filters, ageGroups, onFilterChange, onAgeGroupChange }) => {
  return (
    <div className="flex flex-col space-y-6 lg:flex-row lg:justify-between  items-center lg:space-y-0">
      <div className="flex items-center space-x-2 border border-secondary-foreground rounded-3xl px-4 py-3 w-[100%] lg:w-[20%] ">
        <img className="w-6" src={renderImg("searchIcon")} alt="Background" />
        <input type="text" className="" placeholder="Search" />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0 font-bold">
        <div className="flex items-center space-x-2 bg-white border border-secondary-foreground rounded-full px-2 py-1 text-sm lg:text-sm">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => onFilterChange(index)}
              className={`px-2 py-2 rounded-full focus:outline-none hover:text-primary ${
                filter.active ? "text-primary" : "text-secondary-foreground"
              } ${
                index == 1
                  ? "border-x rounded-none border-secondary-foreground"
                  : ""
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-2 border border-secondary-foreground rounded-full px-2 py-1 text-sm lg:text-sm">
          {ageGroups.map((age, index) => (
            <button
              key={index}
              onClick={() => onAgeGroupChange(index)}
              className={`px-3 py-2 rounded-full focus:outline-none hover:text-primary ${
                age.active ? "text-primary" : "text-secondary-foreground"
              } ${
                index == 1
                  ? "border-x rounded-none border-secondary-foreground"
                  : ""
              }`}
            >
              {age.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilter;
