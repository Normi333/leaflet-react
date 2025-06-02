// components/SideBar.jsx
import React from "react";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <h3>
        <img src="/map_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg" alt="Map" />
        Base
      </h3>
      <label className="checkbox-text">
        <input type="checkbox" name="base" value="base1" /> District Boundary
      </label>

      <h3>
        <img
          src="/timeline_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
          alt="Map"
        />
        Infrastructure
      </h3>
      <label className="checkbox-text">
        <input type="checkbox" name="buildingLayer" value="infra1" />
        Roads
      </label>
      <h3>
        <img
          src="/explore_nearby_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
          alt="Map"
        />
        POI - Point Of Interest
      </h3>
      <label className="checkbox-text">
        <input type="checkbox" name="transportLayer" value="poi1" /> Sagarmatha
        National Park
      </label>
      <br />
      <label className="checkbox-text">
        <input type="checkbox" name="transportLayer" value="poi2" /> Makalu
        Barun National Park
      </label>
    </div>
  );
}

export default SideBar;
