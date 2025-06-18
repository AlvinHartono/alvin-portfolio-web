'use client';

import React from 'react';
import { motion, useInView } from 'motion/react';
import bangkitLogo from '../../public/assets/bangkit.jpg';
import ubmLogo from '../../public/assets/ubm-logo.png';

const education = [
  {
    id: 1,
    degree: 'Bachelor of Informatics',
    field: 'Informatics',
    institution: 'University of Bunda Mulia',
    year: '2021-2025',
    description: 'Focused on software engineering, algorithms, and software development.',
    imageSrc: ubmLogo,
  },
  {
    id: 2,
    degree: 'Bangkit Academy 2024 Batch 2 ',
    field: 'Mobile Development',
    institution: 'Bangkit Academy (Led by Google, Tokopedia, Gojek, & Traveloka)',
    year: '2024',
    description: 'Intensive program covering modern native Android development.',
    imageSrc: bangkitLogo,
  },
];

export const Education = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    // We've wrapped the entire component in a <section> tag
    // and applied the same classes as the Contact section.
    <section
      id="education"
      className="py-32 text-white max-w-[1200px] mx-auto px-4"
    >
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-300"
        >
          EDUCATION
        </motion.h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center gap-8 glass p-8 rounded-2xl"
            >
              {/* Image */}
              <motion.img
                src= {edu.imageSrc.src}
                alt={`${edu.institution} logo`}
                className="w-32 h-32 object-contain rounded-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              />

              {/* Details */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <h3 className="text-2xl font-bold text-purple-400">{edu.degree}</h3>
                  <p className="text-lg font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-md">{edu.year}</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                   <p className="text-xl font-semibold text-gray-300">{edu.institution}</p>
                   <p className="text-lg text-purple-300">{edu.field}</p>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};