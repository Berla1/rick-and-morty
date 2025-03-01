import RickAndMortyLogo from "../../assets/rick-morty-logo.svg";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen gap-10">
        <img
          src={RickAndMortyLogo}
          alt="Logo rick and morty"
          className="w-1/2"
        />
        <ul className="flex gap-6 text-xl">
          <a href="" target="_blank">
            <button className="home-btns">Characters</button>
          </a>
          <a href="" target="_blank">
            <button className="home-btns">Locations</button>
          </a>
          <a href="" target="_blank">
            <button className="home-btns">Episodes</button>
          </a>
        </ul>
      </main>
    </>
  );
};

export default Home;
