// components/Sidebar.jsx
import {
  FiBarChart2,
  FiPackage,
  FiPlusCircle,
  FiShoppingCart,
  FiStar,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router";

export default function Sidebar() {
  return (
    <div className="drawer-side z-10">
      <label htmlFor="drawer-toggle" className="drawer-overlay" aria-label="close sidebar"></label>
      <aside className="menu bg-base-200 w-64 min-h-full p-4 text-base-content">
        {/* Sidebar Header */}
        <div className="flex items-center gap-2 mb-6 px-2">
          <FiShoppingCart className="h-6 w-6" />
          <h1 className="text-xl font-bold">PhiMart</h1>
        </div>

        {/* Sidebar Menu */}
        <ul className="menu menu-md gap-2">
          <li><Link to="/dashboard"><FiBarChart2 className="h-4 w-4" />Dashboard</Link></li>
          <li><Link to="/products"><FiPackage className="h-4 w-4" />Products</Link></li>
          <li><Link to="/products/add"><FiPlusCircle className="h-4 w-4" />Add Product</Link></li>
          <li><Link to="/categories"><FiTag className="h-4 w-4" />Categories</Link></li>
          <li><Link to="/categories/add"><FiPlusCircle className="h-4 w-4" />Add Category</Link></li>
          <li><Link to="/orders"><FiShoppingCart className="h-4 w-4" />Orders</Link></li>
          <li><Link to="/reviews"><FiStar className="h-4 w-4" />Reviews</Link></li>
          <li><Link to="/users"><FiUsers className="h-4 w-4" />Users</Link></li>
        </ul>

        {/* Footer */}
        <div className="mt-auto pt-6 text-xs text-base-content/70">
          © 2025 PhiMart Admin
        </div>
      </aside>
    </div>
  );
}
