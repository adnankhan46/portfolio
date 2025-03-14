import { Inter } from 'next/font/google'
import Link from 'next/link';
import { Experience, Project } from './types';
import AlertButtonLive from './components/AlertButton';
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const skills = ['C++', 'JavaScript', 'TypeScript', 'Next.js', 'Node.js', 'MongoDB', 'DevOps*', 'Docker', 'Python3'];

  const projects: Project[] = [
    { name: 'CampusX', description: 'I will update it', github:'https://www.github.com/adnankhan46', url:'' },
    { name: 'BooleanAI', description: 'AI Digital Electronics Question Solver from Whiteboard. It lets you convert Codes, Simplify Logic Gates, Boolean Algebra, Binary Arithmetic, K-Map.', github:'https://www.github.com/adnankhan46', url:'' },
    { name: 'A toy Javascript game - for fun* ', description: 'A fun javascript obstable avoiding game. The game recieved 200+ unique visitors within 1st hour of launch in the college Campus ', github:'https://www.github.com/adnankhan46', url:'https://falaksuperman.netlify.app' },
  ];

  
  const experience: Experience[] = [
    { 
      title: 'Web Dev intern',
      company: 'Starlight Foundation',
      period: 'Feb 2024 - Apr 2024',
      description: 'Developed and maintained web application using React.js and Firebase Cloud'
    }
  ]
  const proofOfWork = [
    { 
      type: 'Commit', 
      text: 'Added NSFW Content Filteration for Posts using tensorflow.js',
      url: 'https://github.com/adnankhan46/campusx/commit/fe7e3e8a74099f6d79f5c1c20910b6fa3e9a7fd3'
    },
    { 
      type: 'Commit', 
      text: 'Added Chatbot using Gemini API over custom Dataset',
      url: 'https://github.com/adnankhan46/campusx/commit/900faa8cc40750f93b73e0cad28710936e93d10c' 
    }
  ];


  return (
    <div className={`${inter.className} bg-white text-gray-900 pb-2`}>
      <div className="flex items-center justify-center min-h-screen">
        <div>
         <div className="relative w-full h-36 md:h-52 lg:h-44">
        <Image
          src="/background/wallpaper.avif"
          alt="Landscape banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
        
        <div className="w-full max-w-3xl px-4 shadow-md rounded-lg">
          <header className="mb-4">
          <h1 className="text-4xl font-bold mt-2">Adnan Khan</h1>
          <p className="text-lg mt-2">I am second year undergrad and a hobbyist developer</p>
          <p className="text-lg mt-2">I started programming at 13</p>
          </header>

          {/* @Socials */}
          <div className="flex gap-4 mb-8">
            <Link href="https://github.com/adnankhan46" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.305-.535-1.54.117-3.205 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.665.24 2.9.118 3.205.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.22.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/adnankhan93" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.5h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.5c.88-1.32 2.34-2.5 4-2.5 2.76 0 5 2.24 5 5v6.5z" />
              </svg>
            </Link>
            <Link href="https://www.x.com/adnankhan_93" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.128 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.729-.666 1.574-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.388 1.698 4.384 3.95 4.838-.414.112-.85.171-1.3.171-.317 0-.626-.031-.928-.088.627 1.956 2.444 3.379 4.6 3.419-1.684 1.32-3.808 2.107-6.115 2.107-.397 0-.788-.023-1.175-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.426-.014-.637.961-.694 1.796-1.562 2.457-2.549z" />
              </svg>
            </Link>
          </div>

      {/* @GitHub Contributions */}
          <section className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4">Proof of Work</h2>
          <div className="space-y-4">
        {proofOfWork.map((item, index) => (
          <a 
            key={index}
            href={item.url} 
            className="border border-gray-200 rounded-lg p-4 flex items-center space-x-3 hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-gray-600"><svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.305-.535-1.54.117-3.205 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.665.24 2.9.118 3.205.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.22.694.825.577C20.565 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg></span>
            <span className="text-black">{item.text}</span>
          </a>
        ))}
      </div>
      </section>

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
                   <div className='text-sm bg-gray-100 px-3 py-1 rounded-full inline cursor-pointer'>
                    {(project.url.length!=0) ? 
                    <Link href={project.url} >
                      View Live<span className="absolute w-2 h-2 me-2 bg-green-400 rounded-full"></span>
                    </Link>
                     : <AlertButtonLive/>}

                    </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className='flex justify-center mt-2'>
              <div className='text-center bg-gray-100 px-3 py-1 rounded-md inline cursor-pointer'>
                <Link href='/projects'>View All</Link>
              </div>
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

