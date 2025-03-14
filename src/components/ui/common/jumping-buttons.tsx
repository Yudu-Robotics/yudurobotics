import Link from "next/link";
// import React from "react";
interface JumpingButtonsProps {
  ishorizontal?: boolean;
  text1?: string;
  text2?: string;
  text3?: string;
  bgColor?: string;
  textColor?: string;
  link?: string;
  onClick?: () => void;
}
const JumpingButtons: React.FC<JumpingButtonsProps> = ({
  ishorizontal = false,
  text1,
  text2,
  text3,
  bgColor,
  textColor,
  link = "",
  onClick,
}) => {
  return (
    <div
      className={`${
        ishorizontal
          ? "flex flex-row"
          : "flex flex-row lg:flex-col lg:space-y-10 px-8"
      } justify-center items-center space-x-8 font-tthoves`}
    >
      <div className="flex flex-col justify-center items-start">
        {link && link !== "#" ? (
          <Link href={link}>
            <div
              className="rounded-2xl border border-green-500 text-md lg:text-lg h-20 w-32  lg:h-30 lg:w-40 flex flex-col justify-center items-center transform transition duration-500 hover:translate-y-4"
              style={{
                backgroundColor: bgColor || "#F00",
                color: textColor || "#FFF",
              }}
            >
              <span className="block font-tthoves-semiBold">
                {text1 || "Lemme"}
              </span>
              <span className="block italic font-tthoves-bold">
                {text2 || "Explore"}
              </span>
              {text3 !== " " && (
                <span className="block font-tthoves-semiBold">{text3}</span>
              )}
            </div>
          </Link>
        ) : (
          <button
            type="button"
            onClick={onClick}
            className="rounded-2xl border border-green-500 text-md lg:text-lg h-20 w-32  lg:h-30 lg:w-40 flex flex-col justify-center items-center transform transition duration-500 hover:translate-y-4"
            style={{
              backgroundColor: bgColor || "#F00",
              color: textColor || "#FFF",
            }}
          >
            <span className="block font-tthoves-semiBold">
              {text1 || "Lemme"}
            </span>
            <span className="block italic font-tthoves-bold">
              {text2 || "Explore"}
            </span>
            {text3 !== " " && (
              <span className="block font-tthoves-semiBold">{text3}</span>
            )}
          </button>
        )}

        <div
          className="rounded-lg bg-[#0A4029] -mt-16 h-20 w-32 lg:h-30 lg:w-40 lg:-mt-16"
          // style={{
          // 	// Default text color
          // 	border: `2px solid ${bgColor || "#000"}`,
          // }}
        />
      </div>
    </div>
  );
};

export default JumpingButtons;
