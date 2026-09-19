import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function BlogControls({
  searchQuery,
  onSearchChange,
  onCategorySelect,
  selectedCategory,
  categories,
}) {
  return (
    <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80">
            <input
              placeholder="ابحث في المقالات ..."
              className="w-full px-5 py-3 pr-12 bg-[#161616] border border-[#262626] rounded-xl transition-all outline-none duration-300 placeholder:text-neutral-400 text-neutral-400"
              type="text"
              onChange={(e) => onSearchChange(e.target.value)}
              value={searchQuery}
            ></input>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedCategory === ""
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                  : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
              }`}
              onClick={() => onCategorySelect("")}
            >
              جميع المقالات
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                }`}
                onClick={() => onCategorySelect(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
