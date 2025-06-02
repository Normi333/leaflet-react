// import React, { useEffect, useState } from "react";
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

function Map() {
  const position = [27.262638, 87.268971];
  // const [roadsData, setRoadsData] = useState(null);
  // const mapref = useRef();

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

  // useEffect(() => {
  //   fetch("/public/data/hotosm_npl_roads_lines_geojson.json")
  //     .then((res) => res.json())
  //     .then((data) => setRoadsData(data))
  //     .catch((err) => console.error("Error Loading GeoJSON", err));
  // }, []);

  return (
    <div className="map-area">
      <MapContainer
        center={position}
        zoom={8}
        className="map"
        // ref={mapref}
      >
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

        <GeoJSON
          data={features}
          style={featureStyle}
          onEachFeature={onEachFeature}
        />
        <GeoJSON data={pointData} onEachFeature={onEachPointer} />
        <GeoJSON data={roadData} style={roadStyle} onEachFeature={onEachRoad} />
      </MapContainer>
    </div>
  );
}

export default Map;
