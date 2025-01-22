import { BookOpenTextIcon, BracketsIcon, ClapperboardIcon, FileTextIcon, MessageSquareWarningIcon, MousePointer, MoveRightIcon, MoveUpRightIcon, ParenthesesIcon, PickaxeIcon, SmileIcon, UserIcon, Users2Icon } from "lucide-react"
import Link from "next/link"

const syntaxData = [
	{
		title: "Action",
		icon: <PickaxeIcon />,
		description: "The default - if it doesn't follow another rule, it's an action!",
		example: "This is an action."
	},
	{
		title: "Character",
		icon: <UserIcon />,
		description: "Write CHARACTERS in all caps.",
		example: "SAMATHA"
	},
	{
		title: "Dialogue",
		icon: <MessageSquareWarningIcon />,
		description: "Dialogue always follows a character or paranthetical.",
		example: <>
			SAMANTHA<br />
			I love speaking dialogue!
		</>
	},
	{
		title: "Scene",
		icon: <ClapperboardIcon />,
		description: "Start the line with 'int.' or 'ext.'",
		example: "EXT. Outside the Fairmere Bank"
	},
	{
		title: "Paranthetical",
		icon: <ParenthesesIcon />,
		description: "Start the line with a bracket",
		example: <>
			NATHAN <br />
			(whispers)</>
	},
	{
		title: "Transition",
		icon: <MoveRightIcon />,
		description: "End the line with TO:",
		example: "STAR WIPE TO:"
	}
];

const Fountainize = () => {

	return (
		// < !--Navigation -- >
		<>
			<header className="bg-blue-300 py-16">
				<div className="container mx-auto grid grid-cols-2">
					<div className="flex flex-col justify-center">
						<h1 className="text-8xl mb-2">
							Fountainize
						</h1>
						<h3 className="text-4xl mb-8">
							Collaborative screenplays with Google Docs
						</h3>
						<div>
							<a
								className="btn btn-primary btn-lg"
								href="https://workspace.google.com/marketplace/app/fountainize/82574770793"
							><FileTextIcon /> Add to Google Docs</a>
						</div>
					</div>

					<div className="">
						<img src="/images/fountainize/computer.png" className="img-fluid header-img" alt="" />
					</div>
				</div>
			</header >

			{/* <!-- Page Content --> */}
			<div className="" >
				{/* <!-- Features Section --> */}
				<h2 className="text-6xl text-center py-16">
					Write your screenplay. <br />
					Leave the rest to Fountainize.
				</h2>
				<div className="">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto pb-16">
						<div className="text-center">
							<h3 className="text-3xl mb-2">Write quickly</h3>
							<img src="/images/fountainize/before.png" className="shadow-md rounded-md" alt='Before Fountainize' />
						</div>
						<div className="text-center">
							<h3 className="text-3xl mb-2">Format in one click!</h3>
							<img src="/images/fountainize/after.png" className="shadow-md rounded-md" alt='After Fountainize' />
						</div>
					</div>
				</div>


				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
					<div className="cols-1 text-7xl bg-blue-500 text-white flex items-center justify-center px-4  py-16">
						<h3>
							Fountainize is the easiest way to write screenplays with Google Docs.
						</h3>
					</div>
					<div className="cols-1 flex flex-col justify-center bg-white py-16">
						<h3 className="text-5xl mb-4">Features:</h3>
						<ul style={{ lineHeight: 2 }} className="text-3xl">
							<li><MousePointer size={36} className="inline-block" /> One-click formatting</li>
							<li><Users2Icon size={36} className="inline-block" /> Collaborate for free</li>
							<li><BookOpenTextIcon size={36} className="inline-block" /> Uses industry standards</li>
							<li><SmileIcon size={36} className="inline-block" /> Easy to learn</li>
						</ul>
					</div>
				</div>
				{/* <!-- /.row --> */}

				<hr />

				<section id="syntax" className="my-16 container mx-auto">
					<h1 className="mb-8 text-5xl">Syntax</h1>
					<p className="mb-8 text-xl">Write your screenplay using simple rules. Capturing ideas is quick and seamless.</p>
					{/* <!-- Syntax Section --> */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{syntaxData.map((syntax, index) => (
							<div key={index} className="card bg-white rounded-md p-8 flex flex-col gap-4">
								<div className="flex gap-4 items-center">
									{syntax.icon}
									<h4 className="text-3xl">
										{syntax.title}
									</h4>
								</div>
								<p className="min-h-16">{syntax.description}</p>
								<code className="bg-gray-200 p-4 rounded-md">{syntax.example}</code>
							</div>
						))}

					</div>
					{/* <!-- /.row --> */}
				</section>
				<hr />
			</div>
		</>
	)
}

export default Fountainize