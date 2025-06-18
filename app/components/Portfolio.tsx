'use client';

import React, { useState} from 'react';
import Image from 'next/image';
import placeholderImage1 from '../../public/assets/proj5.png';
import placeholderImage2 from '../../public/assets/proj6.png';
import placeholderImage3 from '../../public/assets/proj7.png';

const projects = [
  {
    id: 1,
    year: 2024,
    title: 'Melodate - Music-based dating application',
    description:
      "Melodate is a music preference-based dating application that aims to create a more authentic and personalized matchmaking experience by utilizing users music tastes.",
    image: placeholderImage1,
  },
  {
    id: 2,
    year: 2024,
    title: 'FlexMath - Your Mental Workout',
    description:
      'Developed FlexMath, an app to improve mental math skills through excercises and game modes',
    image: placeholderImage2,
  },
  {
    id: 3,
    year: 2023,
    title: 'Nutrition Tracker App - Control Your Intakes',
    description:
      'Developed an app to track and visualize daily and past nutrition intakes, including feature food input with automatic nutrition calculation.',
    image: placeholderImage3,
  },
];
export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
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
                <h3
                  className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors 
                ${
                  selectedProject.id === project.id ? 'text-purple-200' : ''
                } duration-300`}
                >
                  {project.title} ↗
                </h3>
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
