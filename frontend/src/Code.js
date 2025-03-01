import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "./Code.css";
import folder from "./images/folderIcon.png";
import redIcon from "./images/redIcon.png";
import yellowIcon from "./images/yellowIcon.png";
import greenIcon from "./images/greenIcon.png";

const Code = ({ terminal_header, terminal_success, terminal_body, terminal_body_two, terminal_blue }) => {
    const { ref: refOne, inView: isVisible } = useInView() // Define a reference and a class name to update when intersecting the window
    const [hasBeenVisibleThree, setHasBeenVisibleThree] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setHasBeenVisibleThree(true); // Persist visibility state
        }
    }, [isVisible]);

    return (
        <div className="terminal">
            <div className={`${hasBeenVisibleThree ? "show" : ""}`} ref={refOne}>
                <div className="terminal-header">
                    <img className="circle-icon" src={redIcon} alt="red circle"></img>
                    <img className="circle-icon" src={yellowIcon} alt="yellow circle"></img>
                    <img className="circle-icon" src={greenIcon} alt="green circle"></img>
                    <img className="folder-icon" src={folder} alt="folder icon"></img>
                    {terminal_header}
                </div>
                <div className="terminal-body">
                    <code>
                        <div className="terminal-green">
                            {terminal_success}
                        </div>
                        <br/>
                        {terminal_body}
                        <br/>
                        <br/>
                        {terminal_body_two}
                        <div className="terminal-blue">
                            {terminal_blue}
                        </div>
                    </code>
                </div>
            </div>
        </div>
    );
}
 
export default Code;