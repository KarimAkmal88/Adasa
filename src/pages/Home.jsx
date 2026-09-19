import Categories from "../components/Categories";
import FeaturedPosts from "../components/FeaturedPosts";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";
import NewsLetter from "../components/NewsLetter";
import { posts, categories } from "../data/posts.json";

export default function Home() {
  const featuredPosts = posts.filter((post) => post.featured === true);
  const newestPosts = posts.filter(p => !p.featured).toSorted((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  

  return (
    <main className="flex-grow pt-20">
      <Hero />
      {featuredPosts.length > 0 && (
        <FeaturedPosts featuredPosts={featuredPosts} />
      )}
      <Categories categories={categories} />
      <LatestPosts posts={newestPosts} />
      {featuredPosts.length > 0 && (
        <NewsLetter featuredPosts={featuredPosts} />
      )}
    </main>
  );
}
