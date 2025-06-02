import { useState } from "react";
import Legend from "./Legend";
import Sidebar from "./Sidebar";

function MapArea({ data }) {
  const [showLegend, setShowLegend] = useState(true);
  function getColorForCategory(category) {
    const colorMap = {
      District: "#ff4d4f",
      Roads: "#1890ff",
      Interest: "#52c41a",
    };
    return colorMap[category] || "#999";
  }

  // Example: Dynamically extract legend data from 'data'
  const legendItems = Array.from(
    new Set(data.map((d) => d.category)) // assuming each data item has a `category`
  ).map((category) => {
    return {
      label: category,
      color: getColorForCategory(category), // You must define this function
    };
  });

  return (
    <div className="map-area">
      <Sidebar showLegend={showLegend} setShowLegend={setShowLegend} />
      {/* Your map component here */}
      {showLegend && <Legend items={legendItems} />}
    </div>
  );
}

export default MapArea;
