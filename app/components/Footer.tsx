import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className="relative py-8 max-w-[1200px] mx-auto px-4 overflow-hidden">
      {/* Background decoration - no changes here */}
      <div className="md:hidden absolute inset-0">
        <div className="absolute top-[20%] left-[20%] w-[100px] h-[100px] bg-purple-300 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute top-[20%] left-[50%] w-[150px] h-[70px] bg-purple-900 rounded-full opacity-50 transform translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute top-[25%] left-[65%] w-[100px] h-[100px] bg-purple-600 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[-50%]"></div>
      </div>
      <div className="hidden md:block absolute inset-0">
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-purple-300 rounded-full opacity-40 transform translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute top-[45%] left-[60%] w-[250px] h-[150px] bg-purple-200 rounded-full opacity-20 transform translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute top-[60%] left-[49%] w-[200px] h-[100px] bg-purple-600 rounded-full opacity-30 transform translate-x-[-50%] translate-y-[-50%]"></div>
      </div>

      {/* --- FIX --- We wrap all content in a div with relative z-10 */}
      <div className="relative z-10">
        <div className="text-center mt-8">
          <h1 className="hidden md:block lg:text-[15rem] md:text-[12rem] font-bold text-white/10">ALVIN H</h1>
          <h1 className="md:hidden mb-12 relative text-8xl font-bold text-white/10">ALVIN H</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-gray-200">
          <div className="space-y-2">
            <h3 className="font-bold">Contact Me</h3>
            <p>alvinhartono777@gmail.com</p>
          </div>

          <div className="space-y-2">
            {/* You can add useful links here later */}
          </div>

          <div className="space-y-2">
            <h3 className="font-bold">Social</h3>
            <ul>
              {/* --- FIX --- Added correct links to the text as well */}
              <li>
                <a href="https://github.com/AlvinHartono" target="_blank" rel="noopener noreferrer" className="hover:underline">Github</a>
              </li>
              <li>
                <a href="https://linkedin.com/in/alvinhartono/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-gray-400 mt-12 container flex sm:justify-between justify-center items-center gap-10">
          <p>
            © 2025. All rights reserved.
          </p>

          <ul className="flex flex-row gap-6">
            <li>
              <a href="https://github.com/AlvinHartono" target="_blank" rel="noopener noreferrer">
                <AiFillGithub size={30} className="hover:text-purple-400 transition-colors" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/alvinhartono/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin size={30} className="hover:text-purple-400 transition-colors" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}