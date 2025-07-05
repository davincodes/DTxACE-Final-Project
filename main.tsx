"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import FeaturedArticleHero from "@/components/FeaturedArticleHero";
import ArticlesSection from "@/components/ArticlesSection";
import NavigationBar from "@/components/NavigationBar";
import FooterSection from "@/components/FooterSection";
import ArticleCard from "@/components/ArticleCard";
interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  category: string;
}

export default function Component() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState<Article[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("all");

  const broadwayCarouselRef = useRef<HTMLDivElement>(null);
  const musicalsCarouselRef = useRef<HTMLDivElement>(null);
  const balletCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = useCallback(
    (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
      if (ref.current) {
        const scrollAmount = ref.current.offsetWidth * 0.8;
        ref.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    },
    []
  );

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/services/articles.json");
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error("Failed to load articles:", err);
      }
    };
    fetchArticles();
  }, []);

  const filteredArticles = useMemo(
    () =>
      articles.filter(
        (article) =>
          (categoryFilter === "all" || article.category === categoryFilter) &&
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [articles, categoryFilter, searchQuery]
  );

  const featuredArticle = useMemo(
    () => articles.find((a) => a.slug === "interview-with-the-beatles"),
    [articles]
  );

  return (
    <div
      className="min-h-screen bg-[#000000]"
      style={{
        backgroundImage: `url('/images/beatles-top-banner.jpg')`,
        backgroundSize: "contain",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
       {/* Top Navigation B*/}
      <NavigationBar />

      {/* Featured Article - Beatles Here */}
      {featuredArticle ? (
        <FeaturedArticleHero featuredArticle={featuredArticle} />
      ) : (
        <div className="text-white text-center py-8">No featured article found.</div>
      )}
  
       {/* The 3 Carousel Sections with category Broad, Musicals, Ballet */}
      <ArticlesSection
        filteredArticles={filteredArticles}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        scrollCarousel={scrollCarousel}
        broadwayCarouselRef={broadwayCarouselRef}
        musicalsCarouselRef={musicalsCarouselRef}
        balletCarouselRef={balletCarouselRef}
        ArticleCard={ArticleCard}
      />
      
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
