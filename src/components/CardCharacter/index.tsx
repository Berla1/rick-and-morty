import { PiDotOutlineFill } from "react-icons/pi";

interface CardCharacterProps {
  image: string;
  name: string;
  species: string;
  gender: string;
  status: string;
  origin: {
    name: string;
  };
}

const CardCharacter: React.FC<CardCharacterProps> = ({
  image,
  name,
  status,
  species,
  gender,
  origin,
}) => {
  return (
      <div className="flex flex-col bg-[#333] rounded-xl justify-center items-center w-full md:flex-row md:w-150 md:justify-normal">
        <img src={image} alt={name} className="w- h-full rounded-b-xl md:rounded-l-xl" />
        <div className="flex flex-col px-4">
          <h2 className="text-2xl pt-4  font-bold">{name}</h2>
          <p className="flex items-center md:items-start">
            <PiDotOutlineFill
              size={25}
              fill={
                status === "Alive"
                  ? "green"
                  : status === "Dead"
                  ? "red"
                  : "orange"
              }
            />
            {status} - {species}
          </p>
          <div className="flex flex-col gap-2 my-6 items-center w-full md:items-start">
            <p>Gender: {gender}</p>
            <p className="text-center w-full md:text-start">Origin: {origin.name}</p>
          </div>
        </div>
      </div>
  );
};

export default CardCharacter;
