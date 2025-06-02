// import "./Legend.css";

// function Legend() {
//   return (
//     <div className="legend-box">
//       <strong>Legend</strong>

//       <div className="legend-item">
//         <span className="legend-color district" />
//         District Boundary
//       </div>

//       <div className="legend-item">
//         <span className="legend-color roads" />
//         Roads
//       </div>

//       <div className="legend-item">
//         <span className="legend-color sagarmatha" />
//         Sagarmatha National Park
//       </div>

//       <div className="legend-item">
//         <span className="legend-color makalu" />
//         Makalu Barun National Park
//       </div>
//     </div>
//   );
// }

// export default Legend;

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
