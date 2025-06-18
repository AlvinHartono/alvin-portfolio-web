'use client';

import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <section
      id='contact'
      className='py-32 text-white max-w-[1200px] mx-auto px-4'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='grid lg:grid-cols-2 gap-16'
      >
        <div className='space-y-12'>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-7xl font-bold text-gray-300'
          >
            Get in <span className='text-purple-500'>touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='glass p-8 rounded-2xl space-y-8'
          >
            <div className='space-y-2'>
              <p className='text-lg text-purple-300'>Email</p>
              <a
                href='mailto:alvinhartono777@gmail.com'
                className='text-3xl lg:text-4xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2'
              >
                alvinhartono777@gmail.com
                <span className='text-purple-500'>↗</span>
              </a>
            </div>

            <div className='space-y-4'>
              <p className='text-lg text-purple-300'>Connect with me</p>
              <div className='flex gap-4'>
                <a
                  href='https://linkedin.com/in/alvinhartono/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition duration-300 font-semibold'
                >
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z' clipRule='evenodd' />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href='https://github.com/AlvinHartono'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition duration-300 font-semibold'
                >
                  <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z' clipRule='evenodd' />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>


          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='w-full h-full min-h-[400px] rounded-2xl glass p-8 flex flex-col justify-center items-center space-y-8'
        >
          <div className='text-center space-y-6'>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center'
            >
              <svg className='w-16 h-16 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
              </svg>
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className='text-3xl font-bold'
            >
              Let&apos;s work together
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className='text-lg text-gray-300 leading-relaxed max-w-md'
            >
              I&apos;m always excited to collaborate on new projects and bring creative ideas to life. Drop me a message and let&apos;s create something amazing together!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className='flex justify-center space-x-2'
            >
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className='w-3 h-3 bg-purple-500 rounded-full animate-pulse'
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};