import React from "react";
import Vaccination from "../Vaccination/Vaccination";
import locat from "../../img/locat.png";
import grid from "../../img/111.png";
import cool from "../../img/coolicon.png";
import Button from "../Butoon/Button";
function Vaccinationcon() {
  return (
    < >
    <h1 className="Vactitle">Schedule Vaccination</h1>
      <div className="Vaccinationcon">
        <Vaccination
          img={locat}
          spanText={"Jakarta, Indonesia"}
          title={"Location"}
        />
        <Vaccination img={cool} spanText={"25 June, 2021"} title={"Date"} />
        <Vaccination img={grid} spanText={"Cinovac"} title={"Vaccine Type"} />
        <Button style={"btn1"} btnName={"Find"} />
      </div>
    </>
  );
}

export default Vaccinationcon;
