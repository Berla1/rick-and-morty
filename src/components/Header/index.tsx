import LinkHeader from "./LinkHeader";

interface HeaderProps {
  titulo: string;
}

const Header: React.FC<HeaderProps> = ({ titulo }) => {
  return (
    <>
      <header>
        <nav className="flex flex-col justify-center px-4 py-8 gap-5 md:justify-between md:flex-row">
          <div>
            <h1 className="text-3xl text-center md:text-start">{titulo}</h1>
          </div>
          <div className="flex gap-4">
            <LinkHeader to="/" texto="Home" />
            <LinkHeader to="/characters" texto="Charcters" />
            <LinkHeader to="/locations" texto="Locations" />
            <LinkHeader to="/episodes" texto="Episodes" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
