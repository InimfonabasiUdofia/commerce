import React, { useState, useEffect } from 'react';
import { CheckCircle, Package } from 'lucide-react';
import { Navbar } from '../components/navbar';

const ThankYouPage: React.FC = () => {
  const [animateCheck, setAnimateCheck] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateCheck(true), 100);
    setTimeout(() => setShowContent(true), 600);
  }, []);

  const orderDetails = {
    orderNumber: 'ORD-2024-8376',
    email: 'customer@example.com',
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    total: '$127.99',
    estimatedDelivery: 'Dec 12-15, 2025',
    items: [
      { name: 'Premium Wireless Headphones', quantity: 1, price: '$89.99' },
      { name: 'USB-C Charging Cable', quantity: 2, price: '$19.00' },
      { name: 'Phone Case - Navy Blue', quantity: 1, price: '$19.00' }
    ]
  };


  return (
    <>
    <Navbar  ></Navbar>
    <div className="min-h-screen pt-12 px-4  bg-[#f3f4f6]">
        
      <div className="max-w-3xl mx-auto md:mt-10 mt-[90px]">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#FF6600] shadow-green-500/40 mb-6 transition-all duration-700 ${animateCheck ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
          </div>
          
          <div className={`transition-all duration-500 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-xl font-bold text-gray-600 mb-3">
              Thank You for Your Order!
            </h1>
            <p className="text-lg text-gray-500 mb-2">
              Your payment has been successfully processed
            </p>
            <p className="text-sm text-gray-500">
              Order confirmation sent to <span className="font-medium text-gray-700">{orderDetails.email}</span>
            </p>
          </div>
        </div>

        {/* Order Summary Card */}
        <div className={`bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 mb-6 border border-gray-100 transition-all duration-500 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Order Number */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Order Number</p>
              <p className="text-2xl font-bold text-gray-900">{orderDetails.orderNumber}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500 mb-1">Order Date</p>
              <p className="text-base font-medium text-gray-900">{orderDetails.date}</p>
            </div>
          </div>

          {/* Order Items */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h2>
            <div className="space-y-3">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-gray-900">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <p className="text-lg font-semibold text-gray-900">Total Paid</p>
            <p className="text-2xl font-bold text-[#FF6600]">{orderDetails.total}</p>
          </div>
        </div>

        {/* Delivery Info */}
        <div className={`bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6   transition-all duration-500 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-start">
            <div className="shrink-0 w-12 h-12 bg-[#FF6600] rounded-xl flex items-center justify-center mr-4">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Estimated Delivery
              </h3>
              <p className="text-gray-700 mb-1">
                Your order will arrive between <span className="font-semibold">{orderDetails.estimatedDelivery}</span>
              </p>
              <p className="text-sm text-gray-600">
                We'll send you tracking information as soon as your order ships.
              </p>
            </div>
          </div>
        </div>

    

        {/* Footer Message */}
        <div className={`mt-8 text-center transition-all duration-500 delay-1100 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-gray-600">
            Need help? <button className="text-blue-600 hover:text-blue-700 font-medium underline">Contact our support team</button>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            We appreciate your business and hope you enjoy your purchase!
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ThankYouPage;