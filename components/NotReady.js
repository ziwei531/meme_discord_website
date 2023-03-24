import Image from "next/image";

export default function NotReady() {
	return (
		<>
			<section className="container center p-md">
				<h1>This Component is still under development</h1>

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
