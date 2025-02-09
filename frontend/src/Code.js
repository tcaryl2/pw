import "./Code.css";

const Code = ({ terminal_name, code_text }) => {
    return (
        <div className="terminal">
            <div className="terminal-header">
                { terminal_name }
            </div>
            <div className="terminal-body">
                <code>
                    <success>Deployment successfull!</success>
                    <br/>
                    <br/>
                    Thank you for visiting my website. I built it using the MERN stack to 
                    act as a more detailed version of my resume that you can view in your browser.
                    <br/>
                    <br/>
                    The full code for this site is available publicly on github. To view the code visit my git repository here: 
                    <terminalBlue>[temporary github url]</terminalBlue>
                </code>
            </div>
        </div>
    );
}
 
export default Code;