let ProdcutReducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "SET_PRODCUTS_DATA":
            let allData = action.payload;
            let FilterData=action.payload.filter((CurElem,ind)=>CurElem.category=="Mens")
            return {
                ...state,
                isLoading: false,
                allProducts: allData,
                MensProducts: FilterData,
                SingleProducts: {},

            }

        case "SET_SINGLE_PRODCUT_DATA":

            return{
                ...state,
                isLoading: false,
                SingleProducts: action.payload
            }
           
        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
                allProducts: [],
                FilterProducts: [],
                SingleProducts: {},

            }

        default: return state
    }
}

export default ProdcutReducer