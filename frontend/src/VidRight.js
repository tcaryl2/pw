import "./VidRight.css";
import { useState } from "react";

import ocean from "./ocean.jpg";
import samsommer from "./samsommer.jpg";
import river from "./river.jpg";
import beach from "./beach.jpg";

const VidRight = ({ title, text_list, img_list }) => {
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
        <div className="vid-right">
            <div className="vr-header">
                <h2>{ title }</h2>
            </div>
            <div className="vr-content">
                <div className="vr-about">
                    { text_list.join(" ")}
                </div>
                <div className="vr-slides">
                    {imgList.map((imgSrc, index) => (
                        <div key={index} className={`slide ${currentSlide === index ? "active" : ""}`}>
                            <img src={imgSrc} alt={`Slide ${index + 1}`} />
                            <div className="info">
                                <h3>Data Science {index + 1}</h3>
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
            </div>
        </div>
    );
}
 
export default VidRight;