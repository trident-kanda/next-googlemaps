import Head from "next/head";
import Layout from "../components/Layout";
import GoogleMapReact from "google-map-react";
import Nav from "../components/Nav";
console.log(process.env.GOOGLE_KEY);
const latlng = { lat: 35.170915, lng: 136.881537 };
const handleApiLoaded = ({ map, maps }: any) => {
  new maps.Marker({
    map,
    position: latlng,
  });
};
export default function Home() {
  return (
    <Layout>
      <Nav />
      <div className="mt-4" />
      <div className="bg-white p-6 h-96 sm:rounded-lg shadow ">
        <GoogleMapReact
          defaultZoom={15}
          defaultCenter={latlng}
          yesIWantToUseGoogleMapApiInternals={true}
          bootstrapURLKeys={{ key: process.env.GOOGLE_KEY as string }}
          onGoogleApiLoaded={handleApiLoaded}
        ></GoogleMapReact>
      </div>
    </Layout>
  );
}
