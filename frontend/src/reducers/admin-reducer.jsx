const Admin_Reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return { ...state, loading: true, error: null };
        case "FETCH_USERS_SUCCESS":
            return { ...state, users: action.payload, loading: false };
        case "FETCH_PRODUCTS_SUCCESS":
            return { ...state, products: action.payload, loading: false, error: null };
        case "DELETE_USERS_SUCCESS":
            return {
                ...state,
                users: state.users.filter(user => user._id !== action.payload),
                loading: false,
            };
        case "DELETE_PRODUCT_SUCCESS":
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload),
                loading: false,
            };
        case "SET_ERROR":
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default Admin_Reducer;
