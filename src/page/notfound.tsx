import { Search, Sparkles, RefreshCw } from 'lucide-react';
import { Navbar } from '../components/navbar';

export default function NoProductFound() {

  

  const suggestions = [
    { text: 'Wireless Headphones', icon: '🎧' },
    { text: 'Smart Watches', icon: '⌚' },
    { text: 'Laptop Accessories', icon: '💻' },
    { text: 'Gaming Gear', icon: '🎮' },
  ];

 

  return (
    <><Navbar></Navbar>
    <div className="min-h-screen flex items-center justify-center p-6 pt-35 md:pt-20  bg-gray-100 ">
      <div className="max-w-4xl w-full">
        {/* Main Content Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
          {/* Animated Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className={`relative bg-orange-500 rounded-full p-8  transform transition-transform duration-500 `}>
                <Search className="w-16 h-16 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold  bg-clip-text  mb-4 animate-fade-in">
              No Products Found
            </h1>
            <p className="text-lg  max-w-2xl mx-auto">
              We couldn't find what you're looking for, but don't worry — we've got plenty of other amazing options for you to explore.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
             
            </div>
          </div>

          {/* Suggestions Grid */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <h2 className="text-xl font-semibold text-slate-800">Popular Categories</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {suggestions.map((item, idx) => (
                <button
                  key={idx}
                  className="group relative bg-linear-to-br from-white to-slate-50 p-6 rounded-2xl border-2 border-slate-200 hover:border-orange-500 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="text-sm font-medium text-slate-700 group-hover:text-orange-500 transition-colors">
                    {item.text}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Trending Section */}
        

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button className="group bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              Browse All Products
            </button>
            <button className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold border-2 border-slate-300 hover:border-orange-500 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Contact Support
            </button>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8">
          <p className="text-slate-600">
            Need help? Our support team is available 24/7 to assist you.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}