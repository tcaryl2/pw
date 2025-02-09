import "./Footer.css";

import { Link } from "react-router-dom";

import samsommer from "./samsommer.jpg";
import river from "./river.jpg";

import earningsData from "./edData2.png";

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="footer-contact">
                    <Link to="/contact">Contact Me Here</Link>
                </div>
            </div>
            <div>
                <div className="featured">
                    Featured Projects
                    <div className="feat-projects">
                        <div className="row">
                            <div className="img-container">
                                <Link to="fined"><img src={earningsData} alt="Earnings Day Project"/></Link>
                                <p>Earning Report Data Analysis</p>
                            </div>
                            <div className="img-container">
                                <Link to="/"><img src={samsommer} alt="samsommer"/></Link>
                                <p>My sea project</p>
                            </div>
                            <div className="img-container">
                                <Link to="/"><img src={river} alt="river"/></Link>
                                <p>My river project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="row">
                        <ul>
                            <li>About Me</li>
                            <li>This Website</li>
                            <li>MERN Stack</li>
                        </ul>
                        <ul>
                            <li>Economics</li>
                            <li>Pensions</li>
                            <li>Sri Lanka</li>
                            <li>Game Theory</li>
                        </ul>
                        <ul>
                            <li>Data Science</li>
                            <li>Relation Databases</li>
                            <li>Normalization</li>
                            <li>ClearDB</li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li>Finance</li>
                            <li>Net Present Value</li>
                            <li>Risk Analysis</li>
                            <li>Intel SoTP</li>
                        </ul>
                        <ul>
                            <li>Mathematics</li>
                            <li>RMT</li>
                            <li>GBM</li>
                            <li>Statistics</li>
                        </ul>
                        <ul>
                            <li>Other</li>
                            <li>Relational Databases</li>
                            <li>Normalization</li>
                            <li>ClearDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;