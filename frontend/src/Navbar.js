import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div id="nav-left" className="navbar">
                <Link to="/"><ul>Home</ul></Link>
                <Link to="/economics"><ul>Economics</ul></Link>
                <Link to="/finance"><ul>Finance</ul></Link>
                <Link to="/datascience"><ul>Data Science</ul></Link>
            </div>
            <div id="nav-right" className="navbar">
                <Link to="/contact"><ul>Contact</ul></Link>
                <a href="https://www.kaggle.com/timothycaryl" target="_blank" rel="noopener noreferrer"><ul>Kaggle</ul></a>
                <a href="https://github.com/tcaryl2" target="_blank" rel="noopener noreferrer"><ul>GitHub</ul></a>
                <a href="https://www.linkedin.com/in/timothycaryl/" target="_blank" rel="noopener noreferrer"><ul>LinkedIn</ul></a>
                <a href="https://www.instagram.com/timothycaryl1/" target="_blank" rel="noopener noreferrer"><ul>Instagram</ul></a>
            </div>
        </nav>
      );
}
 
export default Navbar;