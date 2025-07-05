import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  category: string;
}

export default function ArticleCard({ article }: { article: Article }) {
  const router = useRouter();
  return (
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
}
