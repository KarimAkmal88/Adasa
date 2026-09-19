import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTableCellsLarge,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import BlogPostCard from "./BlogPostCard";
import EmptyState from "./EmptyState";

export default function PostsDisplay({
  toDisplay,
  viewMode,
  changeViewMode,
  searchQuery,
  selectedCategory,
  resetFilters,
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 scroll-mt-[146px]">
      <div className="mb-8 flex items-center justify-between">
        <p className="text-neutral-400">
          عرض
          <span className="font-bold text-white">{toDisplay.length}</span>
          مقالات
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
            <button
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                viewMode === "grid"
                  ? "p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white"
                  : "p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white"
              }`}
              onClick={() => changeViewMode("grid")}
              title="عرض شبكي"
            >
              <FontAwesomeIcon icon={faTableCellsLarge} className="w-5 h-5" />
            </button>
            <button
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                viewMode === "list"
                  ? "p-2 rounded-lg transition-all duration-300 bg-orange-500 text-white"
                  : "p-2 rounded-lg transition-all duration-300 text-neutral-400 hover:text-white"
              }`}
              onClick={() => changeViewMode("list")}
              title="عرض قائمة"
            >
              <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
            </button>
          </div>
          {(searchQuery || selectedCategory) && (
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-sm text-neutral-400 hover:text-orange-500 transition-colors duration-300"
              title="مسح الفلاتر"
            >
              <FontAwesomeIcon icon={faRotateLeft} className="ml-2" />
              مسح الفلاتر
            </button>
          )}
        </div>
      </div>
      {toDisplay.length === 0 ? (
        <EmptyState resetFilters={resetFilters} />
      ) : (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-6"
          }
        >
          {toDisplay.map((post) => (
            <BlogPostCard key={post.id} {...post} viewMode={viewMode} />
          ))}
        </div>
      )}
    </div>
  );
}
