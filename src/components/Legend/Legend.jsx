import "./Legend.css";

const legendItems = {
  district: { label: "District Boundary", className: "district" },
  roads: { label: "Roads", className: "roads" },
  sagarmatha: { label: "Sagarmatha National Park", className: "sagarmatha" },
  makalu: { label: "Makalu Barun National Park", className: "makalu" },
};

function Legend({ selectedLayers }) {
  const visibleLegends = selectedLayers.filter((key) => legendItems[key]);

  return (
    <div className="legend-box">
      <strong>Legend</strong>
      {visibleLegends.map((key) => (
        <div className="legend-item" key={key}>
          <span className={`legend-color ${legendItems[key].className}`} />
          {legendItems[key].label}
        </div>
      ))}
      {visibleLegends.length === 0 && (
        <div style={{ color: "#bbb" }}>No layers selected</div>
      )}
    </div>
  );
}

export default Legend;
