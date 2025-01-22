'use client'
import FixedHead from "@/components/FixedHead";
import { MoveUpRightIcon, StarIcon } from "lucide-react";
import { crosswords } from "./data";

const CrosswordsPage = () => {

	return (
		<>
			<FixedHead />
			<FixedHead reversed top='50vh' />
			<div className='container mx-auto py-8 flex flex-col gap-4' style={{ maxWidth: 800 }}>
				<h1 className="text-5xl pb-2">CROSSWORDS</h1>
				<p className="pb-2">I love making crosswords. I&apos;ve had my crosswords published in <a className="link" href='https://thegatewayonline.ca/'>The Gateway</a>, The U of A&apos;s Engineering Art Show, and have been featured on <a className="link" href='https://crosshare.org/'>Crosshare</a>.</p>
				<div className='grid grid-cols-2 gap-12'>
					<div>
						<h1 className="text-3xl">SOLVE ME</h1>
						<hr className="mt-2 mb-4" style={{ borderColor: 'black' }} />
						{
							crosswords && crosswords.map((group, index) => (
								<div key={group.title} className="flex flex-col gap-4 mb-4">
									<h2 className="text-2xl">{group.title}</h2>
									<div className="grid grid-cols-1 gap-1">
										{
											group.crosswords.slice(0, 2).map((crossword, index) => {
												return (
													<div className="indicator w-full" key={index} >
														{crossword.featured &&
															<span className="indicator-item badge bg-orange-400">
																<div className="tooltip" data-tip="Featured on Crosshare">
																	<StarIcon size={12} />
																</div>
															</span>
														}
														<a href={crossword.src} className="w-full" target="_blank" rel="noreferrer">
															<div className='btn w-full flex justify-start h-full py-1'>
																{group.icon}
																<div className='flex-1 text-left flex flex-col'>
																	<p className="text-lg">{crossword.name}</p>
																	<p className="text-sm font-normal opacity-80">{crossword.date}</p>
																</div>
															</div>
														</a>
													</div>

												)
											})
										}
									</div>
								</div>
							))
						}
						<div className="flex justify-end">
							<a href="https://crosshare.org/brandoshizzle" target="_blank" rel="noreferrer"
								className="btn bg-orange-400 border-orange-500 hover:bg-orange-300 hover:scale-110 rotate-0 hover:-rotate-2 font-bold">All crosswords <MoveUpRightIcon /></a>
						</div>
					</div>
					<div className="flex flex-col">
						<div className="flex items-center relative w-full">
							<h1 className="text-3xl">HIRE ME</h1>
							<div className="absolute right-0 -top-2">
								<button className="btn btn-primary font-bold hover:scale-110 rotate-2 hover:rotate-0"
									onClick={() => document.getElementById('contact_modal').showModal()}>
									Let&apos;s talk!
								</button>
							</div>
						</div>
						<hr className="mt-2 mb-4" style={{ borderColor: 'black' }} />
						<div className="flex flex-col gap-4">
							<p><span style={{ fontWeight: 'bold' }}>Crosswords are a great way to engage people!</span> I create custom, NYT-style crosswords for your publication, business, or event.</p>
							<p className="">* Rates negotiable for bulk work</p>
							<div role="tablist" className="tabs tabs-bordered">
								{/* <div className="tooltip" data-tip="You own the crossword"> */}
								<input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Exclusive"
									defaultChecked />
								{/* </div> */}
								<div role="tabpanel" className="tab-content mt-2 w-full">
									<table className="w-full table-sm">
										<thead>
											<tr>
												<th className="text-left">Size</th>
												<th className="text-left">Themed</th>
												<th className="text-left">Unthemed</th>
												{/* <th className="text-left">Price</th> */}
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Mini (5x5)</td>
												<td>$30</td>
												<td>$20</td>
											</tr>
											<tr>
												<td>Midi (9x9)</td>
												<td>$60</td>
												<td>$50</td>
											</tr>
											<tr>
												<td>Midi+ (11x11)</td>
												<td>$100</td>
												<td>$80</td>
											</tr>
											<tr>
												<td>Full (15x15)</td>
												<td>$200</td>
												<td>$150</td>
											</tr>
										</tbody>
									</table>
								</div>
								<input
									type="radio"
									name="my_tabs_1"
									role="tab"
									className="tab"
									aria-label="Non-Exclusive" />
								<div role="tabpanel" className="tab-content w-full mt-2">
									<table className="w-full table-sm">
										<thead>
											<tr>
												<th className="text-left">Size</th>
												<th className="text-left">Themed</th>
												<th className="text-left">Unthemed</th>
												{/* <th className="text-left">Price</th> */}
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Mini (5x5)</td>
												<td>$15</td>
												<td>$10</td>
											</tr>
											<tr>
												<td>Midi (9x9)</td>
												<td>$30</td>
												<td>$25</td>
											</tr>
											<tr>
												<td>Midi+ (11x11)</td>
												<td>$50</td>
												<td>$40</td>
											</tr>
											<tr>
												<td>Full (15x15)</td>
												<td>$125</td>
												<td>$100</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl">MY PHILOSOPHY</h1>
					<hr className="mt-2 mb-4" style={{ borderColor: 'black' }} />
					<p>I've constructed a lot of crosswords and solved hundreds more. So what makes a fun crossword?</p>
					<ul className="list-disc pl-8">
						<li>The theme should spark joy</li>
						<li>The clues should be clever, but fair</li>
						<li>Solving the puzzle should make you feel smart</li>
					</ul>
					<p>I've had crosswords published in <a className="link" href='https://thegatewayonline.ca/'>The Gateway</a>, The U of A's Engineering Art Show, and am featured regularly on <a className="link" href='https://crosshare.org/'>Crosshare</a>.</p>
				</div>
			</div >
			<dialog id="contact_modal" className="modal">
				<div className="modal-box h-screen" style={{ width: 700, maxWidth: 'none' }}>
					{/* <h1 className="text-5xl">Let&apos;s Talk!</h1> */}
					<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5R_9sjcoqGCQbYl6cti7Tp3JNMOiJIm37ajMeG4smE4yFQw/viewform?embedded=true" width="640" height="740" marginheight="0" marginwidth="0">Loading…</iframe>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</>
	);
};

export default CrosswordsPage;