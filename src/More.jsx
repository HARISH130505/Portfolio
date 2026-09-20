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
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-cyan-300 mb-2">Education</h2>
                <p className="font-semibold text-cyan-100">SRM IST, Ramapuram</p>
                <p>B.Tech Computer Science & Engineering (2023–2027)</p>
                <p className="mt-1">
                  <span className="font-semibold text-cyan-200">CGPA - </span> 9.59
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-cyan-300 mb-2">Experience</h2>
                <p>
                  <span className="font-semibold text-cyan-100">Software Developer Intern</span> — Marlensoft Pvt. Ltd.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-cyan-300 mb-2">Connect</h2>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-base sm:text-lg">
                  <a href="https://github.com/HARISH130505" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">
                    GitHub
                  </a>|
                  <a href="https://www.linkedin.com/in/harish-jayakumar-9832ba2a4/" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">
                    LinkedIn
                  </a>|
                  <a href="mailto:harish10.exe@gmail.com" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">
                    Email
                  </a>|
                  <break></break>
                  <span className="text-cyan-100">Phone - 8807768816</span>
                </div>
              </section>
            </div>

            <div className="flex justify-end mt-6">
              <a
                href="https://drive.google.com/file/d/10P5-3RwdrYzgChE-mxhtRlxoC8sIQniY/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="px-6 py-3 bg-gradient-to-b from-cyan-500 to-cyan-700
                             text-white font-bold text-lg rounded-lg shadow-lg
                             hover:scale-105 transition duration-300 transform cursor-pointer"
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