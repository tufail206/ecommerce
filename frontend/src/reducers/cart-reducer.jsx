// reducers/cart-reducer.js
const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const { quantity, singleProduct } = action.payload;
            const existingProductIndex = state.cart.findIndex(item => item._id === singleProduct._id);

            let updatedCart;

            if (existingProductIndex !== -1) {
                // Update quantity if item already exists
                updatedCart = state.cart.map((item, index) =>
                    index === existingProductIndex
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Add new item to the cart if it doesn't exist
                updatedCart = [...state.cart, { ...singleProduct, quantity }];
            }

            return {
                ...state,
                cart: updatedCart
            };
        }

        case "REMOVE_FROM_CART": {
            const filteredCart = state.cart.filter(item => item._id !== action.payload);
            return {
                ...state,
                cart: filteredCart
            };
        }

        case "UPDATE_TOTALS": {
            return {
                ...state,
                price: action.payload.totalAmount,
                quantity: action.payload.totalQuantity
            };
        }

        default:
            return state;
    }
};

export default CartReducer;
