import Head from "next/head";
import Layout from "../components/Layout";
import GoogleMapReact from "google-map-react";
import Nav from "../components/Nav";
import { useCallback, useState } from "react";
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
    setMarker(
      new maps.Marker({
        map,
        position: defaultLatLng,
      })
    );
    setMap(map);
    setMaps(maps);
    console.log(maps);
    changeApi(true);
  };

  return (
    <Layout>
      <Nav />
      <div className="mt-4" />
      <div className="bg-white p-6  sm:rounded-lg shadow ">
        <div className="h-96 ">
          {apiReady && (
            <SearchBox
              maps={maps}
              map={map}
              inputMarker={inputMarker}
              marker={marker}
            />
          )}
          <GoogleMapReact
            defaultZoom={15}
            defaultCenter={defaultLatLng}
            yesIWantToUseGoogleMapApiInternals={true}
            bootstrapURLKeys={{
              key: process.env.GOOGLE_KEY as string,
              libraries: "places",
            }}
            onGoogleApiLoaded={handleApiLoaded}
          ></GoogleMapReact>
        </div>
      </div>
    </Layout>
  );
}
