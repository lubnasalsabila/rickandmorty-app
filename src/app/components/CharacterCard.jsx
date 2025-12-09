"use client";

import Link from "next/link";
import Image from "next/image";

export default function CharacterCard({ char }) {
  return (
    <Link
      href={`/character/${char.id}`}
      className="
        group flex flex-col bg-[#1b2018] 
        rounded-xl overflow-hidden
        hover:ring-2 hover:ring-[#80F20D]
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_10px_30px_-10px_rgba(128,242,13,0.3)]
      "
    >
      {/* Image Section */}
      <div className="relative w-full aspect-square overflow-hidden">
        <div
          className="
            w-full h-full bg-center bg-cover 
            transition-transform duration-500 
            group-hover:scale-110
          "
          style={{ backgroundImage: `url("${char.image}")` }}
        ></div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`
              inline-flex items-center gap-1.5 px-3 py-1 rounded-full 
              text-xs font-bold backdrop-blur-sm border
              ${
                char.status === "Alive"
                  ? "bg-[#141811]/80 text-white border-green-500/50"
                  : char.status === "Dead"
                  ? "bg-[#141811]/80 text-white border-red-500/50"
                  : "bg-[#141811]/80 text-white border-gray-500/50"
              }
            `}
          >
          <span
            className={`
              size-2 rounded-full 
              ${
                char.status === "Alive"
                  ? "bg-green-500"
                  : char.status === "Dead"
                  ? "bg-red-500"
                  : "bg-gray-400"
              } 
              animate-pulse
            `}
          />
            {char.status}
          </span>
        </div>
      </div>

      {/* Text Section */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        <div>
          <h3 className="text-white text-xl font-bold leading-tight font-display hover:text-[#80F20D] cursor-pointer">
            {char.name}
          </h3>
          <p className="text-[#abba9c] text-sm mt-1">
            {char.species} • {char.gender}
          </p>
        </div>

        {/* Footer Info */}
        <div className="mt-auto flex flex-col gap-3 pt-3 border-t border-[#434e3a]">
          <div className="flex flex-col gap-0.5">
            <span className="text-[#8d9685] text-xs font-medium uppercase tracking-wider">
              Last Location
            </span>
            <span className="text-white text-sm font-medium truncate hover:text-[#80F20D] cursor-pointer">
              {char.location?.name}
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="text-[#8d9685] text-xs font-medium uppercase tracking-wider">
              Origin
            </span>
            <span className="text-white text-sm font-medium truncate">
              {char.origin?.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
