"use client";

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination"
import StatusFilter from "./components/StatusFilter"
import SkeletonList from "./components/SkeletonList";
import CharacterCard from "./components/CharacterCard"
import { useStore } from "@/app/store/useStore";
// import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  const filter = useStore((s) => s.filter);
  const search = useStore((s) => s.search);
  const page = useStore((s) => s.page);
  const setPage = useStore((s) => s.setPage);
  const setTotalPages = useStore((s) => s.setTotalPages);
  const [totalCharacters, setTotalCharacters] = useState(0);


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character?page=${page}`;

    if (search.trim() !== "") {
    url = `https://rickandmortyapi.com/api/character?name=${search}&page=${page}`;
    }

    if (filter !== "") {
    url = `https://rickandmortyapi.com/api/character?status=${filter}&page=${page}`;

    if (search.trim() !== "") {
        url = `https://rickandmortyapi.com/api/character?name=${search}&status=${filter}&page=${page}`;
    }
    }

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json.results || []);
        setTotalPages(json.info?.pages || 1);
        setTotalCharacters(json.info?.count || 0);
      } catch (e) {
        setData([]);
        setTotalPages(1);
        setTotalCharacters(0);
      }

      setLoading(false);
    };

    fetchData();
  }, [search, filter, page, setTotalPages]);



  return (
    <main className="flex-1 flex flex-col items-center py-8 px-4 md:px-10 lg:px-40 w-full">
      <div className="layout-content-container flex flex-col max-w-[1280px] w-full flex-1 gap-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 py-4 border-b border-[#303928] pb-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] font-display">
              Character List
            </h1>
            <p className="text-[#abba9c] text-base md:text-lg font-normal leading-normal">
              Discover your favorite characters from the Rick and Morty animation.
            </p>
          </div>
          <div className="hidden md:flex text-[#abba9c] text-sm font-medium">
            Total: <span className="text-[#80F20D] ml-1">{totalCharacters} Character</span>
          </div>
        </div>
        <div className="flex flex-col w-full lg:flex-row justify-between gap-4 sticky z-40 bg-[#141811] py-4 lg:mx-0 lg:static lg:bg-transparent lg:py-0">
          <SearchBar />
          <StatusFilter />
        </div>

        {!loading && data.length === 0 && (
          <p className="text-center text-red-500">No results found.</p>
        )}

        {loading ? (
          <SkeletonList />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {data.map((char) => (
              <CharacterCard key={char.id} char={char} />
            ))}
          </div>
        )}
        <Pagination />
      </div>
    </main>
  );
}
