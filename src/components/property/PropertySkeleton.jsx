export default function PropertySkeleton() {
  return (
    <div className="glass rounded-2xl overflow-hidden border border-white/10 animate-pulse">
      {/* Image Skeleton */}
      <div className="h-[300px] bg-white/10" />

      {/* Content Skeleton */}
      <div className="p-7 space-y-4">
        <div className="h-5 w-3/4 bg-white/10 rounded" />
        <div className="h-6 w-1/2 bg-white/10 rounded" />

        <div className="flex justify-between pt-4">
          <div className="h-4 w-24 bg-white/10 rounded" />
          <div className="h-4 w-20 bg-white/10 rounded" />
        </div>
      </div>
    </div>
  );
}
