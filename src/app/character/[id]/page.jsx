export const runtime = "edge";
export const dynamic = "force-dynamic";

import Link from "next/link";
import Loading from "./loading";

export default async function CharacterDetail({ params }) {
  const { id } = await params;

  if (!params) return <Loading />;

  // Fetch character
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to load character");

  const char = await res.json();

  const episodeIds = char.episode.map((ep) => ep.split("/").pop());

  let episodes = [];

  try {
    const apiURL = `https://rickandmortyapi.com/api/episode/[${episodeIds.join(",")}]`;

    const epsRes = await fetch(apiURL, { cache: "no-store" });

    if (!epsRes.ok) throw new Error("Failed loading episodes");

    const epsData = await epsRes.json();

    episodes = Array.isArray(epsData) ? epsData : [epsData];
  } catch (err) {
    console.error("EPISODE FETCH ERROR:", err);
    episodes = [];
  }

  const statusColor =
    char.status === "Alive"
      ? "bg-[#80f20d]"
      : char.status === "Dead"
      ? "bg-red-500"
      : "bg-gray-400";

  return (
    <div className="flex flex-1 justify-center py-5 px-4 md:px-10 lg:px-40">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1 w-full gap-6">
        
        {/* Breadcrumbs */}
        <div className="flex flex-wrap gap-2 px-4">
          <Link className="text-[#abba9c] text-sm font-medium hover:text-[#80f20d]" href="/">
            Home
          </Link>
          <span className="text-[#abba9c]">/</span>
          <span className="text-white text-sm font-medium">{char.name}</span>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 items-stretch">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Profile Card */}
            <div className="bg-[#303928] rounded-xl p-6 flex flex-col items-center text-center gap-4 shadow-lg border border-white/5">

              <div className="relative group">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full w-48 h-48 border-4 border-[#abba9c] group-hover:border-[#80f20d] transition-all duration-300"
                  style={{ backgroundImage: `url(${char.image})` }}
                ></div>
              </div>

              <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">{char.name}</h1>

                <div className="flex items-center justify-center gap-2 mt-1">
                  <span className={`h-2 w-2 rounded-full ${statusColor}`}></span>
                  <p className="text-white font-medium">{char.status}</p>
                  <span className="text-[#abba9c]">•</span>
                  <p className="text-[#abba9c]">{char.species}</p>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 my-2"></div>

              {/* Gender & Species */}
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center p-3 bg-[#192210]/50 rounded-lg">
                  <span className="material-symbols-outlined text-[#abba9c] mb-1">
                    {char.gender === "Male"
                      ? "male"
                      : char.gender === "Female"
                      ? "female"
                      : char.gender === "Genderless"
                      ? "hide_source"
                      : "help"}
                  </span>

                  <span className="text-xs text-[#abba9c] uppercase tracking-wider">
                    Gender
                  </span>

                  <span className="text-sm font-bold text-white">{char.gender}</span>
                </div>

                <div className="flex flex-col items-center p-3 bg-[#192210]/50 rounded-lg">
                  <span className="material-symbols-outlined text-[#abba9c] mb-1">
                    science
                  </span>
                  <span className="text-xs text-[#abba9c] uppercase tracking-wider">
                    Species
                  </span>
                  <span className="text-sm font-bold text-white">{char.species}</span>
                </div>
              </div>
            </div>

            {/* Locations Card */}
            <div className="bg-[#303928] rounded-xl p-5 border border-white/5 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-[#80f20d]">public</span>
                Locations
              </h3>

              {/* Origin */}
              <div className="flex items-start gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="bg-[#192210] p-2 rounded-lg text-[#abba9c] group-hover:text-[#80f20d] transition-colors">
                  <span className="material-symbols-outlined">flight_takeoff</span>
                </div>
                <div>
                  <p className="text-xs text-[#abba9c] mb-0.5">Origin</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#80f20d] transition-colors">
                    {char.origin?.name || "Unknown"}
                  </p>
                  <p className="text-xs text-[#abba9c] mt-1">
                    Unknown Dimension
                  </p>
                </div>
              </div>

              {/* Last Location */}
              <div className="flex items-start gap-4 p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="bg-[#192210] p-2 rounded-lg text-[#abba9c] group-hover:text-[#80f20d] transition-colors">
                  <span className="material-symbols-outlined">pin_drop</span>
                </div>
                <div>
                  <p className="text-xs text-[#abba9c] mb-0.5">Last Known Location</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#80f20d] transition-colors">
                    {char.location?.name}
                  </p>
                  <p className="text-xs text-[#abba9c] mt-1">Unknown Dimension</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — EPISODES */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex flex-col bg-[#303928] rounded-xl border border-white/5 h-full overflow-hidden">
              
              <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-[#303928] z-10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#80f20d]">movie_filter</span>
                  <h3 className="text-xl font-bold text-white">Episodes Appeared</h3>
                  <span className="bg-[#192210] text-[#abba9c] text-xs px-2 py-1 rounded-full border border-white/10">
                    {episodes.length}
                  </span>
                </div>
              </div>

              {/* EPISODE LIST */}
              <div className="overflow-y-auto max-h-[600px] p-4 flex flex-col gap-2 custom-scrollbar">
                {episodes.map((ep) => {
                  const season = ep.episode.slice(1, 3);

                  return (
                    <div
                      key={ep.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-[#192210] hover:bg-white/5 transition-colors cursor-pointer group border border-transparent hover:border-[#80f20d]/30"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded bg-[#303928] flex items-center justify-center text-[#80f20d] font-bold text-xs">
                          S{season}
                        </div>
                        <div className="flex flex-col">
                          <p className="text-white font-bold text-sm md:text-base group-hover:text-[#80f20d] transition-colors">
                            {ep.name}
                          </p>
                          <p className="text-[#abba9c] text-xs md:text-sm">{ep.air_date}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-[#abba9c] bg-[#303928] px-2 py-1 rounded">
                          {ep.episode}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 border-t border-white/10 sticky bottom-0 bg-[#303928] z-10"></div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
