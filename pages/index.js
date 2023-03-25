import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="container text-center p-bottom">
				<h1 className="text-center">
					Welcome to June&apos;s low-budget pp website
				</h1>
				<Image
					src={"/turtle.jpg"}
					alt="Turtle Looks At You Weirdly"
					width={500}
					height={500}
				/>
			</div>
		</>
	);
}
