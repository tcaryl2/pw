import "./Finance.css";


const Finance = () => {
    return (
        <div className="finance">
        <h5>Finance Portfolio</h5>
        <div className="project-menu">
            <div className="project-row">
                <div className="project">
                    Finance
                </div>
                <div className="project">
                    NPV
                </div>  
                <div className="project">
                    Insurance Pricing
                </div>
                <div className="project">
                    Risk
                </div>
            </div>
            <button> Show all </button>
        </div>
        <div className="passion">
            <h5>The Other Side of Economics</h5>
            <div className="main-content">
                <div className="left-sidebar">
                    Fade in some skills here
                    Present Value
                    Asset Pricing
                </div>
                <div className="content-text">
                    Write the article here
                </div>
                <div className="right-sidebar">
                    Put skills here to fade in on scroll
                    Trading Bots
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Finance;