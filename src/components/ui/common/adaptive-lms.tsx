import renderImg from "@/imgImport";
import React from "react";

const AdaptiveLMS = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:[grid-auto-flow:dense] sm:pt-10">
      <div className="order-2 md:order-none md:p-8 py-10 sm:py-0">
        <img src={renderImg("macbook")} alt="LMS" className="w-full" />
      </div>
      <div className="order-1 md:order-none flex flex-col items-start md:px-12">
        <h1 className="text-lg sm:text-sm md:text-md lg:text-lg xl:text-xl text-primary">
          Curriculum
        </h1>
        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-piepie">
          Adaptive LMS
        </h2>
        <p className="text-lg sm:text-sm md:text-md lg:text-lg xl:text-xl text-secondary-foreground mt-3">
          Manages all learning resources, including videos, activity sheets,
          materials, and assessments. This streamlined approach supports dynamic
          and flexible learning experiences, benefiting students, teachers, and
          parents.
        </p>
      </div>
    </div>
  );
};

export default AdaptiveLMS;
