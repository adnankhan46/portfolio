import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google'
import { Project } from '../types';
import { parseMarkdownLinks } from '../utils/markdownParser';

const inter = Inter({ subsets: ['latin'] })

function page() {

    const projects: Project[] = [
        { 
          name: 'CampusX', 
          description: 'A campus-based social platform where students get paid and experience by completing real company micro-tasks such as development, marketing, surveys and engagement activities.', 
          year: '(10 Nov 2023)',
          github:'https://www.github.com/adnankhan46/campusx', 
          url:'', 
          live: false,
          playstore: '',
          openSource: true
        },
        { 
          name: 'BooleanAI', 
          description: 'A digital electronics helper where students can draw or upload questions like K-Maps, logic gates, or code conversions and instantly get the solved answers.', 
          year: '(29 Oct 2024)',
          github:'https://www.github.com/adnankhan46/booleanai', 
          url:'https:booleanai.vercel.app', 
          live: true, 
          playstore: '',
          openSource: true,
        },
        { 
          name: 'CollabGPT', 
          description: 'Multi-user RAG app where people can chat collaboratively with multiple PDFs in a shared room. We built this feature even before perplexity & chatGPT.', 
          year: '(20 Mar 2025)',
          github:'https://www.github.com/adnankhan46/collab-gpt-rag', 
          url:'', 
          live: false, 
          playstore: '',
          openSource: true,
          logo: '/projects/CollabGPT/collabgpt-logo.png',
          screenshot: '/projects/CollabGPT/collabgpt-mockup.png'
        },
        { 
          name: 'KytBook', 
          description: 'An online directory of Used books. A Consumer to consumer used book sharing app. List your used books, add pickup address, clear the desk.', 
          year: '(24 April 2021)',
          url:'', 
          live: false, 
          playstore: '',
          logo: '/projects/KytBook/logo.png',
          screenshot: '/projects/KytBook/kytbook-mockup.png'
        },
        { 
          name: 'SkytChat', 
          description: 'A Chat app that detects receiver\'s facial expression of each messages sent and show to sender. 5 Expressions Like \'smiling, sad, etc\'. Built this before ai was a thing using rapid APIs with too tight limit, there were no good providers at that time.', 
          year: '(22 November 2020)',
          url:'', 
          live: false, 
          playstore: '',
          logo: '/projects/SkytChat/logo.png',
          screenshot: '/projects/SkytChat/skytchat-mockup.png'
        },
        { 
          name: 'Talk Of People', 
          description: 'App where teens can anonymously compliment each other through fun engaging polls. You vote for friends on positive compliments, and you get notified when someone picks you or your friends. Polls like \'who is funniest\'. [alternative to tbh by nikita bier](https://en.wikipedia.org/wiki/Tbh)',
          year: '(6 August 2022)',
          url:'', 
          live: false, 
          playstore: '',
          logo: '/projects/TOP/logo.png',
          screenshot: '/projects/TOP/top-mockup.png'
        },
        { 
          name: 'StudyTine', 
          description: 'A flashcard webapp for JEE exam with spaced-repetition system to remind for revision. Mostly for fking chemistry.', 
          year:'(24 February 2022)',
          url:'', 
          live: false, 
          playstore: '',
          logo:'/projects/StudyTine/logo.png'
        },
        { 
          name: 'BoolAI', 
          description: 'An assistant in your WhatsApp, call anywhere in any chat, ask group chat related questions, ask to explain received pdf. (puppeteer under the hood)', 
          year:'(4 June 2025)',
          github:'https://www.github.com/adnankhan46/boolai', 
          url:'', 
          live: false, 
          playstore: '',
          openSource: true
        },
        { 
          name: 'Commit App', 
          description: 'An invite-only habit commitment platform where your friends profit from your failures. Currently down due to india\'s betting apps regulations. Invites are still open.', 
          year:'(20 August 2025)',
          url:'https://getcommit.vercel.app', 
          live: false, 
          playstore: ''
        },
        { 
          name: 'PetrolNow', 
          description: 'In my city i noticed that nearby petrol pumps face shortages several times a month, so I built this to notify citizens about petrol availability.', 
          year:'(i don\'t know, 2022)',
          url:'', 
          live: false, 
          playstore: ''
        }
      ];
    
  return (
    <div className={`${inter.className} bg-white text-gray-900 pb-2`}>
      <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-3xl shadow-md rounded-lg">
      {/* Some headers */}
      <div>
        <div className="relative w-full rounded-lg h-36 md:h-52 lg:h-44">
            <Image
              src="/background/header-2.jpeg"
              alt="Landscape banner"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          
      </div>
      <section className="all-projects mx-4 my-2">
              <h2 className="text-4xl font-semibold my-6 font-serif">Some C<span style={{ fontFamily: "var(--ppe-italic)" }}>oo</span>l stuffs {`I've`} built</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <div key={project.name} className="flex flex-col border-l-2 border-gray-200 pl-4">
                     
                    <div className='flex flex-col'>
                      <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-3'>
                          {project.logo && (
                            <Image 
                              src={project.logo} 
                              alt={`${project.name} logo`}
                              width={54}
                              height={54}
                              className="rounded-lg"
                            />
                          )}
                          <div className='flex items-center gap-2'>
                          <h3 className="font-semibold">{project.name}</h3>
                          <h4 className='text-xs text-gray-500 font-semibold'>{project.year}</h4>
                          </div>
                        </div>
                        {project.openSource && (
                          <span className='text-[0.54rem] bg-gray-50 text-green-400 px-2 py-[2px] rounded-lg rotate-[5deg] shadow-sm uppercase tracking-wide'>open-source</span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 ">
                        {parseMarkdownLinks(project.description).map((part, index) => {
                          if (part.type === 'link' && part.url) {
                            return (
                              <Link 
                                key={index}
                                href={part.url} 
                                className="text-blue-600 hover:underline" 
                                target="_blank" 
                                rel="noopener noreferrer"
                              >
                                {part.text}
                              </Link>
                            );
                          }
                          return part.content;
                        })}
                      </p>
                      
                      {project.screenshot && (
                        <div className="mt-3 mb-3">
                          <Image 
                            src={project.screenshot} 
                            alt={`${project.name} screenshot`}
                            width={600}
                            height={300}
                            className="rounded-lg border border-gray-200 w-full"
                          />
                        </div>
                      )}
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

                  </div>
                ))}
              </div>
              
            </section>
        </div>
        </div>
        </div>
  )
}

export default page
