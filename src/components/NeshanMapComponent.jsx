import NeshanMap from "react-neshan-map-leaflet";
import { apiKey } from "../apiKey";

import React from "react";

const NeshanMapComponent = () => {
  const DEFAULT_LANGITUDE = 51.423488;
  const DEFAULT_LATITUDE = 35.761774;

  const pos = [DEFAULT_LATITUDE, DEFAULT_LANGITUDE];

  return (
    <div className="border border-primary d-flex justify-content-center">
      <NeshanMap
        style={{
          width: "100vw",
          height: "600px",
        }}
        options={{
          key: apiKey,
          center: pos,
          zoom: 12,
        }}
        onInit={(L, myMap) => {
          L.marker(pos).addTo(myMap).bindPopup("دفتر ");
          L.marker([35.73341491348694,51.43984222464496]).addTo(myMap).bindPopup("کارگاه ");

          myMap.on("click", function (e) {
            // marker.setLatLng(e.latlng);
            console.log(e.latlng);
          });

          L.circle([35.71474050367277, 51.53288269095357], {
            color: "red",
            fillColor: "#f03",
            fillOpacity: 0.3,
            radius: 1800,
          })
            .addTo(myMap)
            .bindPopup("محدوده قرمز ");

          
          L.circle([35.78754593760866, 51.470071792209644], {
            color: "#427ed8",
            fillColor: "#427ed8",
            fillOpacity: 0.2,
            radius: 800,
          })
            .addTo(myMap)
            .bindPopup("محدوده آبی");
        }}
      />
    </div>
  );
};

export default NeshanMapComponent;
