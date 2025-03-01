import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "./CodeTest.css";

const CodeTest = () => {
    const { ref: refOne, inView: isVisible } = useInView() // Define a reference and a class name to update when intersecting the window
    const [hasBeenVisibleThree, setHasBeenVisibleThree] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setHasBeenVisibleThree(true); // Persist visibility state
        }
    }, [isVisible]);

    return (
        <div className="code-test">
            <div className={`${hasBeenVisibleThree ? "show" : ""}`} ref={refOne}>
                <h3>Code Test</h3>
                <h4>p2</h4>
                <h5>hbhvlf</h5>
            </div>
        </div>
      );
}
 
export default CodeTest;