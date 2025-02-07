import "./Navbar.css";
import { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div id="nav-left" className="navbar">
                <Link to="/"><ul>Home</ul></Link>
                <Link to="/vr"><ul>Economics</ul></Link>
                <Link to="/vl"><ul>Finance</ul></Link>
                <Link to="/datascience"><ul>Data Science</ul></Link>
            </div>
            <div id="nav-right" className="navbar">
                <Link><ul>Contact</ul></Link>
                <Link><ul>LinkedIn</ul></Link>
                <Link><ul>GitHub</ul></Link>
                <Link><ul>Instagram</ul></Link>
            </div>
        </nav>
      );
}
 
export default Navbar;