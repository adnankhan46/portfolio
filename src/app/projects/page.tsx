import React from 'react'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import { Project } from '../types';
// import AlertButtonLive from '../components/AlertButton';

const inter = Inter({ subsets: ['latin'] })

function page() {

    const projects: Project[] = [
        { name: 'CampusX', description: 'I will update it', github:'https://www.github.com/adnankhan46', url:'', live: false,image: '/projects/sheshield.png', playstore: ''},
        { name: 'BooleanAI', description: 'AI Digital Electronics Question Solver from Whiteboard. It lets you convert Codes, Simplify Logic Gates, Boolean Algebra, Binary Arithmetic, K-Map.', github:'https://www.github.com/adnankhan46', url:'', live: false, playstore: ''},
        { name: 'A toy Javascript game - for fun* ', description: 'A fun javascript obstable avoiding game. The game recieved 200+ unique visitors within 1st hour of launch in the college Campus ', github:'https://www.github.com/adnankhan46', url:'https://falaksuperman.netlify.app', live: true, playstore: ''},
        { name: 'SheShield ', description: 'The SheShield is designed to provide emergency assistance in unsafe situations. It includes features like SOS alerts, safe zone tracking, whiteboard gesture detection, timer-based emergency alerts, and fake call simulation for personal safety.', github:'https://github.com/adnankhan46/bit-innovathon', url:'', live: false, playstore: ''},
      ];
    
  return (
    <div className={`${inter.className} bg-white text-gray-900 pb-2`}>
      <div className="flex pt-12 justify-center min-h-screen">
      <div className="w-full max-w-3xl px-4 shadow-md rounded-lg">
      <section className="all-projects">
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <ul className="space-y-4">
                {projects.map((project) => (
                  <li key={project.name} className=" flex flex-col border-l-2 border-gray-200 pl-4">
                     
                    <div className='flex flex-col'>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-gray-600 ">{project.description}</p>
                    </div>
                      
                    <div className='flex gap-2 my-2'>
  {(
    project.github && (
      <Link href={project.github} className='text-sm bg-gray-100 px-3 py-1 rounded-lg inline cursor-pointer'>
        Github
      </Link>
    )
  )}
  
  {project.url && (
    <div className='text-sm bg-gray-100 px-3 py-1 rounded-lg inline cursor-pointer'>
      <Link href={project.url}>
        View
      </Link>
    </div>
  )}
</div>

                  </li>
                ))}
              </ul>
              
            </section>
        </div>
        </div>
        </div>
  )
}

export default page
