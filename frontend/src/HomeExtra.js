import "./HomeExtra.css";


import Code from "./Code";

const terminal_name = "frontend - node < npm run start"
const built_text = "I built this website from scratch using the mern stack You can now see";

const HomeExtra = () => {

    return (
        <div className="home-extra">
          <Code className="terminal" code_text={ built_text } terminal_name={ terminal_name }/>
        </div>
      );
}
 
export default HomeExtra;