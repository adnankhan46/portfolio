import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const skills = ['C++', 'JavaScript', 'TypeScript', 'Next.js', 'Node.js', 'MongoDB'];

  const projects = [
    { name: 'CampusX', description: 'I will update it', github:'https://www.github.com/adnankhan46', url:'#' },
    { name: 'BooleanAI', description: 'I will update it', github:'https://www.github.com/adnankhan46', url:'' },
    { name: 'A game', description: 'I will update it', github:'https://www.github.com/adnankhan46', url:'' },
  ];

  const experience = [
    { 
      title: 'Web Developer',
      company: 'Starlight Foundation',
      period: 'Feb 2024 - Apr 2024',
      description: 'Developed and maintained web application using React.js.'
    }
  ]
  return (
    <div className={`${inter.className} bg-white text-gray-900 py-8`}>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl px-4">
          <header className="mb-10">
            {/* Add some images */}
          <h1 className="text-4xl font-bold">Adnan Khan</h1>
          <p className="text-lg mt-2">I am second year undergrad and a hobbyist developer</p>
          <p className="text-lg mt-2">I started programming at 13</p>
          {/* TODO: Add Socials */}
          </header>

          <main>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
            {/* ##################  Projects */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <ul className="space-y-4">
                {projects.map((project) => (
                  <li key={project.name} className=" flex justify-between items-center border-l-2 border-gray-200 pl-4">
                    <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                      
                    <div className=' flex gap-1'>
                    <Link href={project.github} className='text-sm bg-gray-100 px-3 py-1 rounded-full inline cursor-pointer'>Github</Link>
                    <Link href={project.url} className='text-sm bg-gray-100 px-3 py-1 rounded-full inline cursor-pointer'>Visit</Link>
                    </div >
                  </li>
                ))}
              </ul>
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
                running
              </ul>
            </section>
          </main>

          <footer className="mt-10 text-center text-lg text-gray-500">
            <p className='text-sm'>© 2025 AK. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="https://www.github.com/adnankhan46" className="hover:underline">GitHub</a>
              <a href="https://www.github.com/adnankhan46" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Twitter</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

