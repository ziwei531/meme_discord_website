import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
	const router = useRouter();
	return (
		<>
			<nav className="p-lg center">
				<ul>
					<li>
						<Link className={router.pathname == "/" ? "active" : ""} href="/">
							Home
						</Link>
					</li>
					<li>
						<Link
							className={router.pathname == "/games" ? "active" : ""}
							href="/games"
						>
							Games I&apos;ve Played
						</Link>
					</li>
					<li>
						<Link
							className={router.pathname == "/rants" ? "active" : ""}
							href="/rants"
						>
							Rants
						</Link>
					</li>
					<li>
						<Link
							className={router.pathname == "/about" ? "active" : ""}
							href="/about"
						>
							About Me
						</Link>
					</li>
				</ul>
			</nav>

			{/* <a href="#" role="button">
				Toggle Theme
			</a> */}
		</>
	);
}
