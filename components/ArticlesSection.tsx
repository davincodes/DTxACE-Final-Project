import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Article = {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  date?: string;
  category: string;
};

interface ArticlesSectionProps {
  filteredArticles: Article[];
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  scrollCarousel: (
    ref: React.RefObject<HTMLDivElement>,
    direction: "left" | "right"
  ) => void;
  broadwayCarouselRef: React.RefObject<HTMLDivElement>;
  musicalsCarouselRef: React.RefObject<HTMLDivElement>;
  balletCarouselRef: React.RefObject<HTMLDivElement>;
  ArticleCard: React.FC<{ article: Article }>;
}

// Inline SectionHeader component
const SectionHeader: React.FC<{
  title: string;
  onPrev: () => void;
  onNext: () => void;
}> = ({ title, onPrev, onNext }) => (
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-white text-xl font-semibold">{title}</h2>
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrev}
        className="text-gray-400 hover:text-white hover:bg-gray-700"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={onNext}
        className="text-gray-400 hover:text-white hover:bg-gray-700"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  </div>
);

const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  filteredArticles,
  categoryFilter,
  setCategoryFilter,
  scrollCarousel,
  broadwayCarouselRef,
  musicalsCarouselRef,
  balletCarouselRef,
  ArticleCard,
}) => {
  const carouselRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    broadway: broadwayCarouselRef,
    musicals: musicalsCarouselRef,
    ballet: balletCarouselRef,
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white text-2xl font-semibold">Articles</h2>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-32 bg-[#1e1f22] border-gray-600 text-white">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent className="bg-[#1e1f22] border-gray-600">
            <SelectItem value="all" className="text-white">
              All
            </SelectItem>
            <SelectItem value="broadway" className="text-white">
              Broadway
            </SelectItem>
            <SelectItem value="musicals" className="text-white">
              Musicals
            </SelectItem>
            <SelectItem value="ballet" className="text-white">
              Ballet
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {["broadway", "musicals", "ballet"].map((category) =>
        categoryFilter === "all" || categoryFilter === category ? (
          <div key={category} className="mb-12">
            <SectionHeader
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              onPrev={() => scrollCarousel(carouselRefs[category], "left")}
              onNext={() => scrollCarousel(carouselRefs[category], "right")}
            />
            <div
              ref={carouselRefs[category]}
              className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
            >
              {filteredArticles
                .filter(
                  (a) => a.category?.toLowerCase() === category.toLowerCase()
                )
                .map((article, idx) => (
                  <div
                    key={article.id ?? idx}
                    className="flex-shrink-0 w-full sm:w-[calc(50%-0.5rem)] snap-start"
                  >
                    <ArticleCard article={article} />
                  </div>
                ))}
            </div>
          </div>
        ) : null
      )}
    </section>
  );
};

export default ArticlesSection;
