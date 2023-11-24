import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapStyle = {
  position: "relative",
  left: 0,
  top: 0,
  width: "100%",
  height: "50vh",
  overflow: "hidden",
};

export const Yandex = ({ center }) => {
  return (
    <YMaps
      query={{ apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b", lang: "EN" }}
    >
      <Map
        style={mapStyle}
        state={{ center: center || [41.2995, 69.2401], zoom: 10 }}
      >
        <Placemark geometry={[41.2995, 69.2401]} />
      </Map>
    </YMaps>
  );
};
