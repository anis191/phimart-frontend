const ProductsSkeleton = () => {
  return (
    <div className="my-3 flex w-full max-w-[250px] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md animate-pulse">
      {/* Image Section */}
      <div className="relative mx-3 mt-3 flex h-48 overflow-hidden rounded-xl bg-gray-200" />

      {/* Info Section */}
      <div className="mt-4 px-4 pb-4 flex flex-col gap-3">
        {/* Product Title */}
        <div className="h-4 w-2/3 rounded bg-gray-200" />

        {/* Price + Stock */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-5 w-14 rounded bg-gray-200" />
            <div className="h-4 w-10 rounded bg-gray-200" />
          </div>
          <div className="h-4 w-16 rounded bg-gray-200" />
        </div>

        {/* Action Button */}
        <div className="h-9 w-full rounded-md bg-gray-200" />
      </div>
    </div>
  );
};

export default ProductsSkeleton;
