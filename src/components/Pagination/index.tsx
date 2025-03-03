import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const getPaginationButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 3);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-4 py-2 ${
            currentPage === i ? "bg-blue-500" : "bg-gray-700"
          } rounded-xl`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="flex justify-center gap-2 py-10">
      {currentPage === 1 ? (
        ""
      ) : (
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="px-4 py-2 bg-gray-700 rounded-xl"
        >
          <FaArrowLeftLong />
        </button>
      )}

      {getPaginationButtons()}

      {currentPage === totalPages ? "" : (
        <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 bg-gray-700 rounded-xl"
      >
        <FaArrowRightLong />
      </button>
      )}
      
    </div>
  );
};

export default Pagination;
