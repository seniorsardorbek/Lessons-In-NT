import React from "react";

function UnresolvedItems({ text, num }) {
  return (
    <li className="unresolvedItemsList">
      <p>{text}</p>
      <span>{num}</span>
    </li>
  );
}

export default UnresolvedItems;
