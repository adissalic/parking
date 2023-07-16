import React from "react";
import Map from "./Map";
import { useLoadScript } from "@react-google-maps/api";

const MapPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCVHavRJSM1laJz-1XVJ93-IliSBbIWR1E", // Add your API key
  });
  return (
    <div className="main">
      <p className="title">Parking lokacije</p>
      <div className="options">{isLoaded ? <Map className="mapa" /> : "loading Google Map"}</div>
    </div>
  );
};

export default MapPage;
