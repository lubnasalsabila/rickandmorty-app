"use client";

import { useStore } from "@/app/store/useStore";

export default function StatusFilter() {
  const filter = useStore((s) => s.filter);
  const setFilter = useStore((s) => s.setFilter);

  const buttonClass = (active) =>
    `px-4 py-2 rounded-lg border text-sm 
    ${active ? "bg-blue-500 text-white" : "bg-white hover:bg-gray-100"}`;

  return (
    <div className="flex justify-center gap-3 my-4">
      <button
        className={buttonClass(filter === "")}
        onClick={() => setFilter("")}
      >
        All
      </button>

      <button
        className={buttonClass(filter === "alive")}
        onClick={() => setFilter("alive")}
      >
        Alive
      </button>

      <button
        className={buttonClass(filter === "dead")}
        onClick={() => setFilter("dead")}
      >
        Dead
      </button>

      <button
        className={buttonClass(filter === "unknown")}
        onClick={() => setFilter("unknown")}
      >
        Unknown
      </button>
    </div>
  );
}
