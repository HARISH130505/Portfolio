import './Header.css'
import {HashLink} from 'react-router-hash-link';
function Header(){
    return(
        <nav className="head" id="home">
            <h1>PORTFOLIO</h1>
            <ul>
                <li>
                <HashLink to="#home">
                    Home
                </HashLink>
                </li>
                <li>
                    <HashLink to="#about">
                    About
                    </HashLink>
                </li>
                <li>
                    <HashLink to="#skills">
                    Skills
                    </HashLink>
                </li>
                <li>
                    <HashLink to="#projects">
                    Projects
                    </HashLink>
                </li>
            </ul>
        </nav>
    );
}
export default Header;