const CategoriesSkeletons = ({ count = 6 }) => {
  // count = number of skeleton items
  const skeletons = Array.from({ length: count });

  return (
    <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 overflow-hidden w-full">
      {skeletons.map((_, idx) => (
        <div key={idx} className="flex flex-col items-center text-center px-1 animate-pulse">
          {/* Circle Skeleton */}
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gray-200"></div>
          {/* Text Skeleton */}
          <div className="mt-2 w-12 md:w-16 h-3 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default CategoriesSkeletons;
