import "./HomeExpertise.css"

import ocean from "./ocean.jpg";
import samsommer from "./samsommer.jpg";
import river from "./river.jpg";
import beach from "./beach.jpg";

const HomeExpertise = () => {
    const imgList = [
        ocean,
        samsommer,
        river,
        beach
    ]
    
    return (
        <div className="home-expertise">
            <h1>
                Interdisciplinary Expertise
            </h1>
            <p>
                With the breadth of knowledge I have available, 
                I aim to position myself as an interdisciplinary
                expert on finance, data science, and machine learning
                working primarly in the financial space. Knowledge
                of these distinct areas will let me bridge the gaps
                between teams and maximize the amount of value I 
                add to your business.
            </p>
        </div>
    );
};
 
export default HomeExpertise;