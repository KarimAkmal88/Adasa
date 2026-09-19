import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NewsLetter({ featuredPosts }) {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-[#161616] rounded-3xl border border-[#262626] p-8 md:p-12 lg:p-16 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            اشترك في
            <span className="text-gradient">نشرتنا الإخبارية</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-lg mx-auto">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
            الإلكتروني
          </p>
          <form className="flex flex-col md:flex-row gap-3 max-w-lg mx-auto mb-6">
            <input
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-5 py-4 rounded-xl bg-[#0a0a0a] border border-[#262626] focus:outline-none focus:border-orange-500/50 text-white placeholder-neutral-500 transition-colors"
              type="email"
            ></input>
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              اشترك الأن
            </button>
          </form>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-4">
              <div className="flex space-x-2 space-x-reverse">
                {featuredPosts.map((post) => (
                  <img
                    className="w-8 h-8 rounded-full border-2 border-[#161616]"
                    alt={post.author.name}
                    src={post.author.avatar}
                    key={post.id}
                  ></img>
                ))}
              </div>
              <span>
                انضم ل<span className="text-white font-medium"> +10,000 </span> 
                مصور
              </span>
            </div>
            <span className="inline md:hidden text-[#262626]">•</span>
            <span>بدون إزعاج</span>
            <span className="inline md:hidden text-[#262626]">•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  );
}
