import CareerForge from './assets/cf.jpg';
import Meif from './assets/meif.png';
import Pgp from './assets/pgp.jpeg'

function Projects() {
  const projects = [
    {
      title: 'CAREER FORGE',
      img: CareerForge,
      desc: 'Created a modern and user-friendly platform that showcases their comprehensive training programs, including FMOS and US CFA programs. Designed to empower aspiring financial professionals to explore opportunities and connect with CareerForge.',
      link: 'https://career-forge-phi.vercel.app/',
    },
    {
      title: 'MEIF',
      img: Meif,
      desc: 'Developed a website to support an environmental initiative focused on native tree planting, hygiene awareness, and green space creation by school students. The site facilitates collaboration with organizations and provides advocacy resources.',
      link: 'https://www.motherearthindia.org.in/',
    },
    {
      title: 'PGP Associates',
      img: Pgp,
      desc: 'Built a full-stack advisory consultation platform enabling users to explore services and seamlessly book consultations. Integrated secure payment verification, automated email confirmations and Google Meet links with a responsive user interface.',
      link: 'https://pgpassociates19.com/',
    },
    {
      title: 'Homie Foods',
      img: 'placeholder.png',
      desc: 'Built a modern web platform connecting customers with home chefs, making authentic home-cooked food more accessible through seamless ordering. Empowered vendors with dedicated dashboards, real-time order tracking, and scalable backend management.',
      link: 'https://github.com/HARISH130505/HomieFoods',
    },
    {
      title: 'FloatChat',
      img: 'placeholder.png',
      desc: 'Developed FloatChat, an AI-powered ocean analytics platform enabling natural language exploration of large-scale ARGO datasets with interactive visualizations. Built a data pipeline for chatbot, anomaly detection, and time-series forecasting to deliver reliable ocean insights.',
      link: 'https://github.com/HARISH130505/Floatchat',
    },


    
  ];

  return (
    <div id="projects" className="mt-15 pt-25 pb-15 px-4 sm:px-10">
      <h1 className="text-center text-3xl font-bold mb-12 text-cyan-400">
        MY PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-xl p-6 text-white shadow-xl
                       flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                       w-full max-w-sm sm:max-w-md"
          >
            <div className="flex items-center mb-5">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-20 h-20 object-contain rounded-lg shadow-md flex-shrink-0"
              />
              <h2 className="ml-4 text-xl sm:text-2xl font-semibold text-cyan-300">
                {proj.title}
              </h2>
            </div>
            <p className="text-base text-gray-300 mb-5 flex-grow">
              {proj.desc}
            </p>
            <a
              href={proj.link}
              className="text-blue-400 hover:text-blue-300 underline text-xl break-all transition-colors duration-200"
            >
              {proj.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;