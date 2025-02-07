import "./HomeVideo.css";
import test_vid from "./test_vid.mov";

const HomeVideo = () => {
    return (
        <div className="home-video">
            <video /*autoPlay loop*/ muted playsInline className="home-bv" src={test_vid}/>

            <div className="hv-text">
                Text that goes on top of the video
            </div>
        </div>
      );
}
 
export default HomeVideo;