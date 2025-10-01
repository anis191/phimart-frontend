import { FiBarChart2, FiPackage, FiPlusCircle, FiShoppingCart, FiStar, FiUsers, FiTag } from "react-icons/fi";
import { Link } from "react-router";
import { motion } from "framer-motion";
import useAuthContext from "../../hooks/useAuthContext";

export default function Sidebar() {
  const { user } = useAuthContext();

  const customerMenuItems = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
    { to: "/dashboard/orders", icon: FiShoppingCart, label: "Orders" },
    { to: "#", icon: FiStar, label: "Reviews" },
  ];

  const adminMenuItems = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/shop", icon: FiPackage, label: "Products" },
    { to: "/dashboard/products/add", icon: FiPlusCircle, label: "Add Product" },
    { to: "/categories", icon: FiTag, label: "Categories" },
    { to: "/categories/add", icon: FiPlusCircle, label: "Add Categories" },
    { to: "/dashboard/cart", icon: FiShoppingCart, label: "Cart" },
    { to: "/dashboard/orders", icon: FiShoppingCart, label: "Orders" },
    { to: "#", icon: FiStar, label: "Reviews" },
    { to: "/users", icon: FiUsers, label: "Users" },
  ];

  const menuItems = user.is_staff ? adminMenuItems : customerMenuItems;
  console.log(user)

  return (
    <div className="drawer-side z-20">
      <label htmlFor="drawer-toggle" className="drawer-overlay" aria-label="close sidebar"></label>
      <aside className="menu bg-gradient-to-b from-base-100 to-base-200 w-80 min-h-full p-6 shadow-xl">
        {/* Sidebar Header */}
        <div className="flex items-center gap-3 mb-8 px-2 py-4">
          <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
            <FiShoppingCart className="h-6 w-6 text-white" />
          </div>
          <Link to="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PhiMart
            </h1>
          </Link>
        </div>

        {/* Sidebar Menu */}
        <ul className="menu menu-lg gap-1">
          {menuItems.map((item, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                to={item.to}
                className="flex items-center gap-4 py-4 px-4 hover:bg-primary/10 rounded-xl transition-all duration-200 hover:translate-x-1 hover:text-primary"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Footer */}
        <div className="mt-auto pt-8 text-sm text-base-content/60">
          © 2025 PhiMart Admin Dashboard
        </div>
      </aside>
    </div>
  );
}

