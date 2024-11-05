import { createContext, useContext, useEffect, useReducer } from "react";
import { useProducts } from "./product-context";
import reducer from '../reducers/filter-reducer'
let FilterContext=createContext()
let initialValue={
    all_prodcuts: [],
    filter_products:[],
    filters: {
        text: "",
        category: "",
        dropdownValue: "lowest"
    }
}
export let FilterProvider=({children})=>{
    let [state,dispatch]=useReducer(reducer,initialValue)
    let { allProducts }=useProducts()


   

    useEffect(()=>{
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: allProducts })
    }, [allProducts])



    let filterDropDown=(e)=>{
        let value=e.target.value;
        dispatch({type:"SET_FILTER_DATA"})
        dispatch({type:"SET_FILTER_DROPDOWN_VALUE",payload:{value}})
    }



    let searchProducts =(e)=>{
        let textVlaue = e.target.value
        dispatch({ type: "SET_SEARCH_TEXT", payload: textVlaue })
    }


    let filterByCategory=(categoryText)=>{
        let category = categoryText;
        dispatch({ type: "FILTER_BY_CATEGORY", payload: category })
    }
    return <FilterContext.Provider value={{ ...state, filterDropDown, searchProducts, filterByCategory }}>
        {children}
    </FilterContext.Provider>
}

export let useFilterProducts=()=>{
    return useContext(FilterContext)
}