import {
  MapContainer,
  TileLayer,
  GeoJSON,
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import features from "../../data/province1.json";
import pointData from "../../data/point-test.json";
import roadData from "../../data/test-line.json";

function Map({ selectedLayers }) {
  const position = [27.262638, 87.268971];

  const featureStyle = {
    weight: 2.5,
    color: "black",
    fillOpacity: 0,
  };

  const roadStyle = {
    weight: 2,
    color: "orange",
  };

  const onEachFeature = (features, layer) => {
    const { DISTRICT, Province, POPN, WARDS, districtid } = features.properties;
    layer.bindPopup(`
      District Name: ${DISTRICT}<br/>
      Province: ${Province}<br/>
      Population: ${POPN}<br/>
      Wards: ${WARDS}<br/>
      District ID: ${districtid}
    `);
  };

  const onEachRoad = (roadData, layer) => {
    const { name, type, speed_limit, access, condition } = roadData.properties;
    layer.bindPopup(`
      Name: ${name}<br/>
      Type: ${type}<br/>
      Speed Limit: ${speed_limit}<br/>
      Access: ${access}<br/>
      Condition: ${condition}
    `);
  };

  const onEachPointer = (pointData, layer) => {
    const { name, established_date, activities } = pointData.properties;
    layer.bindPopup(`
      Name: ${name}<br/>
      Established Date: ${established_date}<br/>
      Activities: ${activities}
    `);
  };

  const getFilteredPoints = (parkName) => ({
    type: "FeatureCollection",
    features: pointData.features.filter(
      (feature) => feature.properties.name === parkName
    ),
  });

  return (
    <div className="map-area">
      <MapContainer center={position} zoom={8} className="map">
        <LayersControl>
          <LayersControl.Overlay checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Google Satellite">
            <LayerGroup>
              <TileLayer
                url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
                attribution="&copy; Google"
              />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>

        {selectedLayers.includes("district") && (
          <GeoJSON
            data={features}
            style={featureStyle}
            onEachFeature={onEachFeature}
          />
        )}

        {selectedLayers.includes("roads") && (
          <GeoJSON
            data={roadData}
            style={roadStyle}
            onEachFeature={onEachRoad}
          />
        )}

        {selectedLayers.includes("sagarmatha") && (
          <GeoJSON
            data={getFilteredPoints("Sagarmatha National Park")}
            onEachFeature={onEachPointer}
          />
        )}

        {selectedLayers.includes("makalu") && (
          <GeoJSON
            data={getFilteredPoints("Makalu Barun National Park")}
            onEachFeature={onEachPointer}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
