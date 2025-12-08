import Image from "next/image";

export default function CharacterCard({ char }) {
  return (
    <a
      href={`/character/${char.id}`}
      className="border p-4 rounded-xl shadow hover:shadow-md hover:-translate-y-1 transition"
    >
      <Image src={char.image} alt={char.name} className="rounded-lg" />
      <h2 className="mt-2 font-semibold">{char.name}</h2>
      <p className="text-sm text-gray-600">{char.status}</p>
    </a>
  );
}
