import "./HomeAbout.css";
import ocean from "./ocean.jpg";

const HomeAbout = () => {
    return (
        <div className="home-about">
            <div className="ha-img">
                <img src={ocean} alt="ocean-dev"></img>
            </div>
            <div className="ha-educ">
                <h2>
                    Education
                </h2>
                <ul>
                    <li>
                        B.S. in Economics
                    </li>
                    <li>
                        Minor in Actuarial 
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Mathematics
                    </li>
                    <li>
                        Google Data Analytics 
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        Certificate
                    </li>
                    <li>
                        Master's in Finance 
                        <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                        (Ongoing)
                    </li>
                </ul>
            </div>
            <div className="ha-skills">
                <h2>
                    Skills
                </h2>
                <ul>
                    <li>
                        Data Analysis 
                        <br/>&nbsp;&nbsp;&nbsp;with SQL
                    </li>
                    <li>
                        Financial Pricing
                    </li>
                    <li>
                        Programming
                    </li>
                    <li>
                        Machine Learning
                    </li>
                </ul>
            </div>
        </div>
      );
}
 
export default HomeAbout;