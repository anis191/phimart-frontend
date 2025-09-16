const ProductsSkeleton = () => {
  // Create an array to render multiple skeleton cards
  const skeletonArray = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {skeletonArray.map((_, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg p-4 shadow-sm animate-pulse"
        >
          {/* Image placeholder */}
          <div className="bg-gray-300 h-48 rounded-md mb-4"></div>

          {/* Title placeholder */}
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>

          {/* Price placeholder */}
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>

          {/* Button placeholder */}
          <div className="h-10 bg-gray-300 rounded-full mt-4"></div>
        </div>
      ))}
    </div>
  );
};

export default ProductsSkeleton;
