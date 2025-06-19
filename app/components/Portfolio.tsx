'use client';

import React, { useState} from 'react';
import Image from 'next/image';
import placeholderImage1 from '../../public/assets/proj1.png';
import placeholderImage2 from '../../public/assets/proj2.png';
import placeholderImage3 from '../../public/assets/proj3.png';

const projects = [
  {
    id: 1,
    year: 2024,
    title: 'Melodate - Music-based dating application',
    description:
      "Melodate is a music preference-based dating application that aims to create a more authentic and personalized matchmaking experience by utilizing users music tastes.",
    image: placeholderImage1,
    githubUrl: 'https://github.com/AlvinHartono/Melodate',
  },
  {
    id: 2,
    year: 2024,
    title: 'FlexMath - Your Mental Workout',
    description:
      'Developed FlexMath, an app to improve mental math skills through excercises and game modes',
    image: placeholderImage2,
    githubUrl: 'https://github.com/AlvinHartono/mental_math_trainer_app',
  },
  {
    id: 3,
    year: 2023,
    title: 'Nutrition Tracker App - Control Your Intakes',
    description:
      'Developed an app to track and visualize daily and past nutrition intakes, including feature food input with automatic nutrition calculation.',
    image: placeholderImage3,
    githubUrl: 'https://github.com/AlvinHartono/flutter-nutrition-tracker',
  },
];

const GitHubIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="inline-block"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  
  const handleGitHubClick = (githubUrl: string | URL | undefined, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation(); // Prevent triggering the project selection
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section id='portfolio' className='py-32 text-white'>
        <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-6xl font-bold mb-10'>
              Selected <span className='text-purple-400'>Projects</span>
            </h2>
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className='cursor-pointer mb-8 group'
              >
                <p className='text-purple-400 text-lg mb-2'>{project.year}</p>
                <div className='flex items-center justify-between'>
                  <h3
                    className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors 
                  ${
                    selectedProject.id === project.id ? 'text-purple-200' : ''
                  } duration-300`}
                  >
                    {project.title} ↗
                  </h3>
                  <button
                    onClick={(e) => handleGitHubClick(project.githubUrl, e)}
                    className='text-purple-400 hover:text-purple-200 transition-colors duration-300 p-2 rounded-full hover:bg-purple-400/10'
                    title='View on GitHub'
                  >
                    <GitHubIcon />
                  </button>
                </div>
                {selectedProject.id === project.id && (
                  <div className='border-b-2 border-purple-200 my-4'></div>
                )}
                {selectedProject.id === project.id && (
                  <p className='text-purple-200 transition-all duration-500 ease-in-out'>
                    {project.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        
        <Image
          src={selectedProject.image}
          alt={selectedProject.title}
          className='rounded-xl shadow-lg transition-opacity duration-500 ease-in-out'
          width={800}
          height={450}
        />
        </div>
      </section>
    </>
  );
};