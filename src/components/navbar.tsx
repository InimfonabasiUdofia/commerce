import { useState } from 'react';
import { ShoppingCart, Menu, X, User, Search, Heart, } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';






export const Navbar = () => {

const navigate = useNavigate();


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");


  const categories = [
    "Appliances",
    "Phones & Tablets",
    "Health & Beauty",
    "Electronics",
    "Fashion",
    "Supermarket",
    "Computing",
    "Baby Products",
    "Gaming",
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

 

  const handleSearchClick = () => {
     navigate(`/search/${search}`)
  
  };


  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block w-full fixed top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to='/'>
            <button  className="shrink-0 cursor-pointer">
              <h1 className="text-3xl font-bold bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                LFFG
              </h1>
            </button>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and categories..."
                  className="w-full pl-4 pr-12 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearchClick()}
                />
                <button
                  onClick={handleSearchClick}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md transition"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition font-medium">
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
              
              <button className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition font-medium">
                <Heart className="w-5 h-5" />
                <span>Wishlist</span>
              </button>
              <Link to='/cart'>
              <button  className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-orange-500 transition font-medium relative">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  9
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>

      
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="px-4 py-3">
          {/* Top Row */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <Link to='/'>
            <button className='cursor-pointer'>
              <h1 className="text-2xl font-bold bg-linear-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                LFFG
              </h1>
            </button>
            </Link>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition" aria-label="Account">
                <User className="w-5 h-5" />
              </button>
              
              <Link to='/cart'>
              <button  className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition relative" aria-label="Cart">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  9
                </span>
              </button>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-3 flex gap-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearchClick()}
              type="text"
              placeholder="Search products..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleSearchClick}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            {/* Menu Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Categories</h2>
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 rounded-lg transition"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="space-y-1">
              {categories.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 rounded-lg transition font-medium text-left"
                  onClick={toggleMenu}
                >
                  <span>{item}</span>
                  
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0  bg-opacity-50 z-40"
            onClick={toggleMenu}
          />
        )}
      </nav>

    </>
  );
};