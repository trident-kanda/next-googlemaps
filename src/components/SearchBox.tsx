import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const SearchBox = ({ maps, map, inputMarker, marker }: any) => {
  const input = useRef(null);
  const searchBox: any = useRef(null);

  useEffect(() => {
    searchBox.current = new maps.places.SearchBox(input.current);
    map.controls[maps.ControlPosition.TOP_LEFT].push(input.current);
    searchBox.current.addListener("places_changed", () => {
      const places = searchBox.current.getPlaces();
      if (places.length === 0) {
        return;
      }
      const bounds = new maps.LatLngBounds();
      const location = places[0].geometry.location;
      console.log(location);
      console.log(bounds);
      marker.setMap(null);
      inputMarker(
        new maps.Marker({
          map,
          position: location,
        })
      );
      map.panTo(location);
    });
  }, [maps]);
  return (
    <input
      type="text"
      ref={input}
      className=" border-2 border-gray-500 rounded focus:outline-none focus:border-green-500 p-1 w-1/2 absolute right-full"
    />
  );
};

export default SearchBox;
