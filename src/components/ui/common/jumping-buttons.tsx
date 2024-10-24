import React from "react";
interface JumpingButtonsProps {
  ishorizontal?: string;
  text1?: string;
  text2?: string;
  bgColor?: string;
  textColor?: string;
}
const JumpingButtons: React.FC<JumpingButtonsProps> = ({
  ishorizontal = "false",
  text1,
  text2,
  bgColor,
  textColor,
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
        <div
          className={`rounded-full text-xs lg:text-lg h-20 w-20 lg:h-40 lg:w-40 flex flex-col justify-center items-center transform transition duration-500 hover:-translate-y-4`}
          style={{
            backgroundColor: bgColor || "#F00",
            color: textColor || "#FFF",
          }}
        >
          <span className="block ">{text1 || "Lemme"}</span>
          <span className="block font-bold italic">{text2 || "Explore"}</span>
        </div>

        <div
          className="rounded-full border-destructive -mt-24 border h-20 w-20 lg:h-40 lg:w-40 lg:-mt-32"
          style={{
            // Default text color
            border: `2px solid ${bgColor || "#000"}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default JumpingButtons;
