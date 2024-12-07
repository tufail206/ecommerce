const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
                isError: false
            };

        case "SET_PRODUCTS_DATA":
            const allData = action.payload;
            const filteredData = allData.filter((item) => item.category === "Mens"); // Use camelCase for variable names
            return {
                ...state,
                isLoading: false,
                allProducts: allData,
                mensProducts: filteredData // Use camelCase to match state property
            };

        case "SET_SINGLE_PRODUCT_DATA":
            return {
                ...state,
                isLoading: false,
                singleProduct: action.payload // Use camelCase to match state property
            };

        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
                allProducts: [],
                mensProducts: []
            };

        default:
            return state;
    }
};

export default productReducer;
