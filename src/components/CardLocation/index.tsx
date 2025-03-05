interface CardLocationProps {
  name: string;
  type: string;
  residents: number;
  dimension: string;
}

const CardLocation: React.FC<CardLocationProps> = ({
  name,
  type,
  residents,
  dimension,
}) => {
  return (
      <li>
        <div className="flex flex-col bg-[#333] items-center text-center rounded-xl p-4 w-screen md:w-80 h-60">
          <h2 className="font-bold text-2xl mb-5">{name}</h2>
          <h3 className="text-[#222]">Type: {type}</h3>
          <p>Dimension: {dimension}</p>
          <p className="text-red-900">Know Residents: {residents}</p>
        </div>
      </li>
  );
};

export default CardLocation;
