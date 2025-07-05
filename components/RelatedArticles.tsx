"use client";
import { useRouter } from "next/navigation";

interface RelatedArticlesProps {
  articles: any[];
  currentSlug: string;
  currentCategory: string;
}

export default function RelatedArticles({
  articles,
  currentSlug,
  currentCategory,
}: RelatedArticlesProps) {
  const related = articles
    .filter(
      (article) =>
        article.category === currentCategory && article.slug !== currentSlug
    )
    .slice(0, 5);

  const router = useRouter();

  return (
    <aside className="md:w-96 w-full md:ml-8 mt-10 md:mt-0">
      {" "}
      {/* Adjusted width of the carousels for article page */}
      <h2 className="text-white text-lg font-bold mb-4">Related articles</h2>
      <div className="grid grid-cols-1 gap-4">
        {related.map((article) => (
          <div
            key={article.slug}
            className="bg-[#1e1f22] border border-gray-700 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition flex"
            onClick={() => router.push(`/articles-page/${article.slug}`)}
          >
            <img
              src={article.image || "/images/fallback.jpg"}
              onError={(e) => (e.currentTarget.src = "/images/fallback.jpg")}
              alt={article.title}
              className="w-32 object-cover flex-shrink-0 aspect-video"
            />
            <div className="p-4 flex-1">
              <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm mb-1 line-clamp-3">
                {article.description}
              </p>
            </div>
          </div>
        ))}

        {related.length === 0 && (
          <div key="no-related" className="text-gray-400 p-4">
            No related articles found.
          </div>
        )}
      </div>
    </aside>
  );
}
