import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/prodcut-reducer"; 

const ProductContext = createContext();
const ProductUrl = "http://localhost:3000/api/v1/products";

export const ProductProvider = ({ children }) => {
    const initialState = {
        allProducts: [],
        mensProducts: [], // camelCase for consistency
        singleProduct: {},
        isLoading: false,
        isError: false,
        filters: {
            search: ""
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getAllProducts = async () => {
        try {
            dispatch({ type: "SET_LOADING" });
            const response = await fetch(ProductUrl);
            if (!response.ok) throw new Error("Failed to fetch products");

            const data = await response.json();
            dispatch({ type: "SET_PRODUCTS_DATA", payload: data }); // Correct action type
        } catch (error) {
            console.error(error);
            dispatch({ type: "SET_ERROR" });
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    // Fetch single product data
    const fetchProductDetails = async (id) => {
        try {
            dispatch({ type: "SET_LOADING" });
            const response = await fetch(`http://localhost:3000/api/v1/product/${id}`);
            if (!response.ok) throw new Error("Failed to fetch product details");

            const singleData = await response.json();
            dispatch({ type: "SET_SINGLE_PRODUCT_DATA", payload: singleData }); // Correct action type
        } catch (error) {
            console.error(error);
            dispatch({ type: "SET_ERROR" });
        }
    };

    return (
        <ProductContext.Provider value={{ ...state, fetchProductDetails }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    return useContext(ProductContext);
};
