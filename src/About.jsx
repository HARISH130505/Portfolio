import './About.css'
import Pfp from './assets/pfp.jpg'
import {HashLink} from 'react-router-hash-link';
function About(){
    return(
        <div id="about" className='abm'>
        <div className="am">
            <h1>ABOUT</h1>
            <p className="me">Hey everyone! This is Harish. I’m a frontend developer with a knack for crafting clean and intuitive user interfaces. I’ve been working with HTML, CSS, and JavaScript for a while and now, I’m currently diving deep into React. I love staying up-to-date with the latest trends in web development and building cool projects.</p>
            <HashLink to="#moree">
                <button class="m">MORE ABOUT ME</button>
            </HashLink>
        </div>
        <div>
            <img src={Pfp} className='profile'></img>
        </div>
        </div>
    );
}
export default About;