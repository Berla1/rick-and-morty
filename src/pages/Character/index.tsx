import axios from "axios";
import { useEffect, useState } from "react";

const Character = () => {

  const [characters, setCharacters] = useState([]);
  
  const getData = async () => {
    const url = "https://rickandmortyapi.com/api/character/?page=1";
      const response = await axios.get(url);
      const content = response.data.results;
      console.log(content);
      setCharacters(content);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
       <h1 className="text-2xl p-4">Characters in Rick And Morty</h1>
      <ul className="flex flex-wrap gap-10 ">
        {characters.map((character) => (
          <li key={character.id} className="flex flex-col items-center justify-center">
            <p>{character.name}</p>
            <img src={character.image} alt={character.name} className="w-20 h-20 rounded-full" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Character;
