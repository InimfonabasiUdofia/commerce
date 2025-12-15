import { useState, useEffect } from "react";
import { productsdeal } from "./../json/deals"
import { Navbar } from "../components/navbar";
import { Link } from "react-router-dom";

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
export default function Home() {
  const [index, setIndex] = useState(0);

  const slides = [
    "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",
    "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",
    "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",
    "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",
    "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop",

  ];
  const categories2 = [
    {
      title: "Phones & Tablets",
      img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "TV & Audio",
      img: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "Beauty Must Have",
      img: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "Appliances",
      img: "https://images.pexels.com/photos/2343467/pexels-photo-2343467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "Generators & Inverters",
      img: "https://images.pexels.com/photos/5691622/pexels-photo-5691622.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "Fashion",
      img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "Home & Office",
      img: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "Up to 60% Off",
      img: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "Exclusive Platinum Partner",
      img: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "Exclusive Platinum Partner",
      img: "https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "Mobile Accessories",
      img: "https://images.pexels.com/photos/4219861/pexels-photo-4219861.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      title: "Sneakers",
      img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
  ];


  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

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
    const Accessories = productsdeal.filter((product) => {
    return (
      ( product.category === "Accessories") 
    );
  });
      const Best_value = productsdeal.filter((product) => {
    return (
      ( product.dealTag === "Best Value") 
    );
  });
      const Electronics = productsdeal.filter((product) => {
    return (
      ( product.category === "Electronics") 
    );
  });


  return (
    <>
       <Navbar ></Navbar>
      
         <div className="  bg-gray-100 ">
        {/* HEADER */}
     
        <div className="flex justify-between  md:px-20 lg:px-50  md:pt-22 pt-35 px-4 flex-wrap md:flex-nowrap gap-2">
          {/* SIDEBAR */}
          <aside className="hidden md:block w-60 bg-white shadow p-4 rounded-xl pt-8">
            <ul className="space-y-4 text-gray-700 font-bold text-[11px]">
              {categories.map((item) => (
                <li key={item} className="cursor-pointer hover:text-orange-500">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
          {/* CAROUSEL */}

          <div className=" bg-blue-500 w-full  max-w-[900px]  h-[300px] md:h-[348px] rounded-2xl flex items-center justify-center text-white  font-bold">

            <img
              src={slides[index]}
              alt="Sample"
              className=" w-full  max-w-[900px] mx-auto h-[300px] md:h-[348px] rounded-lg object-cover"
            />
          
          </div>


          <div className=" grid-cols-2 md:grid-cols-1 gap-4 hidden md:block">
            <div className="w-50 h-[170px]  rounded-xl shadow-lg bg-white">
              <img
                src="https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500&h=170&fit=crop"
                alt="Apple Watch"
                className="w-full h-[170px] rounded-lg object-cover"
              />
            </div>
            <div className="w-50 h-[170px]  rounded-xl shadow-lg bg-white mt-2">
              <img
                src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=500&h=170&fit=crop"
                alt="Camera"
                className="w-full h-[170px] rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-full p-4 md:px-20 lg:px-50">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3  bg-white p-3 md:p-5 rounded-xl">
            {categories2.map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-lg overflow-hidden shadow-sm  hover:shadow-md transition cursor-pointer"
              >
                <img className="w-full h-32 bg-gray-200 object-cover" src={c.img} alt="" />
                <div />

                <div className="text-center py-2 text-sm font-medium truncate">
                  {c.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full  md:px-20 lg:px-50">

          {/* MAIN CONTENT */}
          <main className="flex-1 p-4 ">



            {/* PRODUCT GRID */}
            <h2 className="mt-10 text-xl font-bold">Best value</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 p-4 bg-white ">
              {Best_value.map((item: Product, i) => (
                <>
                  <Link to={`/details/${item.id - 1}`}>
                    <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition group overflow-hidden cursor-pointer">
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
                            ${item.price.toLocaleString()}
                          </p>
                          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition text-sm">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                  </Link>
                </>
              ))}
            </div>


             <h2 className="mt-10 text-xl font-bold pt-5">Top Deals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 p-4 bg-white ">
              {Accessories.map((item: Product, i) => (
                <>
                  <Link to={`/details/${item.id - 1}`}>
                    <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition group overflow-hidden cursor-pointer">
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
                            ${item.price.toLocaleString()}
                          </p>
                          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition text-sm">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                  </Link>
                </>
              ))}
            </div>

             <h2 className="mt-10 text-xl font-bold pt-5">Electronics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4 p-4 bg-white ">
              {Electronics.map((item: Product, i) => (
                <>
                  <Link to={`/details/${item.id - 1}`}>
                    <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition group overflow-hidden cursor-pointer">
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
                            ${item.price.toLocaleString()}
                          </p>
                          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition text-sm">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                  </Link>
                </>
              ))}
            </div>

         
          </main>
        </div>
      </div>
       </>
     
  
  );
}
