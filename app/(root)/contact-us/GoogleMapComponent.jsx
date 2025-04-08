"use client";
import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const GoogleMapComponent = (contact) => {
  const [map, setMap] = useState(null);

  const center = {
    lat: contact?.contact_us_section1_map_latitude || 25.308014, // Latitude for Shams Business Center
    lng: contact?.contact_us_section1_map_longitude || 55.411171, // Longitude for Shams Business Center
  };

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={
        contact?.contact_us_section1_map_key ||
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      }
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Marker at the center */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
