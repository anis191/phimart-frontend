import OrderItems from "./OrderItems";

const OrderItemsTable = ({ items }) => {
  return (
    <div className="overflow-x-auto border rounded-lg border-gray-200">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-indigo-50 text-gray-600">
          <tr>
            <th className="px-4 py-3 text-left">Product</th>
            <th className="px-4 py-3 text-right">Price</th>
            <th className="px-4 py-3 text-right">Quantity</th>
            <th className="px-4 py-3 text-right">Total</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {items.map((item) => (
            <OrderItems key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderItemsTable;
