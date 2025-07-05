import { useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "@/styles/articles-news.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faVideo,
  faNewspaper,
  faEye,
  faMagnifyingGlass,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import ArticleSearchBar from "@/components/ArticleSearchBar";
import {
  Search,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function NavigationBar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState(""); // ✅ fix
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Only show search bar if not on homepage ("/" or "/articles-news")
  const showSearchBar = pathname !== "/" && pathname !== "/articles-news";

  return (
    <header
      className={`bg-[#000000] border-b border-gray-800 bg-opacity-0 ${styles.headerCustom}`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            <a href="/">
              <img src="/images/Red-Curtain-Logo.png" alt="Red Curtain Logo" />
            </a>
          </div>

          {showSearchBar && (
            <ArticleSearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          )}

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-gray-0">
              <img
                src="/images/Ticket-Icon.png"
                alt="Ticket Icon"
                className="w-5 h-5"
              />
              Events
            </Button>

            {/* Hamburger menu */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-black text-white px-6 py-2 hover:bg-gray-300 cursor-pointer"
                >
                  <Menu className="w-5 h-5" /> <FontAwesomeIcon icon={faUser} />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-64 bg-[#1e1f22] border border-gray-700 rounded-lg shadow-lg z-50 p-0"
                align="end" // Align the popover to the end (right) of the trigger
              >
                <div className="p-4 border-b border-gray-700">
                  <p className="text-white text-sm mb-2 text-left">
                    Create your Account!
                  </p>
                  <p className="text-gray-400 text-[11px] text-left">
                    Get personalized event recommendations tailored just for
                    you!
                  </p>
                  <div className="flex mt-5 gap-2">
                    <Button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white rounded-full">
                      Sign up
                    </Button>
                    <Button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white rounded-full">
                      Log in
                    </Button>
                  </div>
                </div>
                <nav className="py-2 text-sm">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-700"
                  >
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="w-5 h-5 text-gray-400"
                    />{" "}
                    Search Events
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-700"
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="w-5 h-5 text-gray-400"
                    />{" "}
                    Follow Art Organizations
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-700"
                  >
                    <FontAwesomeIcon
                      icon={faStar}
                      className="w-5 h-5 text-gray-400"
                    />{" "}
                    Highlight Video
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-700"
                  >
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      className="w-5 h-5 text-gray-400"
                    />{" "}
                    Latest News
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 px-4 py-2 text-white hover:bg-gray-700"
                  >
                    <FontAwesomeIcon
                      icon={faEye}
                      className="w-5 h-5 text-gray-400"
                    />{" "}
                    Watch
                  </a>
                </nav>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}