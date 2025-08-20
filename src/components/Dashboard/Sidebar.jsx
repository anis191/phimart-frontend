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
import useAuthContext from "../../hooks/useAuthContext";

export default function Sidebar() {
  const {user} = useAuthContext()

    const customerMenuItems = [
    {to:"/dashboard", icon: FiBarChart2, label: "Dashboard"},
    {to:"/dashboard/cart", icon: FiShoppingCart, label: "Cart"},
    {to:"/dashboard/orders", icon: FiShoppingCart, label: "Orders"},
    {to:"/reviews", icon: FiStar, label: "Reviews"},
  ]

  const adminMenuItems = [
    {to:"/dashboard", icon: FiBarChart2, label: "Dashboard"},
    // {to:"/products", icon: FiPackage, label: "Products"},
    {to:"/shop", icon: FiPackage, label: "Products"},
    {to:"/dashboard/products/add", icon: FiPlusCircle, label: "Add Product"},
    {to:"/categories", icon: FiTag, label: "Categories"},
    {to:"/categories/add", icon: FiPlusCircle, label: "Add Categories"},
    {to:"/dashboard/cart", icon: FiShoppingCart, label: "Cart"},
    {to:"/dashboard/orders", icon: FiShoppingCart, label: "Orders"},
    {to:"/reviews", icon: FiStar, label: "Reviews"},
    {to:"/users", icon: FiUsers, label: "Users"},
  ]
  const menuItems = user.is_staff ? adminMenuItems : customerMenuItems;
  
  return (
    <div className="drawer-side z-10">
      <label htmlFor="drawer-toggle" className="drawer-overlay" aria-label="close sidebar"></label>
      <aside className="menu bg-base-200 w-64 min-h-full p-4 text-base-content">
        {/* Sidebar Header */}
        <div className="flex items-center gap-2 mb-6 px-2">
          <FiShoppingCart className="h-6 w-6" />
          <Link to="/"> <h1 className="text-xl font-bold">PhiMart</h1> </Link>
        </div>

        {/* Sidebar Menu */}
        <ul className="menu menu-md gap-2">
          {menuItems.map((item, idx) =>(
            <li key={idx}><Link to={item.to}><item.icon className="h-4 w-4" />{item.label}</Link></li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-auto pt-6 text-xs text-base-content/70">
          © 2025 PhiMart Admin
        </div>
      </aside>
    </div>
  );
}
