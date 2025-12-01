import { useState } from 'react'


import { productsdeal } from "./../json/deals";

import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X,  User,  } from 'lucide-react';


interface NavProps {

  searchclick: (value: boolean) => void; // function from parent
}
interface Product {
  id: number,
  name: string;
  brand: string;
  category: string;
  price: number;
  dealTag: string;
  description: string;
  img: string;
}


export const Navbar = ({ searchclick }: NavProps) => {

  const [searchbutton, setsearchbutton] = useState(false)

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
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
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [dealTag, setDealTag] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(productsdeal);

 

  const applyFilter = () => {
    const results = productsdeal.filter((product) => {
      return (
        (category === "All" || product.category === category) &&
        (brand === "All" || product.brand === brand) &&
        (dealTag === "All" || product.dealTag === dealTag) &&
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    });

    setFilteredProducts(results);
  };




  return (
    <>
      <div className="w-full fixed z-10 bg-white shadow  py-3 flex items-center justify-between  md:px-20 lg:px-50 px-6">
        <div className="text-3xl font-bold text-orange-500"><Link to="/" onClick={() => {
          searchclick(false)
          setsearchbutton(false)
        }}>JUMIA</Link></div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2 w-1/2">
          <input
            type="text"
            placeholder="Search products, brands..."
            className="w-full border rounded-lg px-4 py-2 border-gray-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={() => {
            applyFilter();
            searchclick(true)
            setsearchbutton(true)
          }} className="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-lg">Search</button>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <span>Account</span>
          <span>Help</span>
          <span><Link to="/cart" onClick={() => {
            searchclick(false)
            setsearchbutton(false)
          }}>Cart <span className='relative right-[11px] top-2 bg-orange-500  text-white px-2 py-1 text-[10px] rounded-[50%]'>9</span></Link></span>
        </div>
      </div>




      {/* mobile view */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="px-4 py-3">
          {/* Top Row: Logo, Search, Icons */}
          <div className="flex items-center justify-between gap-3">
            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="text-xl font-bold text-gray-800">
              <div className="text-3xl font-bold text-orange-500"><Link to="/" onClick={() => {
                searchclick(false)
                setsearchbutton(false)
              }}>JUMIA</Link></div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Account">
                <User size={22} />
              </button>
              <Link to="/cart" onClick={() => {
                searchclick(false)
                setsearchbutton(false)
              }}> <button className="p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors relative" aria-label="Cart">
                  <ShoppingCart size={22} />
                  
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                      3
                    </span>
                 
                </button></Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-3 relative flex justify-between gap-1">

            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
              }}
              type="text"
              placeholder="Search products..."
              className="w-full  px-2 py-2 border border-gray-300 rounded-lg  "
            />
            <button onClick={() => {
              applyFilter();
              searchclick(true)
              setsearchbutton(true)
            }} className="bg-orange-500 cursor-pointer text-white px-4 py-2 rounded-lg">Search</button>

          </div>

        </div>

        {/* Sliding Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <div className="p-4">
            {/* Menu Header */}
            <div className="float-right mb-6 pb-4 ">

              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="space-y-1">
              {categories.map((item, index) => (
                <>
                  <div className="hover:text-orange-500 cursor-pointer">
                    <Link to="#" key={index} className="block  px-4 py-3 text-gray-700   rounded-lg transition-colors font-medium">
                      {item}
                    </Link>
                  </div>
                </>
              ))}


            </nav>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0  bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>




      {searchbutton &&
        <div className="flex flex-col md:flex-row p-4 gap-6 pt-35 md:pt-20  bg-gray-100 md:px-20 lg:px-60">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-1/4 bg-white rounded-xl shadow-lg p-6 sticky top-20 h-fit hidden md:block">




            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-700">Category</h3>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition hover:border-blue-400"
              >
                <option>All</option>
                {Array.from(new Set(productsdeal.map((p) => p.category))).map((cat) => (
                  <option key={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Brand Filter */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-gray-700">Brand</h3>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition hover:border-blue-400"
              >
                <option>All</option>
                {Array.from(new Set(productsdeal.map((p) => p.brand))).map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Deal Tag Filter */}
            <div>
              <h3 className="font-semibold mb-2 text-gray-700">Deal Tag</h3>
              <select
                value={dealTag}
                onChange={(e) => setDealTag(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition hover:border-blue-400"
              >
                <option>All</option>
                {Array.from(new Set(productsdeal.map((p) => p.dealTag))).map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>
          </aside>


          {/* Products Grid */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  p-4 bg-white ">
            {filteredProducts.length > 0 ? (

              filteredProducts.map((item: Product, i) => (
                <>
                  <Link to={`/details/${item.id - 1}`}>
                    <div key={i} className="bg-white shadow pb-2   p- hover:scale-102 transition cursor-pointer">
                      <img src={item.img} className="w-full h-40 object-cover rounded" />
                      <h3 className="mt-1 font-semibold p-2 truncate overflow-hidden text-ellipsis ">{item.name}</h3>
                      <p className=" font-bold  p-2">${item.price}</p>
                      <div className=" mx-2">
                        <button className="w-full bg-orange-500 text-white py-1 mt-2 text-lg font-semibold hover:bg-orange-600 transition">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Link>
                </>
              ))
            ) : (

              <p className="col-span-full text-center text-gray-500">
                No products found.
              </p>
            )}
          </div>

        </div>}
    </>
  )
}
