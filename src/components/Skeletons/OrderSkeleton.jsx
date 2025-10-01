const OrderSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg mb-8 overflow-hidden border border-gray-100 animate-pulse">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-gray-200">
        <div className="space-y-2">
          <div className="h-5 w-32 bg-gray-300 rounded"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="h-6 w-24 bg-gray-300 rounded-full"></div>
          <div className="h-5 w-16 bg-gray-200 rounded cursor-not-allowed"></div>
        </div>
      </div>

      {/* Items Table */}
      <div className="p-6">
        <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
        <div className="overflow-x-auto border rounded-lg border-gray-200">
          <table className="table-auto w-full border-collapse">
            <thead className="bg-indigo-50">
              <tr>
                <th className="px-4 py-3"><div className="h-4 w-16 bg-gray-300 rounded"></div></th>
                <th className="px-4 py-3 text-right"><div className="h-4 w-10 bg-gray-300 rounded ml-auto"></div></th>
                <th className="px-4 py-3 text-right"><div className="h-4 w-10 bg-gray-300 rounded ml-auto"></div></th>
                <th className="px-4 py-3 text-right"><div className="h-4 w-12 bg-gray-300 rounded ml-auto"></div></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {Array(3).fill(0).map((_, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-3"><div className="h-4 w-24 bg-gray-200 rounded"></div></td>
                  <td className="px-4 py-3 text-right"><div className="h-4 w-12 bg-gray-200 rounded ml-auto"></div></td>
                  <td className="px-4 py-3 text-right"><div className="h-4 w-8 bg-gray-200 rounded ml-auto"></div></td>
                  <td className="px-4 py-3 text-right"><div className="h-4 w-12 bg-gray-200 rounded ml-auto"></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Total & Payment */}
      <div className="border-t p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="space-y-2 w-full max-w-[220px]">
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-4 w-24 bg-gray-200 rounded"></div>
          <div className="h-5 w-28 bg-gray-300 rounded mt-2"></div>
        </div>
        <div className="h-10 w-28 bg-gray-300 rounded md:ml-auto"></div>
      </div>
    </div>
  );
};

export default OrderSkeleton;
