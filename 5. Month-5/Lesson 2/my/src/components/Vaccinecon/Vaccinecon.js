import React from "react";
// import Vaccine from "../Vaccine/Vaccine";
import one from "../../img/12.png";
import two from "../../img/123.png";
import three from "../../img/1234.png";
import four from "../../img/12345.png";
import Vaccination from "../Vaccination/Vaccination";
function Vaccinecon() {
  return (
    <>
      {" "}
      <div className="vaccine-head">
        <h1>Why Vaccine Is Important?</h1>
        <p>
          Combined with a handful of model sentence structures, to generate
          always free from repetition injected.
        </p>
      </div>
      <div className="vaccine">
        <Vaccination
          img={one}
          title={"Prevent covid 19 virus"}
          spanText={
            "Model sentence structures to generate Lorem which looks reasonable"
          }
        />
        <Vaccination
          img={two}
          title={"Protect others"}
          spanText={
            "Model sentence structures, to generate Lorem which looks  reasonable"
          }
        />
        <Vaccination
          img={three}
          title={"Stop the spread of covid 19"}
          spanText={
            "Model sentence structures, to generate Lorem which looks reasonable"
          }
        />
        <Vaccination
          img={four}
          title={"Protect the next generation"}
          spanText={
            "Model sentence structures, to generate Lorem which looks reasonable"
          }
        />
      </div>
    </>
  );
}

export default Vaccinecon;
