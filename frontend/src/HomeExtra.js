import "./HomeExtra.css";
import Code from "./Code";

const HomeExtra = ({bgColor, terminal_header, terminal_success, terminal_body, terminal_body_two, terminal_blue}) =>{
  return (
    <div className="home-extra" style={{backgroundColor: bgColor}}>
      <Code terminal_header={terminal_header} terminal_success={terminal_success}
      terminal_body={terminal_body} terminal_body_two={terminal_body_two}
      terminal_blue={terminal_blue}/>
    </div>
  );
}
 
export default HomeExtra;