import React from "react";
import { Button } from "@/components/ui/button";

interface ByLinesSectionProps {
  author: string;
  role?: string;
  date: string;
  avatarUrl?: string;
  onFollow?: () => void;
}

export default function ByLinesSection({
  author,
  role = "Editor at Red Curtain Addict",
  date,
  avatarUrl = "/images/avatar-default.png",
  onFollow,
}: ByLinesSectionProps) {
  return (
    <div className="w-full px-4 py-6 mt-5 md:mt-20 lg:mt-64">
      {/* Category Buttons Row */}
      <div className="flex gap-4 mb-6">
        <Button
          variant="outline"
          className="border-red-600 text-white bg-transparent hover:bg-red-900/20 border-2 rounded-full px-3 py-0 text-xs"
        >
          Theater
        </Button>
        <Button
          variant="outline"
          className="border-red-600 text-white bg-transparent hover:bg-red-900/20 border-2 rounded-full px-3 py-0 text-xs"
        >
          Musical
        </Button>
        <Button
          variant="outline"
          className="border-red-600 text-white bg-transparent hover:bg-red-900/20 border-2 rounded-full px-3 py-0 text-xs"
        >
          Comedy
        </Button>
      </div>

      {/* Byline Row */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={avatarUrl}
            alt={author}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
          />
          <div>
            <div className="text-white font-semibold text-lg">{author}</div>
            <div className="text-gray-300 text-sm">{role}</div>
          </div>
          <Button
            className="ml-4 bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-1 text-xs"
            onClick={onFollow}
          >
            Follow
          </Button>
        </div>
        <div className="text-right">
          <div className="text-gray-300 text-sm">Published:</div>
          <div className="text-white text-lg font-medium">{date}</div>
        </div>
      </div>
    </div>
  );
}