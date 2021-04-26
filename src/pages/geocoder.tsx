import Head from "next/head";
import Layout from "../components/Layout";
import GoogleMapReact, { MapOptions } from "google-map-react";
import Nav from "../components/Nav";
import { useCallback, useEffect, useState } from "react";
import SearchBox from "../components/SearchBox";

export default function Home() {
  const [map, setMap] = useState<any>(null);
  const [maps, setMaps] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);
  const [apiReady, changeApi] = useState(false);
  const defaultLatLng = { lat: 35.170915, lng: 136.881537 };

  const inputMarker = useCallback(
    (mark: any) => {
      setMarker(mark);
    },
    [setMarker]
  );
  const handleApiLoaded = ({ map, maps }: any) => {
    setMap(map);
    setMaps(maps);
    setMarker(
      new maps.Marker({
        map,
        position: defaultLatLng,
      })
    );
    changeApi(true);
    const input = document.getElementById("input");
    map.controls[maps.ControlPosition.TOP_LEFT].push(input);
  };

  return (
    <Layout>
      <Nav />
      <div className="mt-4" />
      <div className="bg-white p-6  sm:rounded-lg shadow ">
        {apiReady !== false && (
          <SearchBox maps={maps} map={map} inputMarker={inputMarker} />
        )}
        <div className="h-96 ">
          <GoogleMapReact
            defaultZoom={15}
            defaultCenter={defaultLatLng}
            yesIWantToUseGoogleMapApiInternals={true}
            bootstrapURLKeys={{
              key: process.env.GOOGLE_KEY as string,
              libraries: ["places"],
              language: "ja",
            }}
            onGoogleApiLoaded={handleApiLoaded}
          ></GoogleMapReact>
        </div>
      </div>
    </Layout>
  );
}
