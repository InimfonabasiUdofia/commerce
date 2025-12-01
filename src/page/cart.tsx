import React, { useState } from "react";
import { Navbar } from "../components/navbar";

interface cardstuff {

    title: string;
    brand: string;
    price: number;
    oldPrice: number;
    quantity: number;
    image: string;
}
export default function Cart() {
    const data = {
        title: "TCL 55 Inches UHD 4k Google Smart TV ",
        price: 437877,
        oldPrice: 509240,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        quantity: 1,
    };
    const [searchclick, setSearchclick] = useState(false);

    const [quantity, setQuantity] = React.useState(data.quantity);

    const CartItem = ({ title, price,  image, quantity }: cardstuff) => {
        return (

            <div className="flex items-start justify-between bg-white shadow-md  p-4 mb-4 w-full">
                <div className="flex items-start gap-4">
                    <img src={image} alt={title} className="w-28 h-28 object-cover " />
                    <div>
                        <h2 className="font-semibold text-lg text-gray-800 max-w-xs">{title}</h2>
                        <button className="text-red-500 text-sm mt-2 flex items-center gap-1 pt-4"> Remove</button>
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <p className="text-[1rem] font-bold text-gray-900 pt-3">₦ {price.toLocaleString()}</p>


                    <div className="flex items-center gap-2 mt-2 pt-5">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="w-8 h-8 bg-gray-200  flex items-center justify-center"
                        >
                            -
                        </button>
                        <span className="text-lg font-semibold">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="w-8 h-8 bg-orange-500 text-white  flex items-center justify-center"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <Navbar searchclick={setSearchclick} ></Navbar>
            {!searchclick && <>
                <div className="flex flex-col lg:flex-row gap-6 w-full px-6 md:pt-23 pb-6 md:px-20 lg:px-60 bg-gray-100 min-h-screen pt-35">
                    <div className="md:flex-1">
                     

                        <CartItem
                            title={data.title}
                            price={data.price}
                            oldPrice={data.oldPrice}
                            image={data.image}
                            quantity={quantity} brand={""} />
                    </div>

                    <div className="w-full lg:w-80 bg-white shadow-md  p-5 h-fit">
                        <h2 className="text-lg font-bold mb-4">CART SUMMARY</h2>
                        <div className="flex justify-between text-lg font-semibold mb-4">
                            <span>Subtotal</span>
                            <span>₦ {data.price.toLocaleString()}</span>
                        </div>
                        <button className="w-full bg-orange-500 text-white py-3  font-semibold">
                            Checkout (₦ {data.price.toLocaleString()})
                        </button>
                    </div>
                </div>
            </>}

        </>
    );
}
