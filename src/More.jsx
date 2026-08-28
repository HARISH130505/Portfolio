function More() {
  return (
    <>
      <style jsx>{`
        @keyframes glow-box-local {
          0%, 100% {
            box-shadow: 0 0 20px rgba(103, 232, 249, 0.5); /* cyan-300 with transparency */
            border-color: rgba(103, 232, 249, 0.7); /* cyan-300 with more transparency */
          }
          50% {
            box-shadow: 0 0 60px rgba(103, 232, 249, 1); /* full cyan-300 glow */
            border-color: rgba(103, 232, 249, 1); /* full cyan-300 border */
          }
        }

        .animate-glow-box-ease {
          animation: glow-box-local 3s ease-in-out infinite;
        }
      `}</style>

      <div id="moree" className="mt-15 pt-25 pb-15 px-4 sm:px-8">
        <h1 className="text-center text-3xl font-bold mb-12 text-cyan-400">
          MORE DETAILS
        </h1>
        <div className="flex justify-center items-center mb-12">
          <div
            className="border-2 border-cyan-400 text-white rounded-2xl p-6
                       w-full max-w-2xl
                       text-base sm:text-lg lg:text-xl
                       animate-glow-box-ease"
          >
            <h5 className="mb-2">
              <span className="font-semibold text-cyan-200">EDUCATION:</span> SRM UNIVERSITY RMP (2023–2027)
            </h5>
            <h5 className="mb-2">
              <span className="font-semibold text-cyan-200">COURSE:</span> B.TECH CSE
            </h5>
            <h5 className="mb-2">
              <span className="font-semibold text-cyan-200">CGPA:</span> 9.59
            </h5>
            <h5 className="mb-2">
              <span className="font-semibold text-cyan-200">POSITION:</span> Web Developer Intern at Marlensoft Pvt. Ltd.
            </h5>
            <h5 className="mb-2">
              <span className="font-semibold text-cyan-200">GITHUB:</span>{' '}
              <a href="https://github.com/HARISH130505" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">
                github.com/HARISH130505
              </a>
            </h5>
            <h5 className="mb-2">
              <span className="font-semibold text-cyan-200">LINKEDIN:</span>{' '}
              <a href="https://www.linkedin.com/in/harish-jayakumar-9832ba2a4/" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">
                linkedin.com/in/harish-jayakumar
              </a>
            </h5>
            <h5 className="mb-2">
              <span className="font-semibold text-cyan-200">CONTACT NUMBER:</span> 8807768816
            </h5>
            <h5 className="mb-4">
              <span className="font-semibold text-cyan-200">MAIL ID:</span>{' '}
              <a href="mailto:harish13.05.05@gmail.com" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">
                harish10.exe@gmail.com
              </a>
            </h5>
            <div className="flex justify-end mt-6">
              <a
                href="https://drive.google.com/file/d/1dVirdzIHCZOLHibTAGFAhSpJYtrZuzIS/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="px-6 py-3 bg-gradient-to-b from-cyan-500 to-cyan-700
                             text-white font-bold text-lg rounded-lg shadow-lg
                             hover:scale-105 transition duration-300 transform"
                >
                  VIEW RESUME
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default More;