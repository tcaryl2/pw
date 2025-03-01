import "./Footer.css";

import { Link } from "react-router-dom";

import earningsData from "./images/edData2.png";
import rmt from "./images/rmt.png";
import pensions from "./images/lifespanPensions.png";


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
                                <Link to="/finance/earnings"><img src={earningsData} alt="Earnings Day Project"/></Link>
                                <p>Earning Report Data Analysis</p>
                            </div>
                            <div className="img-container">
                                <Link to="/mathematics/rmt"><img src={rmt} alt="Ramanujan's Master Theorem"/></Link>
                                <p>Using Ramanujan's Master Theorem</p>
                            </div>
                            <div className="img-container">
                                <Link to="/economics/pensions"><img src={pensions} alt="Pensions and Lifespan"/></Link>
                                <p>Pensions and Lifespan</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="row">
                        <ul>
                            <li><Link to="/about" className="row-header">About Me</Link></li>
                            <li><Link to="/website">This Website</Link></li>
                            <li><Link to="/mern">MERN Stack</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/economics" className="row-header">Economics</Link></li>
                            <li><Link to="/economics/pensions">Pensions & Lifespan</Link></li>
                            <li><Link to="/economics/srilanka">Economy of Sri Lanka</Link></li>
                            <li><Link to="/economics/gametheory">Game Theory</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/datascience" className="row-header">Data Science</Link></li>
                            <li><Link to="/datascience/relationaldb">Relational Databases</Link></li>
                            <li><Link to="/datascience/normalization">Normalization</Link></li>
                            <li><Link to="/datascience/cleardb">ClearDB</Link></li>
                        </ul>
                    </div>
                    <div className="row">
                        <ul>
                            <li><Link to="/finance" className="row-header">Finance</Link></li>
                            <li><Link to="/finance/presentvalue">Discounting & Present Value</Link></li>
                            <li><Link to="/finance/risk">Risk Analysis</Link></li>
                            <li><Link to="/finance/insurance">Insurance Pricing</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/mathematics" className="row-header">Mathematics</Link></li>
                            <li><Link to="/mathematics/rmt">Ramanujan's Master Theorem</Link></li>
                            <li><Link to="/mathematics/gbm">General Binomial Theorem</Link></li>
                            <li><Link to="/mathematics/statistics">Statistics</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/other" className="row-header">Other</Link></li>
                            <li><Link to="/excelfinance">Excel for Finance</Link></li>
                            <li><Link to="/mnist">Basic Machine Vision</Link></li>
                            <li><Link to="/timeseries">Time Series Data</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;