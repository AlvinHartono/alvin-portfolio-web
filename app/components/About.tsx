import project1 from '../../public/assets/proj5.png';
import Image from 'next/image';

export const About = () => {
  return (
    <section id='about' className='text-white p-8 bg-black'>
      <h2 className='text-6xl font-bold mb-8'>
        About <span className='text-purple-300'>Me</span>
      </h2>
      <div className='grid md:grid-cols-3 gap-8'>
        <div className='border border-white/20 rounded-lg p-6'>
          <h3 className='text-2xl font-bold mb-2'>01. Background</h3>
          <p className='text-white/50 mb-6'>
            I&apos;m a final-year Informatics student focusing on mobile
            development, equipped with a strong foundation in computer science
            and a keen interest in building functional and innovative mobile
            applications. My path into tech was fueled by a curiosity about how
            software empowers mobile devices, guiding me to hone my skills in
            creating user-centric apps.
          </p>
          <div className='rounded-lg p-4 mb-4 border-white/20'>
            <code className='text-purple-200/50'>
              const skills = [<br />
              &nbsp;&nbsp;&apos;Flutter&apos;,
              <br />
              &nbsp;&nbsp;&apos;Kotlin&apos;,
              <br />
              &nbsp;&nbsp;&apos;Java&apos;,
              <br />
              &nbsp;&nbsp;&apos;Javascript&apos;,
              <br />
              &nbsp;&nbsp;&apos;Node.js&apos;,
              <br />
              &nbsp;&nbsp;&apos;Python&apos;,
              <br />
              &nbsp;&nbsp;&apos;SQL&apos;,
              <br />
              ];
            </code>
          </div>
        </div>
        <div className='border border-white/20 rounded-lg p-6'>
          <h3 className='text-2xl font-bold mb-2'>02. Expertise</h3>
          <p className='text-white/50'>
            I build modern mobile applications, with a focus on creating
            intuitive user interfaces and robust functionality. My skills cover
            the key aspects of mobile development, from concept to deployment.
          </p>
          <div className='mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden'>
            <Image
              src={project1}
              alt='project 1'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
        </div>
        <div className='border  border-white/20 rounded-lg p-6'>
          <h3 className='text-2xl font-bold mb-2'>03. Skills</h3>
          <p>
            I&apos;m proficient in a wide range of technologies and constantly
            expanding my skill set to stay at the forefront of web development.
          </p>
          <div className='grid text-center gap-4'>
            <div className='border border-white/20 rounded-lg p-3'>
              <h4 className='text-purple-300 font-medium mb-2'>Frontend</h4>
              <ul className='text-white/50 space-y-1 text-sm'>
                <li>Flutter</li>
                <li>Kotlin</li>
                <li>React</li>
                <li>Framer Motion</li>
              </ul>
            </div>

            <div className='border border-white/20 rounded-lg p-3'>
              <h4 className='text-purple-300 font-medium mb-2'>Backend</h4>
              <ul className='text-white/50 space-y-1 text-sm'>
                <li>Node.js</li>
                <li>Java Spring Boot</li>
                <li>Golang</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-8 mt-8'>
        {/* <div className='border border-white/20 rounded-lg p-3'>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium mb-1'>
                Front-end
              </label>
              <Progress
                value={90}
                className='bg-purple-300/20 [&>div]:bg-purple-100/80'
              ></Progress>
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>back-end</label>
              <Progress
                value={85}
                className='bg-purple-300/20 [&>div]:bg-purple-100/80'
              ></Progress>
            </div>
            <div>
              <label className='block text-sm font-medium mb-1'>dev-ops</label>
              <Progress
                value={75}
                className='bg-purple-300/20 [&>div]:bg-purple-100/80'
              ></Progress>
            </div>
          </div>
          <h3 className='text-2xl font-bold mt-4 mb-2'>04. Approach</h3>
          <p className='text-white/50'>
            I believe in writing clean, maintainable code and following best
            practices. My approach involves understanding client needs, planning
            thoroughly, and delivering high-quality solutions on time.
          </p>
        </div> */}

        {/* <div className='border border-white/20 rounded-lg p-6'>
          <div className='h-[200px] overflow-hidden p-4 border border-white/20 relative'>
            <Image
              src={project2}
              alt='project 2'
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
          </div>

          <div>
            <h3 className='text-2xl font-bold mb-6'>05. Goals</h3>
            <p className='text-white/50'>
              My goal is to continue growing as a developer, tackling
              challenging projects, and contributing to the tech community.
              I&apos;m always excited to learn new technologies and push the
              boundaries.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
