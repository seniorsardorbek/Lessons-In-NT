import React from "react";
import Card from "../Card/Card";
import Unresolved from "../Unresolved/Unresolved";
import Task from "../Task/Task";
function Overview() {
  return (
    <div>
      <div className="cards">
        <Card num={69} solve={"Unresolved"} />
        <Card num={16} solve={"Overdue"} />
        <Card num={43} solve={"Open"} />
        <Card num={64} solve={"On hold"} />
      </div>
      <div className="form">
        <div className="sec-con">
          <div className="sec1">
            <div className="sec_title--con">
              <h1>Today’s trends</h1>
              <p>as of 25 May 2019, 09:41 PM</p>
            </div>
            <div className="days">
              <h2 className="daytitle">
                <span className="row"></span>Today
              </h2>
              <h2 className="daytitle">
                <span className="row"></span>Yesterday
              </h2>
            </div>
          </div>
          <div className="overviewDashboard"></div>
        </div>
        <div className="sec2">
          <Card num={449} solve={"Resolved"} />
          <Card num={426} solve={"Received"} />
          <Card num={"33m"} solve={"Average first response time"} />
          <Card num={"3h 8m"} solve={"Average response time"} />
        </div>
      </div>
      <div style={{display:"flex"}}>
        <Unresolved />
        <Task/>
      </div>
    </div>
  );
}

export default Overview;
