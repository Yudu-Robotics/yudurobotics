import renderImg from "@/imgImport";
import React from "react";

const AdaptiveLMS = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
      <div className="md:p-8">
        <img src={renderImg("macbook")} className="w-full" />
      </div>
      <div className="flex flex-col items-start md:px-12">
        <h1 className="text-sm text-primary">Curriculum</h1>
        <h2 className="text-5xl font-piepie">Adaptive LMS</h2>
        <p className="text-base text-secondary-foreground mt-3">
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
