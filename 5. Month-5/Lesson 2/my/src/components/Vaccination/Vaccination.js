import React from "react";

function Vaccination({ img, title, spanText }) {
  return (
    <div className="vac">
      <div className="sec1">
        <div className="imgwrap">
          <img src={img} alt="" />
        </div>
        <h2>{title}</h2>
      </div>
      <span>{spanText}</span>
    </div>
  );
}

export default Vaccination;
