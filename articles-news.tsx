"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import styles from "./styles/articles-news.module.css";
import { useRouter } from "next/navigation";
import FeaturedArticleHero from "@/components/FeaturedArticleHero";
import ArticlesSection from "@/components/ArticlesSection";
import NavigationBar from "@/components/NavigationBar";
import FooterSection from "@/components/FooterSection";

export default function Component() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState<any[]>([]);
  const [categoryFilter, setCategoryFilter] = useState("all");

  const broadwayCarouselRef = useRef<HTMLDivElement>(null);
  const musicalsCarouselRef = useRef<HTMLDivElement>(null);
  const balletCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    fetch("/services/articles.json")
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Failed to load articles:", err));
  }, []);

  const filteredArticles = articles.filter(
    (article) =>
      (categoryFilter === "all" || article.category === categoryFilter) &&
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ArticleCard = ({ article }: { article: (typeof articles)[0] }) => (
    <Card
      className="bg-[#1e1f22] border-gray-700 min-w-0 w-full overflow-hidden cursor-pointer"
      onClick={() => router.push(`/articles-page/${article.slug}`)}
    >
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-64 h-48 sm:h-64 flex-shrink-0">
            <img
              src={article.image || "/images/fallback.jpg"}
              alt={article.title}
              className="w-full h-full object-cover p-2"
            />
          </div>
          <div className="p-4 flex-1">
            <h3 className="text-white font-semibold mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-gray-400 mb-3 line-clamp-3">
              {article.description}
            </p>
            <div className="flex items-center text-white-500">
              <Calendar className="w-3 h-3" />
              <div className="text-white text-[14px] mt-[60px]">
                Published:
                <br /> {article.date}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const featuredArticle = articles.find(
    (a) => a.slug === "interview-with-the-beatles"
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
      <NavigationBar />

      {featuredArticle ? (
        <div>
          <FeaturedArticleHero featuredArticle={featuredArticle} />
        </div>
      ) : (
        <div className="text-white text-center py-8">
          No featured article found.
        </div>
      )}

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

      <FooterSection />
    </div>
  );
}
