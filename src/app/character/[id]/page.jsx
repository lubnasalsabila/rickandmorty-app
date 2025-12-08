export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";

export default async function CharacterDetail({ params }) {
  const { id } = await params;

  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Error fetching character detail.</div>;
  }

  const char = await res.json();

  // handle jika gagal fetch / data kosong
  if (!char || !char.image) {
    return <div>Character not found.</div>;
  }

  return (
    <div className="p-6">
        <Link href="/" className="text-blue-500 underline mb-4 inline-block">
          ← Back
        </Link>
      <div className="flex flex-col md:flex-row gap-6 items-start">

        <Image
          src={char.image}
          alt={char.name}
          width={250}
          height={250}
          className="rounded-lg object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold">{char.name}</h1>
          <p>Status: {char.status}</p>
          <p>Species: {char.species}</p>
          <p>Gender: {char.gender}</p>
          <p>Origin: {char.origin?.name}</p>
        </div>
      </div>
    </div>
  );
}
