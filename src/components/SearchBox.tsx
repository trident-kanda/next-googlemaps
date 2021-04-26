import { MapOptions, Maps } from "google-map-react";
import { useEffect } from "react";

const SearchBox = ({ maps, map, inputMarker }: any) => {
  useEffect(() => {
    const input: any = document.getElementById("input");
    const searchBox = new maps.places.SearchBox(input);
    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if (places.length === 0) {
        return;
      }
      console.log(places[0]);
      // inputMarker(
      //   new maps.Marker({
      //     map,
      //     position: defaultLatLng,
      //   })
      // )
    });
  }, []);
  return (
    <input
      id="input"
      className=" border-2 border-gray-500 rounded focus:outline-none focus:border-green-500 p-1 w-1/2 absolute right-full"
    />
  );
};

export default SearchBox;
