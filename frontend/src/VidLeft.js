import "./VidLeft.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import oldStockData from "./edData2.png";
import samsommer from "./samsommer.jpg";
import river from "./river.jpg";
import beach from "./beach.jpg";

const VidLeft = ({ imgText, projectText, projectSource, title, bgColor }) => {
    const [currentSlide, setCurrentSlide]=useState(0);

    const imgList = [
        oldStockData,
        samsommer,
        river,
        beach
    ]

    const manualNav = (index)=>{
        setCurrentSlide(index);
    };

    return (
        <div style={{backgroundColor: bgColor}} className="vid-left">
            <div className="vl-header">
                <h2>{ title } </h2>
            </div>
            <div className="vl-content">
                <div className="vl-slides">
                    {imgList.map((imgSrc, index) => (
                        <div key={index} className={`slide ${currentSlide === index ? "active" : ""}`}>
                            <Link to="/fined" rel="noopener noreferrer"><img src={imgSrc} alt={`Slide ${index + 1}`} /></Link>
                            <div className="info">
                                <h3>{imgText[index]}</h3>
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
                    { projectText[currentSlide] }
                </div>
            </div>
        </div>
    );
}
 
export default VidLeft;