const FilterReducer = (state, action) => {
    switch (action.type) {
        case "SET_FILTER_PRODUCTS":
            return {
                ...state,
                all_products: [...action.payload],
                filter_products: [...action.payload]
            };

        case "SET_FILTER_DROPDOWN_VALUE":
            const { value } = action.payload;
            let sortedProducts = [...state.all_products];
            if (value === "lowest") {
                sortedProducts.sort((a, b) => a.price - b.price);
            } else if (value === "highest") {
                sortedProducts.sort((a, b) => b.price - a.price);
            } else if (value === "a-z") {
                sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            } else if (value === "z-a") {
                sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            }
            return {
                ...state,
                filter_products: sortedProducts,
                filters: { ...state.filters, dropdownValue: value }
            };

        case "SET_SEARCH_TEXT":
            return {
                ...state,
                filters: { ...state.filters, text: action.payload },
                filter_products: state.all_products.filter(product =>
                    product.name.toLowerCase().includes(action.payload.toLowerCase())
                )
            };

        case "FILTER_BY_CATEGORY":
            return {
                ...state,
                filters: { ...state.filters, category: action.payload },
                filter_products: state.all_products.filter(
                    product => product.category === action.payload
                )
            };

        case "CLEAR_FILTERS":
            return {
                ...state,
                filter_products: [...state.all_products],
                filters: { text: "", category: "", dropdownValue: "default" }
            };

        default:
            return state;
    }
};

export default FilterReducer;
