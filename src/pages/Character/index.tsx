import { useEffect, useState } from "react";
import CardCharacter from "../../components/CardCharacter";
import Header from "../../components/Header";
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
  const itensPage = 20; 
  const [totalPages, setTotalPages] = useState(0);

  const getData = async () => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const response = await axios.get(url);
    const content: CharacterType[] = response.data.results;
    console.log(content);
    setCharacters(content);
    setTotalPages(response.data.info.pages);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };


  const getPaginationButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(totalPages, startPage + 3);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 ${
            page === i ? "bg-blue-500" : "bg-gray-700"
          } text-white rounded`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

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

      <div className="flex justify-center gap-2 py-8">
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Anterior
        </button>

        {getPaginationButtons()}

        <button
          disabled={page === totalPages}
          onClick={() => handlePageChange(page + 1)}
          className="px-4 py-2 bg-gray-700 text-white rounded"
        >
          Próximo
        </button>
      </div>
    </>
  );
};

export default Character;
