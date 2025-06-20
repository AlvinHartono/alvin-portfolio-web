'use client';
import { motion } from 'motion/react';
import ProfilePic from '../../public/assets/alvin-square.png';
import Image from 'next/image';

export const Hero = () => {
  return (
    <>
      <div className='relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#340F41_35%,#8A3DA4_55%,#B993ED_85%)]'>
        <div
          className='absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2 
        bg-[radial-gradient(closest-side,#000_85%,#9E4AC5)] top-[450px] border-[1px] border-[#BD8CDE]/30'
        />

        <div className='container relative mx-auto px-4 pt-12 pb-24'>
          <div className='flex flex-col items-center justify-center text-center z-10'>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className='relative mb-8 mt-18'
            >
              <div className='absolute inset-0 bg-gradient-to-b from-purple-500/40 to-transparent rounded-full blur-3xl'></div>
              <Image
                src={ProfilePic}
                alt='profile pic'
                className='w-[250px] relative z-10'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='max-w-2xl'
            >
              <h1 className='text-6xl text-white/80 max-w-lg mx-auto leading-16'>
                Hi, I am
                <br />
                <div className='font-bold'>Alvin <span className='text-purple-300'>Hartono</span></div> 
              </h1>
              <p className='text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6'>
                Driven Informatics student in my final year, ready to launch a career as a Software Engineer.
              </p>

              <div className='flex gap-4 justify-center'>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className='px-6 py-3 font-bold bg-gradient-to-r from-purple-700 to-purple-500 rounded-full hover:purple-gray-700 transition-colors'
                >
                  Contact Me
                </motion.button>
                <motion.button className='px-6 py-3 border border-purple-400/20 rounded-full font-bold hover:bg-purple-700 transition-colors'>
                  My Works
                </motion.button>
              </div>
            </motion.div>
          </div>
          <motion.div></motion.div>
        </div>
      </div>
    </>
  );
};
