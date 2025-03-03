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
    <>
      <div className="flex bg-[#333] rounded-xl w-150">
        <img src={image} alt={name} className="w-1/2 h-full rounded-l-xl" />
        <div className="px-4">
          <h2 className="text-2xl pt-4">{name}</h2>
          <p className="flex items-center ">
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
            {status}
          </p>
          <div className="flex flex-col gap-2 mt-6">
            <p>Specie: {species}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCharacter;
