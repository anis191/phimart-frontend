// import React from 'react';
import {
  FiPackage,
  FiShoppingCart,
  FiUsers,
  FiStar,
} from "react-icons/fi";
import useStateDataContext from "../../hooks/useStateDataContext";

const StatCard = () => {
  const {total_products,total_orders,total_users} = useStateDataContext()

    const stats = [
        { icon: FiPackage, label: "Total Products", value: total_products },
        { icon: FiShoppingCart, label: "Total Orders", value: total_orders },
        { icon: FiUsers, label: "Total Users", value: total_users },
        { icon: FiStar, label: "Average Rating", value: "4.8" },
    ];

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="card bg-base-100 shadow-sm">
                  <div className="card-body p-4">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="text-sm font-medium">{item.label}</h3>
                    </div>
                    <p className="mt-2 text-2xl font-bold">{item.value}</p>
                  </div>
                </div>
              );
            })}
        </div>
    );
};

export default StatCard;