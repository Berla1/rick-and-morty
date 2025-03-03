import { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import CardLocation from "../../components/CardLocation";
import Pagination from "../../components/Pagination";

interface LocationType {
  id: number;
  name: string;
  type: string;
  residents: [];
  dimension: string;
}

const Location = () => {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getData = async () => {
    const url = `https://rickandmortyapi.com/api/location/?page=${page}`;
    const response = await axios.get(url);
    const content: LocationType[] = response.data.results;
    setLocations(content);
    setTotalPages(response.data.info.pages);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <Header titulo="Locations in Rick and Morty" />
      <ul className="px-4 flex flex-wrap gap-10 ">
        {locations.map((location) => (
          <li key={location.id}>
            <CardLocation
              name={location.name}
              type={location.type}
              residents={location.residents.length}
              dimension={location.dimension}
            />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
};

export default Location;
