import Link from "next/link";
import { FileTextIcon, MoveUpRightIcon } from "lucide-react";


export const metadata = {
	title: "Fountainize - Collaborative screenplays with Google Docs",
	description: "Fountainize is a Google Docs add-on that allows you to write screenplays in Fountain format.",
};

export default function RootLayout ({ children }) {
	return (
		<>
			<nav className="bg-white py-2">
				<div className="mx-4 flex items-center justify-between">
					<div className="flex items-center">
						<img src="images/fountainize/icon.svg" className="inline-block" style={{ height: 50 }} alt="Fountainize logo" />
						<Link href="/fountainize">Fountainize</Link>
					</div>
					<div className="flex items-center gap-8">
						<a className="nav-link" href="#syntax">Syntax</a>
						<Link href="/fountainize/privacypolicy">Privacy Policy</Link>
						<a
							className="btn btn-primary"
							href="https://workspace.google.com/marketplace/app/fountainize/82574770793"
						>
							<FileTextIcon />Add to Google Docs
						</a>
					</div>
				</div>
			</nav>
			{children}
		</>
	);
}
