const OrderItems = ({ item }) => {
  return (
    <tr className="border-b hover:bg-indigo-50 transition-colors">
      <td className="px-4 py-3 font-medium text-gray-700">{item.product.name}</td>
      <td className="px-4 py-3 text-right text-gray-600">${item.price.toFixed(2)}</td>
      <td className="px-4 py-3 text-right text-gray-600">{item.quantity}</td>
      <td className="px-4 py-3 text-right font-semibold text-gray-800">${item.total_price.toFixed(2)}</td>
    </tr>
  );
};

export default OrderItems;
