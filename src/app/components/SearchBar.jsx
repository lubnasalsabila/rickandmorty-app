"use client";

import { useStore } from "@/app/store/useStore";

export default function SearchBar() {
  const search = useStore((s) => s.search);
  const setSearch = useStore((s) => s.setSearch);

  return (
    <div className="w-full lg:max-w-md">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Character (exp. Rick Sanchez)..."
        className="w-full px-4 py-2 rounded-lg bg-[#434e3a] focus:outline-none focus:ring-1 ring-[#80F20D] transition-all"
      />
    </div>
  );
}
