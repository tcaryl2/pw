import "./DataScience.css";

import DataVideo from "./DataVideo";
import DataExp from "./DataExp";
import DataProj from "./DataProj";
import DataSql from "./DataSql";
import DataExcel from "./DataExcel";
import DataPython from "./DataPython";
import DataR from "./DataR"

const DataScience = () => {
    return (
        <div className="dat-sci">
            <DataVideo/>
            <DataExp/>
            <DataProj/>
            <DataSql/>
            <DataExcel/>
            <DataPython/>
            <DataR/>
        </div>
      );
}
 
export default DataScience;