import { MoveLeftIcon } from "lucide-react"
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Footer = () => {

	return (
		<nav className=" w-full">
			<div className="w-full px-0 bg-black text-white">
				{/* <Marquee gradient={false} speed={40} autoFill pauseOnHover>
					<Link href='/' className="btn btn-ghost">Brandon Cathcart</Link>
				</Marquee> */}
				<div>
					<Link href="/" className="btn btn-ghost">© 2024 Brandon Cathcart</Link>
					<Link href="/mastering" className="btn btn-ghost">Audio Mastering</Link>
					<Link href="/crosswords" className="btn btn-ghost">Crossword Construction</Link>
					<Link href="/projects" className="btn btn-ghost">Web Development</Link>
				</div>
				{/* <div className="navbar-start">
					<a href="/" className="">
						<div className="btn btn-ghost">
							<MoveLeftIcon size={24} />
							Home
						</div>
						Brandon Cathcart
					</a>
				</div> */}
			</div>
		</nav>
	)
}

export default Footer