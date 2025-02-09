import "./Home.css";

import HomeVideo from "./HomeVideo";
import HomeAbout from "./HomeAbout";
import HomeExtra from "./HomeExtra";
import HomeExpertise from "./HomeExpertise";

import VidLeft from "./VidLeft";
import VidRight from "./VidRight";

import { econText, econTextList, finText, finTextList, finProjectSource, dsText, dsTextList } from "./HomeAssets";
const Home = () => {
    return (
        <div className="home-content">
            <HomeVideo/>
            <HomeAbout/>
            <HomeExtra/>
            <HomeExpertise/>
            <VidLeft bgColor="rgb(0, 73, 128)" className="vl-one" title = "Finance" imgText = { finTextList } projectText = { finText } projectSource={ finProjectSource }/>
            <VidRight bgColor="rgb(46, 139, 120)" title = "Data Science" imgText = { dsTextList } projectText ={ dsText }/>
            <VidLeft bgColor="rgb(32, 124, 158)" title = "Economics" imgText = { econTextList } projectText ={ econText }/>
            <HomeExtra/>
        </div>
    );
}
 
export default Home;