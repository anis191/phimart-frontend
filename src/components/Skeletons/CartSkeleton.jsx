const CartSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Cart Items Skeleton */}
      <div className="space-y-4 animate-pulse">
        <div className="h-6 w-40 bg-gray-300 rounded mb-4"></div> {/* Title */}
        <div className="overflow-x-auto border rounded-lg border-gray-200">
          <table className="table w-full">
            <thead>
              <tr>
                <th><div className="h-4 w-16 bg-gray-300 rounded"></div></th>
                <th className="text-right"><div className="h-4 w-12 bg-gray-300 rounded ml-auto"></div></th>
                <th><div className="h-4 w-12 bg-gray-300 rounded"></div></th>
                <th className="text-right"><div className="h-4 w-12 bg-gray-300 rounded ml-auto"></div></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Array(3).fill(0).map((_, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-3"><div className="h-4 w-24 bg-gray-200 rounded"></div></td>
                  <td className="px-4 py-3 text-right"><div className="h-4 w-12 bg-gray-200 rounded ml-auto"></div></td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 bg-gray-200 rounded"></div>
                      <div className="h-6 w-12 bg-gray-200 rounded"></div>
                      <div className="h-6 w-6 bg-gray-200 rounded"></div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right"><div className="h-4 w-12 bg-gray-200 rounded ml-auto"></div></td>
                  <td className="px-4 py-3"><div className="h-6 w-6 bg-gray-200 rounded-full ml-auto"></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cart Summary Skeleton */}
      <div className="card bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 animate-pulse">
        <div className="card-body p-6 space-y-4">
          <div className="h-6 w-48 bg-gray-300 rounded"></div> {/* Title */}
          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-4 w-12 bg-gray-200 rounded"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-12 bg-gray-200 rounded"></div>
            </div>
            <div className="flex justify-between">
              <div className="h-4 w-28 bg-gray-200 rounded"></div>
              <div className="h-4 w-12 bg-gray-200 rounded"></div>
            </div>
            <div className="border-t border-gray-200 pt-3 mt-2">
              <div className="flex justify-between font-bold text-gray-800 text-lg">
                <div className="h-5 w-32 bg-gray-300 rounded"></div>
                <div className="h-5 w-16 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="h-10 w-full bg-gray-300 rounded-xl"></div> {/* Checkout button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSkeleton;
