import Pfp from './assets/pfp.jpg';
import { HashLink } from 'react-router-hash-link';

function About() {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row items-center justify-center mt-15 pt-25 pb-15 px-4 sm:px-8 lg:px-16 text-white gap-12 md:gap-16"
    >
      <div className='flex flex-col items-center justify-center'>
        <style jsx>{`
          @keyframes glow-border-local {
            0%, 100% {
              box-shadow: 0 0 20px rgba(103, 232, 249, 0.5); /* Increased spread radius */
              border-color: rgba(103, 232, 249, 0.7);
            }
            50% {
              box-shadow: 0 0 60px rgba(103, 232, 249, 1); /* Increased spread radius */
              border-color: rgba(103, 232, 249, 1);
            }
          }

          .animate-glow-ease-local {
            animation: glow-border-local 3s ease-in-out infinite;
          }
        `}</style>

        <div className="flex-shrink-0 order-first md:order-none mb-8 md:mb-0">
          <img
            src={Pfp}
            alt="Profile"
            className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover mx-auto border-4 border-cyan-300 animate-glow-ease-local"
          />
        </div>

        <div className="mt-3 md:mt-6">
          <HashLink to="#moree" smooth>
            <button className="px-8 py-3 cursor-pointer text-white rounded-xl text-lg font-bold font-turret bg-gradient-to-b from-cyan-500 to-cyan-700 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-400/60 transition-all duration-300 transform hover:scale-105">
              CONNECT WITH ME
            </button>
          </HashLink>
        </div>
      </div>

      <div className="max-w-3xl text-center md:text-left space-y-8">
        <h1 className="text-3xl font-bold text-cyan-400 drop-shadow-md mb-6">
          ABOUT ME
        </h1>

        <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
          Hey everyone! I’m <span className="font-semibold text-cyan-200">Harish</span> — a passionate <span className="font-semibold text-cyan-200">Full-Stack Developer</span> focused on building clean, intuitive, and scalable web applications. Here's a breakdown of my expertise:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-3">Frontend Development</h2>
            <p className="text-base text-gray-300 leading-relaxed">
              I excel in creating responsive, user-friendly interfaces using <span className="font-semibold text-cyan-200">React.js</span> for dynamic component-based UIs and <span className="font-semibold text-cyan-200">Tailwind CSS</span> for rapid and elegant styling. My goal is to deliver great user experiences through clean and interactive designs.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-3">Backend Development</h2>
            <p className="text-base text-gray-300 leading-relaxed">
              On the backend, I build secure and efficient APIs and database systems primarily with <span className="font-semibold text-cyan-200">Node.js</span> and <span className="font-semibold text-cyan-200">Express.js</span>. I use <span className="font-semibold text-cyan-200">MongoDB</span> for flexible and scalable data storage, bringing robust server-side logic to life.
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-3">Other Technologies & Interests</h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Beyond traditional web development, I'm actively exploring emerging fields like <span className="font-semibold text-cyan-200">AI</span> and <span className="font-semibold text-cyan-200">blockchain technologies</span>. I enjoy participating in <span className="font-semibold text-cyan-200">hackathons</span> to solve real-world problems and continuously sharpen my skills by staying updated on the latest tech trends.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;