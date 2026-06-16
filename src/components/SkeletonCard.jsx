export default function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-square bg-gray-100 skeleton-shimmer" />

      {/* Info skeleton */}
      <div className="px-4 py-4 border-t border-gray-100 space-y-2.5">
        <div className="h-3.5 bg-gray-100 rounded-full w-[85%] skeleton-shimmer" />
        <div className="h-3 bg-gray-100 rounded-full w-[60%] skeleton-shimmer" />
        <div className="flex justify-between items-center mt-3">
          <div className="h-2.5 bg-gray-100 rounded-full w-[30%] skeleton-shimmer" />
          <div className="h-2.5 bg-gray-100 rounded-full w-[20%] skeleton-shimmer" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 8 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
