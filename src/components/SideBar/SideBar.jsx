import React, { useState } from "react";
import "./SideBar.css";

function SideBar() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {/* Base Section */}
        <li className="menu-title" onClick={() => toggleSection("base")}>
          <img
            src="/map_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Base"
          />
          Base
        </li>
        {openSection === "base" && (
          <ul className="submenu">
            <li>
              <label className="checkbox-text">
                <input type="checkbox" name="base" value="district" /> District
                Boundary
              </label>
            </li>
          </ul>
        )}

        {/* Infrastructure Section */}
        <li className="menu-title" onClick={() => toggleSection("infra")}>
          <img
            src="/timeline_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Infra"
          />
          Infrastructure
        </li>
        {openSection === "infra" && (
          <ul className="submenu">
            <li>
              <label className="checkbox-text">
                <input type="checkbox" name="infra" value="roads" /> Roads
              </label>
            </li>
          </ul>
        )}

        {/* POI Section */}
        <li className="menu-title" onClick={() => toggleSection("poi")}>
          <img
            src="/explore_nearby_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"
            alt="POI"
          />
          POI - Point Of Interest
        </li>
        {openSection === "poi" && (
          <ul className="submenu">
            <li>
              <label className="checkbox-text">
                <input type="checkbox" name="poi" value="sagarmatha" />{" "}
                Sagarmatha National Park
              </label>
            </li>
            <li>
              <label className="checkbox-text">
                <input type="checkbox" name="poi" value="makalu" /> Makalu Barun
                National Park
              </label>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default SideBar;
