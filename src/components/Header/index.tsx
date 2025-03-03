import LinkHeader from "./LinkHeader";

interface HeaderProps {
  titulo: string;
}

const Header: React.FC<HeaderProps> = ({ titulo }) => {
  return (
    <>
      <header>
        <nav className="flex justify-between px-4 py-8">
          <div>
            <h1 className="text-2xl">{titulo}</h1>
          </div>
          <div className="flex gap-4">
            <LinkHeader to="/" texto="Home" />
            <LinkHeader to="/charcters" texto="Charcters" />
            <LinkHeader to="/locations" texto="Locations" />
            <LinkHeader to="/episodes" texto="Episodes" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
