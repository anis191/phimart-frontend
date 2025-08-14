// import React from 'react';

import useStateDataContext from "../../hooks/useStateDataContext";

const Order = () => {
  const {recentOrders} = useStateDataContext()

  const getStatusColor = (status) => {
    switch (status) {
      case "Not Paid":
        return "badge-error";
      case "Ready To Ship":
        return "badge-warning";
      case "Shipped":
        return "badge-info";
      case "Delivered":
        return "badge-success";
      case "Canceled":
        return "badge-neutral";
      default:
        return "badge-ghost";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  };


    return (
        <div className="mt-6 card bg-base-100 shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-lg">Recent Orders</h3>
              <div className="overflow-x-auto">
                <table className="table table-zebra">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.user}</td>
                      <td><div className={`badge ${getStatusColor(order.status)}`}>{order.status}</div></td>
                      <td>{formatDate(order.created_at)}</td>
                      <td>${order.total_price}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    );
};

export default Order;