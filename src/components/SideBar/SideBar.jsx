import React, { useState } from "react";
import "./SideBar.css";

const menuData = [
  {
    key: "base",
    title: "Base",
    icon: "/map_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
    items: [{ name: "base", value: "district", label: "District Boundary" }],
  },
  {
    key: "infra",
    title: "Infrastructure",
    icon: "/timeline_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
    items: [{ name: "infra", value: "roads", label: "Roads" }],
  },
  {
    key: "poi",
    title: "POI - Point Of Interest",
    icon: "/explore_nearby_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
    items: [
      { name: "poi", value: "sagarmatha", label: "Sagarmatha National Park" },
      { name: "poi", value: "makalu", label: "Makalu Barun National Park" },
    ],
  },
];

function SideBar() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        {menuData.map(({ key, title, icon, items }) => (
          <React.Fragment key={key}>
            <li className="menu-title" onClick={() => toggleSection(key)}>
              <img src={icon} alt={title} />
              {title}
            </li>
            {openSection === key && (
              <ul className="submenu">
                {items.map(({ name, value, label }) => (
                  <li key={value}>
                    <label className="checkbox-text">
                      <input type="checkbox" name={name} value={value} />{" "}
                      {label}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
