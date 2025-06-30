import A from './assets/html.png';
import B from './assets/css.png';
import C from './assets/js.png';
import D from './assets/react.png';
import E from './assets/nextjs.png';
import F from './assets/tailwind.png';
import G from './assets/nodejs.png';
import H from './assets/express.png';
import I from './assets/mongodb.png';
import J from './assets/mongoose.png';
import K from './assets/sql.png';
import L from './assets/mysql.png';
import M from './assets/python.png';
import N from './assets/java.png';
import O from './assets/c.png';
import P from './assets/cpp.png';

function Skills() {
  const skillsData = [
    { src: A, name: 'HTML' },
    { src: B, name: 'CSS' },
    { src: C, name: 'JavaScript' },
    { src: D, name: 'React.js' },
    { src: E, name: 'Next.js' },
    { src: F, name: 'Tailwind CSS' },
    { src: G, name: 'Node.js' },
    { src: H, name: 'Express.js' },
    { src: I, name: 'MongoDB' },
    { src: J, name: 'Mongoose' },
    { src: K, name: 'SQL' },
    { src: L, name: 'MySQL' },
    { src: M, name: 'Python' },
    { src: N, name: 'Java' },
    { src: O, name: 'C Language' },
    { src: P, name: 'C++' },
  ];

  return (
    <div id="skills" className="mt-15 pt-25 pb-15 px-4 sm:px-10">
      <h1 className="text-center text-3xl font-bold mb-10 text-cyan-400">
        SKILLS
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-12 gap-x-6 justify-items-center">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.src}
              alt={skill.name}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32
                         object-contain p-2 rounded-lg shadow-lg
                         transition-transform duration-300 hover:scale-110"
            />
            <p className="mt-2 text-sm sm:text-base text-gray-300 font-medium text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;