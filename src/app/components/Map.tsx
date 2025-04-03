import React from "react";
import { GoogleMap, LoadScript, Marker, Polyline } from "@react-google-maps/api";

interface MapProps {
  route: { lat: number, lon: number }[];
  googleMapsApiKey: string;
}

const Map: React.FC<MapProps> = ({ route, googleMapsApiKey }) => {
  const lastPoint = route.length > 0 ? route[route.length - 1] : null;
  const center = lastPoint ? { lat: lastPoint.lat, lng: lastPoint.lon } : { lat: 0, lng: 0 };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ height: "400px", width: "100%" }}
      >
        {lastPoint && (
          <Marker position={{ lat: lastPoint.lat, lng: lastPoint.lon }} />
        )}
        {route.length > 1 && (
          <Polyline
            path={route.map(pt => ({ lat: pt.lat, lng: pt.lon }))}
            options={{ strokeColor: "#0000FF" }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
