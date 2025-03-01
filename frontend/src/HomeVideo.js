import "./HomeVideo.css";
import test_vid from "./cmnist.mov";

const HomeVideo = () => {
    return (
        <div className="home-video">
            <video /*autoPlay loop muted*/ playsInline className="home-bv" src={test_vid}/>

            <h1 className="hv-text">
                Text that goes on top of the video
            </h1>
        </div>
      );
}
 
export default HomeVideo;