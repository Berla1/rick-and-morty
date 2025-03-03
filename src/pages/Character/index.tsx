import axios from "axios";
import { useEffect, useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import Header from "../../components/Header";

interface CharacterType {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}

const Character = () => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);

  const getData = async () => {
    const url = "https://rickandmortyapi.com/api/character/?page=1";
    const response = await axios.get(url);
    const content: CharacterType[] = response.data.results;
    console.log(content);
    setCharacters(content);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header titulo="Characters in Rick and Morty"/>
      <ul className="flex flex-wrap gap-10 p-2 justify-evenly">
        {characters.map((character) => (
          <li key={character.id}>
            <div className="flex bg-[#333] rounded-xl w-150">
              <img
                src={character.image}
                alt={character.name}
                className="w-1/2 h-full rounded-l-xl"
              />
              <div className="px-4">
                <h2 className="text-2xl pt-4">{character.name}</h2>
                <p className="flex items-center ">
                  <PiDotOutlineFill
                    size={25}
                    fill={
                      character.status === "Alive"
                        ? "green"
                        : character.status === "Dead"
                        ? "red"
                        : "orange"
                    }
                  />
                  {character.status}
                </p>
                <div className="mt-6">
                  <p>Specie: {character.species}</p>
                  <p>Gender: {character.gender}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Character;
