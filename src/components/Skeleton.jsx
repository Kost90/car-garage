export function CarListSkeleton() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="w-full h-20 bg-gray-200 rounded-xl animate-pulse" />
      ))}
    </div>
  );
}

export function CarCardSkeleton() {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-4 animate-pulse mx-auto">
      <div className="w-full h-48 bg-gray-300 rounded-xl mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}
