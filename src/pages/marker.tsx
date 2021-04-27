import Head from "next/head";
import Layout from "../components/Layout";
import GoogleMapReact from "google-map-react";
import Nav from "../components/Nav";
import { useState } from "react";
import GoogleMap from "../components/GoogleMap";

export default function Marker() {
  const defaultLatLng = { lat: 35.170915, lng: 136.881537 };
  const [map, setMap] = useState<any>(null);
  const [maps, setMaps] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);
  const [latLng, setLatLng] = useState<any>(defaultLatLng);
  const handleApiLoaded = ({ map, maps }: any) => {
    setMap(map);
    setMaps(maps);
    setMarker(
      new maps.Marker({
        map,
        position: defaultLatLng,
      })
    );
  };
  const mapClick = ({ x, y, lat, lng, event }: any) => {
    if (marker) {
      marker.setMap(null);
    }
    const position = {
      lat,
      lng,
    };
    setLatLng(position);
    setMarker(
      new maps.Marker({
        map,
        position: position,
      })
    );
    map.panTo(position);
  };
  return (
    <Layout>
      <Nav />
      <div className="mt-4" />
      <div className="bg-white p-6  sm:rounded-lg shadow ">
        <GoogleMap
          defaultZoom={15}
          defaultCenter={defaultLatLng}
          onGoogleApiLoaded={handleApiLoaded}
          onClick={mapClick}
        ></GoogleMap>
      </div>
      <div className="mt-4" />
      <div className="p-6 bg-white shadow sm:rounded-lg">
        <p className=" text-center">Lat:{latLng.lat}</p>
        <p className=" text-center">Lng:{latLng.lng}</p>
      </div>
    </Layout>
  );
}
