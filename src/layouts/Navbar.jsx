import { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import useCartContext from "../hooks/useCartContext";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const { user, logoutUser } = useAuthContext();
  const { cart, createOrGetCart } = useCartContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (user) createOrGetCart();
  }, [user, createOrGetCart]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left: Logo + Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Mobile Hamburger */}
            <button
              className="lg:hidden btn btn-ghost btn-circle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FiMenu className="h-6 w-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
              PhiMart
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-6">
              <Link to="/" className="text-gray-700 font-medium hover:text-blue-600 transition">Home</Link>
              <div className="relative group">
                <span className="text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition">
                  Categories
                </span>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all p-4 space-y-2 z-50">
                  <Link className="block hover:text-blue-600 transition">Electronics</Link>
                  <Link className="block hover:text-blue-600 transition">Fashion</Link>
                  <Link className="block hover:text-blue-600 transition">Home & Kitchen</Link>
                  <Link className="block hover:text-blue-600 transition">Beauty</Link>
                  <Link className="block hover:text-blue-600 transition">Sports</Link>
                  <Link className="block hover:text-blue-600 transition">Books</Link>
                </div>
              </div>
              <Link to="/deals" className="text-red-600 font-medium hover:text-red-700 transition">Deals</Link>
              <Link 
                to="/shop" 
                className="font-medium text-gray-700 hover:text-blue-600 transition relative shop-link">
                Shop
                <span className="absolute left-0 -bottom-1 h-1 w-full bg-blue-500 rounded-full shop-underline"></span>
              </Link>
              <Link to="/about" className="text-gray-700 font-medium hover:text-blue-600 transition">About</Link>
              <Link to="/contact" className="text-gray-700 font-medium hover:text-blue-600 transition">Contact</Link>
            </nav>
          </div>

          {/* Center: Search */}
          <div className="flex-grow mx-4 hidden md:flex">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>

          {/* Right: Wishlist / Cart / Profile */}
          <div className="flex items-center space-x-3">
            {user && (
              <>
                {/* Wishlist */}
                <div className="relative hidden sm:block">
                  <Link to="/dashboard/wishlist" className="btn btn-ghost btn-circle relative">
                    <FiHeart className="h-6 w-6 text-gray-700 hover:text-red-500 transition" />
                    {cart?.wishlist?.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 text-xs flex items-center justify-center bg-red-500 text-white rounded-full">
                        {cart?.wishlist?.length}
                      </span>
                    )}
                  </Link>
                </div>

                {/* Cart */}
                <div className="relative">
                  <Link to="/dashboard/cart" className="btn btn-ghost btn-circle relative">
                    <FiShoppingCart className="h-6 w-6 text-gray-700 hover:text-blue-600 transition" />
                    {cart?.items?.length > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 text-xs flex items-center justify-center bg-blue-600 text-white rounded-full">
                        {cart?.items?.length}
                      </span>
                    )}
                  </Link>
                </div>

                {/* Profile */}
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-sm">{user.email?.[0].toUpperCase() || "U"}</span>
                    </div>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
                    <li className="border-b border-gray-100 px-2 py-1">{user.email}</li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/dashboard/orders">Orders</Link></li>
                    <li><Link to="/dashboard/wishlist">Wishlist</Link></li>
                    <li><Link to="/dashboard/settings">Settings</Link></li>
                    <li><button onClick={logoutUser}>Logout</button></li>
                  </ul>
                </div>
              </>
            )}

            {!user && (
              <div className="flex gap-2">
                <Link to="/login" className="btn btn-outline hidden sm:inline-flex">Login</Link>
                <Link to="/register" className="btn btn-primary hidden sm:inline-flex">Register</Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white shadow-md rounded-lg p-4 space-y-2">
            <Link to="/" className="block font-medium text-gray-700 hover:text-blue-600">Home</Link>
            <details className="group">
              <summary className="cursor-pointer font-medium text-gray-700 hover:text-blue-600">Categories</summary>
              <div className="pl-4 mt-2 space-y-1">
                <Link className="block hover:text-blue-600">Electronics</Link>
                <Link className="block hover:text-blue-600">Fashion</Link>
                <Link className="block hover:text-blue-600">Home & Kitchen</Link>
                <Link className="block hover:text-blue-600">Beauty</Link>
                <Link className="block hover:text-blue-600">Sports</Link>
                <Link className="block hover:text-blue-600">Books</Link>
              </div>
            </details>
            <Link to="/deals" className="block font-medium text-red-600 hover:text-red-700">Deals</Link>
            <Link to="/shop" className="block font-medium text-gray-700 hover:text-blue-600">Shop</Link>
            <Link to="/about" className="block font-medium text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="block font-medium text-gray-700 hover:text-blue-600">Contact</Link>
            {!user && (
              <>
                <Link to="/login" className="block font-medium text-gray-700 hover:text-blue-600">Login</Link>
                <Link to="/register" className="block font-medium text-white bg-blue-600 px-4 py-2 rounded-lg text-center hover:bg-blue-700">Register</Link>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

