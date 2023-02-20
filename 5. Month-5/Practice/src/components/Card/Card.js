import React from "react";

function Card({ num, solve }) {
  return (
    <div className="card">
      <h2>{solve}</h2>
      <h1>{num}</h1>
    </div>
  );
}

export default Card;
