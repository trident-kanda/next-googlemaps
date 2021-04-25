import Head from "next/head";
import Layout from "../components/Layout";
import GoogleMapReact from "google-map-react";
import Nav from "../components/Nav";
import { useState } from "react";

export default function Home() {
  const [map, setMap] = useState<any>(null);
  const [maps, setMaps] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);
  const [geocoder, setGeocoder] = useState<any>(null);
  const [address, setAddress] = useState<any>(null);
  const [searchBox, setSearchBox] = useState<any>(null);
  const defaultLatLng = { lat: 35.170915, lng: 136.881537 };

  const handleApiLoaded = ({ map, maps }: any) => {
    const input = document.getElementById("input");
    map.controls[maps.ControlPosition.TOP_LEFT].push(input);
    setMap(map);
    setMaps(maps);
    setGeocoder(new maps.Geocoder());
    setMarker(
      new maps.Marker({
        map,
        position: defaultLatLng,
      })
    );
  };

  const Search = () => {};
  return (
    <Layout>
      <Nav />
      <div className="mt-4" />
      <div className="bg-white p-6  sm:rounded-lg shadow ">
        <div>
          <input
            id="input"
            className=" border-2 border-gray-500 rounded focus:outline-none focus:border-green-500 p-1 w-1/2 absolute right-full"
          />
        </div>
        <div className="h-96 ">
          <GoogleMapReact
            defaultZoom={15}
            defaultCenter={defaultLatLng}
            yesIWantToUseGoogleMapApiInternals={true}
            bootstrapURLKeys={{ key: process.env.GOOGLE_KEY as string }}
            onGoogleApiLoaded={handleApiLoaded}
          ></GoogleMapReact>
        </div>
      </div>
    </Layout>
  );
}
