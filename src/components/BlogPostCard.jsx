import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendar,
  faAngleLeft,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function BlogPostCard({
  slug,
  title,
  excerpt,
  category,
  author,
  image,
  date,
  readTime,
  viewMode,
}) {
  const isGrid = viewMode === "grid";

  return (
    <article
      className={`${isGrid ? "rounded-3xl transition-all duration-500 bg-[#161616] border border-[#262626] overflow-hidden group" : "group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden delay-100"}`}
    >
      <NavLink
        className={`${isGrid ? "block" : "flex flex-col md:flex-row"}`}
        to={`/blog/${slug}`}
      >
        <div
          className={`${isGrid ? "relative h-52 overflow-hidden" : "relative w-full md:w-72 lg:w-80 md:h-auto shrink-0 overflow-hidden"}`}
        >
          <img
            alt={title}
            src={image}
            className={`${isGrid ? "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" : "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}`}
          ></img>
          <div
            className={`${isGrid ? "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" : "absolute inset-0 bg-gradient-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"}`}
          ></div>
          <div className={`${isGrid ? "absolute top-4 right-4" : "hidden"}`}>
            <span
              className={`${isGrid ? "px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]" : "hidden"}`}
            >
              {category}
            </span>
          </div>
        </div>
        <div
          className={`${isGrid ? "p-6" : "flex-1 p-6 flex flex-col justify-center"}`}
        >
          <div
            className={`${isGrid ? "flex items-center gap-3 text-sm text-neutral-500 mb-3" : "flex flex-wrap items-center gap-3 mb-3"}`}
          >
            <span
              className={`${isGrid ? "hidden" : "px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20"}`}
            >
              {category}
            </span>
            <span
              className={`${isGrid ? "flex items-center gap-1" : "flex items-center gap-1 text-sm text-neutral-500"}`}
            >
              <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
              {readTime}
            </span>
            <span
              className={`${isGrid ? "w-1 h-1 bg-neutral-600 rounded-full" : "hidden"}`}
            ></span>
            <span
              className={`${isGrid ? "" : "flex items-center gap-1 text-sm text-neutral-500"}`}
            >
              <FontAwesomeIcon
                icon={faCalendar}
                className={`${isGrid ? "hidden" : "w-4 h-4"}`}
              />
              {date}
            </span>
          </div>
          <h3
            className={`${isGrid ? "text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight" : "hidden"}`}
          >
            {title}
          </h3>
          <h2
            className={`${isGrid ? "hidden" : "text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2"}`}
          >
            {title}
          </h2>
          <p
            className={`${isGrid ? "text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed" : "text-neutral-400 mb-4 line-clamp-2 leading-relaxed"}`}
          >
            {excerpt}
          </p>
          <div
            className={`${isGrid ? "flex items-center justify-between pt-4 border-t border-[#262626]" : "flex items-center justify-between mt-auto"}`}
          >
            <div className="flex items-center gap-3">
              <img
                alt={author.name}
                src={author.avatar}
                className={`${isGrid ? "w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]" : "w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"}`}
              ></img>
              <div>
                <p
                  className={`${isGrid ? "text-sm font-medium text-white" : "text-sm font-semibold text-white"}`}
                >
                  {author.name}
                </p>
                <p className="text-xs text-neutral-500">{author.role}</p>
              </div>
            </div>
            <div
              className={`${isGrid ? "w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent" : "hidden"}`}
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                className={`${isGrid ? "w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300" : "hidden"}`}
              />
            </div>
            <span
              className={`${isGrid ? "hidden" : "hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300"}`}
            >
              اقرأ المقال
              <FontAwesomeIcon
                icon={faArrowLeft}
                className={`${isGrid ? "hidden" : "w-5 h-5"}`}
              />
            </span>
          </div>
        </div>
      </NavLink>
    </article>
  );
}
