import { MoveLeftIcon } from "lucide-react"
import Link from "next/link";
import Marquee from "react-fast-marquee";
const Navbar = () => {

	return (
		<nav className=" w-full">
			<div className="w-full px-0 bg-black text-white">
				{/* <Marquee gradient={false} speed={40} autoFill pauseOnHover>
					<Link href='/' className="btn btn-ghost">Brandon Cathcart</Link>
				</Marquee> */}
				<div>
					<Link href="/" className="btn btn-ghost transition-all hover:font-extrabold hover:scale-105">Home</Link>
					<Link href="/mastering" className="btn btn-ghost transition-all hover:font-extrabold hover:scale-105">Audio Mastering</Link>
					<Link href="/crosswords" className="btn btn-ghost transition-all hover:font-extrabold  hover:scale-105">Crossword Construction</Link>
					<Link href="/projects" className="btn btn-ghost transition-all hover:font-extrabold hover:scale-105">Web Development</Link>
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

export default Navbar