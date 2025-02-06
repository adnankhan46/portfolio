import { Inter } from 'next/font/google'
import Link from 'next/link';
import AlertButton from './components/AlertButton';
// import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const skills = ['C++', 'JavaScript', 'TypeScript', 'Next.js', 'Node.js', 'MongoDB', 'DevOps*'];

  const projects = [
    { name: 'CampusX', description: 'I will update it', github:'https://www.github.com/adnankhan46', url:'#' },
    { name: 'BooleanAI', description: 'AI Digital Electronics Question Solver from Whiteboard. It lets you convert Codes, Simplify Logic Gates, Boolean Algebra, Binary Arithmetic, K-Map.', github:'https://www.github.com/adnankhan46', url:'' },
    { name: 'A toy Javascript game - for fun* ', description: 'A fun javascript obstable avoiding game. The game recieved 200+ unique visitors within 1st hour of launch in the college Campus ', github:'https://www.github.com/adnankhan46', url:'https://falaksuperman.netlify.app' },
  ];

  const experience = [
    { 
      title: 'Web Dev intern',
      company: 'Starlight Foundation',
      period: 'Feb 2024 - Apr 2024',
      description: 'Developed and maintained web application using React.js.'
    }
  ]

  return (
    <div className={`${inter.className} bg-white text-gray-900 pb-2`}>
      <div className="flex items-center justify-center min-h-screen">
        <div>
         {/* <div className="relative w-full h-36 md:h-52 lg:h-44">
        <Image
          src="/background/wallpaper.avif"
          alt="Landscape banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div> */}
        
        <div className="w-full max-w-3xl px-4 shadow-md rounded-lg">
          <header className="mb-10">
            {/* Add some images */}
          <h1 className="text-4xl font-bold mt-2">Adnan Khan</h1>
          <p className="text-lg mt-2">I am second year undergrad and a hobbyist developer</p>
          <p className="text-lg mt-2">I started programming at 13</p>
          {/* TODO: Add Socials */}
          </header>

          <main>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="bg-gray-100 px-3 py-1 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            {/* ##################  Projects */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <ul className="space-y-4">
                {projects.map((project) => (
                  <li key={project.name} className=" flex flex-col border-l-2 border-gray-200 pl-4">
                    <div className='flex flex-col'>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-gray-600 ">{project.description}</p>
                    </div>
                      
                    <div className='flex gap-2 my-2'>
                    <Link href={project.github} className='text-sm bg-gray-100 px-3 py-1 rounded-full inline cursor-pointer'>Github</Link>
                    <Link href={project.url} className='text-sm bg-gray-100 px-3 py-1 rounded-full inline cursor-pointer'><AlertButton /></Link>
                    </div>
                  </li>
                ))}
              </ul>
              <div className='flex justify-center mt-2'>
              <div className='text-center bg-gray-100 px-3 py-1 rounded-md inline cursor-pointer'>View All</div>
              </div>
            </section>
            {/* ################## Exp */}
            <section className='mb-10'>
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>
              <ul className="space-y-4">
                {experience.map((exp) => (
                  <li key={exp.title} className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-sm text-gray-600">{exp.company} | {exp.period}</p>
                    <p className="text-sm mt-1">{exp.description}</p>
                  </li>
                ))}
              </ul>
            </section>
            {/* ################## Research Project */}
            <section className='mb-10'>
              <h2 className="text-2xl font-semibold mb-4">Research Projects</h2>
              <ul className="space-y-4">
                i am running
              </ul>
            </section>
          </main>

          <footer className="mt-10 text-center text-lg text-gray-500 pb-8">
            <p className='text-sm'>© 2025 AK. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="https://www.github.com/adnankhan46" className="hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/adnankhan93" className="hover:underline">LinkedIn</a>
              <a href="https://www.x.com/adnankhan_93" className="hover:underline">Twitter</a>
            </div>
          </footer>
        </div> </div>
      </div>
    </div>
  )
}

