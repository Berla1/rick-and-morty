interface CardEpisodesProps {
    name: string;
    air_date: string;
    episode: string;
}

const CardEpisodes: React.FC<CardEpisodesProps> = ({name, episode, air_date }) => {
  return (
    <>
      <li>
        <div className="flex flex-col bg-[#333] items-center text-center rounded-xl p-4 w-screen md:w-80 h-50">
          <h2 className="font-bold text-2xl mb-5">{name}</h2>
          <h3 className="text-[#222]">Episode: {episode}</h3>
          <p>Air date: {air_date}</p>
        
        </div>
      </li>
    </>
  );
};

export default CardEpisodes;
