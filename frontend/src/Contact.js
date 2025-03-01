import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-text">
                <h6>
                    Feel free to contact me with any questions or opportunities!
                </h6>
                <p>
                    I try to answer all communication within two business days
                </p>
            </div>
            <div className="contact-form">
                <form>
                    <p>
                        Send me an email!
                    </p>
                    <p>
                        Here is my contact info ----------------
                    </p>
                </form>
            </div>
            <div className="contact-work">
                <div className="contact-header">
                    <h6>My work profiles</h6>
                </div>
                <div className="work-profiles">
                    <div className="profile">
                        Link to Kaggle
                    </div>
                    <div className="profile">
                        Link to GitHub
                    </div>
                    <div className="profile">
                        Link to LinkedIn
                    </div>
                    <div className="profile">
                        Link to Tableau
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;