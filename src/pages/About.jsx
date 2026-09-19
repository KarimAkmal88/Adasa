import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faNewspaper,
  faPenNib,
  faBookOpen,
  faBullseye,
  faBolt,
  faHandshake,
  faArrowsRotate,
  faCheck,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faXTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { posts } from "../data/posts.json";

const stats = [
  { icon: faUsers, value: "+2 مليون", label: "قارئ شهرياً" },
  { icon: faNewspaper, value: "+500", label: "مقالة منشورة" },
  { icon: faPenNib, value: "+50", label: "كاتب خبير" },
  { icon: faBookOpen, value: "+15", label: "تصنيف" },
];

const values = [
  {
    icon: faBullseye,
    title: "الجودة أولاً",
    description: "محتوى مدروس ومكتوب بخبرة",
  },
  {
    icon: faBolt,
    title: "تركيز عملي",
    description: "أمثلة واقعية يمكنك تطبيقها اليوم",
  },
  {
    icon: faHandshake,
    title: "المجتمع",
    description: "تعلم مع آلاف المصورين",
  },
  {
    icon: faArrowsRotate,
    title: "دائماً محدث",
    description: "أحدث الاتجاهات وأفضل الممارسات",
  },
];

export default function About() {
  return (
    <div className="bg-[#0a0a0a]" dir="rtl">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-medium">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            من نحن
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            مهمتنا هي <span className="text-gradient">الإعلام والإلهام</span>
          </h1>

          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6">
                <FontAwesomeIcon
                  icon={stat.icon}
                  className="text-2xl text-orange-500 mb-2"
                />

                <div className="text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>

                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111111] border-y border-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
              قيمنا
              <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
            </h2>

            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                <div className="relative">
                  <FontAwesomeIcon
                    icon={value.icon}
                    className="text-4xl text-orange-500 mb-4"
                  />

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-neutral-400 text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 text-sm font-medium">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              فريقنا
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              تعرف على كتابنا
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              فريق من المصورين والكتاب الشغوفين بمشاركة خبراتهم ومعرفتهم
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.id}
                className="glass-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30"
              >
                <div className="relative w-24 h-24 mx-auto mb-5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-full h-full object-cover rounded-full"
                  />

                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center border-4 border-[#161616]">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-white text-[10px]"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {post.author.name}
                </h3>

                <p className="text-sm text-orange-500 mb-5">
                  {post.author.role}
                </p>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#222] flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 transition-colors"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#222] flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#222] flex items-center justify-center text-gray-400 hover:text-orange-500 hover:bg-orange-500/10 transition-colors"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:hello@adasah.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              تواصل معنا
            </a>

            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}