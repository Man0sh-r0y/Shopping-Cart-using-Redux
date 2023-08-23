import { Link } from "react-router-dom";
import CartProduct from "../Components/CartProduct";
import { useSelector } from "react-redux";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";

function Cart() {

    const cartItemList = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);

    const [modifiedPrice, setModifiedPrice] = useState(totalPrice);// I have modify price upto 2 decimal

    useEffect(() => {
        setModifiedPrice(totalPrice.toFixed(2));// up to 2 decimal
    },[modifiedPrice]); // whenever totalprice changes this will be changed

    function showCartDetails() {
        return (
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
                <div className="w-[100%] md:w-[60%] flex flex-col p-2">
                    {
                        cartItemList.map((item) => {
                            return <CartProduct key={item.id} item={item} />;
                        })
                    }
                </div>

                <div className="w-[100%] md:w-[40%] mt-5  flex flex-col">
                    <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between mx-auto">
                        <div className="flex flex-col gap-5">
                            <div className="font-semibold text-xl text-green-800 ">
                                Your Cart
                            </div>
                            <div className="font-semibold text-5xl text-green-700  -mt-5">
                                Summary
                            </div>
                            <p className="text-xl">
                                <span className="text-gray-700 font-semibold text-xl">
                                    Total Items: {cartItemList.length}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-xl font-bold mx-auto">
                            <span className="text-gray-700 font-semibold">
                                Total Amount:
                            </span>
                            <span>
                                ${modifiedPrice}
                            </span>
                        </p>
                        <button className="bg-green-700 w-72 mx-auto mb-[60px] hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                            CheckOut Now
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    function showEmptyCartDetails() {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
                <h1 className="text-gray-700 font-semibold text-xl mb-2">
                    Your cart is empty!
                </h1>
                <Link to={"/"}>
                    <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
                        Shop Now
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div >
            {
                (cartItemList.length > 0) ? showCartDetails() : showEmptyCartDetails()
            }

            <div className="footer-outer-div">
                <div className="footer-inner-div">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Cart;