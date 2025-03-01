import "./Home.css";

import HomeVideo from "./HomeVideo";
import HomeAbout from "./HomeAbout";
import HomeExtra from "./HomeExtra";
import HomeExpertise from "./HomeExpertise";

import VidLeft from "./VidLeft";
import VidRight from "./VidRight";

import { 
    econBody, econHeader, econProjectList, econImgList,
    finBody, finHeader, finProjectList, finImgList,
    dsBody, dsHeader, dsProjectList, dsImgList,
    terminal_one, terminal_two} from "./Assets.js";

const Home = () => {
    return (
        <div className="home-content">
            <HomeVideo/>
            <HomeAbout/>
            <HomeExtra 
                bgColor="rgb(19, 105, 155)" terminal_header={terminal_one[0]}
                terminal_success={terminal_one[1]} terminal_body={terminal_one[2]} 
                terminal_body_two={terminal_one[3]} terminal_blue={terminal_one[4]}/>
            <HomeExpertise/>
            <VidLeft 
                bgColor="rgb(0, 73, 128)" btnColor="" 
                title = "Finance" 
                projectHeader = { finHeader } projectText = { finBody } 
                projectList={ finProjectList } imgList={ finImgList }/>
            <VidRight 
                bgColor="rgb(46, 139, 120)" btnColor="" 
                title = "Data Science" 
                projectHeader = { dsHeader } projectText ={ dsBody }
                projectList={ dsProjectList } imgList={ dsImgList }/>
            <VidLeft 
                bgColor="rgb(32, 124, 158)" btnColor="" 
                title = "Economics" 
                projectHeader = { econHeader } projectText ={ econBody }
                projectList={ econProjectList } imgList={ econImgList }/>
            <HomeExtra 
                bgColor="rgb(25, 140, 155)" terminal_header={terminal_two[0]}
                terminal_success={terminal_two[1]} terminal_body={terminal_two[2]} 
                terminal_body_two={terminal_two[3]} terminal_blue={terminal_two[4]}
                />

        </div>
    );
}
 
export default Home;