import { useEffect, useState } from "react";
import CardEpisodes from "../../components/CardEpisodes";
import Header from "../../components/Header";
import axios from "axios";

interface EpisodeType {
    id: number;
    name: string;
    air_date: string;
    episode: string;
}

const Episodes = () => {
    const [episode, setEpisode] = useState<EpisodeType[]>([]);
    const [page, setPage] = useState(1);

    const getData = async () => {
        const url = `https://rickandmortyapi.com/api/episode/?page=${page}`;
        const response = await axios.get(url);
        const content: EpisodeType[] = response.data.results;
        setEpisode(content);
      };

      useEffect(() => {
        getData();
      }, []);
    
  return (
    <>
      <Header titulo="Episodes in Rick and Morty" />
      <ul className="px-4 flex flex-wrap gap-10 ">
        {episode.map((episode) => (
          <li key={episode.id}>
            <CardEpisodes
              name={episode.name}
              episode={episode.episode}
              air_date={episode.air_date}
            />
          </li>
        ))}

      </ul>
    </>
  );
};

export default Episodes;
