import React from "react";
import "./Apps.scss";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Tickets from "./components/Pages/Tickets";
import Home from "./components/Home/Home";

import Info from "./components/Info/Info";
import profilpic from "../src/images/mheader.png";

function App() {
  return (
    <div className="App container">
      <Dashboard />
      <div className="contain">
        <Info  picadmin={profilpic} nameAdmin={"Jones Ferdinand"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
