import "./HomeExtra.css";

import { useState } from "react";
import { Link } from "react-router-dom";

const HomeExtra = () => {

    return (
        <div className="home-extra">
          <div className="he-text">
            I built this website using the MERN stack 
            to function as a resume and cover letter 
            rolled into one. Test my APIs <Link to="/api">here</Link>
          </div>
        </div>
      );
}
 
export default HomeExtra;