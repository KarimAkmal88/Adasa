import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import LatestPostCard from "./LatestPostCard";

export default function LatestPosts({ posts }) {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-sm font-medium text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full animate-fade-in">
              <span className="relative flex h-1.5 w-1.5 mr-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
              </span>
              <span className="relative flex h-1.5 w-1.5 mr-0.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
              </span>
              <span className="text-neutral-300">الأحدث</span>
            </div>
            <h2 className="text-white leading-tight tracking-tight text-6xl font-bold">
              أحدث المقالات
            </h2>
            <p className="max-w-lg mt-4 text-lg leading-relaxed text-neutral-400">
              محتوى جديد طازق من المطبعة
            </p>
          </div>
          <NavLink
            className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            to="/blog"
          >
            عرض جميع المقالات
            <FontAwesomeIcon
              icon={faChevronRight}
              className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
            />
          </NavLink>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <LatestPostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
