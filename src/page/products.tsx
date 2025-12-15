
import { Navbar } from "../components/navbar";
import { productsdeal } from "./../json/deals";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const { id }: any = useParams();
  
    const product = productsdeal[id];

    if (!product) {
        return <div className="text-center py-20">Product not found</div>;
    }

    return (
        <>
            <Navbar />
           
                <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 md:pt-25 pt-35 pb-12">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white  shadow-xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                {/* LEFT — IMAGE SECTION */}
                                <div className="bg-gray-50 p-8 flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="relative  overflow-hidden bg-white shadow-lg">
                                            <img 
                                                className="w-full h-80 lg:h-96 object-cover" 
                                                src={product.img} 
                                                alt={product.name}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* RIGHT — PRODUCT INFO */}
                                <div className="p-8 lg:p-12 flex flex-col justify-between">
                                    <div>
                                        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold mb-4">
                                            {product.category}
                                        </div>
                                        
                                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                            {product.name}
                                        </h1>
                                        
                                        <p className="text-gray-600 mb-2 leading-relaxed">
                                            {product.description}
                                        </p>
                                        
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-sm text-gray-500">Brand:</span>
                                            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                                                {product.brand}
                                            </span>
                                        </div>

                                        <div className=" rounded-2xl  mb-6">
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-4xl font-bold ">
                                                    ${product.price.toLocaleString()}
                                                </span>
                                                <span className="text-gray-500 text-sm">USD</span>
                                            </div>
                                        </div>

                                        <button className="w-full bg-linear-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                            Add to Cart
                                        </button>
                                    </div>

                                    {/* PROMOTIONS */}
                                    <div className="mt-8 pt-8 border-t border-gray-200">
                                        <h2 className="font-bold text-gray-900 mb-4 text-lg">
                                            Special Offers
                                        </h2>
                                        
                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                                                <span className="text-2xl">📞</span>
                                                <div>
                                                    <p className="text-sm text-gray-700">
                                                        Call <span className="font-bold text-blue-600">07006000000</span> to place your order
                                                    </p>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                                                <span className="text-2xl">🚚</span>
                                                <div>
                                                    <p className="text-sm text-gray-700">
                                                        Save on shipping with PickUp Station at checkout
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}