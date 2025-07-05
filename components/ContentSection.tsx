"use client";

import RelatedArticles from "@/components/RelatedArticles";

interface Article {
  slug: string;
  title: string;
  content: string;
  image?: string;
  category: string;
  description?: string;
  author?: string;
  date?: string;
  [key: string]: any;
}

interface ContentSectionProps {
  article: Article;
  articles: Article[];
}

export default function ContentSection({ article, articles }: ContentSectionProps) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row">
      <article className="flex-1 min-w-0">
        <h1 className="text-white text-3xl font-bold mb-2">{article.title}</h1>

        <div
          className="prose prose-invert max-w-none text-gray-200"
          dangerouslySetInnerHTML={{
            __html: article.content || "<p>No content available.</p>",
          }}
        />

        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-auto mt-6 object-cover"
            onError={(e) => (e.currentTarget.src = "/images/fallback.jpg")}
          />
        )}
      </article>

      <RelatedArticles
        articles={articles}
        currentSlug={article.slug}
        currentCategory={article.category}
      />
    </main>
  );
}
