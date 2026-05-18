"use client";

import { APIProvider, Map as GMap, Marker } from "@vis.gl/react-google-maps";

export const Map = () => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GMAPS_API_KEY || ""}>
      <GMap
        center={{
          lat: 36.73435,
          lng: -76.2226,
        }}
        zoom={14}
        style={{ width: "100%", height: 400 }}
      >
        <Marker position={{ lat: 36.73435, lng: -76.2226 }} />
      </GMap>
    </APIProvider>
  );
};
