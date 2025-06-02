import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import Map from "../components/map/Map";

function MainMapView() {
  const [checkedLayers, setCheckedLayers] = useState({});

  return (
    <div style={{ display: "flex" }}>
      <SideBar
        checkedLayers={checkedLayers}
        setCheckedLayers={setCheckedLayers}
      />
      <Map checkedLayers={checkedLayers} />
    </div>
  );
}

export default MainMapView;
