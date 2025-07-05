import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

interface Article {
  id: number
  title: string
  description: string
  image: string
  date: string
  content: string
  category: string
  slug?: string
}

export default function ArticleSearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<Article[]>([])
  const [showResults, setShowResults] = useState(false)

  // Fetch and filter articles as the user types
  useEffect(() => {
    const fetchAndFilter = async () => {
      if (!searchQuery.trim()) {
        setResults([])
        setShowResults(false)
        return
      }
      const res = await fetch("/services/articles.json")
      const articles: Article[] = await res.json()
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setResults(filtered)
      setShowResults(true)
    }
    fetchAndFilter()
  }, [searchQuery])

  return (
    <div className="flex-1 max-w-md mx-8 relative">
      <div className="relative">
        <Input
          type="text"
          placeholder="Start your search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-[#1e1f22] border-gray-600 text-white placeholder-gray-400 pr-10"
        />
        <Button
          size="sm"
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-pink-600 hover:bg-pink-700 h-8 w-8 p-0"
          tabIndex={-1}
        >
          <Search className="w-4 h-4" />
        </Button>
      </div>
      {showResults && (
        <div className="absolute z-50 bg-[#232428] border border-gray-700 rounded w-full mt-2 max-h-72 overflow-y-auto shadow-lg">
          {results.length === 0 ? (
            <div className="text-gray-400 p-4">No articles found.</div>
          ) : (
            results.map(article => (
              <a
                key={article.id}
                href={`/articles-page/${article.slug || article.id}`}
                className="block px-4 py-2 hover:bg-[#333] text-white border-b border-gray-700 last:border-b-0"
              >
                <div className="font-semibold">{article.title}</div>
                <div className="text-xs text-gray-400">{article.description}</div>
              </a>
            ))
          )}
        </div>
      )}
    </div>
  )
}