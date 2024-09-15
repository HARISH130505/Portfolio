import './Skills.css'
import A from './assets/a.png'
import B from './assets/b.png'
import C from './assets/c.png'
import D from './assets/d.png'
import E from './assets/e.png'
import F from './assets/f.png'
import G from './assets/g.png'
import H from './assets/h.png'
function Skills(){
    return(
        <div id="skills" className='ok'>
            <h1 className='h'>SKILLS</h1>
        <div className="skill">
           <img className="i" src={A}></img>
           <img className="i" src={B}></img>
           <img className="i" src={C}></img>
           <img className="i" src={D}></img>
           <img className="i" src={E}></img>
           <img className="i" src={F}></img>
           <img className="i" src={G}></img>
           <img className="i" src={H}></img>
        </div>
        </div>
    );
}
export default Skills;