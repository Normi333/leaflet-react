import React from "react";
import "./App.css";
import Map from "./components/map/Map";
import SideBar from "./components/SideBar/SideBar";
import Legend from "./components/Legend/Legend";

function App() {
  return (
    <div className="gis-container" style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flex: 1 }}>
        <Map />
      </div>
      <Legend />
    </div>
  );
}

export default App;
