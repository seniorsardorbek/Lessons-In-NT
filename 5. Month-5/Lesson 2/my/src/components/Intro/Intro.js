import React from "react";
import Button from "../Butoon/Button";

function Intro() {
  return (
    <div
      className="intro 
    "
    >
      <div className="intro-text ">
        <h1 className="intro-title">Get Your Vaccine, Get Your Health</h1>
        <p className="intro-parag">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour
        </p>
        <Button style={"btn1"} btnName={"Get Your Vaccine"} />
        <Button style={"btn2"} btnName={"Learn more"} />
      </div>
      <div class="parent">
        <div class="oke"></div>
        <div class="okee"></div>
        <div class="poke"></div>
        <div class="soke"></div>
      </div>
    </div>
  );
}

export default Intro;
