import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/admin-reducer";

const AdminContext = createContext();

const initialState = {
    users: [],
    orders: [],
    products: [],
    loading: false,
    error: null,
};

export const AdminProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const token = localStorage.getItem("token");

    const GetAllUser = async () => {
        dispatch({ type: 'SET_LOADING' });
        try {
            const res = await fetch("http://localhost:3000/api/v1/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.ok) throw new Error('Failed to fetch users');
            const data = await res.json();
            console.log("Fetched users:", data);
            dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
        } catch (error) {
            console.error("Error fetching users:", error);
            dispatch({ type: 'SET_ERROR', payload: error.message });
        }
    };

    const deleteUser = async (id) => {
        dispatch({ type: 'SET_LOADING' });
        try {
            const res = await fetch(`http://localhost:3000/api/v1/user/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.ok) throw new Error("Failed to delete user");
            console.log("Deleted user ID:", id);
            dispatch({ type: 'DELETE_USERS_SUCCESS', payload: id });
        } catch (error) {
            console.error("Error deleting user:", error);
            dispatch({ type: 'SET_ERROR', payload: error.message });
        }
    };

    const GetAllProducts = async () => {
        dispatch({ type: 'SET_LOADING' });
        try {
            const res = await fetch("http://localhost:3000/api/v1/products", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.ok) throw new Error('Failed to fetch products');
            const data = await res.json();
            console.log("Fetched products:", data);
            dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data });
        } catch (error) {
            console.error("Error fetching products:", error);
            dispatch({ type: 'SET_ERROR', payload: error.message });
        }
    };

    const deleteProduct = async (id) => {
        dispatch({ type: 'SET_LOADING' });
        try {
            const res = await fetch(`http://localhost:3000/api/v1/product/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!res.ok) throw new Error("Failed to delete product");
            console.log("Deleted product ID:", id);
            dispatch({ type: 'DELETE_PRODUCT_SUCCESS', payload: id });
        } catch (error) {
            console.error("Error deleting product:", error);
            dispatch({ type: 'SET_ERROR', payload: error.message });
        }
    };
    let updateProduct=(id,data)=>{
       console.log(data)

    }
    useEffect(() => {
        GetAllUser();
        GetAllProducts();
    }, []);

    return (
        <AdminContext.Provider value={{ ...state, GetAllUser, deleteUser, deleteProduct, GetAllProducts, updateProduct, dispatch }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);
