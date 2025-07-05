"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import NavigationBar from "@/components/NavigationBar";
import { Calendar } from "lucide-react";
import FooterSection from "@/components/FooterSection";
import ByLinesSection from "@/components/ByLinesSection";
import ContentSection from "@/components/ContentSection";

export default function Component() {
  const params = useParams();
  const slug = decodeURIComponent(params?.slug?.toString() ?? "");

  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/services/articles.json")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load articles:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-white p-8">Loading...</div>;
  }

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <div className="text-white p-8">Article not found.</div>;
  }

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
      <Head>
        <title>{article.title} | Red Curtain</title>
        <meta
          name="description"
          content={article.description || "Read the latest article on Red Curtain."}
        />
      </Head>

      <NavigationBar />

      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row">
        <ByLinesSection
          author={article.author}
          role="Editor at Red Curtain Addict"
          date={article.date}
          avatarUrl="/images/avatar-default.png"
          onFollow={() => alert("Followed!")}
        />
      </div>

      <ContentSection article={article} articles={articles} />

      <FooterSection />
    </div>
  );
}
