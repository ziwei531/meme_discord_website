import "@components/styles/globals.css";
import "@picocss/pico";
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }) {
	return (
		<main className={poppins.className}>
			<div className="container text-center p-lg">
				<h1>jUnE&apos;s wEbSiTE!?</h1>
				<Navbar />
			</div>
			<Component {...pageProps} />{" "}
		</main>
	);
}
