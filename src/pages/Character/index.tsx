import { useEffect, useState } from "react";
import CardCharacter from "../../components/CardCharacter";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import axios from "axios";

interface CharacterType {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
}

const Character = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getData = async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await axios.get(url);
    const content: CharacterType[] = response.data.results;
    setCharacters(content);
    setTotalPages(response.data.info.pages);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <>
      <Header titulo="Characters in Rick and Morty" />
      <ul className="flex flex-wrap gap-10 p-2 justify-evenly">
        {characters.map((character) => (
          <li key={character.id}>
            <CardCharacter
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
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

export default Character;
