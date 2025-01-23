'use client'
import { CodeXmlIcon, DramaIcon, FlaskConicalIcon, Grid2X2Icon, MapPinIcon, MoveRightIcon, SpeakerIcon } from "lucide-react"
import Link from "next/link"
import Tilt from "react-parallax-tilt"
import { useState } from 'react';
import Marquee from "react-fast-marquee";

function Home (props) {

  const [highlightedImg, setHighlightedImg] = useState(0);

  return (
    <div>
      <div className="flex items-center justify-center"
        style={{ height: '50vh' }}>
        <Marquee gradient={false} speed={40} autoFill pauseOnHover>
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <div className="relative" key={i}
                onMouseEnter={() => setHighlightedImg(i)}
                onMouseLeave={() => setHighlightedImg(0)}>
                <img src={`/images/home/${i}-comp.webp`} alt={`image ${i}`} style={{ height: '50vh', opacity: highlightedImg === 0 || highlightedImg === i ? 1 : 0.3 }} />
                <div className="absolute bg-white rounded-xl p-2 pointer-events-none"
                  style={{ top: `${Math.floor(Math.random() * 80)}%`, left: `${Math.floor(Math.random() * 40)}%`, }}>
                  <h1 className="text-2xl">Brandon Cathcart</h1>
                </div>
              </div>
            ))

          }
        </Marquee>
      </div>
      <div className='container mx-auto px-4 md:px-0 py-8' style={{ maxWidth: 950 }}>
        <div className='flex flex-col gap-4 items-center w-full'>
          <div className="flex flex-col md:flex-row gap-8 items-center w-full my-8 text-center md:text-left">
            <div className="flex-1">
              <h1 className="text-6xl md:text-7xl font-bold pb-2">
                <span className="hover:font-thin">Hi!</span> <span className="hover:font-thin">I&apos;m</span> <span className="hover:font-thin">Brandon</span>.</h1>
              <p className='text-xl font-light'>I do creative things in</p>
              <div className="flex gap-2 my-2 justify-center md:justify-start">
                <MapPinIcon />
                <p className='text-xl font-bold'>Edmonton, Canada.</p>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xl">
                {highlightedImg === 0 ?
                  <>This is my website.<br /><span className="font-bold">Who are you looking for today?</span></> :
                  <><span>This is me </span>
                    <span className="font-bold">{
                      highlightedImg ?
                        [
                          'getting ready for sports',
                          'with an umbrella',
                          'looking at some pumpkins',
                          'doing crosswords in a cabin',
                          'doing crosswords on my phone',
                          '"working" in the sun room',
                          "wearing sunglasses so no one can see I'm sleeping",
                          'with Lilibet',
                          'about to cut down a tree',
                          'enjoing a Christmas beverage',
                          'Perplexusing'
                        ][highlightedImg - 1] + "." : ''
                    }
                    </span>
                  </>
                }
              </p>

            </div>
          </div>

          {/* <div className="flex gap-4 items-center">
            <img id='headshot' src='/web-head-comp.png' alt='Brandon Cathcart' className='w-48 h-48' />

            <div>
              <h1 className='text-5xl font-semibold' id='greeting'>Hi There!</h1>
              <div id='who1'>
                <p className='text-lg font-light'>I'm Brandon, a creative from</p>
                <div className="flex gap-2 my-1">
                  <MapPinIcon />
                  <p className='text-lg font-bold'>Edmonton, Canada.</p>
                </div>
              </div>
              <p className='text-lg font-light' id='who2'>Who are you here to see today?</p>
            </div>
          </div> */}
          <div className='flex flex-col md:flex-row items-center justify-center gap-2'>
            {
              [{
                id: 1,
                title: 'The Mastering Guy',
                icon: <SpeakerIcon size={96} />,
                href: '/mastering'
              },
              {
                id: 2,
                title: 'The Crossword Guy',
                icon: <Grid2X2Icon size={96} />,
                href: '/crosswords'
              }, {
                id: 3,
                title: 'The Web Dev Guy',
                icon: <CodeXmlIcon size={96} />,
                href: '/projects'
              }].map((role, i) => (
                <Tilt
                  // perspective={2000}
                  // glareEnable={true}
                  tiltEnable={false}
                  scale={1.2}
                  transitionSpeed={1000}
                  style={{ height: '30vh', aspectRatio: 7 / 4, }}
                  key={role.title}
                  className="z-0 hover:z-10 hover:"
                >
                  <Link href={role.href}>
                    <div className='card shadow-sm hover:shadow-xl rounded-md w-full border-gray border flex items-center justify-center relative bg-white pointer-events-none'
                      style={{
                        width: '100%', aspectRatio: 7 / 4,
                        opacity: role.title === 'The Mastering Guy' || role.title === 'The Web Dev Guy' ? 0.4 : 1,
                        cursor: role.title === 'The Mastering Guy' || role.title === 'The Web Dev Guy' ? 'default' : 'pointer',
                        // transform: 
                        // `rotate(${i === 0 ? -5 : i === 2 ? 5 : 0}deg) translateY(${i === 0 ? 20 : i === 2 ? 20 : 0}px)`
                        transform:
                          `rotate(${Math.random() * 5 - 2.5}deg) translateY(${Math.random() * 10 - 5}px)`
                      }}>
                      <div className="flex gap-4 p-8 pt-2 items-center">
                        {
                          role.icon && <div>
                            {role.icon}
                          </div>
                        }

                        <div className="flex-1">
                          <h1 className='text-3xl font-semibold mb-2'>BRANDON CATHCART</h1>
                          <p className='text-md font-light'>{role.title}</p>
                        </div>
                      </div>
                      <div className='absolute bottom-2 right-2'>
                        <div className='btn btn-sm btn-ghost'>
                          {
                            role.title === 'The Mastering Guy' || role.title === 'The Web Dev Guy' ? 'coming soon' : 'learn more'
                          }
                          <MoveRightIcon size={24} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Tilt>
              ))
            }
          </div>
          <h1 className='text-5xl font-semibold mt-8 text-center md:text-left'>Not sure? Here&apos;s what I do.</h1>
          {/* FREELANCE */}
          <div className='flex flex-col gap-8 w-full mt-4 bg-white p-4 md:p-8 rounded-sm shadow-md mx-4 md:mx-0'
            style={{ maxWidth: 650 }}>
            <h2 className="text-3xl font-semibold">Freelance Work</h2>
            <Link href='/mastering' className="w-full">
              <div className='flex gap-2 md:gap-8 w-full'>
                <div>
                  <SpeakerIcon size={72} />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className='text-3xl font-medium'>Audio Mastering</h3>
                  <p className='text-sm font-light mb-2'>
                    5+ years and over 600 songs under my belt. Professional, affordable mastering for your music.</p>
                  <div>
                    <div className='btn btn-neutral btn-exciting'>
                      Hear the difference
                      <MoveRightIcon size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href='/crosswords' className='w-full'>
              <div className='flex gap-2 md:gap-8 w-full'>
                <div>
                  <Grid2X2Icon size={72} />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className='text-3xl font-medium'>Crossword Construction</h3>
                  <p className='text-sm font-light mb-2'>
                    Classic, NYT-style word puzzles for your publication - on any budget.</p>
                  <div>
                    <div className='btn btn-neutral btn-exciting'>
                      Browse catalogue
                      <MoveRightIcon size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href='/webdev' className='w-full'>
              <div className='flex gap-2 md:gap-8 w-full'>
                <div>
                  <CodeXmlIcon size={72} />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className='text-3xl font-medium'>Web Development</h3>
                  <p className='text-sm font-light mb-2'>
                    Making business-focused, data-driven web applications... and some fun stuff too.
                  </p>
                  <div>
                    <div className='btn btn-neutral btn-exciting'>
                      My projects
                      <MoveRightIcon size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* PROJECTS */}
          <div className='flex flex-col gap-8 w-full mt-4 bg-white p-4 md:p-8 rounded-sm shadow-md'
            style={{ maxWidth: 650 }}>
            <h2 className="text-3xl font-semibold">Web Projects</h2>
            <Link href='/fountainize' className="w-full">
              <div className='flex gap-2 md:gap-8 w-full'>
                <div>
                  <DramaIcon size={72} />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className='text-3xl font-medium'>Fountainize</h3>
                  <p className='text-sm font-light'>A Google Docs add-on for writing screenplays with over 390k users.</p>
                  <div>
                    <div className='btn btn-neutral btn-exciting'>Learn more
                      <MoveRightIcon size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <Link href='/flask' className='w-full'>
              <div className='flex gap-2 md:gap-8 w-full'>
                <div>
                  <FlaskConicalIcon size={72} />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className='text-3xl font-medium'>Flask</h3>
                  <p className='text-sm font-light'>Flexible live audio software for Windows & MacOS.</p>
                  <div>
                    <div className='btn btn-neutral btn-exciting'>Check it out
                      <MoveRightIcon size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
