import { useState } from "react";
import { Navbar } from "../components/navbar";
import { productsdeal } from "./../json/deals"
import { useParams } from "react-router-dom";




interface ProductImage {
    id: number;
    src: string;
}

export default function ProductDetails() {
    const { id }: any = useParams();
    const [selected, setSelected] = useState(0);

    // Mock Data (you can replace with API or props)
    const images: ProductImage[] = [
        { id: 1, src: "" }, // blank image
        { id: 2, src: "" },
        { id: 3, src: "" },
    ];
    const [searchclick, setSearchclick] = useState(false);



    return (
        <>
            <Navbar searchclick={setSearchclick} ></Navbar>
            {!searchclick &&
                <>
                    <div className="w-full  bg-gray-100 md:pt-17 pt-35">

                        <div className="flex justify-center">
                            <div className=" max-w-4xl  bg-white p-6  m-5 md:mt-34 rounded-2xl md:mb-40  shadow  md:mx-20 lg:mx-60 ">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* LEFT — IMAGES */}
                                    <div>
                                        {/* Main Image */}
                                        <div className=" rounded-lg  justify-center">
                                            <div className="">
                                                <img className="w-full md:h-60 h-70 bg-gray-200 object-cover" src={productsdeal[id].img} alt="" />
                                            </div>
                                        </div>

                                        {/* Thumbnails */}
                                        <div className="flex gap-3 mt-3">
                                            {images.map((img, index) => (
                                                <div
                                                    key={img.id}
                                                    onClick={() => setSelected(index)}
                                                    className={`w-20 h-16 rounded border cursor-pointer flex items-center justify-center ${selected === index ? "border-orange-500" : "border-gray-300"
                                                        }`}
                                                >
                                                    <span className="text-xs text-gray-500">Image</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* RIGHT — PRODUCT INFO */}
                                    <div>


                                        <h1 className="text-xl font-bold mb-2">{productsdeal[id].name}</h1>
                                        <p className="text-sm text-gray-600">
                                            {productsdeal[id].description}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Brand: <span className="text-blue-600">{productsdeal[id].brand}</span>
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Category: {productsdeal[id].category}
                                        </p>


                                        <div className="p-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl font-bold text-orange-600">
                                                    $ {productsdeal[id].price.toLocaleString()}
                                                </span>

                                            </div>


                                        </div>


                                        {/* Shipping */}


                                        {/* Add to Cart Button */}
                                        <button className="w-full bg-orange-500 text-white py-3 mt-4 text-lg font-semibold hover:bg-orange-600 transition">
                                            Add to Cart
                                        </button>

                                        {/* Promotions */}
                                        <div className="mt-5">
                                            <h2 className="font-semibold mb-2">PROMOTIONS</h2>

                                            <p className="text-sm mb-1">
                                                📞 Call <span className="font-bold">07006000000</span> To Place Your Order
                                            </p>

                                            <p className="text-sm">
                                                🚚 Enjoy cheaper shipping fees when you select a PickUp Station at checkout.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}

        </>
    );
}
