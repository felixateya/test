import React from "react"
import { Link } from "react-router-dom"
function Navbar () {
    return (
        <div className = "Navbar">
            <ul>
                <li><Link  to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Skills">Skills</Link></li>
                <li><Link to="/Works">Works</Link></li>
                <li><Link to="/Clients">Clients</Link></li>
            </ul>
        </div>
    )
}

export default Navbar