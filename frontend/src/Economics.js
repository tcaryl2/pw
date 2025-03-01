import "./Economics.css";

const Economics = () => {
    return (
        <div className="economics">
            <h5>Economics Portfolio</h5>
            <div className="project-menu">
                <div className="project-row">
                    <div className="project">
                        One
                    </div>
                    <div className="project">
                        Two
                    </div>  
                    <div className="project">
                        Three
                    </div>
                </div>
                <button> Show all projects </button>
            </div>
            <div className="why-economics">
                <h5>Why Economics?</h5>
                <div className="main-content">
                    <div className="left-sidebar">
                        Fade in some skills here
                        Coding
                        Time Series
                    </div>
                    <div className="content-text">
                        Write the article here
                    </div>
                    <div className="right-sidebar">
                        Put skills here to fade in on scroll
                        Economics
                        Econometrics
                        ML
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default Economics;