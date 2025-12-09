"use client";

import { useStore } from "@/app/store/useStore";

export default function Pagination() {
  const page = useStore((s) => s.page);
  const setPage = useStore((s) => s.setPage);
  const totalPages = useStore((s) => s.totalPages);

  return (
    <div className="flex justify-center items-center gap-4 my-6">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
        className={`px-4 py-2 rounded-lg border 
          ${page <= 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-[#434e3a]"}
        `}
      >
        Prev
      </button>

      <span className="font-semibold">
        Page {page} / {totalPages}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page >= totalPages}
        className={`px-4 py-2 rounded-lg border
          ${page >= totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-[#434e3a]"}
        `}
      >
        Next
      </button>
    </div>
  );
}
