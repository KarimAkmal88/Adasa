import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faFolderOpen, faNewspaper, faUsers, faPenNib, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
     <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animation-delay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="relative max-w-7xl mx-auto px-5 md:px-4 lg:px-8 py-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-sm font-medium text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full animate-fade-in">
                            <span className="relative flex h-1.5 w-1.5 mr-0.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                            </span>
                            <span className="relative flex h-1.5 w-1.5 mr-0.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                            </span>
                            <span className="text-neutral-300">
                                مرحباً بك في عدسة
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                            اكتشف
                            <span className="text-gradient"> فن</span>
                            <br />
                            التصوير الفوتوغرافي
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl leading-relaxed mx-auto">انغمس في أسرار المحترفين ونصائح عملية لتطوير مهارتك في التصوير.</p>
                        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
                            <NavLink className="btn-primary inline-flex items-center justify-center gap-2 group rounded-full hover:-translate-y-1 transition-transform" to="/blog">
                                <span>استكشف المقالات</span>
                                <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180" />
                            </NavLink>
                            <NavLink className="inline-flex justify-center items-center px-8 py-4 font-semibold text-white bg-transparent border border-[#333333] rounded-full transition-all duration-300 ease-in-out cursor-pointer hover:border-orange-500 hover:text-orange-500" to="/about">
                                <FontAwesomeIcon icon={faCircleInfo} className="w-5 h-5" />
                                <span className="mr-2">اعرف المزيد</span>
                            </NavLink>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
                                <FontAwesomeIcon icon={faNewspaper} className="text-orange-500 mb-1" />
                                <p className="text-2xl md:text-3xl font-bold text-gradient">+50</p>
                                <p className="text-neutral-500 text-sm">مقالة</p>
                            </div>
                            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300 delay-100">
                                <FontAwesomeIcon icon={faUsers} className="text-2xl text-orange-500 mb-1" />
                                <p className="text-2xl md:text-3xl font-bold text-gradient">+10ألف</p>
                                <p className="text-neutral-500 text-sm">قارئ</p>
                            </div>
                            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300 delay-200">
                                <FontAwesomeIcon icon={faFolderOpen} className="text-orange-500 mb-1" />
                                <p className="text-2xl md:text-3xl font-bold text-gradient">4</p>
                                <p className="text-neutral-500 text-sm">تصنيفات</p>
                            </div>
                            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300 delay-300">
                                <FontAwesomeIcon icon={faPenNib} className="text-orange-500 mb-1" />
                                <p className="text-2xl md:text-3xl font-bold text-gradient">6</p>
                                <p className="text-neutral-500 text-sm">كاتب</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}
