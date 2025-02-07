import "./VidLeft.css";
import { useState } from "react";

import ocean from "./ocean.jpg";
import samsommer from "./samsommer.jpg";
import river from "./river.jpg";
import beach from "./beach.jpg";

const VidLeft = ({ text_list, title, img_list }) => {
    const [currentSlide, setCurrentSlide]=useState(0);

    const imgList = [
        ocean,
        samsommer,
        river,
        beach
    ]

    const manualNav = (index)=>{
        setCurrentSlide(index);
    };

    return (
        <div className="vid-left">
            <div className="vl-header">
                <h2>{ title }</h2>
            </div>
            <div className="vl-content">
                <div className="vl-slides">
                    {imgList.map((imgSrc, index) => (
                        <div key={index} className={`slide ${currentSlide === index ? "active" : ""}`}>
                            <img src={imgSrc} alt={`Slide ${index + 1}`} />
                            <div className="info">
                                <h3>Finance {index + 1}</h3>
                            </div>
                        </div>
                    ))}
                    <div className="gallery-nav">
                        {imgList.map((_, index) => (
                            <div
                                key={index}
                                className={`btn ${currentSlide === index ? "active" : ""}`}
                                onClick={() => manualNav(index)}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="vl-about">
                    { text_list.join(" ")}
                </div>
            </div>
        </div>
    );
}
 
export default VidLeft;