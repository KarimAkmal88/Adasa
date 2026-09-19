import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faClock } from "@fortawesome/free-solid-svg-icons";

export default function LatestPostCard(post) {
  return (
    <article className="overflow-hidden rounded-3xl transition-all duration-500 bg-[#161616] border border-[#262626] group">
      <NavLink className="block" to={`/blog/${post.slug}`}>
        <div className="relative h-52 overflow-hidden">
          <img
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            src={post.image}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
            <span>{post.date}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>
          <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
            <div className="flex items-center gap-3">
              <img
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                src={post.author.avatar}
              ></img>
              <div>
                <p className="text-sm font-medium text-white">
                  {post.author.name}
                </p>
                <p className="text-xs text-neutral-500">{post.author.role}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
              <FontAwesomeIcon
                icon={faAngleLeft}
                className="w-4 h-4 text-orange-500 group-hover:text-white duration-300 transition-colors"
              />
            </div>
          </div>
        </div>
      </NavLink>
    </article>
  );
}
