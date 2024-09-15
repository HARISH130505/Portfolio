import KFC from './assets/icon.png'
import Calc from './assets/calc.png'
import Agc from './assets/agc.jpg'
import Skart from './assets/skart.png'
import './Projects.css'
function Projects(){
      return(
        <div id="projects">
            <h1 className='huh'>PROJECTS</h1>
            <div className="main">
            <div className="pro">
                 <div className="smthg">
                 <img className="icon" src={KFC}></img>
                 <h1 className='n'>KFC CLONE</h1>
                 </div>
                 <p className='des'>A simple KFC clone using HTML,CSS</p>
                 <a href="https://kfc-zeta-six.vercel.app/">https://kfc-zeta-six.vercel.app/</a>
            </div>
            <div className="pro">
                 <div className="smthg">
                 <img className="icon" src={Calc}></img>
                 <h1 className='n'>CALCULATOR</h1>
                 </div>
                 <p className='des'>A simple Calculator using HTML,CSS,JS</p>
                 <a href="https://calculator-beige-xi.vercel.app/">https://calculator-beige-xi.vercel.app/</a>
            </div>
            <div className="pro">
                 <div className="smthg">
                 <img className="icon" src={Agc}></img>
                 <h1 className='n'>AGE-CALC</h1>
                 </div>
                 <p className='des'>An Age-Calculator using HTML,CSS,JS</p>
                 <a href="https://age-calc-lilac.vercel.app/">https://age-calc-lilac.vercel.app/</a>
            </div>
            <div className="pro">
                 <div className="smthg">
                 <img className="icon" src={Skart}></img>
                 <h1 className='n'>S-KART</h1>
                 </div>
                 <p className='des'>A Stationary Site using HTML,CSS,JS</p>
                 <a href="https://s-kart.vercel.app/">https://s-kart.vercel.app/</a>
            </div>
            </div>

        </div>
      );
}
export default Projects;