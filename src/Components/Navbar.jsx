import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
// import { AiFillShopping } from "react-icons/ai"

function Navbar() {

    const cartItemList = useSelector((state) => state.cart.items);


    return (
        <div>
            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

                <NavLink to="/">
                    <div className="shop-app-icon ml-5">
                        <img src={logo} className="h-12" />
                        {/* <AiFillShopping fontSize={50} color="white" />
                        <p className="shop-app-name">SkyShop</p> */}
                    </div>
                </NavLink>

                <div className="flex items-center  text-slate-100 font-medium">

                    <NavLink to="/">
                        <p className="home-text flex items-center font-bold list-none text-slate-100 mr-5 space-x-6 hover:text-green-400 transition duration-300 ease-in">
                            Home
                        </p>
                    </NavLink>



                    <NavLink to="/cart">

                        <div className="relative">

                            <FaShoppingCart className="relative text-2xl mr-[20px] hover:text-green-400 transition transform duration-200" />

                            {
                                cartItemList.length > 0 &&
                                <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 mr-[20px] flex justify-center items-center animate-bounce rounded-full text-white" >
                                    {cartItemList.length}
                                </span>
                            }

                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;