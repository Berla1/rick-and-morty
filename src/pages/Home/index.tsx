import RickAndMortyLogo from "../../assets/rick-morty-logo.svg";
import HomeBtn from "../../components/HomeBtn";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen gap-10">
        <img
          src={RickAndMortyLogo}
          alt="Logo rick and morty"
          className="md:w-1/2"
        />
        <ul className="flex flex-col items-center gap-6 text-xl md:flex-row">
          <HomeBtn caminho="/characters" texto="Characters"/>
          <HomeBtn caminho="/locations" texto="Locations"/>
          <HomeBtn caminho="/episodes" texto="Episodes"/>
        </ul>
      </main>
    </>
  );
};

export default Home;
