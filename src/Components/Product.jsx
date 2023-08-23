import { addToCart, removeFromCart } from "../redux/Slices/CartSlice"
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

function Product(props) {

    const item = props.item;

    const cartItemList = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    function addItemsToCart() {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    }

    function removeItemsFromCart() {
        dispatch(removeFromCart(item));
        toast.error("Removed from cart");
    }

    return(
        // ml-5
        <div className="product flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]">
            
            <div className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
                {item.title}
            </div>

            <div className="w-40 text-gray-400 font-normal text-[10px] text-left">
                {item.description.split(" ").slice(0,10).join(" ") + "..."}
            </div>

            <div className="h-[180px]">
                <img src={item.image} className="h-full w-full " />
            </div>

            <div className="flex justify-between gap-12 items-center w-full mt-5"> 
                <div className="text-green-600 font-semibold">
                    ${item.price}
                </div>

                {
                    cartItemList.includes(item) ? (
                        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                            onClick={removeItemsFromCart}>
                            Remove item
                        </button>
                    ): (
                        <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
                            onClick={addItemsToCart}>
                            Add to cart
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default Product;