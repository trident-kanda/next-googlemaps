import Head from "next/head";
import Layout from "../components/Layout";
import GoogleMapReact from "google-map-react";
import Nav from "../components/Nav";
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
