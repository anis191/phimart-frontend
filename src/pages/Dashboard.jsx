// pages/Dashboard.jsx
import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import {
//   FiPackage,
//   FiShoppingCart,
//   FiUsers,
//   FiStar,
// } from "react-icons/fi";
import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import StatCard from "../components/Dashboard/StatCard";
import Order from "../components/Dashboard/Order";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

//   const stats = [
    // { icon: FiPackage, label: "Total Products", value: 245 },
    // { icon: FiShoppingCart, label: "Total Orders", value: 128 },
    // { icon: FiUsers, label: "Total Users", value: 573 },
    // { icon: FiStar, label: "Average Rating", value: "4.8" },
//   ];

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="drawer-toggle"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={toggleSidebar}
      />

      <div className="drawer-content flex flex-col">
            <Navbar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    
            <main className="p-6">
              {/* Dashboard Stats */}
                <StatCard />
              {/* Recent Orders Table */}
                <Order />
            </main>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}
