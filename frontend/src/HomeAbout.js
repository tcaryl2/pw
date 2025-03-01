import "./HomeAbout.css";

import jacketPhoto from "./images/khakiWebsite.jpeg";

import { Link } from "react-router-dom";

const HomeAbout = () => {
    return (
        <div className="home-about">
            <div className="ha-img">
                <Link to="/about" rel="noopener noreferrer"><img src={jacketPhoto} alt="ocean-dev"></img></Link>
            </div>
            <div className="ha-educ">
                <h4>
                    Education
                </h4>
                <ul>
                    <li>
                        Bachelor of Science Economics
                    </li>
                    <li>
                        Minor in Actuarial Mathematics
                    </li>
                    <li>
                        Google Data Analytics Certificate
                    </li>
                </ul>
            </div>
            <div className="ha-skills">
                <h4>
                    Skills
                </h4>
                <ul>
                    <li>
                        Advanced Excel and Macros
                    </li>
                    <li>
                        Data Analysis with SQL
                    </li>
                    <li>
                        Programming in Python
                    </li>
                    <li>
                        Financial Pricing
                    </li>
                </ul>
            </div>
        </div>
      );
}
 
export default HomeAbout;