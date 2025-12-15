import  { useState, useEffect } from 'react'
import { productsdeal } from '../json/deals';
import { Navbar } from '../components/navbar';
import { useParams } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    brand: string;
    category: string;
    price: number;
    dealTag: string;
    description: string;
    img: string;
}

export const Search = () => {
    const { searchid }: any = useParams();
    const [search, setSearch] = useState(searchid || "");
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

    // Apply filter when searchid changes or on mount
    useEffect(() => {
        if (searchid) {
            setSearch(searchid);
        }
    }, [searchid]);

    // Apply filter whenever filters change
    useEffect(() => {
        applyFilter();
    }, [search, category, brand, dealTag]);

  

    const handleClearFilters = () => {
        setSearch("");
        setCategory("All");
        setBrand("All");
        setDealTag("All");
    };

    return (
        <>
            <Navbar />
            <div className="pt-32 md:pt-28 min-h-screen bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Sidebar Filters */}
                        <aside className="hidden lg:block w-64 shrink-0">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-28">
                                <h2 className="text-lg font-bold text-gray-900 mb-6">Filters</h2>

                                {/* Category Filter */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Category
                                    </label>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    >
                                        <option>All</option>
                                        {Array.from(new Set(productsdeal.map((p) => p.category))).map((cat) => (
                                            <option key={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Brand Filter */}
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Brand
                                    </label>
                                    <select
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    >
                                        <option>All</option>
                                        {Array.from(new Set(productsdeal.map((p) => p.brand))).map((b) => (
                                            <option key={b}>{b}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Deal Tag Filter */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Deal Tag
                                    </label>
                                    <select
                                        value={dealTag}
                                        onChange={(e) => setDealTag(e.target.value)}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                                    >
                                        <option>All</option>
                                        {Array.from(new Set(productsdeal.map((p) => p.dealTag))).map((d) => (
                                            <option key={d}>{d}</option>
                                        ))}
                                    </select>
                                </div>

                                <button
                                    onClick={handleClearFilters}
                                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </aside>

                        {/* Products Grid */}
                        <div className="flex-1">
                            <div className="mb-4 flex items-center justify-between">
                                <p className="text-gray-600">
                                    <span className="font-semibold text-gray-900">{filteredProducts.length}</span> products found
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((item: Product) => (
                                        <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition group overflow-hidden cursor-pointer">
                                            <div className="relative overflow-hidden bg-gray-100">
                                                <img
                                                    src={item.img}
                                                    alt={item.name}
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                                                />
                                                {item.dealTag !== "Regular" && (
                                                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                                                        {item.dealTag}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="p-3">
                                                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 h-10">
                                                    {item.name}
                                                </h3>
                                                <p className="text-lg font-bold text-gray-900 mb-3">
                                                    ₦{item.price.toLocaleString()}
                                                </p>
                                                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition text-sm">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-12">
                                        <p className="text-gray-500 text-lg">No products found.</p>
                                        <button
                                            onClick={handleClearFilters}
                                            className="mt-4 text-orange-500 hover:text-orange-600 font-semibold"
                                        >
                                            Clear filters
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}