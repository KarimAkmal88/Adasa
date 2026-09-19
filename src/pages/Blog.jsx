import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { posts, categories } from "../data/posts.json";
import BlogControls from "../components/BlogControls";
import PostsDisplay from "../components/PostsDisplay";
import Pagination from "../components/Pagination";
import EmptyState from "../components/EmptyState";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [urlParams, setUrlParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const selectedCategory = urlParams.get("category") || "";
  const postsPerPage = 6;

  const filteredPosts = posts.filter((post) => {
    const searchMatch = searchQuery
      ? post.title.includes(searchQuery) ||
        post.excerpt.includes(searchQuery) ||
        post.tags.some((tag) => tag.includes(searchQuery))
      : true;
    const categoryMatch = selectedCategory
      ? selectedCategory === post.category
      : true;
    return searchMatch && categoryMatch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const pageNumberPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    (currentPage - 1) * postsPerPage + postsPerPage,
  );

  const toDisplay =
    searchQuery || selectedCategory ? filteredPosts : pageNumberPosts;

  function onSearchChange(searchQuery) {
    setSearchQuery(searchQuery);
    setCurrentPage(1);
  }

  function onCategorySelect(category) {
    if (category) {
      setUrlParams({ category });
    } else {
      setUrlParams({});
    }
    setCurrentPage(1);
  }

  function changeViewMode(newMode) {
    setViewMode(newMode);
  }

  function changePage(currentPage) {
    setCurrentPage(currentPage);
  }

  function resetFilters() {
    setSearchQuery("");
    setUrlParams({});
    setCurrentPage(1);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-sm font-medium text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full animate-fade-in">
            <span className="relative flex h-1.5 w-1.5 mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
            </span>
            <FontAwesomeIcon icon={faNewspaper} className="w-4 h-4" />
            <span className="text-neutral-300">مدونتنا</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            استكشف
            <span className="text-gradient"> مقالاتنا</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>
      <BlogControls
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        onCategorySelect={onCategorySelect}
        selectedCategory={selectedCategory}
        categories={categories}
      />
      {filteredPosts.length === 0 ? (
        <EmptyState resetFilters={resetFilters} />
      ) : (
        <>
          <PostsDisplay
            viewMode={viewMode}
            toDisplay={toDisplay}
            changeViewMode={changeViewMode}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            resetFilters={resetFilters}
          />

          {!searchQuery && !selectedCategory && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              changePage={changePage}
            />
          )}
        </>
      )}
    </div>
  );
}
