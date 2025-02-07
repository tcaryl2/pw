import "./Code.css";

const Code = () => {
    return (
        <div className="terminal">
            <div className="terminal-header">
                Sample Terminal Output
            </div>
            <div className="terminal-body">
                <code>
                    <success>Compiled successfully!</success>
                    <br/>
                    <br/>
                    You can now view frontend in the browser.
                    <br/>
                    <br/>
                    <bold>Local:</bold> http://localhost:3000
                    <br/>
                    <br/>
                    Note that the development build is not optimized.
                    To create a production build, use npm run build.
                    <br/>
                    <br/>
                    webpack compiled successfully
                </code>
            </div>
        </div>
    );
}
 
export default Code;