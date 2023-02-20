import React from "react";
import Button from "../Butoon/Button";
function Section1() {
  return (
    <div>
      <div className="box">
        <h1>Sinovac</h1>
        <p>Necessary making this</p>
        <Button style={'btn3'} btnName={"Get Vaccine"}/>
      </div>
      <div className="box">
        <h1>Astrazeneca</h1>
        <p>Necessary making this</p>
      </div>
      <div className="box">
        <h1>Sinopahrm</h1>
        <p>Necessary making this</p>
      </div>
    </div>
  );
}

export default Section1;
