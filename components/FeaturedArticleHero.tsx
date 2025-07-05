import React from "react"
import { Button } from "@/components/ui/button"
import styles from "../styles/articles-news.module.css"
import { useRouter } from "next/navigation"

type FeaturedArticle = {
  id?: number
  title?: string
  description?: string
}

interface FeaturedArticleHeroProps {
  featuredArticle?: FeaturedArticle
}

const FeaturedArticleHero: React.FC<FeaturedArticleHeroProps> = ({ featuredArticle }) => {
  const router = useRouter()

  const handleReadMore = () => {
    if (featuredArticle?.slug) {
    router.push(`/articles-page/${featuredArticle.slug}`);
  }
  }

  return (
    <section className={`relative h-96 bg-gradient-to-r from-blue-600 to-blue-400 ${styles.BeatlesHero}`}>
      <div className="absolute inset-0 bg-black bg-opacity-0" />
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            {featuredArticle?.title || "Loading..."}
          </h1>
          <p className="text-lg mb-6 opacity-90">
            {featuredArticle?.description || ""}
          </p>
          <Button
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2"
            onClick={handleReadMore}
          >
            Read more
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticleHero