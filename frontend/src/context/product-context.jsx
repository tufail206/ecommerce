import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/prodcut-reducer";
let productContext = createContext()
let ProductUrl = "http://localhost:3000/api/v1/products"

export let ProductProvider = ({ children }) => {
    let initialState = {
        allProducts: [],
       MensProducts: [],
        SingleProducts: {},
        isLoading: false,
        isError: false,
        filters:{
            search:""
        }
    }
    let [state, dispatch] = useReducer(reducer, initialState)

    let GellAllProducts = async (url) => {
        try {
            dispatch({ type: "SET_LOADING" })
            let response = await fetch(url)
            let data = await response.json();

            dispatch({ type: "SET_PRODCUTS_DATA", payload: data })
        } catch (error) {
            dispatch({ type: "SET_ERROR" })
        }
    }
    useEffect(() => {
        GellAllProducts(ProductUrl)
    }, [])

    //fetch single prodcut data
    const fetchProductDetails = async (id) => {
        try {
            dispatch({ type: "SET_LOADING" })
            const response = await fetch(`http://localhost:3000/api/v1/product/${id}`); // Adjust 
             
            const singleData = await response.json();
            dispatch({ type: "SET_SINGLE_PRODCUT_DATA", payload: singleData })
        } catch (error) {
            dispatch({ type: "SET_ERROR" })
        }
    };
   
    return <productContext.Provider value={{ ...state, fetchProductDetails }}>
        {children}</productContext.Provider>
}

export let useProducts = () => {
    return useContext(productContext)
}