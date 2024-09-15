import './More.css'
function More(){
     const resume =()=>{
        window.open("https://res-port.my.canva.site/", "_blank");
     }
     return(
        <div className='md' id="moree">
            <h1 className='cn'>MORE DETAILS</h1>
        <div className="cent">
            <div className="moredet">
                 <h5>EDUCATION : SRM UNIVERSITY RMP(2023-2027)</h5>
                 <h5>COURSE : B.TECH CSE </h5>
                 <h5>GITHUB : <a href="https://github.com/HARISH130505">https://github.com/HARISH130505</a></h5>
                 <h5>LINKED IN : <a href="https://www.linkedin.com/in/harish-jayakumar-9832ba2a4/">https://www.linkedin.com/in/harish-jayakumar-9832ba2a4/</a></h5>
                 <h5>CONTACT NUMBER : 8807768816</h5>
                 <div className='res'>
                     <button className='btn' onClick={resume}>RESUME</button>
                 </div>
            </div>
        </div>
        </div>
     );
}
export default More;