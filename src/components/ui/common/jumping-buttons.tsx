import React from "react";

const JumpingButtons: React.FC<{ ishorizontal: string }> = ({
  ishorizontal,
}) => {
  return (
    <div
      className={`${
        ishorizontal == "true"
          ? "flex flex-row"
          : "flex flex-row lg:flex-col lg:space-y-10"
      } justify-center items-center space-x-10 px-12`}
    >
      <div>
        <div className="rounded-full bg-green-400 text-green-900 text-xs lg:text-lg h-20 w-20 lg:h-40 lg:w-40 flex flex-col justify-center items-center transform transition duration-500 hover:-translate-y-4">
          <span className="block ">Lemme</span>
          <span className="block font-bold italic">Explore</span>
        </div>

        <div className="rounded-full border-green-400 -mt-24 border h-20 w-20 lg:h-40 lg:w-40 lg:-mt-32"></div>
      </div>

      <div>
        <div className="rounded-full bg-white border-green-400 text-green-900 text-xs lg:text-lg h-20 w-20 lg:h-40 lg:w-40 flex flex-col justify-center items-center transform transition duration-500 hover:-translate-y-4">
          <span className="block ">I'm here to</span>
          <span className="block font-bold italic">Join Forces</span>
        </div>

        <div className="rounded-full border-white -mt-24 border h-20 w-20 lg:h-40 lg:w-40 lg:-mt-32"></div>
      </div>
    </div>
  );
};

export default JumpingButtons;
