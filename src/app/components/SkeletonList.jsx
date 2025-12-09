import SkeletonCard from "./SkeletonCard";

export default function SkeletonList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
