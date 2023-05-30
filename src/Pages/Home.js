import Navbar from "../Components/Navbar"
import 'animate.css'
function Home () {
    return (
        <div className = "Home">
            <Navbar/>
            <div className= "Name animate__animated animate__backInLeft">
        <h1>Hi...My name is Felix Mulaa</h1>
        <p> I am a Fullstack Software Developer</p>
                
            </div>
        </div>
    )
}

export default Home