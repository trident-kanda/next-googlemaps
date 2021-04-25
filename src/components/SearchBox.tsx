import { MapOptions, Maps } from "google-map-react";
import { useEffect } from "react";

const SearchBox = ({ maps, map }: any) => {
  useEffect(() => {
    const boxset = async () => {
      const input: any = document.getElementById("input");
      const searchBox = await maps.places.SearchBox(input);
    };
  }, []);
  return (
    <input
      id="input"
      className=" border-2 border-gray-500 rounded focus:outline-none focus:border-green-500 p-1 w-1/2 absolute right-full"
    />
  );
};

export default SearchBox;
