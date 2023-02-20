import React from "react";
import search from "../../images/search.png";
import notefic from "../../images/notification.png";
function Info( {picadmin ,nameAdmin}  ) {
  return (
    <nav>
      <h1>
        Overview
      </h1>
        <div className="nav-items">
       <button className="pngbutton">   <img src={search} alt="" /></button>
       <button className="pngbutton"> <img src={notefic} alt="" /> </button>
         
          <span className="arrow"></span>
          <h1>{nameAdmin}
          </h1>
            <div className="img-rounder">
                <img src={picadmin} alt="" />
            </div>
        </div>
    </nav>
  );
}

export default Info;
