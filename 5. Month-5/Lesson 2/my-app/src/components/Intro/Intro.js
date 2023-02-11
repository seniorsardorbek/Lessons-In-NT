import React from "react";
import Button from "../Button/Button";
function Intro() {
  return (
    <div>
      <div className="intro-text">
        <h1>Get Your Vaccine, Get Your Health</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>
        <Button style={'btn1'} btnname={"Get Your Vaccine"}/>
        <Button style={'btn2'} btnname={"Learn morer"}/>
      </div>
      <div className="intro-grid">
        <div className="grid-item1"></div>
        <div className="grid-item2"></div>
        <div className="grid-item3"></div>
        <div className="grid-item4"></div>
        <div className="grid-item5"></div>
        <div className="grid-item6"></div>
      </div>
    </div>
  );
}

export default Intro;
