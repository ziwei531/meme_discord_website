import Image from "next/image";

export default function NotReady() {
	return (
		<>
			<section className="container text-center p-md">
				<h1>This page is still under development</h1>

				<Image
					src={"/turtle.jpg"}
					alt="Turtle Looks At You Weirdly"
					width={500}
					height={500}
				/>
			</section>
		</>
	);
}
