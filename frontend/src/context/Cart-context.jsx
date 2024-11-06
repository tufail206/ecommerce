// context/CartContext.js
import { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from '../reducers/cart-reducer';
import { toast } from "react-toastify";

const CartContext = createContext();

const initialValue = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    price: 0,
    quantity: 0
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialValue);

    // Sync cart with localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart]);

    // Calculate total price and quantity when cart updates
    useEffect(() => {
        const totalAmount = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const totalQuantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
        dispatch({ type: "UPDATE_TOTALS", payload: { totalAmount, totalQuantity } });
    }, [state.cart]);

    // Add item to cart
    const AddToCart = (quantity, price, singleProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: { quantity, price, singleProduct } });
    };

    // Remove item from cart
    const removeFromCart = (_id) => {
        dispatch({ type: "REMOVE_FROM_CART", payload: _id });
        toast.success("Item has been successfully deleted."); 
    };

    return (
        <CartContext.Provider value={{ ...state, AddToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
