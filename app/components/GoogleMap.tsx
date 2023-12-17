import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { PiSpinner } from "react-icons/pi";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAPS_API_KEY || "",
  });

  const location = { lat: 36.73435, lng: -76.2226 };

  if (!isLoaded)
    return (
      <div className="flex flex-col justify-center w-full h-full mx-auto min-h-[400px] text-center">
        <PiSpinner className="text-5xl animate-spin mx-auto" />
        <span>Loading Map</span>
      </div>
    );
  return (
    <div className="w-full min-h-[400px]">
      <GoogleMap
        zoom={14}
        center={location}
        mapContainerClassName="gmap"
        mapContainerStyle={{ width: "100%" }}
      >
        <Marker position={location} />
      </GoogleMap>
    </div>
  );
};
