import React from "react";
import Nav from "../Nav/Nav";
function Header() {
  return (
    <header className="header">
      <h1 className="logo">VaccineQu</h1>
      <Nav
        one={"Home"}
        two={"Schedule"}
        three={"Quota"}
        four={"Information"}
        onelink={"/home"}
        twolink={"Home"}
        threelink={"Home"}
        fourlink={"Home"}
      />
    </header>
  );
}

export default Header;
