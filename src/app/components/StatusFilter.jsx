"use client";

import { useStore } from "@/app/store/useStore";

export default function StatusFilter() {
  const filter = useStore((s) => s.filter);
  const setFilter = useStore((s) => s.setFilter);

  const buttonClass = (active) =>
    `flex shrink-0 h-10 sm:h-12 lg:h-auto items-center justify-center gap-x-2 rounded-lg bg-[#434e3a] transition-colors px-3 sm:px-5 ring-1 ring-inset ring-[#303928] 
    ${active ? "bg-[#141811] text-white border border-[#80F20D]" : "hover:bg-[#3d4833] "}`;

  return (
    <div className="flex justify-center gap-2 md:gap-3">
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
      <span className="size-2 rounded-full bg-green-500"></span>
      <p className="text-white text-sm font-medium leading-normal">Alive</p>
      </button>

      <button
        className={buttonClass(filter === "dead")}
        onClick={() => setFilter("dead")}
      >
      <span className="size-2 rounded-full bg-red-500"></span>
      <p className="text-white text-sm font-medium leading-normal">Dead</p>
      </button>

      <button
        className={buttonClass(filter === "unknown")}
        onClick={() => setFilter("unknown")}
      >
      <span className="size-2 rounded-full bg-gray-500"></span>
      <p className="text-white text-sm font-medium leading-normal">Unknown</p>
      </button>
    </div>
  );
}
