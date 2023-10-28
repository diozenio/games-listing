interface SkeletonProps {
  count?: number;
}

const Skeleton = ({ count = 3 }: SkeletonProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="animate-pulse bg-dark-300 dark:bg-dark-800 rounded-md h-96"
        />
      ))}
    </div>
  );
};

export { Skeleton };
