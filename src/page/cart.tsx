import  { useState } from "react";
import { Trash2,  Lock, ArrowRight, Minus, Plus } from "lucide-react";
import { Navbar } from "../components/navbar";
import { Link } from "react-router-dom";

interface CardStuff {
    title: string;
    brand: string;
    price: number;
    oldPrice: number;
    quantity: number;
    image: string;
}

export default function Cart() {
    const data = {
        title: "TCL 55 Inches UHD 4k Google Smart TV",
        price: 437877,
        oldPrice: 509240,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        quantity: 1,
        brand: "TCL"
    };

    const [quantity, setQuantity] = useState(data.quantity);
    const subtotal = data.price * quantity;
    const savings = (data.oldPrice - data.price) * quantity;


    const CartItem = ({ title, price, oldPrice, image, quantity: itemQuantity }: CardStuff) => {
        return (
            <div className="bg-white rounded-xl shadow-sm border  border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="shrink-0">
                        <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                            <img 
                                src={image} 
                                alt={title} 
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                {title}
                            </h3>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl font-bold text-gray-900">
                                    ₦{price.toLocaleString()}
                                </span>
                                <span className="text-base text-gray-400 line-through">
                                    ₦{oldPrice.toLocaleString()}
                                </span>
                                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                                    {Math.round(((oldPrice - price) / oldPrice) * 100)}% OFF
                                </span>
                            </div>
                        </div>

                        {/* Quantity and Remove */}
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-9 h-9 bg-white hover:bg-gray-100 flex items-center justify-center rounded-md transition-colors shadow-sm"
                                    aria-label="Decrease quantity"
                                >
                                    <Minus className="w-4 h-4 text-gray-600" />
                                </button>
                                <span className="text-lg font-semibold min-w-8 text-center text-gray-900">
                                    {itemQuantity}
                                </span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-9 h-9 bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center rounded-md transition-colors shadow-sm"
                                    aria-label="Increase quantity"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            <button className="flex items-center gap-2 text-red-500 hover:text-red-600 font-medium transition-colors">
                                <Trash2 className="w-4 h-4" />
                                <span className="hidden sm:inline">Remove</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
           <Navbar  ></Navbar>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-35 md:pt-20">
                {/* Page Header */}
             
                <div className="flex flex-col lg:flex-row gap-6 ">
                    {/* Cart Items */}
                    <div className="flex-1 space-y-4">
                        <CartItem
                            title={data.title}
                            price={data.price}
                            oldPrice={data.oldPrice}
                            image={data.image}
                            quantity={quantity}
                            brand={data.brand}
                        />

                        {/* Continue Shopping */}
                        <button className="w-full sm:w-auto px-6 py-3 text-orange-600 hover:text-orange-700 font-semibold flex items-center justify-center gap-2 transition-colors">
                            <ArrowRight className="w-5 h-5 rotate-180" />
                            Continue Shopping
                        </button>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-[400px]">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                                Order Summary
                            </h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal ({quantity} {quantity === 1 ? 'item' : 'items'})</span>
                                    <span className="font-semibold text-gray-900">₦{subtotal.toLocaleString()}</span>
                                </div>
                                
                                {savings > 0 && (
                                    <div className="flex justify-between text-green-600">
                                        <span>Savings</span>
                                        <span className="font-semibold">-₦{savings.toLocaleString()}</span>
                                    </div>
                                )}

                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-gray-900">Calculated at checkout</span>
                                </div>

                                <div className="border-t border-gray-200 pt-4 mt-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-gray-900">Total</span>
                                        <span className="text-2xl font-bold text-gray-900">₦{subtotal.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Checkout Button */}
                            <Link to='/payment'>
                            <button className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg shadow-orange-500/30 transition-all duration-200 flex items-center justify-center gap-2 group">
                                Proceed to Checkout
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                                </Link>
                            {/* Security Badge */}
                            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                                <Lock className="w-4 h-4" />
                                <span>Secure Checkout</span>
                            </div>

                            {/* Payment Methods */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-xs text-gray-500 text-center mb-3">We accept</p>
                                <div className="flex items-center justify-center gap-3 flex-wrap">
                                    <div className="px-3 py-2 bg-gray-50 rounded border border-gray-200">
                                        <span className="text-xs font-semibold text-gray-700">VISA</span>
                                    </div>
                                    <div className="px-3 py-2 bg-gray-50 rounded border border-gray-200">
                                        <span className="text-xs font-semibold text-gray-700">Mastercard</span>
                                    </div>
                                    <div className="px-3 py-2 bg-gray-50 rounded border border-gray-200">
                                        <span className="text-xs font-semibold text-gray-700">PayPal</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}