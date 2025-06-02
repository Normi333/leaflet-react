import "./Legend.css";

function Legend() {
  return (
    <div className="legend-box">
      <strong>Legend</strong>

      <div className="legend-item">
        <span className="legend-color district" />
        District Boundary
      </div>

      <div className="legend-item">
        <span className="legend-color roads" />
        Roads
      </div>

      <div className="legend-item">
        <span className="legend-color sagarmatha" />
        Sagarmatha National Park
      </div>

      <div className="legend-item">
        <span className="legend-color makalu" />
        Makalu Barun National Park
      </div>
    </div>
  );
}

export default Legend;
