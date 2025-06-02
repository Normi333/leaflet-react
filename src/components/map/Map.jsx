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
import testData from "../../data/test-data-geojson.json";

function Map() {
  const position = [27.262638, 87.268971];
  // const [roadsData, setRoadsData] = useState(null);
  // const mapref = useRef();

  const featureStyle = {
    weight: 2.5,
    color: "black",
    fillOpacity: 0,
  };
  const testDataStyle = {
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

  const onEachPointer = (feature, layer) => {
    const props = feature.properties;
    if (props.park_headquarter && feature.geometry.type === "Point") {
      layer.bindPopup(`
      <strong>Park</strong><br/>
      Name: ${props.name}<br/>
      Established: ${props.established_date}<br/>
      Activities: ${props.Activities}<br/>
      HQ: ${props.park_headquarter}
    `);
    } else if (
      feature.geometry.type === "LineString" &&
      (props.type || props.speed_limit || props.condition)
    ) {
      layer.bindPopup(`
      <strong>Road</strong><br/>
      Name: ${props.name || "Unnamed"}<br/>
      Type: ${props.type || "N/A"}<br/>
      Speed Limit: ${props.speed_limit || "N/A"} km/h<br/>
      Access: ${props.access || "N/A"}<br/>
      Condition: ${
        props.condition || props["condition "] || props.conditions || "N/A"
      }
    `);
    } else {
      layer.bindPopup("<strong>Unknown Feature</strong>");
    }
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

        <GeoJSON
          data={testData}
          style={testDataStyle}
          onEachFeature={onEachPointer}
        />
      </MapContainer>
    </div>
  );
}

export default Map;
