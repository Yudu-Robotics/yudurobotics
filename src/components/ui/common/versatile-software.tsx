import { highlightWords } from "@/app/utility/highlightWords";
import renderImg from "@/imgImport";
import type { ImageName } from "@/imgImport";
import renderVideo from "@/videoImport";
import Image from "next/image";

type RobotName = "peecee" | "zing" | "klaw" | "roboki" | "crawle";

interface Feature {
	image: string;
	title: string;
	desc: string;
}

interface SoftwareAdaptiveProps {
	data?: {
		title: string;
		colorTitle: string;
		desc?: string;
		subheading?: string;
		features?: Feature[];
	};
	name?: RobotName;
}

const videoMapping: Record<RobotName, string[]> = {
	peecee: ["steppeecee", "codingpeecee", "aimodelpeecee"],
	zing: ["stepzing", "codingzing", "aimodelzing"],
	klaw: ["stepklaw", "codingklaw", "aimodelklaw"],
	roboki: ["steprobo", "codingrobo", "airobo"],
	crawle: ["stepcrawle", "codingcrawle", "aimodelcrawle"],
};

const VersatileSoftware: React.FC<SoftwareAdaptiveProps> = ({ data, name }) => {
	const images = ["threestep", "fivecoding", "aimodel"];
	const videoName = name ? videoMapping[name] : undefined;

	const features: Feature[] = [
		{
			image: "assets/other/threestep.webp",
			title: "3-Step Programming",
			desc: "Coding is as easy as Select, Assemble, and Code. Perfect for first-timers, this approach makes building projects feel like child's play.",
		},
		{
			image: "assets/other/fivecoding.webp",
			title: "5 Coding Styles",
			desc: "3 visual modes (Hexa Programming, Flowchart, Scratch-style) or go pro with C and Python scripts.",
		},
		{
			image: "assets/other/aimodel.webp",
			title: "AI Mode & App Mode",
			desc: "Just speak and code, or create apps that control your physical projects—Plode makes it all possible.",
		},
	];

	return (
		<div className="w-full flex flex-col space-y-10 py-10 xl:py-14 sm:mt-40 md:mt-12 xl:mt-16">
			<div className="flex flex-col space-y-2 justify-centerv items-center text-center">
				<h1 className="text-primary text-lg font-tthoves-medium ">
					{data ? "" : "Software"}
				</h1>
				<h2 className="text-4xl lg:text-5xl xl:text-7xl font-cobaltRidge tracking-wide ">
					{data
						? highlightWords(data.title, [data.colorTitle], "text-primary")
						: highlightWords(
								"Versatile for All",
								["Versatile"],
								"text-primary",
							)}
				</h2>
				<h2 className="text-lg font-tthoves sm:text-sm md:text-base lg:text-lg xl:text-xl text-secondary-foreground pt-2 w-[100%] lg:w-[40%]">
					{data?.desc ||
						"Plode is ready for anything, handling everything from your first coding steps to your wildest ideas."}
				</h2>
				<p className="text-[#5423E6] font-tthoves-medium">{data?.subheading}</p>
			</div>
			<div className="grid grid-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
				{/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
				{(data?.features || features)?.map(
					(feature: Feature, index: number) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={index}
							className="flex flex-col h-full justify-center items-center text-center gap-2 mt-4 "
						>
							<div className="sm:h-[80%] p-5 md:p-16 lg:p-0 flex justify-center items-center rounded-xxl">
								<div className="flex justify-between items-center h-full">
									{videoName ? (
										<video
											src={renderVideo(videoName[index])}
											className="rounded-xxl max-h-56"
											autoPlay
											loop
											muted
											style={{}}
										/>
									) : (
										<Image src={renderImg(images[index] as ImageName)} alt="" />
									)}
								</div>
							</div>
							<div className="h-[20%] ">
								<h1 className="text-xl text-[#1A1804] sm:text-xl font-bold pt-4 font-tthoves-semiBold">
									{feature.title}
								</h1>
								<div className="text-lg sm:text-lg text-secondary-foreground w-[100%] flex sm:justify-center">
									<p className="lg:w-[85%] font-tthoves">{feature.desc}</p>
								</div>
							</div>
						</div>
					),
				)}
			</div>
		</div>
	);
};
export default VersatileSoftware;
