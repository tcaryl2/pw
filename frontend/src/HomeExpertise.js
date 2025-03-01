import "./HomeExpertise.css"

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer"; // Import the useInView hook from the intersection-observer api

const HomeExpertise = () => {
    const { ref: refOne, inView: isVisible } = useInView() // Define a reference and a class name to update when intersecting the window
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    const { ref: refTwo, inView: isVisibleTwo } = useInView()
    const [hasBeenVisibleTwo, setHasBeenVisibleTwo] = useState(false);

    const { ref: refThree, inView: isVisibleThree } = useInView()
    const [hasBeenVisibleThree, setHasBeenVisibleThree] = useState(false);


    useEffect(() => {
        if (isVisible) {
            setHasBeenVisible(true); // Persist visibility state
        }
        if (isVisibleTwo){
            setHasBeenVisibleTwo(true);
        }
        if (isVisibleThree){
            setHasBeenVisibleThree(true);
        }
    }, [isVisible, isVisibleTwo, isVisibleThree]);

    return (
        <div className="home-expertise">
            <h4 className={`${hasBeenVisible ? "show" : ""}`} ref={refOne}>
                My Portfolio
            </h4>
            <p className={`${hasBeenVisibleTwo ? "show" : ""}`} ref={refTwo}>
                I aim to position myself as an interdisciplinary
                expert on finance, data science, and machine learning
                working primarly in the financial space. Knowledge
                of these distinct areas will let me bridge the gaps
                between teams and maximize the amount of value I 
                add to your business.
            </p>
            <p className={`${hasBeenVisibleThree ? "show" : ""}`} ref={refThree}>
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