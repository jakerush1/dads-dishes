"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

interface TagFilterProps {
  availableTags: string[];
  selectedTags: string[];
}

function getFriendlyTagName(tag: string) {
  // add an s to the end of the tag
  // and an es to main-dish es
  return (
    tag.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) +
    (tag === "main-dish" ? "es" : "s")
  );
}

export function TagFilter({ availableTags, selectedTags }: TagFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  function toggleTag(tag: string) {
    const params = new URLSearchParams(searchParams);
    const currentTags = new Set(selectedTags);

    if (currentTags.has(tag)) {
      currentTags.delete(tag);
    } else {
      currentTags.add(tag);
    }

    if (currentTags.size > 0) {
      params.set("tags", Array.from(currentTags).join(","));
    } else {
      params.delete("tags");
    }

    startTransition(() => {
      router.push(`/recipes?${params.toString()}`);
    });
  }

  return (
    <div className="flex flex-wrap gap-2">
      {availableTags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={`rounded-full px-3 py-1 text-sm ${
            selectedTags.includes(tag)
              ? "bg-amber-600 text-white"
              : "bg-accent text-foreground"
          }`}
        >
          {getFriendlyTagName(tag)}
        </button>
      ))}
    </div>
  );
}
