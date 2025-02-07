import "./Home.css";

import HomeVideo from "./HomeVideo";
import HomeAbout from "./HomeAbout";
import HomeExtra from "./HomeExtra";
import HomeExpertise from "./HomeExpertise";

import VidLeft from "./VidLeft";
import VidRight from "./VidRight";

import { econ_text, fin_text, ds_text } from "./HomeAssets";

const Home = () => {
    return (
        <div className="home-content">
            <HomeVideo/>
            <HomeAbout/>
            <HomeExtra/>
            <HomeExpertise/>
            <VidLeft title = "Finance" text_list = { fin_text } img_list = { 3 }/>
            <VidRight title = "Data Science" text_list = { ds_text }/>
            <VidLeft title = "Economics" text_list = { econ_text }/>
        </div>
    );
}
 
export default Home;