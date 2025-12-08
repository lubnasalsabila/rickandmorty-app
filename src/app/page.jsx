"use client";

import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination"
import StatusFilter from "./components/StatusFilter"
import { useStore } from "@/app/store/useStore";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const filter = useStore((s) => s.filter);
  const search = useStore((s) => s.search);
  const page = useStore((s) => s.page);
  const setPage = useStore((s) => s.setPage);
  const setTotalPages = useStore((s) => s.setTotalPages);

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
      } catch (e) {
        setData([]);
        setTotalPages(1);
      }

      setLoading(false);
    };

    fetchData();
  }, [search, filter, page, setTotalPages]);



  return (
    <main className="p-6">
      <SearchBar />
      <StatusFilter />
      <Pagination />

      {loading && (
        <p className="text-center text-gray-500">Loading...</p>
      )}

      {!loading && data.length === 0 && (
        <p className="text-center text-red-500">No results found.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {!loading &&
          data.map((char) => (
            <Link
              key={char.id}
              href={`/character/${char.id}`}
              className="border p-4 rounded-lg shadow"
            >
              <Image
                src={char.image}
                alt={char.name}
                width={200}
                height={200}
                className="rounded-lg mb-2"
                />
              <h2 className="font-bold">{char.name}</h2>
              <p className="text-sm text-gray-600">{char.status}</p>
            </Link>
          ))}
      </div>
    </main>
  );
}
