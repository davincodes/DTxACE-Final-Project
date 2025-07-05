"use client";

import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Type for Article
export type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
};

// ArticleCard component
export const ArticleCard = ({ article }: { article: Article }) => (
  <Card className="bg-[#1e1f22] border-gray-700 min-w-[400px] overflow-hidden">
    <CardContent className="p-0">
      <div className="flex">
        <div className="w-32 h-32 flex-shrink-0">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 flex-1">
          <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-400 text-xs mb-3 line-clamp-3">
            {article.description}
          </p>
          <div className="flex items-center text-gray-500 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            <span>Published: {article.date}</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

// SectionHeader component
export const SectionHeader = ({
  title,
  onPrev,
  onNext,
}: {
  title: string;
  onPrev: () => void;
  onNext: () => void;
}) => (
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-white text-xl font-semibold">{title}</h2>
    <div className="flex gap-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrev}
        className="text-gray-400 hover:text-white hover:bg-gray-700"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={onNext}
        className="text-gray-400 hover:text-white hover:bg-gray-700"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  </div>
);
