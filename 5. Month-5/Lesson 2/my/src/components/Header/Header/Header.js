import React from "react";
import Nav from "../Nav/Nav";

function Header() {
  return (
    <header>
      <div>
        <p className="logo">VaccineQu</p>
      </div>
      <Nav
        one={"Home"}
        onelink={"salom"}
        two={"Schedule"}
        twolink={"salom"}
        three={"Quota"}
        threelink={"salom"}
        four={"Information"}
        fourlink={"salom"}
      />
    </header>
  );
}

export default Header;
