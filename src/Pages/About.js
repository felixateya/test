import Navbar from "../Components/Navbar";
import 'animate.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="About">
      <Navbar />
      <div className="Aboutme animate__animated">
        <div className="img"></div>
        <div>
          <FontAwesomeIcon icon= {faIndustry}/>
        </div>
        <div className="rite">
          <h1 className = " animate__animated animate__backInDown">ABOUT ME</h1>
          <p className = " animate__animated animate__backInDown">
            Hello! I’m Felix Mulaa. Web Developer with over 8 years of
            experience. Experienced with all stages of the development cycle for
            dynamic web projects. Having an in-depth knowledge including
            advanced HTML5, CSS3, JavaScript, jQuery, React JS. Strong
            background in management and leadership.
          </p>
          <h3 className = "animate__animated animate__backInDown">
            <span>NAME:</span>Felix Mulaa
          </h3>
          <h3 className = "animate__animated animate__backInDown">
            <span>DATE OF BIRTH:</span>9 November 1999
          </h3>
          <h3 className = "animate__animated animate__backInDown">
            <span>NATIONALITY:</span>Kenya
          </h3>
          <h3 className ="animate__animated animate__backInDown">
            <span>PHONE:</span>+254746886189
          </h3>
          <h3 className = "animate__animated animate__backInDown">
            <span>EMAIL:</span>mulaafelix6@gmail.com
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About;
