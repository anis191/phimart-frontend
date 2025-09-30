import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router";
import { motion } from "framer-motion";
import useAuthContext from "../../hooks/useAuthContext";

export default function Navbar({ sidebarOpen, toggleSidebar }) {
  const { logoutUser, user } = useAuthContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar bg-base-100 border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex-none lg:hidden">
        <button
          onClick={toggleSidebar}
          className="btn btn-ghost btn-circle text-gray-600 hover:text-primary">
          {sidebarOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex gap-2">
          <span>{user?.is_staff ? "Admin" : ""}</span> Dashboard <span className="hidden md:block"> Overview</span>
        </h2>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          {/* Avatar Button */}
          <label
            tabIndex={0}
            className="cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent text-white flex items-center justify-center shadow-lg transition-transform transform hover:scale-110">
              <span className="text-lg font-semibold leading-none">
                {user.email?.[0].toUpperCase() || "U"}
              </span>
            </div>
          </label>

          {/* Dropdown Menu */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-gray-200">
            <li>
              <Link
                to="/dashboard/profile"
                className="justify-between hover:bg-gray-50 rounded-lg">
                Profile
                <span className="badge badge-primary">New</span>
              </Link>
            </li>
            <li>
              <a className="hover:bg-gray-50 rounded-lg">Settings</a>
            </li>
            <li>
              <button
                onClick={logoutUser}
                className="text-error hover:bg-red-50 rounded-lg w-full text-left px-2 py-1">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

