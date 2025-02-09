import "./HomeExpertise.css"

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Import the useInView hook from the intersection-observer api

const HomeExpertise = () => {
    const { ref: refOne, inView: IsVisibleOne } = useInView() // Define a reference and a class name to update when intersecting the window
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    useEffect(() => {
        if (IsVisibleOne) {
            setHasBeenVisible(true); // Persist visibility state
        }
    }, [IsVisibleOne]);

    return (
        <div className="home-expertise">
            <h1 className={`${hasBeenVisible ? "show-one" : ""}`} ref={refOne}>
                Interdisciplinary Expertise
            </h1>
            <p className="typing">
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