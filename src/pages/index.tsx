import Head from "next/head";
import Layout from "../components/Layout";
import GoogleMapReact from "google-map-react";
import Nav from "../components/Nav";
import GoogleMap from "../components/GoogleMap";
const defaultLatLng = { lat: 35.170915, lng: 136.881537 };

const handleApiLoaded = ({ map, maps }: any) => {
  new maps.Marker({
    map,
    position: defaultLatLng,
  });
};
export default function Home() {
  return (
    <Layout>
      <Nav />
      <div className="mt-4" />
      <div className="bg-white p-6 sm:rounded-lg shadow ">
        <GoogleMap
          defaultZoom={15}
          defaultCenter={defaultLatLng}
          onGoogleApiLoaded={handleApiLoaded}
        ></GoogleMap>
      </div>
    </Layout>
  );
}
