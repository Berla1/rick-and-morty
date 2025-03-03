import { Link } from "react-router";

interface HomeBtnProps {
  texto: string;
  caminho: string;
}

const HomeBtn: React.FC<HomeBtnProps> = ({ texto, caminho }) => {
  return (
    <>
      <Link to={caminho}>
        <button className="border border-white px-4 py-2 rounded-md cursor-pointer transition duration-200 hover:scale-105">
          {texto}
        </button>
      </Link>
    </>
  );
};

export default HomeBtn;
