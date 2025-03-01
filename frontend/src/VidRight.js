import "./VidRight.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const VidRight = ({ bgColor, title, projectHeader, imgList, projectText, projectList}) => {
    const [currentSlide, setCurrentSlide]=useState(0);
    const manualNav = (index)=>{
        setCurrentSlide(index);
    };

    return (
        <div style={{backgroundColor: bgColor}} className="vid-right">
            <div className="vr-header">
                <h2>{ title }</h2>
            </div>
            <div className="vr-content">
                <div className="vr-about">
                    <h6>{projectHeader[currentSlide]}</h6>
                   <p>{projectText[currentSlide]}</p>
                </div>
                <div className="vr-slides">
                    {imgList.map((imgSrc, index) => (
                        <div key={index} className={`slide ${currentSlide === index ? "active" : ""}`}>
                            {projectList?.length > 0 && (
                                <Link to={projectList[currentSlide] ?? "#"} rel="noopener noreferrer">
                                    <img src={imgSrc} alt={`Slide ${index + 1}`} />
                                </Link>
                            )}
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