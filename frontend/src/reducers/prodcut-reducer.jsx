const ProdcutReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            };

        case "SET_PRODCUTS_DATA":
            const allData = action.payload;
            const FilterData = action.payload.filter((CurElem) => CurElem.category === "Mens");
            return {
                ...state,
                isLoading: false,
                allProducts: allData,
                MensProducts: FilterData
            };

        case "SET_SINGLE_PRODCUT_DATA":
            return {
                ...state,
                isLoading: false,
                SingleProducts: action.payload
            };

        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
                allProducts: [],
                MensProducts: [],
            };

        default:
            return state;
    }
};

export default ProdcutReducer;
