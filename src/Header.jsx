import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Menu, X } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 fixed top-0 left-0 w-full p-4 md:bg-white/20 flex flex-col sm:flex-row sm:justify-between items-center backdrop-blur-sm z-50" id="home">
            <div className="flex justify-between items-center w-full sm:w-auto">
                <h1 className="text-3xl font-extrabold text-white">PORTFOLIO</h1>
                <button
                    className="sm:hidden text-white p-2 rounded-md"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            <ul className={`
                ${isMenuOpen ? 'flex flex-col' : 'hidden'}
                sm:flex sm:flex-row items-center gap-y-3 sm:gap-x-6 w-full sm:w-auto mt-4 sm:mt-0
            `}>
                <li>
                    <HashLink
                        to="#about"
                        className="text-cyan-300 hover:text-blue-700 transition-all duration-200 text-xl font-medium px-3 py-2 rounded-md block w-full text-center hover:scale-110"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        to="#skills"
                        className="text-cyan-300 hover:text-blue-700 transition-all duration-200 text-xl font-medium px-3 py-2 rounded-md block w-full text-center hover:scale-110"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Skills
                    </HashLink>
                </li>
                <li>
                    <HashLink
                        to="#projects"
                        className="text-cyan-300 hover:text-blue-700 transition-all duration-200 text-xl font-medium px-3 py-2 rounded-md block w-full text-center hover:scale-110"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </HashLink>
                </li>
            </ul>
        </nav>
    );
}
export default Header;