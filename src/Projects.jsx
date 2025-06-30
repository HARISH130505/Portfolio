import Skart from './assets/skart.png';
import MedFolio from './assets/medfolio.png';
import SoundBloc from './assets/sb.png'
import CareerForge from './assets/cf.jpg';
import Meif from './assets/meif.png';

function Projects() {
  const projects = [
    {
      title: 'S-KART',
      img: Skart,
      desc: 'Created my first responsive e-commerce website using HTML, CSS, and JavaScript, focused exclusively on selling stationary products. Implemented core features inspired by Amazon, including product listings, search functionality, cart management, and a user-friendly interface.',
      link: 'https://s-kart.vercel.app/',
    },
    {
      title: 'MEDFOLIO',
      img: MedFolio,
      desc: 'Created a seamless, secure, and accessible global healthcare website where patient records are readily available to authorized healthcare providers worldwide. Maintains the highest standards of privacy and security.',
      link: 'https://med-folio.vercel.app/',
    },
    {
      title: 'SOUNDBLOC',
      img: SoundBloc,
      desc: 'Developed the frontend interface for SoundBloc, a decentralized music label empowering artists to earn directly through NFT sales and micropayments.Also implemented the functionality for uploading and managing songs within a MongoDB database.',
      link: 'https://devfolio.co/projects/soundbloc-fa36',
    },
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