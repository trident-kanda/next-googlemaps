import GoogleMapReact from "google-map-react";

const GoogleMap = ({ children, ...props }: any) => {
  return (
    <div className="h-96">
      <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals={true}
        bootstrapURLKeys={{
          key: process.env.GOOGLE_KEY as string,
          libraries: "places",
        }}
        {...props}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
