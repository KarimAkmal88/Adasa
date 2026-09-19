import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Pagination({ changePage, totalPages, currentPage }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <>
      <div className="flex items-center justify-center gap-2 mt-12">
        {currentPage === 1 ? (
          <button
            className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
            disabled
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
          </button>
        ) : (
          <button
            className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 "
            onClick={() => changePage(currentPage - 1)}
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
          </button>
        )}
        <div className="flex items-center gap-1">
          {pageNumbers.map((page) => {
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                onClick={() => changePage(page)}
                className={`min-w-[44px] h-11 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "bg-[#161616] border border-[#262626] text-neutral-400 hover:border-orange-500/50 hover:text-white"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
        {currentPage === totalPages ? (
          <button
            className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
            disabled
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
          </button>
        ) : (
          <button
            className="p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-400 hover:border-orange-500/50 hover:text-white"
            onClick={() => changePage(currentPage + 1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
          </button>
        )}
      </div>
      <p className="text-center text-neutral-500 mt-4 text-sm">
        صفحة {currentPage} من {totalPages}
      </p>
    </>
  );
}
