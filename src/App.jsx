import React, { useState } from "react";
import "./App.css";
import Map from "./components/map/Map";
import SideBar from "./components/SideBar/SideBar";
import Legend from "./components/Legend/Legend";

function App() {
  const [selectedLayers, setSelectedLayers] = useState([
    "district",
    "roads",
    "sagarmatha",
    "makalu",
  ]);

  return (
    <div className="gis-container" style={{ display: "flex" }}>
      <SideBar
        selectedLayers={selectedLayers}
        setSelectedLayers={setSelectedLayers}
      />
      <div style={{ flex: 1 }}>
        <Map selectedLayers={selectedLayers} />
      </div>
      <Legend selectedLayers={selectedLayers} />
    </div>
  );
}

export default App;
