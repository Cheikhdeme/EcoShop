import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const { cartItems } = useContext(CartContext); // Accès au nombre d'articles dans le panier

  return (
    <nav className="bg-[#2a9d8f] text-white py-4 px-6 shadow-md sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="text-white hover:text-gray-100 transition duration-300">EcoShop</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="hover:text-gray-200 text-lg font-medium transition duration-300"
          >
            Accueil
          </Link>
          <Link
            to="/cart"
            className="hover:text-gray-200 text-lg font-medium transition duration-300"
          >
            Panier
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-200 text-lg font-medium transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Cart Icon with Item Count */}
        <div className="relative flex items-center">
          <Link to="/cart" className="hover:text-gray-200 transition duration-300 flex items-center">
            <span className="text-2xl">🛒</span>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu (for small screens) */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
