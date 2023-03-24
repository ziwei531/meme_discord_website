import Image from "next/image";
import NotReady from "../components/NotReady";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<div className="container center p-lg">
				<h1>jUnE&apos;s wEbSiTE!?</h1>
			</div>

			<NotReady />
		</>
	);
}
