import CategoryCard from "./CategoryCard";

export default function Categories({ categories }) {
  return (
    <section className="py-24 bg-[#111111] relative border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-6 md:px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 text-sm font-medium text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full animate-fade-in">
            <span className="relative flex h-1.5 w-1.5 mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
            </span>
            <span className="relative flex h-1.5 w-1.5 mr-0.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
            </span>
            <span className="text-neutral-300">التصنيفات</span>
          </div>
          <h2 className="text-white text-6xl leading-tight font-bold">استكشف حسب الموضوع</h2>
          <p className="max-w-lg mx-auto mt-4 text-lg leading-relaxed text-neutral-400">اعثر علي محتوي مصمم حسب اهتماماتك</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
            {
              categories.map((category) => 
                <CategoryCard key={category.name} {...category} />
                
              )
            }
        </div>
      </div>
    </section>
  );
}
